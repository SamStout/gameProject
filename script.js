const buttons = document.querySelectorAll(".button");
const result = document.querySelector(".result")

const computerDecide = () => {
    let decision = Math.floor(Math.random() * 3);
    if (decision === 0) { result.innerHTML = "You LOSE U LOSER GET A LIFE"
    }  else if (decision === 1) { 
        result.innerHTML = "Draw"
    } else {
    result.innerHTML = "GG bro You win"
} 
}

// if 0 take inner html 

//button.array.forEach(element => {
  //  button.addEventListener("click", console.log("hi")}



//buttons.forEach(element => {
  //  element.addEventListener("click", battleFunction)})
buttons.forEach(element => {
        element.addEventListener("click", computerDecide)})