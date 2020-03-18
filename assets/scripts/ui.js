'use strict'

const store = require('./store')

//Lovely and pretty clear ui codes which are has functions defined with their names.

const signUpSuccess = function () {
  $('#top-left').text('Signed up successfully!')
  $('#sign-up').addClass('hide')
  $('#sign-in').removeClass('hide')
}

const signUpFailure = function () {
  $('#top-left').text('Error on sign up!/Please try again.')
}

const signInSuccess = function (data) {
  $('#sign-in').addClass('hide')
  $('#change-pass').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#top-right').text('Signed in successfully')
  $('#again').text('Start a New Game')
  $('#top-right').addClass('hide')
  $('#top-left').addClass('hide')
  $('#stats').removeClass('hide')
  $('#result').text('© Tic Tac Toe 2020 ®')
  $('#get-games').removeClass('hide')
  store.user = data.user
}

const signInFailure = function () {
  $('#top-right').text('Error on sign in!/Please try again.')
}

const changePass = function () {
  $('#change-password').removeClass('hide')
}

const changePasswordSuccess = function () {
  $('#change-pass').text('Password changed successfully.')
  $('#change-password').addClass('hide')
}

const changePasswordFailure = function () {
  $('#change-pass').text('Error on changing password/ Try again.')

}

const signOutSuccess = function () {
  $('#result').text('Signed out successfully!')
  $('#change-password').addClass('hide')
  $('#result').removeClass('X')
  $('#result').removeClass('O')
  $('#again').text('Please sign-in to play the game!')
  $('aboard').addClass('hide')
  $('#change-pass').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#top-left').removeClass('hide')
  $('#top-right').removeClass('hide')
  $('#top-left').text('Sign-up!')
  $('#top-right').text('Sign-in!')
  $('#img').removeClass('hide')
  $('#change-pass').text('Change Password!')
  $('#stats').addClass('hide')
  $('#stats').text('Get Stats!')
  $('#get-games').addClass('hide')
  $('#p').text('')
  store.validation = false
  for(let i = 0; i < 9; i++) {
    $('#'+i).text('')
  }

}

const signOutFailure = function () {
  $('#message').text('Error on signing out')
}

const newGameSuccessfull = function (data) {
  $('#message').text('New Game Started')
  $('#again').text('Restart The Game')
  $('#gameBoard').removeClass('hide')
  $('aboard').removeClass('hide')
  $('#img').addClass('hide')
  $('#change-password').addClass('hide')
  store.game = data.game
  store.validation = true
}

const newGameFailure = function () {
  $('#message').text('Error on creating new game')
}

const statsSuccessfull = function (data) {
  $('#stats').text('Total Games: ' + data.games.length)
}

const statsFailure = function () {
  $('#stats').text('Error on getting stats')
}

const onGameUpdateSuccessfull = function (data) {
  store.game = data.game
}

const onGameUpdateFailure = function () {
  $('#message').text('Error on updating the game')
}

const signLeft = function () {
  $('#sign-up').removeClass('hide')
  $('#sign-in').addClass('hide')
}

const signRight = function () {
  $('#sign-in').removeClass('hide')
  $('#sign-up').addClass('hide')
}

const onGetGamesSuccess = function (data) {
  $('#p').text('')
  const allGames = data.games
  store.user.games = allGames
  for (let i = 0; i < allGames.length; i++) {
      $('#p').append('<games id='+`${allGames[i].id}` + '> ' + `${allGames[i].id}` + ' </games>')
    }
}

const showGameSuccesfull = function (data) {
  $('#gameBoard').removeClass('hide')
  $('aboard').removeClass('hide')
  $('#img').addClass('hide')
  $('#again').removeClass('warning')
  $('#result').removeClass('X')
  $('#result').removeClass('O')
  $('#result').text('© Tic Tac Toe 2020 ®')
  for (let i = 0; i<9; i++) {
     $('#'+i).text(data.game.cells[i])
     $('#'+i).removeClass('X')
     $('#'+i).removeClass('O')
   }
    store.board = data.game.cells
    store.validation = false
    $('#again').text("Here is the game but, " +
    "you can not play the previous games, yet. Please click here for a brand new game!")
}

const showGameFailure = function () {
  $('#message').text('Error on showing the game')
}

const onGetGamesFailure = function() {
  $('#get-games').text('Error on getting games.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure,
  newGameSuccessfull,
  newGameFailure,
  onGameUpdateSuccessfull,
  onGameUpdateFailure,
  statsSuccessfull,
  statsFailure,
  signRight,
  signLeft,
  changePass,
  onGetGamesSuccess,
  onGetGamesFailure,
  showGameSuccesfull,
  showGameFailure
}
