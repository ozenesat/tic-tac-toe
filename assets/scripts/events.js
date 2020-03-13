'use strict'

const store =require('./store.js')
const ui =require('./ui.js')
//control variables
let gameCheck = 'play'
let counter = 1
//control functions
// game controls if game is over or not
const game = function (text){
if (text === 'X') {
  $("#result").text('X Win!')
  gameCheck = 'over'
}
if (text === 'O') {
  $("#result").text('O Win!')
  gameCheck = 'over'
}
if (text === 'tie') {
  $("#result").text('Even-Steven!')
  gameCheck= 'over'
}}
// check control is the winner and tie
const check = function (user) {
  for (let i = 0; i < 8; i++) {
    let winnerCheck = store.winner[i]
    let p1 = store.board[winnerCheck[0]]
    let p2 = store.board[winnerCheck[1]]
    let p3 = store.board[winnerCheck[2]]
    console.log
    if ((p1+p2+p3) === 'XXX') { console.log('X Win!')
  return game('X')
  }
    if ((p1+p2+p3) === 'OOO') { console.log('O Win!')
  return game('O')
  }
    else if (counter === 10) { console.log('Even-Steven!')
    return game('tie')

    }
  }
}

//restart the game
const restart = function (){
  //event.preventDefault()
  for(let i = 0; i < 9; i++) {
    $('#'+i).text('')
  }
counter = 1
gameCheck = 'play'
store.board = [
  '', '', '',
  '', '', '',
  '', '', ''
]
$('#result').text('Tic Tac Toe 2020 ®')
if (store.validation === true) {
$('#again').text('Restart The Game')
} else {}
}

//game logic. while user play, control the board and actions.
const onPlay = function (event) {
event.preventDefault()
let box=$(event.target)

if(box.text() === '' && box.text() !=='O' && (counter % 2 === 1) && gameCheck === 'play' && store.validation === true) {
  box.text('X')
  counter += 1
  store.board[box.attr("id")] = 'X'
  $('#again').text('O turn')
  // store.player_x[box.attr("id")] = 'X'
  check('X')
} else if (box.text() === '' && box.text() !=='X' && (counter % 2 === 0) && gameCheck === 'play' && store.validation === true) {
box.text('O')
counter += 1
store.board[box.attr("id")] = 'O'
$('#again').text('X turn')
//store.player_o[box.attr("id")] = 'O'
check('O')
}
if (store.validation!==true) {
  $("#again").text('Please sign-in to play the game!')
}
else if (gameCheck==='over'){
      $("#again").text('Game is Over / Play Again?')
}
console.log(counter)
}

module.exports = {
  onPlay,
  restart
}
