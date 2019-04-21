const Commander = require("commander")
const Database = require("./database")
const Hero = require("./hero")

async function main() {
  Commander.version("v1")
    .option("-d, --delete", "delete a hero by id")
    .option("-i, --id [value]", "hero id")
    .option("-l, --list", "list heroes")
    .option("-n, --name [value]", "hero name")
    .option("-p, --power [value]", "hero power")
    .option("-r, --register", "register a hero")
    .option("-u, --update [value]", "update a hero")
    .parse(process.argv)

  const hero = new Hero(Commander)

  try {
    if (Commander.register) {
      delete hero.id
      const result = await Database.register(hero)
      if(!result) {
        console.error("The hero hasn't been registered!")
        return
      }
      console.log("The hero has been registered successfully!")
    }
    if(Commander.list) {
      const result = await Database.list()
      console.log(result)
      return
    }
    if(Commander.delete) {
      const result = await Database.delete(hero.id)
      if(!result){
        console.error("The hero hasn't been deleted!")
        return
      }
      console.log('The hero has been deleted successfully!')
      return
    }
    if(Commander.update){
      const heroId = parseInt(Commander.update)
      delete hero.id

      const heroPlainData = JSON.stringify(hero)
      const cleanHero = JSON.parse(heroPlainData)

      const result = await Database.update(heroId, cleanHero)
      if(!result){
        console.error("The hero hasn't been updated!")
        return
      }
      console.log("The hero has been updated successfully!")
      return
    }
  } catch (error) {
    console.log("An error has occurred!", error)
  }
}

main()
