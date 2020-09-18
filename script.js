// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



//Possible flow
//random number generation
//reject number if it doesn't meet criterea 
//number to string
//
//appending to password
//checking length

//ASCII is base128
//Generate number between 33-126
//Indices for needed characters: 
//Special: 33-47, 58-64, 91-96, 123-126 
//Nums: 48-57
//Caps: 65-90
//Lower: 97-122

//Could just make a function with randomInt(2), if 1 then .toUpper()
// use toUpper() when needed
//var letterArr = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]

// could also try math.random()*9 or getRandomInt().  use .toString() later.  
//var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//Special characters array.  Might be a better way?

//possible scope issue with char, needs to be used in generate character and password
// 

//this is from w3 schools

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

//create ASCII characters from the random number generator
//String.fromCharCode(getRndInteger(33, 127))

//A universal function to evaluate whether we should reject or accept a character based on our variable

// function acceptanceCheck(acceptType);{
//   if (acceptType){
//     return true;
//   } else{

//   }

// }

//Prompts for our Password gen Variables
//password needs to be between 8 and 128 characters
//we need to check to make sure we have at least one acceptance criterea turned on

function initialLengthPrompt() {
  do {
    //declarations.
    var passLength = prompt("How long would you like your password?  Minimum 8 Characters. Maximum 128.");
    var isValid = false;

    //check for valid length.  Reiterate to user their password length if it's acceptable.
    if (passLength < 8 || passLength > 128){
      alert("Your password input wasn't within the valid range!");
    } else {
      alert("Your password will be " + passLength +" characters long.");
      isValid = true;
    }
  } while (isValid == false);
}

function initialAcceptancePrompts() {
  do {
    //variable declaration
    var acceptLower = confirm("Would you like lower case letters in this password?");
    var acceptUpper = confirm("Would you like upper case letters in this password?");
    var acceptNums = confirm("Would you like numbers in this password?");
    var acceptSpecial = confirm("Would you like special characters in this password?");
    var isValid = false;

    //logical nots to check if we have at least one critera turned on.  Reiterate to user what they chose.
    if (!acceptLower && !acceptUpper && !acceptNums && !acceptSpecial){
      alert("You must select at least one type of characters to include!");
    } else {
      alert("Your password will contain" + "\r\n" +
      "Lowercase characters: " + acceptLower + "\r\n" +
      "Uppercase characters: " + acceptUpper + "\r\n" +
      "Numbers: " + acceptNums + "\r\n" +
      "Special characters: " + acceptSpecial);
      isValid = true;
    }
  } while (isValid == false);
}

function generatePassword(passLength, acceptSpecial, acceptUpper, acceptLower, acceptNums) {
  
  //call our two other functions to take our variables
  initialLengthPrompt()
  initialAcceptancePrompts()


  var storeChar = "";

  //our end condition for this code block is generating a single character to add to our password.
  //if we return a string, we know we have converted the character and it is ready to add to our password.
   while (storeChar.length != passLength) {
    var numForCharacter = getRndInteger(33, 127);
     console.log("numForCharacter", numForCharacter, String.fromCharCode(numForCharacter));

     //Case statements for our different ranges.  
     //Find range of number
     //then check if we accept that type of character based on lookup table
     //reject the number if it isn't an accepted character
     //since specials are a disjointed set, leave their case till last.

     //if a generated numForCharacter 
     //is a NOT accepted type for the range it falls in
     //reject it

     //special has a very long case
     //if it passes, add it to storeChar
     
     if ((!acceptNums && (numForCharacter >= 48 && numForCharacter < 57)) ||
        (!acceptUpper && (numForCharacter >= 97 && numForCharacter <= 122)) ||
        (!acceptLower && (numForCharacter >= 65 && numForCharacter <= 90)) ||
        (!acceptSpecial && (numForCharacter >= 33 && numForCharacter <= 47) || 
                          (numForCharacter >= 58 && numForCharacter <= 64) || 
                          (numForCharacter >= 91 && numForCharacter <= 96) ||
                          (numForCharacter >= 123 && numForCharacter <= 126)
         )
        )
      {
         
       } else {
        storeChar += String.fromCharCode(numForCharacter)
        console.log("storeChar", storeChar);
       }
     }

    //Our while loop ends, return storeChar
    return storeChar;
    }