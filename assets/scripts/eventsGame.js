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

const onGameUpdate = function (event) {
  event.preventDefault()
  const gameData = getFormFields(event.target)
  api.gameUpdate(gameData)
    .then(ui.onGameUpdateSuccessfull)
    .catch(ui.onGameUpdatefailure)
}

module.exports = {
  onNewGame,
  onGameUpdate
}
