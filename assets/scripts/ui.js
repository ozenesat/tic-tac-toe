'use strict'

const store = require('./store')
const events = require('./events')

const signUpSuccess = function (data) {
  $('#message').text('Signed up successfully')
  console.log('signUpSuccess data is: ', data)
}
const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  console.log('signUpFailure error is: ', error)
}
const signInSuccess = function (data) {
  $('#message').text('Signed in successfully')
  $('#again').text('Please Click New Game Button for the New Game')
  console.log('signUpSuccess data is: ', data)
  store.user = data.user
//  store.validation = true
//  events.counter = 1
  console.log(events.counter)
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
  console.log('signOutSuccess data is: ', data)
  store.validation = false
  for(let i = 0; i < 9; i++) {
    $('#'+i).text('')
  }
//  events.restart()
}
const signOutFailure = function (error) {
  $('#message').text('Error on signing out')
  console.log('singOutFailure error is: ', error)
}

const newGameSuccessfull = function (event) {
  $('#message').text('New Game Started')
//  $('again').text('Please Click New Game Button for the New Game')
store.validation = true
events.counter = 1
}

const newGameFailure = () => {
  $('#message').text('Something went wrong')
  console.log('Something went wrong')
}


const onGameUpdateSuccessfull = function (data) {
  console.log(data)
}
const onGameUpdateFailure = function () {
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
  newGameFailure
}
