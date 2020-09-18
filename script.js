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

//pulled variables out for scope issue
var passLength;
var acceptLower;
var acceptUpper;
var acceptNums;
var acceptSpecial;

var validChars = [];
//trying a version of lower letter that is a string so we can split and toUpperCase
// var lowerLetterArr = [
// 	"a",
// 	"b",
// 	"c",
// 	"d",
// 	"e",
// 	"f",
// 	"g",
// 	"h",
// 	"i",
// 	"j",
// 	"k",
// 	"l",
// 	"m",
// 	"n",
// 	"o",
// 	"p",
// 	"q",
// 	"r",
// 	"s",
// 	"t",
// 	"u",
// 	"v",
// 	"w",
// 	"x",
// 	"y",
// 	"z",
// ];
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = lowerLetters.toUpperCase();
var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialsArr = [
	"!",
	"'",
	'"',
	"#",
	"$",
	"%",
	"&",
	"(",
	")",
	"*",
	"+",
	",",
	"-",
	".",
	"/",
	":",
	";",
	"<",
	"=",
	">",
	"?",
	"@",
	"[",
	"\\",
	"]",
	"^",
	"_",
	"`",
	"{",
	"|",
	"}",
	"~",
];

//split() [Uses unicode units so it should work] specials into an array

// could also try math.random()*9 or getRandomInt().  use .toString() later.

//Special characters array.  Might be a better way?

//possible scope issue with char, needs to be used in generate character and password
//

//this is from w3 schools

function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
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
		passLength = prompt(
			"How long would you like your password?  Minimum 8 Characters. Maximum 128."
		);
		var isValid = false;

		//check for valid length.  Reiterate to user their password length if it's acceptable.
		if (passLength < 8 || passLength > 128) {
			alert("Your password input wasn't within the valid range!");
		} else {
			alert("Your password will be " + passLength + " characters long.");
			isValid = true;
		}
	} while (isValid == false);
}

function initialAcceptancePrompts() {
	do {
		//variable declaration
		acceptLower = confirm(
			"Would you like lower case letters in this password?"
		);
		acceptUpper = confirm(
			"Would you like upper case letters in this password?"
		);
		acceptNums = confirm("Would you like numbers in this password?");
		acceptSpecial = confirm(
			"Would you like special characters in this password?"
		);
		var isValid = false;

		//logical nots to check if we have at least one critera turned on.  Reiterate to user what they chose.
		if (!acceptLower && !acceptUpper && !acceptNums && !acceptSpecial) {
			alert("You must select at least one type of characters to include!");
		} else {
			alert(
				"Your password will contain" +
					"\r\n" +
					"Lowercase characters: " +
					acceptLower +
					"\r\n" +
					"Uppercase characters: " +
					acceptUpper +
					"\r\n" +
					"Numbers: " +
					acceptNums +
					"\r\n" +
					"Special characters: " +
					acceptSpecial
			);
			isValid = true;
		}
	} while (isValid == false);
}

//function to create valid characters based on accept flags
//push contents of arrays that we need into our validChars array
//need to spread (...) arrays so we don't end up with nested arrays

function generateValidCharArray(Lower, Upper, Nums, Special) {
	if (Lower) {
		validChars.push(...lowerLetters.split(""));
	}
	if (Upper) {
		validChars.push(...upperLetters.split(""));
	}
	if (Nums) {
		validChars.push(...numArr);
	}
	if (Special) {
		validChars.push(...specialsArr);
	}
}

function generatePassword() {
	//call our two other functions to take our variables
	initialLengthPrompt();
	initialAcceptancePrompts();
	//generate our valid character array
	generateValidCharArray(acceptLower, acceptUpper, acceptNums, acceptSpecial);

	//use this variable to store characters for our password
	var storeChar = [""];

	//our end condition for this code block is generating a single character to add to our password.
	//if our password holder is the length the user desires, exit
	while (storeChar.length < passLength) {
		storeChar += validChars[Math.floor(Math.random() * validChars.length)];
		console.log("storeChar", storeChar);
	}
	return storeChar;
}
