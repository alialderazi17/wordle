// inspiration from tic tac toe homework

console.log("Lumiere")

// declare variables for Wordle

let board
let winner
let letter
let currentIndex
let currentRow

const aL = "qwertyuiopasdfghjklzxcvbnm"
const splitAL = aL.split("")

let wordArray = ["GRUMP", "VERSO", "PAINT", "GRIEF", "PARRY", "GLASS", "SWORD"]

const squareElements = document.querySelectorAll(".square")
const miniSquareElements = document.querySelectorAll(".mini-square")
const enter = document.querySelector("#enter")
const backspace = document.querySelector("#backspace")

const winWord = wordArray[Math.floor(Math.random() * wordArray.length)]
console.log(winWord)
// const keyboard = document.querySelector(".keyboard")
// console.log(keyboard)
// console.log(miniSquareElement)

/////////////////// Functions for the logic
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
    if ((currentRow + 1) * 5 === 35) {
      return console.log(letter)
    } else {
      currentIndex++
      // console.log(board)
    }
  }
}

initialization()
//////////////////////// Event Listeners //////////////////////////////////

miniSquareElements.forEach((element) => {
  element.addEventListener("click", handleClick)
})

enter.addEventListener("click", () => {
  if (currentIndex === (currentRow + 1) * 5) {
    let guess = board.slice(currentRow * 5, (currentRow + 1) * 5).join("")

    if (guess === winWord) {
      console.log("SEPHIROTH WINS")
      winner = true
    }
    if (winner === true) {
      return
    } else if (currentRow === 5 && winner === false && guess !== winWord) {
      console.log("I have claimed my planet")
    }
    // console.log(guess)
    if (wordArray.includes(guess)) {
      for (let i = currentRow * 5; i < (currentRow + 1) * 5; i++) {
        let currentLetter = board[i].toUpperCase()
        let winWordUpper = winWord.toUpperCase()
        if (!winWordUpper.includes(currentLetter)) {
          squareElements[i].classList.add("gray")
        }
        miniSquareElements.forEach((element) => {
          if (element.textContent.toUpperCase() === currentLetter) {
            element.classList.add("gray")
          }
        })
      }
      currentRow++
    }

    render()
  }
})

backspace.addEventListener("click", () => {
  console.log("Sephiroth")
  if (currentIndex > currentRow * 5) {
    currentIndex--
    board[currentIndex] = ""
  }
  if (winner === true) {
    return
  }
  render()
})

document.addEventListener("keydown", (event) => {
  // console.log("Sephiroth")
  if (event.key === "Enter") {
    event.preventDefault()
    enter.click()
  }
  if (event.key === "Backspace") {
    event.preventDefault()
    backspace.click()
  }
  if (event.key.length === 1) {
    let pressedKey = event.key.toLowerCase()
    if (splitAL.includes(pressedKey) !== true) {
      return false
    } else {
      letter = event.key.toUpperCase()
      insertLetter()
      render()
    }
  }
})
