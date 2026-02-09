// inspiration from tic tac toe homework

console.log("Lumiere")

// declare variables for Wordle

let board
let winner
let letter
let currentIndex
let currentRow

const squareElements = document.querySelectorAll(".square")
const miniSquareElements = document.querySelectorAll(".mini-square")
const enter = document.querySelector("#enter")
const backspace = document.querySelector("#backspace")
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
  currentIndex = 0
  currentRow = 0
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
  if (sqrIndex.length === 1) {
    letter = sqrIndex
    console.log(event.target.id)
    insertLetter()
    // console.log(sqrIndex)
    render()
  }
}

function insertLetter() {
  if (currentIndex < (currentRow + 1) * 5) {
    board[currentIndex] = letter
    currentIndex++
    console.log(board)
  }
}

initialization()
// event listeners

miniSquareElements.forEach((element) => {
  element.addEventListener("click", handleClick)
})

enter.addEventListener("click", () => {
  if (currentIndex === (currentRow + 1) * 5) {
    currentRow++
  }
})
