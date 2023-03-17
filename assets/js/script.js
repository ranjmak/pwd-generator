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

// in case of any issues, these are the default values
var pwdLength = 10;
var uppercase = false;
var lowercase = false;
var specialChars = false;
var numeric = false;

// Function to prompt user for password options
function getPasswordOptions() {

  //pwd has to be between 10 & 64 
  while ((pwdLength = prompt("length of password you prefer (between 10 & 64):")) < 10 || pwdLength > 64) {
    alert("Only choose a number between 10 and 64, inclusive!");
  }

  //keep in the loop until at least one character type is chosen
  while(!(lowercase || uppercase || specialChars || numeric)) {
      alert("Please choose at least one character type from the following four types");
      lowercase = confirm("preference for lowercase letters?");
      uppercase = confirm("preference for UPPERCASE letters?");
      numeric = confirm("preference for numerics?");
      specialChars = confirm("preference for special characters?");
  }
  return;
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var password = ""; //what this function returns, initialising as an empty string
  var pwdCounter=0; //counter to keep the incremental count of how many characters are in the pwd already

  uppercase = false;
  lowercase = false;
  specialChars = false;
  numeric = false;
  
  getPasswordOptions();
  
  // get a random value from each character type array that the user requires until the pwd length criteria is met
  // note that within the while loop, since we are incrementing the pwdCounter, potentially 4 times, we need to check 
  // in each if statement whether the pwdLength criteria has been met as well! else we could end up with more than pwdLength
  // password!!
  while (pwdCounter < pwdLength) {
    if (uppercase && pwdCounter < pwdLength) {
      password += getRandom(upperCasedCharacters);
      pwdCounter++;
    }
    if (lowercase && pwdCounter < pwdLength) {
      password += getRandom(lowerCasedCharacters);
      pwdCounter++;
    }
    if (specialChars && pwdCounter < pwdLength) {
      password += getRandom(specialCharacters);
      pwdCounter++;
    }
    if (numeric && pwdCounter < pwdLength) {
      password += getRandom(numericCharacters);
      pwdCounter++;
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


