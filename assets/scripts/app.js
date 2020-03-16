'use strict'
const events = require('./events.js')
const eventsUser = require('./eventsUser.js')
const eventsGame = require('./eventsGame.js')
const ui = require('./ui.js')

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
  $('#sign-out').on('click', eventsUser.onSignOut)
  $('#again').on('click', eventsGame.onNewGame)
  $('#stats').on('submit', ui.onStats)
  $('#show-game').on('submit', eventsGame.onShowGame)
  $('#top-left').on('click', ui.signLeft)
  $('#top-right').on('click', ui.signRight)
  $('#change-pass').on('click', ui.changePass)
})
