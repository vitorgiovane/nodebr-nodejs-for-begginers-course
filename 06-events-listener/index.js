const stdin = process.openStdin()

stdin.addListener('data', function(value){
  console.log(`You have entered: ${value.toString().trim()}`)
})