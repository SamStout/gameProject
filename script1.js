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
const turnIndicator = document.querySelector(".turnIndicator")

let player1 = true;
let column1Counter = 0; 
let column2Counter = 0;
let column3Counter = 0;
let column4Counter = 0;
let column5Counter = 0;
let column6Counter = 0;
let column7Counter = 0;

const handlePlacementColumn1 = () => {
    if (column1Counter < 6) {
        if (player1 === true){
            let X = box[5 - column1Counter]
            X.innerHTML = "X";
            X.classList.add("X");
            player1 = false;    
        } else {
            box[5 - column1Counter].innerHTML = "O";
            player1 = true;
        }    
        
        if (column1Counter < 6) {
            column1Counter++
        };
    } else{ 
        alert("that row filled")
    }
}  

const handlePlacementColumn2 = () => {
    if (column2Counter < 6) {
        if (player1 === true){
        let X = box[11 - column2Counter]
        X.innerHTML = "X";
        X.classList.add("X");
        player1 = false; 
        } else { 
            box[11 - column2Counter].innerHTML = "O";
            player1 = true;
        }
    
        if (column2Counter < 6) {
            column2Counter++
        }
    } else { 
    alert("that row filled")
    }
}

const handlePlacementColumn3 = () => {
    if (column3Counter < 6) {
        if (player1 === true){
        let X = box[17 - column3Counter]
        X.innerHTML = "X";
        X.classList.add("X");
        player1 = false; 
        } else{
        box[17 - column3Counter].innerHTML = "O";
        player1 = true;
        }
        
        if (column3Counter<6) {
        column3Counter++
        }
    } else{ 
    alert("that row filled")
    }
    }

const handlePlacementColumn4 = () => {
    if (column4Counter < 6) {
        if (player1 === true){
            let X = box[23 - column4Counter]
            X.innerHTML = "X";
            X.classList.add("X");
            player1 = false; 
        } else{
            box[23 - column4Counter].innerHTML = "O";
            player1 = true;
        }

        if (column4Counter<6) {
            column4Counter++
        }
    
    } else { 
        alert("that row filled")
    }
    }

const handlePlacementColumn5 = () => {
    if (column5Counter < 6) {
        if (player1 === true){
        let X = box[29 - column5Counter]
        X.innerHTML = "X";
        X.classList.add("X");
        player1 = false; 
        } else {
        box[29 - column5Counter].innerHTML = "O";
        player1 = true;
        }
    
        if (column5Counter<6) {
        column5Counter++
        }

    } else { 
        alert("that row filled")
    }
}

const handlePlacementColumn6 = () => {
    if (column6Counter < 6) {
        if (player1 === true){
            let X = box[35 - column6Counter]
            X.innerHTML = "X";
            X.classList.add("X");
            player1 = false; 
        }else{
            box[35 - column6Counter].innerHTML = "O";
            player1 = true;
            }

        if (column6Counter<6) {
            column6Counter++
            }
    
    } else { 
        alert("that row filled")
    }
}

const handlePlacementColumn7 = () => {
    if (column7Counter < 6) {
        if (player1 === true){
        let X = box[41 - column7Counter]
        X.innerHTML = "X";
        X.classList.add("X");
        player1 = false; 
        } else{
        box[41 - column7Counter].innerHTML = "O";
        player1 = true;
        }
        
        if (column7Counter<6) {
        column7Counter++
        }
    }else{ 
    alert("that row filled")
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
    if (player1 === true) {
        turnIndicator.innerHTML = "blu"
        turnIndicator.classList.add ("X")
     } else if (player1 === false) {
        turnIndicator.innerHTML = "Blue"
        turnIndicator.classList.remove ("X")
     };
     
})
});

//bugs: make it so that you cant change the turn indicator for top when row filled
//can make handle turnchange standallone and call within handle placement
//create grid
//click button, insert X or O into next available slot
//create array for each column using boardArr []
//   
//on button click switch to next player move
// 
//check if 4 in a row  