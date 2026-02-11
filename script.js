// inspiration from tic tac toe homework

console.log("Lumiere")

//////////////////// Declaring variables for Wordle///////////////////////

let board
let winner
let letter
let currentIndex
let currentRow

const aL = "qwertyuiopasdfghjklzxcvbnm"
const splitAL = aL.split("")

// let wordArray = [
//   "GRUMP",
//   "VERSO",
//   "PAINT",
//   "GRIEF",
//   "PARRY",
//   "GLASS",
//   "SWORD",
//   "VERSE",
//   "LUMEN",
//   "WITCH",
//   "MUSIC",
//   "BLACK",
//   "ARRAY",
//   "BREAD",
//   "STACK",
//   "WHACK",
//   "SOULS",
//   "PLAIN",
//   "VEGAN",
//   "WINGS",
//   "FINAL",
//   "WORDS",
//   "BREAK",
//   "POWER",
//   "PIZZA",
//   "POINT",
//   "AUDIO",
//   "CRATE",
//   "CHEST",
//   "STICK",
//   "IDEAL",
//   "IDIOM",
//   "GRAND",
//   "HOPES",
//   "STONE",
//   "CLEAR",
//   "APPLE",
//   "THERE",
//   "PRICE",
//   "RECTO",
// ]

let wordArray = [
  "APPLE",
  "ARRAY",
  "AUDIO",
  "ALERT",
  "BLACK",
  "BREAD",
  "BREAK",
  "BOOTH",
  "CHEST",
  "CLEAR",
  "CRATE",
  "CORNY",
  "DRAIN",
  "DROWN",
  "DRINK",
  "DINES",
  "DIMES",
  "EMBED",
  "EARTH",
  "EQUIP",
  "EXILE",
  "FINAL",
  "FLANK",
  "FANCY",
  "FIGHT",
  "GLASS",
  "GRAND",
  "GRIEF",
  "GRUMP",
  "HOPES",
  "HIGHS",
  "HALLS",
  "HUNCH",
  "IDEAL",
  "IDIOM",
  "IDOLS",
  "IRONS",
  "JAILS",
  "JOKER",
  "JUDGE",
  "JUICE",
  "KNACK",
  "KNOTS",
  "KNIFE",
  "KARMA",
  "LUMEN",
  "LICKS",
  "LOWER",
  "MUSIC",
  "MEALS",
  "MAJOR",
  "MANOR",
  "NORTH",
  "NEATS",
  "NIGHT",
  "NODES",
  "OCEAN",
  "OFFER",
  "OLIVE",
  "ORDER",
  "PAINT",
  "PARRY",
  "PIZZA",
  "PLAIN",
  "POINT",
  "POWER",
  "PRICE",
  "QUACK",
  "QUAKE",
  "QUEEN",
  "QUIET",
  "REAPS",
  "ROUND",
  "RECTO",
  "ROCKS",
  "SOULS",
  "STACK",
  "STICK",
  "STONE",
  "SWORD",
  "THERE",
  "THINE",
  "TOUGH",
  "TRACK",
  "URBAN",
  "ULCER",
  "UNCLE",
  "UPPER",
  "VEGAN",
  "VERSE",
  "VERSO",
  "VEINS",
  "WHACK",
  "WINGS",
  "WITCH",
  "WORDS",
  "WRACK",
  "XENIC",
  "XENON",
  "XYLEM",
  "XERIC",
  "YIELD",
  "YACHT",
  "YOUTH",
  "YOUNG",
  "ZEBRA",
  "ZONES",
  "ZOOMS",
  "ZEALS",
]

const squareElements = document.querySelectorAll(".square")
const miniSquareElements = document.querySelectorAll(".mini-square")
const enter = document.querySelector("#enter")
const backspace = document.querySelector("#backspace")

const winWord = wordArray[Math.floor(Math.random() * wordArray.length)]
// const winWord = wordArray[1]
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

// function render() {
//   updateBoard()
// }

