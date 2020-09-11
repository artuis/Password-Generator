function generatePassword() {
    var lowerAlpha  =   "abcdefghijklmnopqrstuvwxyz"
    var upperAlpha  =   "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var numbers     =   "0123456789"
    var special     =   " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    var chosenChar  =   "";
    var passLength  =   0;
    var password    =   "";
    var end         =   false;
    var lowerCase   =   false;
    var upperCase   =   false;
    var numerical   =   false;
    var specialChar =   false;

    while (!end) {

        passLength = prompt("What length of password would you like? (Length of 8 through 128 characters)");
        if (passLength !== null && passLength >= 8 && passLength <= 128) {

            lowerCase = confirm("Would you like lower case letters in your password?");
            upperCase = confirm("Would you like upper case letters in your password?");
            numerical = confirm("Would you like numbers in your password?");
            specialChar = confirm("Would you like special characters in your password?");

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

                for (var i = 0; i < passLength; i ++) {
                    let randInd = Math.floor(Math.random() * chosenChar.length);
                    password += chosenChar.charAt(randInd);
                }

                console.log(password);
                end = true;

            }

        }   else {

            alert("Please enter valid length.");

        }

    }
}


