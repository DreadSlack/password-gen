// Assignment code here

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  function generatePassword(){
  var possibleLowercase = "abcdefghijklmnopqrstuvwxyz";
  var possibleUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var possibleNumbers = "0123456789";
  var possibleSpecials = "!@#$%^&*";
  var minLength = 8;
  var maxLength = 128;
  var passwordLength = prompt("Choose a password length between " + minLength + " and " + maxLength + ":");
while (isNaN(parseInt(passwordLength)) || parseInt(passwordLength) < minLength || parseInt(passwordLength) > maxLength) {
  alert("Invalid choice. Please choose a length between " + minLength + " and " + maxLength + ".");
  passwordLength = prompt("Choose a password length between " + minLength + " and " + maxLength + ":");
}
var characterCase = prompt("Choose case (lowercase, uppercase, or booth):");
while (!(characterCase === "lowercase" || characterCase === "uppercase" || characterCase === "both")){
  alert("Invalid choice. Please choose either lowercase, uppercase, or both.");
  characterCase = prompt("Choose case (lowercase, uppercase, or both):");
}
var possibleDigits = confirm("Would you like to include numbers in the password? (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)");
var possibleSymbols = confirm("Would you like to add in special characters to the password? (!, @, #, $, %, ^, &, *)");
passwordLength = parseInt(passwordLength);
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var possibleCharacters = "";
    if (characterCase === "lowercase"){
      possibleCharacters = possibleLowercase;
    } else if (characterCase === "uppercase"){
      possibleCharacters = possibleUppercase;
    } else {
      possibleCharacters = possibleLowercase + possibleUppercase;
    }
    if (possibleDigits){
      possibleCharacters += possibleNumbers;
    }
    if (possibleSymbols){
      possibleCharacters += possibleSpecials;
    }
    //possibleCharacters = possibleCharacters + possibleSpecials;
    var randomCharacter = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));

    password += randomCharacter;
  }
  return password;
  }
  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
