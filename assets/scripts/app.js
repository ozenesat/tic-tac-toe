'use strict'
// for game logic and just game related functions
const events = require('./events.js')
// for user datas
const eventsUser = require('./eventsUser.js')
// for game datas
const eventsGame = require('./eventsGame.js')
// for user interfa
const ui = require('./ui.js')

$(() => {
  // the regular game play.
  $('#gameBoard').on('click', events.onPlay)

  // restarts the game clear the board and all data.
  $('#again').on('click', events.restart)

  // sign up for new user.
  $('#sign-up').on('submit', eventsUser.onSignUp)

  // sign in for registered user.
  $('#sign-in').on('submit', eventsUser.onSignIn)

  // change password for registered user.
  $('#change-password').on('submit', eventsUser.onChangePassword)

  // sign out for signed user.
  $('#sign-out').on('click', eventsUser.onSignOut)

  // create a new game on server with new game-id.
  $('#again').on('click', eventsGame.onNewGame)

  // total played game number for signed in user.
  $('#stats').on('click', eventsGame.onStats)

  // game history of signed in user with game ids.
  $('#get-games').on('click', eventsGame.onGetGames)

  // sign-up form.
  $('#top-left').on('click', ui.signLeft)

  // sing-in form.
  $('#top-right').on('click', ui.signRight)

  // password change form.
  $('#change-pass').on('click', ui.changePass)

  // list of previous games' ids for signed in user.
  $('#p').on('click', eventsGame.onShowGame)

  $('body').on('click', events.clear)
})
