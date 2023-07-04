// function winner() {
//   var number = Math.floor((Math.random()*6)+1);
//   if (number===1) {
//     document.querySelector("#first").setAttribute("src", "pics/dice.png");
//   }else if (number===2) {
//     document.querySelector("#first").setAttribute("src", "pics/dice-result-two.png");
//   }else if (number===3) {
//     document.querySelector("#first").setAttribute("src", "pics/dice-roll.png");
//   }else if (number===4) {
//     document.querySelector("#first").setAttribute("src", "pics/die-face.png");
//   }else if (number===5) {
//     document.querySelector("#first").setAttribute("src", "pics/dice-with-five-dots.png");
//   }else if (number===6) {
//     document.querySelector("#first").setAttribute("src", "pics/six-dots.png");
//   }
//
//
//   var numb = Math.floor((Math.random()*6)+1);
//   if (numb===1) {
//     document.querySelector("#sec").setAttribute("src", "pics/dice.png");
//   }else if (numb===2) {
//     document.querySelector("#sec").setAttribute("src", "pics/dice-result-two.png");
//   }else if (numb===3) {
//     document.querySelector("#sec").setAttribute("src", "pics/dice-roll.png");
//   }else if (numb===4) {
//     document.querySelector("#sec").setAttribute("src", "pics/die-face.png");
//   }else if (numb===5) {
//     document.querySelector("#sec").setAttribute("src", "pics/dice-with-five-dots.png");
//   }else if (numb===6) {
//     document.querySelector("#sec").setAttribute("src", "pics/six-dots.png");
//   }
//
//
//   if (number>numb){
//     document.querySelector("h1").innerHTML = "Player 1 wins";
//   }else if (number<numb) {
//     document.querySelector("h1").innerHTML = "Player 2 wins";
// }else {
//   document.querySelector("h1").innerHTML = "Draw";
// }
// }
// winner();
//
// now, this code above is the one I wrote without as the assignments answer without viewing Angela's solution.
// It's not really good cos if i were asked to write a code for a higher number of roles, lets say a hundred number
// of outcomes, then i would sleep here deciding which numbers would come out. this makes this code too long. an
// array would have done this properly without me thinking of each outcome and writing each outcome down with an if statement.


//to start the second code, went to the file manager and renamed all my dices to their respective numbers so let's begin the better way!

var randomNumber = Math.floor( (Math.random() * 6) + 1);
var randomDice = "pics/dice" + randomNumber + ".png";
var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src", randomDice);

var randomNumber2 = Math.floor( (Math.random() * 6) + 1);
var randomDice2 = "pics/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

if (randomNumber > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 wins!";
}else if (randomNumber2 > randomNumber){
  document.querySelector("h1").innerHTML = "Player 2 wins!";
}else{
  document.querySelector("h1").innerHTML = "It's a freaking draw!!!";
}

// notce how short and precise this one is? the previous one was 19 code long and i had to think
// about each outcome and write an if statement for how it would work if it ever gets displayed. but,
// it's more effective cos the numbers automatically generate themselves.
