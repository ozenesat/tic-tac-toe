'use strict'
const events = require('./events.js')
const eventsUser = require('./eventsUser.js')
const eventsGame = require('./eventsGame.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')


$(() => {
  // your JS code goes here
  $('#gameBoard').on('click', events.onPlay)
  $('#again').on('click', events.restart)
  $('#sign-up').on('submit', eventsUser.onSignUp)
  $('#sign-in').on('submit', eventsUser.onSignIn)
  $('#change-password').on('submit', eventsUser.onChangePassword)
  $('#sign-out').on('submit', eventsUser.onSignOut)
  $('#new-game').on('submit', eventsGame.onNewGame)
  //$('#gameBoard').on('click', eventsGame.onGameUpdate)
})
