// Assignment code here

// Variables 

var caseLower = 'abcdefghijklmnopqrstuvwxyz'
var caseUpper = 'ABCDEFGHIJKLNMOPQRSTUVWXYZ'
var symSpecial ='!@#$%^&*()=+-*/'
var number = '0123456789'

//function

function generate()

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
