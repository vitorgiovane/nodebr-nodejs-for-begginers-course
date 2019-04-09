const service = require('./service')

async function main(){
  try{
    const results = await service.getPeople('a')
    const names = []
    console.time('foreach')
    results.results.forEach(item => {
      names.push(item.name)
    });
    console.timeEnd('foreach')
    console.log('names', names)
  }catch(error){
    console.error('An error has occurred!', error)
  }
}

main()