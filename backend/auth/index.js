const bcrypt = require('bcrypt')
//
const hash = async function(password) {
  return new Promise((resolve, reject) => {
    try {
      bcrypt.hash(password, 10).then(function(hash) {
        resolve(hash)
      })  
    } catch (error) {
      reject(error)
    }
  })
}

const compare = async function(password, hash) {
  return new Promise((resolve, reject) => {
    try {
      bcrypt.compare(password, hash).then( result => {
        resolve(result)
      })
    } catch(error) {
      reject(error)
    }
  })
}

const authenticated = async function(request, reply) {
  if (request.session?.authenticated) {
    request.session.touch()
    return
  }

  reply.redirect(401, '/login') 
}

module.exports = {
  hash,
  compare,
  authenticated
}