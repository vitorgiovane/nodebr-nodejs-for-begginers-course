const { get } = require('axios')
const baseUrl = 'https://swapi.co/api/people'

const getPeople = async name => {
  const url = `${baseUrl}/?search=${name}&format=json`
  const result = await get(url)
  console.log(JSON.stringify(result.data))
  return result.data.results.map(mapPeople)
}

const mapPeople = person => {
  return {
    name: person.name,
    height: person.height
  }
}

module.exports = { getPeople }