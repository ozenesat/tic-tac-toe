'use strict'
// constants which are used for store constant variables before user's actions.
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

// variables for games api functions
let  validation=false
let stats = 0

const store = {
}
<<<<<<< HEAD
let  validation=false
=======
>>>>>>> final

module.exports = {
  store,
  board,
  player_o,
  player_x,
  winner,
  validation,
  stats
}
