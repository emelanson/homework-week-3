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


// use toUpper() when needed
var letterArr = [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z]

// could also try math.random()*9 or getRandomInt()
var numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]



function generatePassword(passLength, acceptLower, acceptUpper, acceptNumeric, acceptSpecial) {


}
