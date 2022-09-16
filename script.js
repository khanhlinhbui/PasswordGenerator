// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define generarePassword function
function generatePassword(){
  const result = parseInt(prompt("What do you the password length to be?"),10); //Modified and converted Prompt's content 
  
// set character limit
  if (result >= 8 && result<= 128) { 
    const confirm_lowercase= confirm("Click OK if you want to include one or more lowercase in the password"); //confirm condition
    const confirm_upper= confirm("Click OK if you want to include one or more uppercase in the password"); //confirm condition
    const confirm_numeric= confirm("Click OK if you want to include one or more numeric in the password"); //confirm condition
    const confirm_specialcharacter= confirm("Click OK if you want to include one or more special characters in the password"); //confirm condition
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
