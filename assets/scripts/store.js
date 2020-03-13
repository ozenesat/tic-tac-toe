'use strict'
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
const store = {
}
let  validation=false

module.exports = {
  store,
  board,
  player_o,
  player_x,
  winner,
  validation
}
