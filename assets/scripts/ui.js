'use strict'

const store = require('./store')
const events = require('./events')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  console.log('signUpSuccess data is: ', data)
  $('#sign-up').addClass('hide')
}
const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  console.log('signUpFailure error is: ', error)
}
const signInSuccess = function (data) {
  $('signs').addClass('hide')
  $('cp').removeClass('hide')
  $('#message').text('Signed in successfully')
  $('#again').text('Start a New Game')
  console.log('signUpSuccess data is: ', data)
  store.user = data.user
  console.log(store)
}
const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  console.log('signInFailure error is: ', error)
}
const changePasswordSuccess = function (data) {
  $('#message').text('Password changed successfully')
  console.log('changePasswordSuccess data is: ', data)
}
const changePasswordFailure = function (error) {
  $('#message').text('Error on changing password')
  console.log('changePasswordFailure error is: ', error)
}
const signOutSuccess = function (data) {
  $('#message').text('Signed out successfully!')
  $('#again').text('Please sign-in to play the game!')
  $('a').addClass('hide')
  $('cp').addClass('hide')
  $('signs').removeClass('hide')
  $('#sign-up').removeClass('hide')
  console.log('signOutSuccess data is: ', data)
  store.validation = false
  for(let i = 0; i < 9; i++) {
    $('#'+i).text('')
  }

}
const signOutFailure = function (error) {
  $('#message').text('Error on signing out')
  console.log('singOutFailure error is: ', error)
}

const newGameSuccessfull = function (data) {
  $('#message').text('New Game Started')
  $('#again').text('Restart the Game')
  $('#gameBoard').removeClass('hide')
  $('a').removeClass('hide')
  console.log(data)
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
  console.log('Something went wrong')
}


const onGameUpdateSuccessfull = function (data) {
    //event.preventDefault()
    console.log('data: ', data)
    console.log("HEY!")
}

const onGameUpdateFailure = function () {
  console.log('something went wrong')
}

const showGameSuccesfull = function (data) {
    //event.preventDefault()
    console.log('data: ', data)
    console.log("Hop!")
}

const showGameFailure = function () {
  console.log('something went wrong')
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
  showGameFailure
}
