import "../scss/main.scss";

let submitButton = document.getElementById("btn");
let userInput = document.getElementById("user-input");

const play = () => {
  let userValue = userInput.value;
  console.log(userValue);
};

submitButton.addEventListener("click", play);
console.log("Webpack!");
