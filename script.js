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
var pwdLength = 10;
var uppercaseNums = 1;
var lowercaseNums = 7;
var specialCharNums = 1;
var numericNums = 1;

// Function to prompt user for password options
function getPasswordOptions() {

  while ((pwdLength = prompt("length of password you prefer (between 10 & 64):")) < 10 || pwdLength > 64) {
    alert("Only choose a number between 10 and 64 inclusive!");
  }
  while ((uppercaseNums = prompt("number of UPPERCASE letters you prefer (minimun is 1):")) > (pwdLength-3)) {
    alert("Only choose a number between 1 and "+(pwdLength-3));
  }
  while ((specialCharNums = prompt("number of special characters you prefer (minimum is 1):")) > (pwdLength-uppercaseNums-2)) {
    alert("Only choose a number between 1 and "+(pwdLength-uppercaseNums-2));
  }
  while ((numericNums = prompt("how many numbers do you prefer (minimum is 1):")) > (pwdLength-uppercaseNums-specialCharNums-1)) {
    alert("Only choose a number between 1 and "+(pwdLength-uppercaseNums-specialCharNums-1));
  }
  lowercaseNums = pwdLength-uppercaseNums-specialCharNums-numericNums;
  return;
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random()*arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var password = ""; //what this function returns, initially its an empty string
  var i=0; //counter to keep count of how many characters the pwd contains

  getPasswordOptions();

  //console.log(pwdLength, uppercaseNums, lowercaseNums, specialCharNums, numericNums);

  while (i < pwdLength) {
    if (uppercaseNums != 0) {
      password += getRandom(upperCasedCharacters);
      uppercaseNums--;
      i++;
    }
    if (lowercaseNums !=0) {
      password += getRandom(lowerCasedCharacters);
      lowercaseNums--;
      i++;
    }
    if (specialCharNums !=0) {
      password += getRandom(specialCharacters);
      specialCharNums--;
      i++;
    }
    if (numericNums !=0) {
      password += getRandom(numericCharacters);
      numericNums--;
      i++;
    }
    
    //console.log(i, uppercaseNums, lowercaseNums, specialCharNums, numericNums);

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


