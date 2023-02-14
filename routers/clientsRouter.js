const express = require('express')
const router = express.Router()

class ClientsRouter {
  constructor (controller) {
    this.controller = controller
  }

  routes () {
    router.get('/test', this.controller.testRoute.bind(this.controller))
    return router
  }
}

module.exports = ClientsRouter
