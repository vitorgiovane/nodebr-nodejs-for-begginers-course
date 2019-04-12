const { getPeople } = require('./service')

async function main() {
  try{
    const { results } = await getPeople('a')
    const heights = results.map(person => parseInt(person.height))
    console.log('heights', heights)

    const total = heights.reduce((previous, next) => (previous + next))

    console.log('total', total)
  }catch(error){
    console.log('An error has occurred!', error)
  }
}

main()