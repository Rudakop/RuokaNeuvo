const handler = async function (request, reply) {
  const userProfile = request.session.userProfile

  if (userProfile) {
    return reply.send({ userProfile })
  }

  return reply.unauthorized()
}

module.exports = {
  method: 'GET',
  url: '/user',
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
              login: { type: "string" },
              name: { type: "string" },
            },
          },
        },
      },
    },
  }
}