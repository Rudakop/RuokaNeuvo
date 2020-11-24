const auth = require("../auth")
//
const handler = async function (request, reply) {
  try {
    const { email, password } = request.body
    const connection = await this.mysql.getConnection()

    const [
      rows,
      fields,
    ] = await connection.query("SELECT * FROM users WHERE email=?", [email])
    connection.release()

    const userProfile = rows[0]
    
    if (userProfile == null) {
      return reply.notFound()
    }

    // Verify password
    const valid = await auth.compare(password, userProfile.hash)

    // If verified 
    if (valid) {
      request.session.authenticated = true
      request.session.userProfile = userProfile

      reply.send({ userProfile: userProfile })
      return
    }

    // Otherwise unauthorized
    return reply.unauthorized()
  } catch (error) {
    this.log.error(error)

    reply.badRequest()
  }
}

module.exports = {
  method: "POST",
  url: "/sign_in",
  handler,
  schema: {
    response: {
      200: {
        type: "object",
        additionalProperties: false,
        properties: {
          userProfile: {
            type: "object",
            additionalProperties: false,
            properties: {
              email: { type: "string" },
              name: { type: "string" },
            },
          },
        },
      },
    },
  },
}
