const { getPeople } = require("./service");

Array.prototype.myFilter = function(callback) {
  const list = []
  for (i in this) {
    const item = this[i]
    const result = callback(item, i, this);
    if(!result) continue
    list.push(item)
  }
  return list
};

async function main() {
  try {
    const { results } = await getPeople("a");

    const larsFamily = results.myFilter((person, index, list) => {
      console.log(`index: ${index}`, list.length)
      return person.name.toLowerCase().indexOf('lars') !== -1
    })

    const names = larsFamily.map(person => person.name)
    console.log(names)

  } catch (error) {
    console.error("An error has occurred!", error);
  }
}

main();
