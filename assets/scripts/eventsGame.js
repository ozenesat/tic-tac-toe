'use strict'

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccessfull)
    .catch(ui.newGameFailure)
}



module.exports = {
  onNewGame
  // onGameUpdate
}
