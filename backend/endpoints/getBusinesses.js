const yelp = require('../yelp')

const handler = async function (request, reply) {
  try {
    const { location, limit = 20, offset = 0 } = request.query

    if (location == null) {
      return reply.preconditionFailed()
    }
    
    const response = await yelp.get('/businesses/search', {
      params: {
        location, limit, offset
      }
    })

    if (response.data) {
      return reply.send(response.data)
    }

    reply.badRequest()
  } catch (error) {
    this.log.error(error)

    reply.badRequest()
  }
}

module.exports = {
  method: 'GET',
  url: '/businesses',
  handler,

}