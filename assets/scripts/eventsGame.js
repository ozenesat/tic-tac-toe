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

const onShowGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.showGame(data)
    .then(ui.showGameSuccesfull)
    .catch(ui.showGameFailure)
}

const onStats = function (event) {

}
module.exports = {
  onNewGame,
  onShowGame
}
