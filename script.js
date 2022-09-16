// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define generarePassword function
function generatePassword(){
  const result = parseInt(prompt("What do you the password length to be?"),10); //Modified and converted Prompt's content 

  if (result >= 8 && result<= 128) {   // set character limit
  } else if (Number.isNaN(result)){
    alert("You must enter a number"); // alert variable type must be numeric
    return null;
  } else {
    alert("Password length must be at least 8 characters and no more than 128 characters"); // alert not in range 
    return null; 
  } 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
