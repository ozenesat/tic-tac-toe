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
  $('cp').removeClass('hide')
  $('#top-left').text('Signed in successfully')
  $('#again').text('Start a New Game')
  $('#top-right').addClass('hide')
  $('#top-left').addClass('hide')
  $('#result').text('© Tic Tac Toe 2020 ®')
  store.user = data.user
}
const signInFailure = function (error) {
  $('#top-left').text('Error on sign in!/Please try again.')
}
const changePass = function () {
  $('#change-password').removeClass('hide')
}
const changePasswordSuccess = function (data) {
  $('#change-pass').text('Password changed successfully.')
  $('#change-password').addClass('hide')
}
const changePasswordFailure = function (error) {
  $('#change-pass').text('Error on changing password')
//  console.log('changePasswordFailure error is: ', error)
}
const signOutSuccess = function (data) {
  $('#result').text('Signed out successfully!')
  $('#again').text('Please sign-in to play the game!')
  $('aboard').addClass('hide')
  $('cp').addClass('hide')
  $('#top-left').removeClass('hide')
  $('#top-right').removeClass('hide')
  $('#top-left').text('Sign-up!')
  $('#img').removeClass('hide')
  $('#change-pass').text('Change Password!')
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
  store.stats += 1
}
const onStats = function (event) {
  event.preventDefault()
  $('#message').text(store.stats)
}
const newGameFailure = () => {
  $('#message').text('Something went wrong')
}
const onGameUpdateSuccessfull = function (data) {
}
const onGameUpdateFailure = function () {
}
const showGameSuccesfull = function (data) {
}
const showGameFailure = function () {
}
const signLeft = function () {
  $('#sign-up').removeClass('hide')
  $('#sign-in').addClass('hide')
}
const signRight = function () {
  $('#sign-in').removeClass('hide')
  $('#sign-up').addClass('hide')
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
  onStats,
  showGameSuccesfull,
  showGameFailure,
  signRight,
  signLeft,
  changePass
}
