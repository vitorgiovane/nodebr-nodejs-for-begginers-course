Array.prototype.myReduce = function(callback, initialValue) {
  let result = typeof(initialValue) !== 'undefined' ? initialValue : this[0]
  const indexInit = result === this[0] ? 1 : 0
  for (let i = indexInit; i < this.length; i++) {
    result = callback(result, this[i], this)
  }
  return result
}

async function main() {
  try {
    const names = [
      ['Vitor', 'Giovane'],
      ['Node', 'React']
    ]
    const total = names.myReduce((prev, next) => prev.concat(next), [])
    console.log(total)
  } catch (error) {
    console.log("An error has occurred!", error)
  }
}

main()
