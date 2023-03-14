// Assignment code here

// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.',
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passwordLength = parseInt(window.prompt('Password Length:'));

  if(passwordLength < 8 || passwordLength > 128){
    window.alert('Please enter a valid password length! 8 - 128 characters!');
    generatePassword();
  } 
  var includeUpperCaseChars = confirm('Include Uppercase Characters?');
var includeLowerCaseChars = confirm('Include Lowercase Characters?');
var includeSpecialChars = confirm('Include Special Characters?');
var includeNumbers = confirm('Include Numbers?');

var concOpt = [''];

if (includeUpperCaseChars === true){

  concOpt = concOpt.concat(upperCasedCharacters);
  console.log(concOpt);
}
if (includeLowerCaseChars === true){

  concOpt = concOpt.concat(lowerCasedCharacters);
  console.log(concOpt);
}
if (includeSpecialChars === true){

  concOpt = concOpt.concat(specialCharacters);
  console.log(concOpt);
}
if (includeNumbers === true){

  concOpt = concOpt.concat(numericCharacters);
  console.log(concOpt);
}

var newPassword = '';

for (var i = 0; i < passwordLength; i++) {
  var randomPassword = concOpt[Math.floor(Math.random() * concOpt.length)];
  console.log(randomPassword)
  newPassword += randomPassword
}


return newPassword;

}

// generatePassword();


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// writePassword();
