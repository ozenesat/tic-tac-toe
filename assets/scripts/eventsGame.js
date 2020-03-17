'use strict'
//requirements for ajax
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../lib/get-form-fields')

//creates a new game with id
const onNewGame = function (event) {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccessfull)
    .catch(ui.newGameFailure)
}

//gets the played game number of user
const onStats = function (event) {
  event.preventDefault()
  api.gameStats()
    .then(ui.statsSuccessfull)
    .catch(ui.statsFailure)

}

//gets the previous games' ids.
const onGetGames = function (event) {
  event.preventDefault()
  api.getGames()
    .then(ui.onGetGamesSuccess)
    .catch(ui.onGetGamesFailure)
}

//gets the one previous game with id.
const onShowGame = function (event) {
  event.preventDefault()
  const gameId = event.target.id
  api.showGame(gameId)
    .then(ui.showGameSuccesfull)
    .catch(ui.showGameFailure)
}



module.exports = {
  onNewGame,
  onStats,
  onGetGames,
  onShowGame
}
