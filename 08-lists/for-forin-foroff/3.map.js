const service = require('./service')

async function main(){
  try{
    const results = await service.getPeople('a')
    console.time('map')
    const names = results.results.map(pessoa => pessoa.name)
    console.timeEnd('map')

    console.log('names', names)
  }catch(error){
    console.error('An error has occurred!', error)
  }
}

main()