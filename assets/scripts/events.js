'use strict'
const ui = require('./ui')
const api = require('./api')
const store =require('./store.js')
const getFormFields = require('../../lib/get-form-fields')
//control variables

let gameCheck = 'play'
let counter = 1
let letter = 'x'
//check the board for winner
const check = function (user) {
  for (let i = 0; i < 8; i++) {
    let winnerCheck = store.winner[i]
    let p1 = store.board[winnerCheck[0]]
    let p2 = store.board[winnerCheck[1]]
    let p3 = store.board[winnerCheck[2]]
    console.log
    if ((p1+p2+p3) === 'XXX') {
  $("#result").text('X Wins!')
  gameCheck = 'over'
  }
    if ((p1+p2+p3) === 'OOO') { console.log('O Wins!')
  $("#result").text('O Wins!')
  gameCheck = 'over'
  }
    else if (counter === 10) { console.log('Even-Steven!')
  $("#result").text('Even-Steven!')
  gameCheck= 'over'
    }
  }
}

//restart the game
const restart = function (){
  event.preventDefault()
  for(let i = 0; i < 9; i++) {
    $('#'+i).text('')
  }
counter = 1
console.log(counter)
gameCheck = 'play'
store.board = [
  '', '', '',
  '', '', '',
  '', '', ''
]
$('#result').text('© Tic Tac Toe 2020 ®')
if (store.validation === true) {
$('#again').text('Restart The Game') }
}

//game logic. while user play, control the board and actions.
const onPlay = function (event) {
  let box = $(event.target)
  //store.position = box[0].id
  if (box.text() !== ''  && gameCheck === 'play' && store.validation === true) {
    $('#again').text('Please click an empty space on the game board! / Restart The Game')
  }

  if (box.text() === '' && box.text() !=='O' && (counter % 2 === 1) && gameCheck === 'play' && store.validation === true) {
  letter = 'X'
  box.text(letter)
  counter += 1
  store.board[box.attr("id")] = letter
  $('#again').text("O's Turn / Restart The Game")
  // store.player_x[box.attr("id")] = 'X'
  check('X')
} else if (box.text() === '' && box.text() !=='X' && (counter % 2 === 0) && gameCheck === 'play' && store.validation === true) {
letter = 'O'
box.text(letter)
counter += 1
store.board[box.attr("id")] = letter
$('#again').text("X's Turn / Restart The Game")
//store.player_o[box.attr("id")] = 'O'
check('O')
}
if (store.validation!==true) {
  $("#again").text('Please sign-in to play the game!')
}
else if (gameCheck==='over'){
      $("#again").text('Game is Over / Play Again?')
}
api.gameUpdate(event.target, letter, store.validation)
  .then(ui.onGameUpdateSuccessfull)
  .catch(ui.onGameUpdatefailure)
}





module.exports = {
onPlay,
restart,
counter
}
