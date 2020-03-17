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

// const onShowGame = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.showGame(data)
//     .then(ui.showGameSuccesfull)
//     .catch(ui.showGameFailure)
// }

const onStats = function (event) {
  event.preventDefault()
  api.gameStats()
    .then(ui.statsSuccessfull)
    .catch(ui.statsFailure)

}

const onGetGames = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

module.exports = {
  onNewGame,
  onStats,
  onGetGames
}
