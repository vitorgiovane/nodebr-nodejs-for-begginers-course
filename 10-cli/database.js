const { readFile, writeFile } = require("fs")
const { promisify } = require("util")
const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {
  constructor() {
    this.FILE_NAME = "heroes.json"
  }
  async getFileData() {
    const file = await readFileAsync(this.FILE_NAME, "utf8")
    return JSON.parse(file.toString())
  }

  async writeFile(data) {
    await writeFileAsync(this.FILE_NAME, JSON.stringify(data))
    return true
  }

  async register(hero) {
    const data = await this.getFileData()
    const id = hero.id <= 2 ? hero.id : Date.now()
    const heroWithId = {
      id,
      ...hero
    }
    const finalData = [
      ...data,
      heroWithId
    ]
    const result = await this.writeFile(finalData)
    return result
  }

  async list(heroId) {
    const data = await this.getFileData()
    const filteredData = data.filter(item => (heroId ? item.id === heroId : true))
    return filteredData
  }

  async delete(heroId) {
    if(!heroId) {
      return await this.writeFile([])
    }
    
    const data = await this.getFileData()
    const index = data.findIndex(item => item.id === parseInt(heroId))
    if(index === -1){
      throw Error("The informed hero don't exists!")
    }
    data.splice(index, 1)
    return await this.writeFile(data)
  }

  async update(heroId, newHeroFeatures) {
    const data = await this.getFileData()
    const index = data.findIndex(item => item.id === parseInt(heroId))

    if(index === -1) {
      throw Error("The informed hero don't exists!")
    }

    const hero = data[index]
    const fullUpdatedHero = {
      ...hero,
      ...newHeroFeatures
    }
    data.splice(index, 1)

    await this.writeFile([
      ...data,
      fullUpdatedHero
    ])

    const updatedHero = await this.list(heroId)
    return updatedHero
  }
}

module.exports = new Database()
