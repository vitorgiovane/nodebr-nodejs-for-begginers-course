const service = require('./service')

async function main(){
  try{
    const results = await service.getPeople('a')
    const names = []
    results.results.forEach(item => {
      names.push(item.name)
    });

    // const names = results.results.map(function(pessoa) {
    //   return pessoa.name
    // })

    console.log('names', names)
  }catch(error){
    console.error('An error has occurred!', error)
  }
}

main()