// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define generarePassword function
function generatePassword(){
  const result = prompt("your password is generating.."); //Create Prompts

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
