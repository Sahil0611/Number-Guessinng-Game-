let input = document.getElementById("inputt");
let btn1 = document.getElementById("btn");
let wrng = document.getElementById("wrng");
wrng.style.color = "red"
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100) + 1;
let numguesses = 0;

btn1.addEventListener("click", () => {
  guessesNumber();
});
function guessesNumber() {
  if (input.value < 1 || input.value > 100 || isNaN(input.value))
    wrng.innerHTML = "Enter Between 1 to 100";
  else {
    numguesses++;
    guesses.innerHTML = "No.of Guess : " +numguesses;
  
  if ((input.value > answer)) {
    wrng.innerHTML = "You guessed too High";
    input.value = "";
  } else if (input.value < answer) {
    wrng.innerHTML = "you guessed too low";
    input.value = "";
  } else {
    wrng.innerHTML = "Congractulation you guessed the correct answer";
    btn1.disable = true;
    setTimeout(()=>{
        resetGame();
    },5000)
  }
}
}
function resetGame() {
    numguesses = 0;
    answer = Math.floor(Math.random() * 100) + 1;
    input.value="";
    guesses.innerHTML= "NO. of Guesses : 0"
}
