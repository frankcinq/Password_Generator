//adding my arrays for password character options
var upperCaseArray = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
];
var lowerCaseArray = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];
var numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharactersArray = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
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
  "]",
  "^",
  "_",
  "`",
  "{",
  "}",
  "|",
];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

var generatePassword = (length, characters) => {
  var password = "";
  for (var i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

/*check each window.prompt
  1. length
  2. if user chooses upper case (true/false boolean)
   3. if lower case (true/false)
   4. if numbers (true/false)                 
  5. if spec. characters (true/false)
  
  */

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
  var lengthPassword = window.prompt(
    "How many characters between 8 and 128 would you like?"
  );
  /*while (lengthPassword < 8 || lengthPassword > 128)  {
     alert("Select response between 8 to 128 characters.");
     lengthPassword = window.prompt ("How many characters between 8 and 128 would you like?");
}     */

  while (
    lengthPassword < 8 ||
    lengthPassword > 128 ||
    !parseInt(lengthPassword)
  ) {
    lengthPassword = window.prompt(
      "How many characters between 8 and 128 would you like?"
    );
  }
  var upperCase = window.confirm("Would you like uppercase letters?");
  var lowerCase = window.confirm("Would you like lowercase letters?");
  var numbers = window.confirm("Would you like numbers?");
  var specialCharacters = window.confirm("Would you like special characters?");

  console.log(lengthPassword);
  console.log(upperCase);
  console.log(lowerCase);
  console.log(numbers);
  console.log(specialCharacters);

  var emptyArray = [];
  if (upperCase === "yes") {
    emptyArray = emptyArray.concat(upperCaseArray);
  } else {
    emptyArray = emptyArray;
  }
  if (lowerCase === "yes") {
    emptyArray = emptyArray.concat(lowerCaseArray);
  } else {
    emptyArray = emptyArray;
  }
  if (numbers === "yes") {
    emptyArray = emptyArray.concat(numbersArray);
  } else {
    emptyArray = emptyArray;
  }
  if (specialCharacters === "yes") {
    emptyArray = emptyArray.concat(specialCharactersArray);
  } else {
    emptyArray = emptyArray;
  }

  console.log(emptyArray);

  //Math.floor(Math.random)  lengthPassword

  //window.prompt everything that I need, store response in variable,
});

/*IGNORE THIS!!!!!!!!!!!!!!!!!!!!!!!!
function isPalindrom(str) {

  for(var i = 0, i < Math.floor(str.length / 2); i++) {

      if (str[i] !== str[str.length - (i + 1)] ) {

        return false;
      }

  }
  return true;

}

console.log(isPalindrom("racecare"));
console.log(isPalindrome(tortoise"));
IGNORE THIS!!!!!!!!!!*/

/* GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page  */
