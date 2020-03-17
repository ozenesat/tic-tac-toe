'use strict'

const store = require('./store')
const events = require('./events')

const signUpSuccess = function (data) {
  $('#top-left').text('Signed up successfully!')
  $('#sign-up').addClass('hide')
  $('#sign-in').removeClass('hide')
}

const signUpFailure = function (error) {
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

const signInFailure = function (error) {
  $('#top-right').text('Error on sign in!/Please try again.')
}

const changePass = function () {
  $('#change-password').removeClass('hide')
}

const changePasswordSuccess = function (data) {
  $('#change-pass').text('Password changed successfully.')
  $('#change-password').addClass('hide')
}

const changePasswordFailure = function (error) {
  $('#change-pass').text('Error on changing password/ Try again.')

}

const signOutSuccess = function (data) {
  $('#result').text('Signed out successfully!')
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

const signOutFailure = function (error) {
  $('#message').text('Error on signing out')
}

const newGameSuccessfull = function (data) {
  $('#message').text('New Game Started')
  $('#again').text('Restart The Game')
  $('#gameBoard').removeClass('hide')
  $('aboard').removeClass('hide')
  $('#img').addClass('hide')
  store.game = data.game
  store.validation = true
}

const newGameFailure = () => {
  $('#message').text('Something went wrong')
}

const statsSuccessfull = function (data) {
  $('#stats').text('Total Games Played: ' + data.games.length)
}

const statsFailure = function () {
  $('#stats').text('Error on getting stats')
}

const onGameUpdateSuccessfull = function (data) {
  store.game = data.game
}

const onGameUpdateFailure = function () {
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
      $('#p').append('<games id="games"> ' + `${allGames[i].id}` + ' </games>')
    }
}

// const showGame = function (event) {
//   event.preventDefault()
//   console.log(event.target)
// }

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
  onGetGamesFailure
}
