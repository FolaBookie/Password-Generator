// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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



// Function to prompt user for password options
function getPasswordOptions() { 
  //Prompt for password length
  const userPasswordLength = prompt('what is the length of the password you want (minimum of 8 characters, maximum of 128 characters)?')
  if (userPasswordLength === null) {
    return
  }
  const passwordlength = parseInt(userPasswordLength)

  // Conditional to check that the number that was entered is in range of 8 to 128 characters
  if (passwordlength < 8 || passwordlength > 128 || isNaN(passwordlength)) {
    alert("The password length is invalid")
    return getPasswordOptions()
  }
  
  let password = ""

  let passwordCharacterArray = []

  const includeSpecialCharacters = confirm("do you want special characters in your password?")
  if (includeSpecialCharacters){
    passwordCharacterArray = passwordCharacterArray.concat(specialCharacters)
    password = password + getRandom(specialCharacters) 
  }

  const includeLowerCasedCharacters = confirm("do you want lower cased characters in your password?")
  if (includeLowerCasedCharacters){
    passwordCharacterArray = passwordCharacterArray.concat(lowerCasedCharacters)
    password= password + getRandom(lowerCasedCharacters)
  }

  const includeUpperCasedCharacters = confirm("do you want upper cased characters in your password?")
  if (includeUpperCasedCharacters){
    passwordCharacterArray = passwordCharacterArray.concat(upperCasedCharacters)
    password = password + getRandom(upperCasedCharacters)
  }

  const includeNumericCharacters = confirm("do you want numeric characters in your password?")
  if (includeNumericCharacters){
    passwordCharacterArray = passwordCharacterArray.concat(numericCharacters)
    password = password + getRandom(numericCharacters)
  }

  if (passwordCharacterArray.length === 0) {
    alert("Password must include at least one type of character")
    return
  }

  const passwordOptions = {
    length: passwordlength - password.length,
    characterType: passwordCharacterArray,
    password: password
  }
 return passwordOptions
}

// Function for getting a random element from an array
function getRandom(arr) {
  const maxIndex = arr.length - 1
  const randomIndex = Math.floor(Math.random() * maxIndex)
  return arr[randomIndex]
}

// Function to generate password with user input
function generatePassword() {
 const options = getPasswordOptions()
  if (options === undefined) {
    return
  }

  let password = options.password
  
  for (let i = 0; i < options.length; i++){
    const randomCharacter = getRandom(options.characterType)
      password = password + randomCharacter
  }
  return password
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector('#password');

  if (password){
    passwordText.value = password
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);