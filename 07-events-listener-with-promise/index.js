const stdin = process.openStdin()

function main(){
  return new Promise(function(resolve, reject){
    stdin.addListener('data', function(value){
      return resolve(value)
    })
  })
}

main().then(function(value){
  console.log(`You have entered: ${value.toString().trim()}`)
})