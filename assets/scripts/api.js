'use strict'

const config = require('./config')
const store =require('./store.js')

//Pretty clear api codes which are has functions defined with their names.

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url:config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  return $.ajax({
    url:config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const signOut = function (data) {
  return $.ajax({
    url:config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameUpdate = function (div, letter, gameCheck) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data : {
      "game": {
        "cell": {
          "index": div.id,
          "value": letter
    },
    "over": !gameCheck
  }
}
  })
}

const getGames = function (data) {
  if (data === undefined) {
    return $.ajax({
      url: config.apiUrl + '/games',
      method: 'GET',
      headers: {
        Authorization: 'Token token=' + store.user.token
      }
    }) // return
  }
  // return games that are over
  return $.ajax({
    url: config.apiUrl + '/games[?over=]',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const gameStats = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGame = function (gameId) {

  return $.ajax({
    url: config.apiUrl + '/games/'+gameId,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}


module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  newGame,
  gameUpdate,
  getGames,
  gameStats,
  showGame
}
