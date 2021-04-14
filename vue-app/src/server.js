const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const finale = require('finale-rest')
const OktaJwtVerifier = require('@okta/jwt-verifier')

const oktaJwtVerifier = new OktaJwtVerifier({
    clientId: '0oal3rkv5hHbjO0ey5d6',
    issuer: 'https://dev-10307142.okta.com/oauth2/default'
})

let app = express()
app.use(cors())
app.use(bodyParser.json())

app.use((req, res, next) => {
    if (!req.headers.authorization) {
        return next(new Error('Authorization header is required'))
    }

    let parts = req.headers.authorization.trim().split(' ')
    let accessToken = parts.pop()
    oktaJwtVerifier.verifyAccessToken(accessToken, 'api://default')
        .then(jwt => {
            req.user = {
                uid: jwt.claims.uid,
                email: jwt.claims.sub
            }
            next()
        })
        .catch(next) // jwt did not verify
})

let database = new Sequelize({
    dialect: 'sqlite',
    storage: './test.sqlite'
})

let User = database.define('users', {
    name: Sequelize.STRING,
    body: Sequelize.TEXT
})

finale.initialize({
    app: app,
    sequelize: database
})

let userResource = finale.resource({
    model: User,
    endpoints: ['/users', '/posts/:id']
})

database
    .sync({ force: true })
    .then(() => {
        app.listen(8081, () => {
            console.log('listening on port localhost:8081')
        })
    })
