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

//Globals
var passLength;
var acceptLower;
var acceptUpper;
var acceptNums;
var acceptSpecial;

//array for characters the user wants
var validChars = [];

//arrays for our prompts
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var upperLetters = lowerLetters.toUpperCase();
var numArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//some symbols need escaping.
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

//this is from w3 schools
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

//Prompts
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

	//use this variable to store characters and return our password
	var storeChar = [""];

	//Pick a random character from validChars and add it to storeChar
	while (storeChar.length < passLength) {
		storeChar += validChars[Math.floor(Math.random() * validChars.length)];
		console.log("storeChar", storeChar);
	}
	return storeChar;
}
