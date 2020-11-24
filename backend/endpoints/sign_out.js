const auth = require("../auth")

const handler = async function (request, reply) {
  try {
    if (request.session.authenticated) {
      request.destroySession((err) => {
        if (err) {
          reply.status(500)
          reply.send('Internal Server Error')
        } else {
          reply.status(200).send()
        }
      })
    } else {
      reply.status(200).send()
    }

  } catch (error) {
    this.log.error(error)

    reply.badRequest()
  }
}

module.exports = {
  method: "GET",
  url: "/sign_out",
  handler
}
