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
  '.'
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
  'z'
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
  'Z'
];

// in case of any issues, these are the default values we prefer
var pwdLength = 10;
var uppercaseNums = false;
var lowercaseNums = false;
var specialCharNums = false;
var numericNums = false;

// Function to prompt user for password options
function getPasswordOptions() {

  while ((pwdLength = prompt("length of password you prefer (between 10 & 64):")) < 10 || pwdLength > 64) {
    alert("Only choose a number between 10 and 64 inclusive!");
  }

  while(!(lowercaseNums || uppercaseNums || specialCharNums || numericNums)) {
      alert("Please choose at least one character type");
      lowercaseNums = confirm("preference for lowercase letters?");
      uppercaseNums = confirm("preference for UPPERCASE letters?");
      numericNums = confirm("preference for numerics?");
      specialCharNums = confirm("preference for special characters?");
  }
  return;
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var password = ""; //what this function returns, initially its an empty string
  var i=0; //counter to keep the incremental count of how many characters are in the pwd already

  uppercaseNums = false;
  lowercaseNums = false;
  specialCharNums = false;
  numericNums = false;
  
  getPasswordOptions();

  while (i < pwdLength) {
    if (uppercaseNums && i < pwdLength) {
      password += getRandom(upperCasedCharacters);
      i++;
    }
    if (lowercaseNums && i < pwdLength) {
      password += getRandom(lowerCasedCharacters);
      i++;
    }
    if (specialCharNums && i < pwdLength) {
      password += getRandom(specialCharacters);
      i++;
    }
    if (numericNums && i < pwdLength) {
      password += getRandom(numericCharacters);
      i++;
    }
  }
  
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);


