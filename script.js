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
// function to generate password
function generatePassword() {
  // creates variables for each prompt and confirm to set the conditions
  var passLength = prompt("How many characters do you want in your password?");
    console.log(passLength);
  
  var passLower = confirm("Would you like to include lower case letters in your password?");
  console.log(passLower);
  
  var passNumbers = confirm("Would you like to include numbers in your password?");
    console.log(passNumbers);

  var passUpper = confirm("Would you like to include uppercase letters in your password?");
    console.log(passUpper);

  var specialChar = confirm("Would you like to include special characters in your password?");  
    console.log(specialChar);

  //created variable for random selections and each array of possible characters
  var selectedChar = [];
  var counter = 0;
  var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  //created variable for user selected options
  var options = [];
  //created if statements for if user selected each type of array
  if (passLower) {
    options = options.concat(letterArray);
    console.log(options);
    counter ++;
  }  
  if (passNumbers) {
    options = options.concat(numArray);
    console.log(options);
    counter ++;
  }
  if (passUpper) {
    options = options.concat(upperArray);
    console.log(options);
    counter ++;
  }
  if (specialChar) {
    options = options.concat(specialArray);
    console.log(options);
    counter ++;
  }

  // created if statements to ensure at least 1 from each array selected was included in password
  if (passLower) {
    var index = Math.floor(Math.random() * letterArray.length);
    var letter = letterArray[index];
    selectedChar.push(letter);
  }  
  if (passNumbers) {
    var index = Math.floor(Math.random() * numArray.length);
    var letter = numArray[index];
    selectedChar.push(letter);
  }
  if (passUpper) {
    var index = Math.floor(Math.random() * upperArray.length);
    var letter = upperArray[index];
    selectedChar.push(letter);
  }
  if (specialChar) {
    var index = Math.floor(Math.random() * specialArray.length);
    var letter = specialArray[index];
    selectedChar.push(letter);
  }

  // for loop randomly selects values from the options variable
  for (var i = 0; i < passLength-counter; i++)
    {
      var index = Math.floor(Math.random() * options.length);
      console.log(index);

      var letter = options[index];
      selectedChar.push(letter);
      console.log(selectedChar);
    }

    //creates variable password string from all the separate selectedChar strings
    var password = selectedChar.join("");


  return password;
}

// added comments
// CLASS NOTES - time stamp of class recording = 2:45ish pm, 26 SEP
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