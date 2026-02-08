// inspiration from tic tac toe homework

console.log("Lumiere")

// declare variables for Wordle

let board
let winner
let letter

const squareElements = document.querySelectorAll(".square")
const miniSquareElements = document.querySelectorAll(".mini-square")
// const keyboard = document.querySelector(".keyboard")
// console.log(keyboard)
// console.log(miniSquareElement)

// functions for the logic
const initialization = () => {
  board = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]
  winner = false
  letter = ""
  render()
}

function render() {
  updateBoard()
}

// function updateBoard() {
//   for (let i = 0; i < squareElement.length; i++) {
//     squareElement[i].textContent = board[i]
//   }
// }

const updateBoard = () => {
  squareElements.forEach((element, index) => {
    element.textContent = board[index]
  })
}
function handleClick(event) {
  const sqrIndex = event.target.textContent
  letter = sqrIndex
  // if (board[keyIndex] != "" || winner === true) {
  //   return
  // }
  // console.log("SEPHIROTH")
  insertLetter(sqrIndex)
  console.log(sqrIndex)
  render()
}

function insertLetter() {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      board.splice(i, 0, letter)
      board.pop()
      console.log(board)
      break
    }
  }
}

initialization()
// event listeners

miniSquareElements.forEach((element) => {
  element.addEventListener("click", handleClick)
})
