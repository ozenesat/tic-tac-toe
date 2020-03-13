'use strict'

const config = require('./config')
const store =require('./store.js')

const signUp = function (data) {
  console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = function (data) {
  console.log('In api.js')
  return $.ajax({
    url:config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}
const changePassword = function (data) {
  console.log('In api.js')
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
  console.log('In api.js')
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

const gameUpdate = function (id, letter, bool) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'game': {
        'cell': {
          'index': id,
          'value': letter
        },
        'over': validation
      }
    }
  })
}




module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  newGame,
  gameUpdate
}
