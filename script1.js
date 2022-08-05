const box = document.querySelectorAll(".box")
const buttons = document.querySelectorAll("button")
const column = document.querySelectorAll(".column")
const column1 = document.querySelector(".column1")
const box1 = document.querySelector(".box1")
const button2 = document.querySelector(".button2") 
const button1 = document.querySelector(".button1")
const button3 = document.querySelector(".button3") 
const button4 = document.querySelector(".button4") 
const button5 = document.querySelector(".button5") 
const button6 = document.querySelector(".button6")  
const button7 = document.querySelector(".button7")  


let player1 = true;
let column1Counter = 0; 
let column2Counter = 0;
let column3Counter = 0;
let column4Counter = 0;
let column5Counter = 0;
let column6Counter = 0;
let column7Counter = 0;



//let boardArr = Array.from(box);
//let columnArr1 = Array.from(column1)

//columnArr1.forEach = () => {
    
//}

//column.forEach(element => {
  //  let columnCounter = 0
//})


//const handleTurnChange = () => {
//    if (player1 === true) {
  //      player1 = false
    // } else {
      //  return player1 = true
    // };
    // return player1
    // console.log(player1);
//}

const handlePlacementColumn1 = () => {
    if (player1 === true){
        box[5 - column1Counter].innerHTML = "hoiyeh";
    } else {
        box[5 - column1Counter].innerHTML = "ohBBY";
    }    
    
    if (column1Counter<5) {
        column1Counter++
    };
}  

const handlePlacementColumn2 = () => {
    if (player1 === true){
    box[11 - column2Counter].innerHTML = "hoiyeh";
    }
    else { box[11 - column2Counter].innerHTML = "OhBBY";
    }
    
    if (column2Counter<5) {
        column2Counter++
    }
}

const handlePlacementColumn3 = () => {
    if (player1 === true){
    box[17 - column3Counter].innerHTML = "hoiyeh";
    } else {
        box[17 - column3Counter].innerHTML = "OhBBY";
    }
    
    if (column3Counter<5) {
        column3Counter++
    };
}

const handlePlacementColumn4 = () => {
    if (player1 === true){
    box[23 - column4Counter].innerHTML = "hoiyeh";
    } else {
        box[23 - column4Counter].innerHTML = "ohBBY";
    }

    if (column4Counter<5) {
        column4Counter++
    };
}
const handlePlacementColumn5 = () => {
    if (player1 === true){
    box[29 - column5Counter].innerHTML = "hoiyeh";
    }else {
        box[29 - column5Counter].innerHTML = "ohBBY";
    }
    
    if (column5Counter<5) {
        column5Counter++
    }
}

const handlePlacementColumn6 = () => {
    if (player1 === true){
    box[35 - column6Counter].innerHTML = "hoiyeh";
    }else{
        box[35 - column6Counter].innerHTML = "OhBBY";
    }

    if (column6Counter<5) {
        column6Counter++
    }
}

const handlePlacementColumn7 = () => {
    if (player1 === true){
    box[41 - column7Counter].innerHTML = "hoiyeh";
    } else {
        box[41 - column7Counter].innerHTML = "OhBBY";
    }
   
    if (column7Counter<5) {
        column7Counter++
    }
}

button1.addEventListener("click", handlePlacementColumn1,)
button2.addEventListener("click", handlePlacementColumn2)
button3.addEventListener("click", handlePlacementColumn3)
button4.addEventListener("click", handlePlacementColumn4)
button5.addEventListener("click", handlePlacementColumn5)
button6.addEventListener("click", handlePlacementColumn6)
button7.addEventListener("click", handlePlacementColumn7)

buttons.forEach(element => {
element.addEventListener("click", handleTurnChange = () => {
    if (player1 === false) {
        player1 = true;
     } else if (player1 === true) {
        player1 = false
     };
     console.log(player1);
})
});

//create grid
//click button, insert X or O into next available slot
//create array for each column using boardArr []
//   
//on button click switch to next player move
// 
//check if 4 in a row  