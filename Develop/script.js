// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // ALL CODE GOES IN HERE - time stamp of class recording = 2:45ish pm, 26 SEP

  // var numChar = window.prompt - generates the initial text box
  // console.log(numChar) - get the prompt working and look at in log, complete a little at a time, step by step
  // var inclNums = window.confirm - generates the Ok/Cancel text box pop up & returns true/false

  // var numArray["0", "1", "2", "3", etc up to "9"] - using strings because final password is a string
  // need four arrays, capital letters, lower case, special characters, numbers

  // if statement
    // var options = []; - this is an empty array that will eventually contain all the selected characters from the other four arrays by user
    // if true push/concat that array into a new array (var options)

  // for loop through options array based on required character amount
    // Random index value for each loop 
    //GOOGLE THIS: How to randomly choose a value from an array
    // var chosenArray = =[]; - this will be the final selected values for the password
    // turn array into a string for final password, make it named password so it is returned below

// last line will be what is below:
  return password;
}