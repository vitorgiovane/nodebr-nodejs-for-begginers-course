/**
 * Goal list
 * 
 * 0 - Get a user
 * 1 - Obtain a user's phone number through your id
 * 2 - Get the user's address by id
 */

const util = require('util')
const asyncGetAddress = util.promisify(getAddress)

function getUser(){
  return new Promise(function promiseResolver(resolve, reject) {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Vitor",
        birthday: new Date()
      })
    }, 1000)
  })
}

function getPhone(userId){
  return new Promise(function promiseResolver(resolve, reject) {
    setTimeout(() => (
      resolve({
      number: '123456',
      ddd: 38
      })
    ), 2000)
  })
}

function getAddress(userId, callback){
  setTimeout(() => {
    callback(null, {
      street: 'dos bobos',
      number: 0
    })
  })
}

main()
async function main() {
  try{
    console.time('promise-time')
    const user = await getUser()
    const result = await Promise.all([
      getPhone(user.id),
      asyncGetAddress(user.id)
    ])

    const phone = result[0]
    const address = result[1]

    console.log(`
      Nome: ${user.name}
      Telefone: (${phone.ddd}) ${phone.number}
      Address: ${address.street}, ${address.number}
    `)
    console.timeEnd('promise-time')
  }catch(error){
    console.log('An error has occurred', error)
  }
}