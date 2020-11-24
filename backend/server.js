require('dotenv').config()
const serverConfig = {
  logger: true,
  pluginTimeout: 60000
}

const fastify = require('fastify')(serverConfig)

const {
  MYSQL_HOST,
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  SESSION_SECRET,
} = process.env

// Setup connection to MySQL
fastify.register(require('fastify-mysql'), {
  promise: true,
  host: MYSQL_HOST,
  user: MYSQL_USERNAME,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE
})

fastify.register(require('fastify-sensible'))
fastify.register(require('fastify-cookie'))
fastify.register(require('fastify-session'), {
  cookieName: 'sessionId',
    secret: SESSION_SECRET,
    cookie: { 
      secure: false // HTTP
    },
    maxAge: 15 * 60 * 1000 // 15 minutes
})

// CORS
fastify.register(require('fastify-cors'), { 
  origin: '*'
})

// Register endpoints
fastify.register(require('./endpoints'), { prefix: 'api' })

// Run the server!
fastify.listen(3030, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }

  fastify.log.info(`server listening on ${address}`)
})