const render = () => {
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
// clicking the on screen keyboard
// function handleClick(event) {
//   const sqrIndex = event.target.textContent
//   if (sqrIndex.length === 1) {
//     letter = sqrIndex
//     // console.log(event.target.id)
//     insertLetter()
//     // console.log(sqrIndex)
//     render()
//   }
// }

const handleClick = (event) => {
  const sqrIndex = event.target.textContent
  if (sqrIndex.length === 1) {
    letter = sqrIndex
    insertLetter()
    render()
  }
}
// adding letters to the board
// function insertLetter() {
//   if (currentIndex < (currentRow + 1) * 5) {
//     board[currentIndex] = letter
//     if ((currentRow + 1) * 5 === 35) {
//       return console.log(letter)
//     } else {
//       currentIndex++
//       // console.log(board)
//     }
//   }
// }
const insertLetter = () => {
  if (currentIndex < (currentRow + 1) * 5) {
    board[currentIndex] = letter
    if ((currentRow + 1) * 5 === 35) {
      return console.log(letter)
    } else {
      currentIndex++
    }
  }
}

initialization()
//////////////////////// Event Listeners //////////////////////////////////
// event listener for on screen keyboard
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
    // console.log(guess)
    if (wordArray.includes(guess)) {
      remainingLetters = winWord.toUpperCase()
      for (let i = currentRow * 5; i < (currentRow + 1) * 5; i++) {
        // loop for green letters
        let currentLetter = board[i].toUpperCase()
        // let winWordUpper = winWord.toUpperCase()

        if (board[i] === winWord[i % 5]) {
          squareElements[i].classList.add("green")
          remainingLetters = remainingLetters.replace(currentLetter, "")

          miniSquareElements.forEach((element) => {
            if (element.textContent.toUpperCase() === currentLetter) {
              element.classList.add("green")
            }
          })
          // } else if (winWordUpper.includes(currentLetter)) {
          //   // if (squareElements[i].classList.contains("green"))
          //   squareElements[i].classList.add("yellow")
          //   miniSquareElements.forEach((element) => {
          //     if (element.textContent.toUpperCase() === currentLetter) {
          //       if (!element.classList.contains("green")) {
          //         element.classList.add("yellow")
          //       }
          //     }
          //   })
          // } else if (!winWordUpper.includes(currentLetter)) {
          //   squareElements[i].classList.add("gray")
          //   miniSquareElements.forEach((element) => {
          //     if (element.textContent.toUpperCase() === currentLetter) {
          //       if (
          //         !element.classList.contains("green") &&
          //         !element.classList.contains("yellow")
          //       ) {
          //         element.classList.add("gray")
          //       }
          //     }
          //   })
          // }
        }
      }
      for (let i = currentRow * 5; i < (currentRow + 1) * 5; i++) {
        // originally was included in the upper loop but it caused unintended behavior with the colors i.e coloring a wrong letter yellow, shout out https://stackoverflow.com/questions/71324956/wordle-implementation-dealing-with-duplicate-letters-edge-case Neeraj Athalye
        let currentLetter = board[i].toUpperCase()
        // let winWordUpper = winWord.toUpperCase()
        // remainingLetters = remainingLetters.replace(currentLetter, "")
        if (squareElements[i].classList.contains("green")) continue

        if (remainingLetters.includes(currentLetter)) {
          squareElements[i].classList.add("yellow")
          remainingLetters = remainingLetters.replace(currentLetter, "")

          miniSquareElements.forEach((element) => {
            if (element.textContent.toUpperCase() === currentLetter) {
              if (!element.classList.contains("green")) {
                element.classList.add("yellow")
              }
            }
          })
        } else {
          squareElements[i].classList.add("gray")
          miniSquareElements.forEach((element) => {
            if (element.textContent.toUpperCase() === currentLetter) {
              if (
                !element.classList.contains("green") &&
                !element.classList.contains("yellow")
              ) {
                element.classList.add("gray")
              }
            }
          })
        }
      }
      if (winner === true) {
        alert("CONGRATULATIONS YOU SAVED THE PLANET FROM ETERNAL RUIN")
        window.location.href = "./win.html"
      } else if (currentRow === 5 && winner === false && guess !== winWord) {
        console.log("I have claimed my planet")
        alert("THE PROMISED LAND IS MINE")
        window.location.href = "./lose.html"
      }
      currentRow++
    }
  }

  render()
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
