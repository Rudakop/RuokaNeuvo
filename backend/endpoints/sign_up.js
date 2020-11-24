const auth = require("../auth")

const handler = async function (request, reply) {
  try {
    const { email, password, name } = request.body
    const connection = await this.mysql.getConnection()
    const hash = await auth.hash(password)

    const [
      rows,
      fields,
    ] = await connection.query("INSERT INTO users SET ?", { email, hash, name })
    connection.release()
    
    return reply.send({ userProfile: {
      name, email
    } })
  } catch (error) {
    console.log(error.code)
    if (error.code === 'ER_DUP_ENTRY') {
      // The user already exists
      return reply.conflict()
    }
    this.log.error(error)
    
    reply.badRequest()
  }
}

module.exports = {
  method: "POST",
  url: "/sign_up",
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
