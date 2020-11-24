const { authenticated } = require('../auth')

module.exports = async function (fastify) {
  // Endpoint without authorization
  fastify.register(async function (_fastify) {
    _fastify.route(require('./sign_in'))
    _fastify.route(require('./sign_up'))
    _fastify.route(require('./sign_out'))
    _fastify.route(require('./getBusinesses'))
  })

  // Endpoint requires user authorization 
  fastify.register(async function (_fastify) {    
    _fastify.addHook('preHandler', authenticated)

    _fastify.route(require('./getUserProfile'))
  })
}