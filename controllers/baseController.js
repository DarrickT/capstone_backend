class BaseCtonroller {
  constructor (model) {
    this.model = model
  }

  testRoute (_req, res) {
    return res.send('yup, you got me')
  }
}

module.exports = BaseCtonroller
