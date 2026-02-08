// inspiration from tic tac toe homework

console.log("Lumiere")

// declare variables for Wordle

let board
let winner
let word

const squareElements = document.querySelectorAll(".square")
const miniSquareElements = document.querySelectorAll(".mini-square")
// const keyboard = document.querySelector(".keyboard")
// console.log(keyboard)
// console.log(miniSquareElement)

// functions for the logic
const initialization = () => {
  board = [
    "E",
    "S",
    "Q",
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
  // word = "VERSO"
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

function placeLetter(index) {
  // board[index] = miniSquareElement[index]
}

function handleClick(event) {
  const keyIndex = event.target.textContent
  // if (board[keyIndex] != "" || winner === true) {
  //   return
  // }
  // console.log("SEPHIROTH")
  console.log(keyIndex)
  placeLetter(keyIndex)
}
initialization()
// event listeners

miniSquareElements.forEach((element) => {
  element.addEventListener("click", handleClick)
})
