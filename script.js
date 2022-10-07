// Assignment Code
var generateBtn = document.querySelector("#generate");
const specialcharacter= " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~" // create string
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // create string
const lowercase = "abcdefghijklmnopqrstuvwxyz";  // create string
const numeric = "1234567890";  // create string

// Define generarePassword function
function generatePassword(){
  const result = parseInt(prompt("What do you want the password length to be? (8-128 characters)"),10); //Modified and converted Prompt's content 
  // set character limit
  if (result >= 8 && result <= 128) { 
    const confirm_lowercase = confirm("Click OK if you want to include one or more lowercase in the password"); //confirm condition
    const confirm_uppercase = confirm("Click OK if you want to include one or more uppercase in the password"); //confirm condition
    const confirm_numeric = confirm("Click OK if you want to include one or more numeric in the password"); //confirm condition
    const confirm_specialcharacter = confirm("Click OK if you want to include one or more special characters in the password"); //confirm condition
    if (!confirm_lowercase && !confirm_uppercase && !confirm_numeric && !confirm_specialcharacter) {  // If all option are false(denied) will be alert
      alert("Must confirm at least ONE condition! Please try again.");
      return null;
    } 
    // creare a local password variable and store possible character to use for the actual password
    let password = "";
    if (confirm_lowercase) {
      password += lowercase;
    }  
    if (confirm_uppercase) {
      password += uppercase;
    }
    if (confirm_numeric) {
      password += numeric;
    }
    if (confirm_specialcharacter) {
      password += specialcharacter;
    }
    random_password_interval = Math.floor(Math.random() * parseInt(password.length,10)); // Math.random will choose random 1 integer within "password" variabl array of index
    let random_password = ""; // create variable to hold random character 
    for (let i=0; i<result;i++) {
       random_password += password.charAt(random_password_interval);  // 'random character' hold the character of the corresponding index was chosen from line 35
       random_password_interval = Math.floor(Math.random()* parseInt(password.length),10); // the index will choose random another index to generate character.
      
      console.log(random_password)
    }
    
    return random_password; // return password

  } else if (Number.isNaN(result)) { 
    alert("You must enter a number. Please try again"); // alert variable type must be numeric
    return null;

  } else {
    alert("Password length must have at least 8 characters and no more than 128 characters. Please try again."); // alert not in range 
    return null; 
  } 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password"); // 
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
