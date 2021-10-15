// Assignment code here
var generatePassword = function(){
  var passLength = window.prompt("How many characters? Must be more than 8 and less than 128.");
    if (passLength < 8) {
      alert("Must be longer than 8 characters.");
      generatePassword()
    } else if (passLength > 128) {
      alert("Must be shorter than 128 characters.");
      generatePassword();
    };
  var lowerConfirm = window.confirm("Would you like to include lowercase letters?");
  var capitalConfirm = window.confirm("Would you like to include capital letters?");
  var numberConfirm = window.confirm("Would you like to include numbers?");
  var specialConfirm = window.confirm("Would you like to include special characters?");
  
  var lowercaseLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var uppercaseLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var specialCharacters = [" ","!",'"',"#","$","%","&","'",")","(","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\ ","]","^","_","`","{","|","}","~"];
  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  
  var characterType = [
    lowercaseLetters,
    uppercaseLetters,
    specialCharacters,
    numbers
  ];

  if (lowerConfirm === true && capitalConfirm === true && numberConfirm === true && specialConfirm === true) {
    for (i = 0; i < passLength; i++) {
      var randomCharType = characterType[Math.floor(Math.random() * characterType.length)];
      var randomCharacter = randomCharType[Math.floor(Math.random() * randomCharType.length)];
      console.log(randomCharacter)
    }
  } else if (lowerConfirm === true && capitalConfirm === false && numberConfirm === false && specialConfirm === false) {
    for (i = 0; i < passLength; i++){
      var randomLowercase = lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)]
      console.log(randomLowercase)
    } 
  } else if (lowerConfirm === false && capitalConfirm === true && numberConfirm === false && specialConfirm === false) {
    for (i = 0; i < passLength; i++){
      var randomUppercase = uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)]
      console.log(randomUppercase)
    }
  } else if (lowerConfirm === false && capitalConfirm === false && numberConfirm === true && specialConfirm === false) {
    for (i = 0; i < passLength; i++){
      var randomNumbers = numbers[Math.floor(Math.random() * numbers.length)]
      console.log(randomNumbers)
    } 
  } else if (lowerConfirm === false && capitalConfirm === false && numberConfirm === false && specialConfirm === true) {
    for (i = 0; i < passLength; i++){
      var randomSpecial = specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
      console.log(randomSpecial)
    } 
  }
}
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