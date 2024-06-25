const box = document.querySelector(".box")
const display = document.querySelector(".display")
const button = document.querySelector("#btn")
const body = document.querySelector("body")
const h1 = document.querySelector("h1")
const line = document.querySelector(".line1")
const lineTwo = document.querySelector(".line2")
const lineThree = document.querySelector(".line3")
const lineFour = document.querySelector(".line4")
const lineFive = document.querySelector(".line5")

// body styling

body.style.backgroundColor = "#212121"
body.style.color = "#fff"
// body.style.width = "100%"
// body.style.height = "100%"
body.style.boxSizing = "border box"

// box div styling

box.style.display = "flex"
box.style.justifyContent = "center"
box.style.alignItems = "center"
box.style.flexDirection = "column"
box.style.gap = "3vw"
box.style.marginTop = "4vw"
// display styling

display.style.width = "60vw"
display.style.height = "30vw"
display.style.border = "2px solid white"
display.style.borderRadius = "12px"

// button styling

button.style.backgroundColor = "orange"
button.style.width = "30vw"
button.style.padding = "10px 5px"
button.style.fontSize = "1.5vw"
button.style.border = "none"
button.style.borderRadius = "10px"

// h1 styling

h1.style.textAlign = "center"
h1.style.fontSize = "3vw"

// line styling

line.style.textAlign = "center"
line.style.fontSize  = "2vw"
line.style.marginTop = "2vw"

// linetwo styling

lineTwo.style.textAlign = "center"
lineTwo.style.fontSize  = "2vw"
lineTwo.style.marginTop = "2vw"

// linethree styling

lineThree.style.textAlign = "center"
lineThree.style.fontSize  = "2vw"
lineThree.style.marginTop = "2vw"

// linefour styling

lineFour.style.textAlign = "center"
lineFour.style.fontSize  = "2vw"
lineFour.style.marginTop = "2vw"

// linefive styling 

lineFive.style.textAlign = "center"
lineFive.style.fontSize  = "2vw"
lineFive.style.marginTop = "2vw"

// storing quotes 

let quote1 = "1.Talent is luck but the important thing is life is courage"
let quote2 = "2.Nothing is impossible until you give up"
let quote3 = "3.Start where you are. Use what you have. Do what you can."
let quote4 = "4.You only lose when you give up so don't give up at any cost"
let quote5 = "5.Change your life today. Don't gamble on the future, act now, without delay."

// Event listening

button.addEventListener("click", ()=>{
  line.innerHTML = `${quote1}`
  lineTwo.innerHTML = `${quote2}`
  lineThree.innerHTML = `${quote3}`
  lineFour.innerHTML = `${quote4}`
  lineFive.innerHTML = `${quote5}`
})