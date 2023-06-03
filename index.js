const buttonNumber = document.querySelectorAll("button");
const clearButton = document.querySelector(".clearButton");
const equal = document.querySelector(".equate");
let screen = document.querySelector(".screen");

let concatenatedValue = "";

buttonNumber.forEach((button) => {
  button.addEventListener("click", () => {
    let buttonText = button.innerText;
    concatenatedValue += buttonText;
    screen.innerText = concatenatedValue;
  });
});

clearButton.addEventListener("click", () => {
  concatenatedValue = "";
  screen.innerText = "";
});

equal.addEventListener("click", () => {
  let result;
  try {
    result = eval(concatenatedValue);
    screen.innerText = result;
  } catch (error) {
    screen.innerText = "Invalid";
  }
});
