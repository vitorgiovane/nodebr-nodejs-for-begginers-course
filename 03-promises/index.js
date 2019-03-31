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

const userPromise = getUser()
userPromise
  .then(function(user){
    return getPhone(user.id)
      .then(function phoneResolver(result) {
        return {
          user: {
            id: user.id,
            name: user.name
          },
          phone: result
          }
      })
  })
  .then(function (result){
    const address = asyncGetAddress(result.user.id)
    return address.then(function addressResolver(address){
      return {
        user: result.user,
        phone: result.phone,
        address
      }
    })
  })
  .then(function(result){
    console.log(`
      Name: ${result.user.name}
      Address: ${result.address.street}, ${result.address.number}
      Phone: (${result.phone.ddd}) ${result.phone.number}
    `)
  })
  .catch(function(error){
    console.error('An error has occurred', error)
  })
