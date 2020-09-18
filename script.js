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

// could also try math.random()*9 or getRandomInt().  use .toString() later
//var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//Special characters array.  Might be a better way?

//possible scope issue with char, needs to be used in generate character and password
// 

//this is from w3 schools

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

//here is the method I can use to create ASCII characters from the random number generator
var a = String.fromCharCode(getRndInteger(33, 127))

function generatePassword(passLength, acceptSpecial, acceptUpper, acceptLower, acceptNums) {
  
  //our end condition for this code block is generating a single character to add to our password.
  //if we return a string, we know we have converted the character and it is ready to add to our password.
//   while (typeof(numForCharacter !== 'string')); {
//     var numForCharacter = getRndInteger(33, 127);

//     //Case statements for our different ranges
//     if (numForCharacter) {
//     }


// }
