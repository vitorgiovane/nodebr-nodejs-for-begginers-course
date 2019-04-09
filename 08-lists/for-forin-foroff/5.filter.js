const { getPeople } = require('./service')

async function main() {
  try{
    const { results } = await getPeople('a')

    const larsFamily = results.filter(
      item => item.name.toLowerCase().indexOf(`lars`) !== -1
    )
    const names = larsFamily.map(person => person.name)
    console.log(names)
  }catch(error){
    console.error('An error has occurred!', error)
  }
}

main()