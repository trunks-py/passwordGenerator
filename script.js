// Assignment Code
const lowercaseInput = document.getElementById("lowercase");
const uppercaseInput = document.getElementById("uppercase");
const specialcharInput = document.getElementById("specialCharacters");
const numbersInput = document.getElementById("numbers");
const generateButton = document.getElementById("generate");
const result = document.getElementById("result");
const lengthInput = document.getElementById("length");

const randomFun = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSpecial
}

// Write password to the #password input
function getRandomLower() {
  return String.fromCharCode(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.random() * 10) + 97);
}

function getRandomSpecial() {
  const symbols ="!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
  
  // Add event listener to generate button
generateButton.addEventListener("click", () => {
  const length = +lengthInput.Value;
  const hasLower = lowercaseInput.checked;
  const hasUpper = uppercaseInput.checked;
  const hasNumber = numbersInput.checked;
  const hasSymbols = specialcharInput.checked;

    result.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbols, length);
});

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = "";
  const typesCount = lower + upper +number + symbol;
  const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(item =>
    Object.values(item)[0]);

    if(typesCount === 0) {
      return "Select atleast 1 option";
    }

    for(let i=0; i<length; i+=typesCount) {
      typesArr.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatePassword += randomFunc[funcName]();
      });
    }
}

const finalPassword = generatePassword.slice(0,length);
return finalPassword;