//////////////////// Declaring variables for Wordle///////////////////////

let board
let winner
let letter
let currentIndex
let currentRow

const aL = "qwertyuiopasdfghjklzxcvbnm"
const splitAL = aL.split("")
// <= 4 words for each letter
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
console.log(winWord) // we're leaving this since only specific words are accepted, not a dictionary so sometimes it becomes impossible to guess.

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

const render = () => {
  updateBoard()
}

const updateBoard = () => {
  squareElements.forEach((element, index) => {
    element.textContent = board[index]
  })
}
// clicking the on screen keyboard

const handleClick = (event) => {
  const sqrIndex = event.target.textContent
  if (sqrIndex.length === 1) {
    letter = sqrIndex
    insertLetter()
    render()
  }
}
// adding letters to the board

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
// the function for the tile colors and enter button
enter.addEventListener("click", () => {
  if (currentIndex === (currentRow + 1) * 5) {
    let guess = board.slice(currentRow * 5, (currentRow + 1) * 5).join("")

    if (guess === winWord) {
      winner = true
    }
    if (wordArray.includes(guess)) {
      remainingLetters = winWord.toUpperCase()
      for (let i = currentRow * 5; i < (currentRow + 1) * 5; i++) {
        let currentLetter = board[i].toUpperCase()

        if (board[i] === winWord[i % 5]) {
          squareElements[i].classList.add("green")
          remainingLetters = remainingLetters.replace(currentLetter, "")

          miniSquareElements.forEach((element) => {
            if (element.textContent.toUpperCase() === currentLetter) {
              element.classList.add("green")
            }
          })
        }
      }
      for (let i = currentRow * 5; i < (currentRow + 1) * 5; i++) {
        // originally was included in the upper loop but it caused unintended behavior with the colors i.e double letters yellow, shout out https://stackoverflow.com/questions/71324956/wordle-implementation-dealing-with-duplicate-letters-edge-case Neeraj Athalye
        let currentLetter = board[i].toUpperCase()

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
        setTimeout(() => {
          window.location.href = "./win.html"
        }, 3500)
      } else if (currentRow === 5 && winner === false && guess !== winWord) {
        console.log("I have claimed my planet")
        setTimeout(() => {
          window.location.href = "./lose.html"
        }, 3500)
      }
      currentRow++
    }
  }

  render()
})
// backspace button
backspace.addEventListener("click", () => {
  if (currentIndex > currentRow * 5) {
    currentIndex--
    board[currentIndex] = ""
  }
  if (winner === true) {
    return
  }
  render()
})
// keyboard functionality
document.addEventListener("keydown", (event) => {
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
