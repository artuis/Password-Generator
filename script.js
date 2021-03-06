// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//  PRE: Requires no initial input
//  POST: From user selected options, generates a password
function generatePassword() {
  var lowerAlpha  =   "abcdefghijklmnopqrstuvwxyz"
  var upperAlpha  =   "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var numbers     =   "0123456789"
  var special     =   " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  var chosenChar  =   "";
  var passLength  =   0;
  var password    =   "Your Secure Password";
  var lowerCase   =   false;
  var upperCase   =   false;
  var numerical   =   false;
  var specialChar =   false;

 

  passLength = prompt("What length of password would you like? (length of 8 through 128 characters)");

  //requires user input to proceed
  if (passLength !== null && passLength >= 8 && passLength <= 128) {

    lowerCase = confirm("Would you like lower case letters in your password?");
    upperCase = confirm("Would you like upper case letters in your password?");
    numerical = confirm("Would you like numbers in your password?");
    specialChar = confirm("Would you like special characters in your password?");

    //requires at least one character type to generate password
    if (!lowerCase && !upperCase && !numerical && !specialChar) {

        alert("Please choose at least one character option.");

    } else {

        if (lowerCase) {

            chosenChar += lowerAlpha;

        }

        if (upperCase) {

            chosenChar += upperAlpha;

        }

        if (numerical) {

            chosenChar += numbers;

        }

        if (specialChar) {

            chosenChar += special;

        }

        password = "";

        for (var i = 0; i < passLength; i ++) {
            let randInd = Math.floor(Math.random() * chosenChar.length);
            password += chosenChar.charAt(randInd);
        }

    }

  } else if (passLength !== null) {

    alert("Please enter a valid length. (length of 8 through 128 characters)");

  }

  return password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


