
const board = [
  '', '', '',
  '', '', '',
  '', '', ''
]
const player_x =[
  '', '', '',
  '', '', '',
  '', '', ''
]
const player_o = [
  '', '', '',
  '', '', '',
  '', '', ''
]
const winner = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
]

const check = function (user) {

  for (let i = 0; i < 8; i++) {
    let winnerCheck = winner[i]
    let p1 = board[winnerCheck[0]]
    let p2 = board[winnerCheck[1]]
    let p3 = board[winnerCheck[2]]
    console.log
    if ((p1+p2+p3) === 'XXX') { console.log('X Win!')}
    else if ((p1+p2+p3) === 'OOO') { console.log('O Win!')}
       // if (board[winnerCheck[p]].every(x => x === 'user')) {console.log('User ' + user + ' win!')}
     }

//  if (board[winnerCheck].every(user => user === 'X')) {console.log('User ' + user + ' win!')}

//  if  (winner[i].every(user => board[] === 'X') || winner[i].every(user => user === 'Y')) {
//    console.log('User ' + user + ' win!')
//  }

  }


// if (player_x[0]===player_x[1]===player_x[2] ||
//     player_x[3]===player_x[4]===player_x[5] ||
//     player_x[6]===player_x[7]===player_x[8] ||
//     player_x[0]===player_x[4]===player_x[8] ||
//     player_x[2]===player_x[4]===player_x[6] ||
//     player_x[0]===player_x[3]===player_x[6] ||
//     player_x[1]===player_x[4]===player_x[7] ||
//     player_x[2]===player_x[5]===player_x[8])
//     {console.log('Player X won!')}
// else if (player_o[0]===player_o[1]===player_o[2] ||
//       player_o[3]===player_o[4]===player_o[5] ||
//       player_o[6]===player_o[7]===player_o[8] ||
//       player_o[0]===player_o[4]===player_o[8] ||
//       player_o[2]===player_o[4]===player_o[6] ||
//       player_o[0]===player_o[3]===player_o[6] ||
//       player_o[1]===player_o[4]===player_o[7] ||
//       player_o[2]===player_o[5]===player_o[8])
//       {console.log('Player O won!')}
//       else { }
//    }

var counter = 0
const onPlay = function (event) {
event.preventDefault()
let box=$(event.target)
if (box.text() === '') {counter += 1} else {}
console.log(counter)
if(box.text() === '' && box.text() !=='O' && (counter % 2 === 1)) {
  box.text('X')
  board[box.attr("id")] = 'X'
  player_x[box.attr("id")] = 'X'
  check('X')
//  console.log(player_x)
} else if (box.text() === '' && box.text() !=='X' && (counter % 2 === 0)) {
box.text('O')
board[box.attr("id")] = 'O'
player_o[box.attr("id")] = 'O'
check('O')
//console.log(player_o)
}
else {console.log('no!')}
//console.log('a')

}

//if (board === player_o + player_x)

module.exports = {
  onPlay
}
