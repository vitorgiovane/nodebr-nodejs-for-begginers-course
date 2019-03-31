/**
 * Goal list
 * 
 * 0 - Get a user
 * 1 - Obtain a user's phone number through your id
 * 2 - Get the user's address by id
 */

function getUser(callback){
  setTimeout(() => {
    callback(null, {
      id: 1,
      name: "Vitor",
      birthday: new Date()
    })
  }, 1000)
}

function getPhone(userId, callback){
  setTimeout(() => (
    callback(null, {
    number: '123456',
    ddd: 38
    })
  ), 2000)
}

function getAddress(userId, callback){
  setTimeout(() => {
    callback(null, {
      street: 'dos bobos',
      number: 0
    })
  })
}

getUser(function userResolver(error, user) {
  if(error) {
    console.error('An error has ocurred in user', error)
    return
  }

  getPhone(user.id, function phoneResolver(error1, phone) {
    if(error1) {
      console.error('An error has ocurred in phone', error)
      return
    }

    getAddress(user.id, function addressResolver(error2, address){
      if(error2){
        console.error('An error has ocurred in address', error)
      }

      console.log(`
        User Name: ${user.name}
        User Phone: (${phone.ddd}) ${phone.number}
        User Address: ${address.street}, ${address.number}
      `)
    })
  })
})