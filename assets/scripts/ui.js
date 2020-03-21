'use strict'

const store = require('./store')


//Lovely and pretty clear ui codes which are has functions defined with their names.

const signUpSuccess = function () {
  $('#feedback').removeClass('hide')
  $('#feedback').addClass('success')
  $('#feedback').text('Signed up successfully!')
  $('#sign-up').addClass('hide')
  $('#sign-in').removeClass('hide')
}

const signUpFailure = function () {
  $('#feedback').removeClass('hide')
  $('#feedback').addClass('failure')
  $('#feedback').text('Error on sign up! Please try again.')
}

const signInSuccess = function (data) {
  $('#again').removeClass('hide')
  $('#sign-in').addClass('hide')
  $('#change-pass').removeClass('hide')
  $('#sign-out').removeClass('hide')
  $('#feedback').removeClass('hide')
  $('#feedback').addClass('success')
  $('#feedback').text('Signed in successfully!')
  $('#again').text('Start a New Game')
  $('#top-right').addClass('hide')
  $('#top-left').addClass('hide')
  $('#stats').removeClass('hide')
  $('#get-games').removeClass('hide')
  document.getElementById("sign-in").reset()
  store.user = data.user

}

const signInFailure = function () {
  $('#feedback').removeClass('hide')
  $('#feedback').addClass('failure')
  $('#feedback').text('Error on sign in! Please try again.')
}

const changePass = function () {
  $('#change-password').removeClass('hide')
}

const changePasswordSuccess = function () {
  $('#feedback').removeClass('hide')
  $('#feedback').addClass('success')
  $('#feedback').text('Password changed successfully!')
  $('#change-password').addClass('hide')
  document.getElementById("change-password").reset()
}

const changePasswordFailure = function () {
  $('#feedback').removeClass('hide')
  $('#feedback').addClass('failure')
  $('#feedback').text('Error on changing password! Please try again.')
  $('#change-password').addClass('hide')
  document.getElementById("change-password").reset()
}

const signOutSuccess = function () {
  $('#again').addClass('hide')
  $("#change-password").addClass('hide')
  $('#feedback').removeClass('hide')
  $('#feedback').addClass('success')
  $('#feedback').text('Signed out successfully!')
  $('#result').removeClass('X')
  $('#result').removeClass('O')
  $('#again').text('Please sign-in to play the game!')
  $('aboard').addClass('hide')
  $('#change-pass').addClass('hide')
  $('#sign-out').addClass('hide')
  $('#top-left').removeClass('hide')
  $('#top-right').removeClass('hide')
  $('#img').removeClass('hide')
  $('#stats').addClass('hide')
  $('#get-games').addClass('hide')
  $('#again').removeClass('warning')
  $('#p').text('')
  store.validation = false
  for(let i = 0; i < 9; i++) {
    $('#'+i).text('')
  }
}

const signOutFailure = function () {
  $('#feedback').removeClass('hide')
  $('#feedback').addClass('failure')
  $('#feedback').text('Error on signing out! Please try again.')
}

const newGameSuccessfull = function (data) {
  $('#feedback').removeClass('hide')
  $('#feedback').addClass('success')
  $('#feedback').text('New Game Started!')
  $('#again').text('Restart The Game')
  $('#gameBoard').removeClass('hide')
  $('aboard').removeClass('hide')
  $('#img').addClass('hide')
  $("#change-password").addClass('hide')
  store.game = data.game
  store.validation = true
}

const newGameFailure = function () {
  $('#feedback').removeClass('hide')
  $('#feedback').addClass('failure')
  $('#feedback').text('Error on creating new game! Please try again.')
}

const statsSuccessfull = function (data) {
  $('#feedback').removeClass('hide')
  $('#feedback').addClass('success')
  $('#feedback').text('Total Games: ' + data.games.length)
}

const statsFailure = function () {
  $('#feedback').removeClass('hide')
  $('#feedback').addClass('failure')
  $('#feedback').text('Error on getting stats! Please try again.')
}

const onGameUpdateSuccessfull = function (data) {
  $("#change-password").addClass('hide')
  store.game = data.game
}

const onGameUpdateFailure = function () {
  $('#feedback').removeClass('hide')
  $('#feedback').addClass('failure')
  $('#feedback').text('Error on updating the game! Please try again.')
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
  $('#feedback').removeClass('hide')
  $('#feedback').addClass('success')
  $('#feedback').text('Games were retrived successfully!')
  $("#change-password").addClass('hide')
  $('#p').text('')
  const allGames = data.games
  store.user.games = allGames
  for (let i = 0; i < allGames.length; i++) {
      $('#p').append('<games id='+`${allGames[i].id}` + '> ' + `${allGames[i].id}` + ' </games>')
    }
}

const showGameSuccesfull = function (data) {
  $("#change-password").addClass('hide')
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
    store.validation = false
    store.board = data.game.cells
    $('#feedback').removeClass('hide')
    $('#feedback').addClass('success')
    $('#feedback').text('Here is the game ' + `${data.game.id}`)
    $('#again').text(
    "You can not play the previous games, yet. Please click here to start a brand new game!")
}

const showGameFailure = function () {
  $('#feedback').removeClass('hide')
  $('#feedback').addClass('failure')
  $('#feedback').text('Error on showing the game! Please try again.')
}

const onGetGamesFailure = function() {
  $('#feedback').removeClass('hide')
  $('#feedback').addClass('failure')
  $('#feedback').text('Error on getting the games! Please try again.')
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
