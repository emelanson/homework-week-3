# homework-week-3

Third week of homework for UNC coding bootcamp.

# Password Generator (generatePassword())

The password generator creates a string of characters of a specified length from the user's choice of upper and lowercase characters, numbers, and special symbols.

The password must be at least 8 characters, and shorter than 128 characters. The user must also choose at least one set of characters to generate their password from. If either criteria is not met, the user will be asked again for a valid input. This is handled by initialLengthPrompt() and initialAcceptancePrompts(), each utilizing a do/while loop that stores the user's answers in corresponding global variables and sets a flag once valid input has been confirmed.

generateValidCharArray() checks these user inputs to construct the final array validChars[] used for generation. For each array corresponding with an input, the function pushes a spread array onto our final array. Spreading these arrays keeps us from encountering sub-arrays. lowerLetters are stored as a string to easily achieve uppercase with toUpperCase(). Both require splitting("") so that they return each letter as an index. Special characters are stored in an array, with escaping to avoid breaking code.

After constructing validChars[], a loop selects characters at random from validChars[] and saves each result in storeChar. This is done until the user desired length is achieved. Finally, storeChar returns from generatePassword() and the result is written to text.
