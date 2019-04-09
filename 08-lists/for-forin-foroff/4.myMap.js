const service = require('./service')

Array.prototype.myMap = function (callback) {
  const newMappedArray = []
  for (let index = 0; index < this.length; index++) {
    const result = callback(this[index], index)
    newMappedArray.push(result)
  }

  return newMappedArray
}

async function main(){
  try{
    const results = await service.getPeople('a')
    console.time('myMap')
    const names = results.results.myMap((person, index) => `[${index}] ${person.name}`)
    console.timeEnd('myMap')
    console.log('names', names)
  }catch(error){
    console.error('An error has occurred!', error)
  }
}

main()