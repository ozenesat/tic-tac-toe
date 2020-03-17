'use strict'

const config = require('./config')
const store =require('./store.js')



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

<<<<<<< HEAD
const gameUpdate = function (id, letter, bool) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.user.id,
=======
const gameUpdate = function (div, letter, gameCheck) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
>>>>>>> final
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
<<<<<<< HEAD
    data: {
      'game': {
        'cell': {
          'index': id,
          'value': letter
        },
        'over': validation
      }
=======
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
>>>>>>> final
    }
  })
}

const gameStats = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games',
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
  gameStats
}
