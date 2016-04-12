var userName = prompt("What is your name?");//creates the variable userName which will store the user input from the question.
console.log("userName is " + userName);//displays in the developer console what the user input was.
var score = 0;//Creates the score variable that equals 0.
console.log("Current score is : " + score);//displays current score.

var answerOne = prompt(userName + ", am I from Washington?");//creates the variable which will prompt the question and store the user input.
console.log("answerOne is " + answerOne);//displays in the developer console what the user input was.
if (answerOne.toLowerCase() === "yes") {//compares the user input in lowercase to the string yes.
  alert("Great job " + userName + "!");//If the above statement is true this string will be displayed.
  score++;//Adds 1 to the score for getting the correct answer.
  console.log ("Current score is : " + score);//displays current score in the console.
} else if (answerOne.toLowerCase() === "no") {//compares the user input, converted to lower case characters, to the string no.
  alert("Sorry " + userName + " that is incorrect.");//If the above statement is true this string will be displayed.
} else {//If the user input not 'yes' or 'no' this will run.
  alert("I'm sorry. The only accepted answers are 'yes' and 'no'.");//will be displayed when the above is true.
}

var answerTwo = prompt(userName + ", did I work at Sega?");//creates the variable answerTwo which prompts the question and stores the answer in yesNoAnswerTwo.
console.log("answerTwo is " + answerTwo);//displays the value of answerTwo in the console.
if (answerTwo.toLowerCase() === "no") {//compares the user input to no
  alert("That is correct " + userName + ".");//if the above statement is true this string will display.
  score++;//Adds 1 to the score for getting the correct answer.
  console.log ("Current score is : " + score);//displays the current score in the console.
} else if (answerTwo.toLowerCase() === "yes") {//compares the user input to yes.
  alert("I did not work at sega.");//if the above statement is true this string will display.
} else {//if the user input is not yes or no this will run.
  alert("Only 'yes' and 'no' are accepted for this question.");//displays when the above is ture.
}

var answerThree = prompt("Is painting one of my hobbies?");//creates the variable answerThree, prompts the question and stores the answer in the variable.
console.log("answerThree is " + answerThree);//displays in the value of answerThree in the console.
if (answerThree.toLowerCase() === "yes") {//compares the user input to yes.
  alert("That's right " + userName + " it sure is.");//if the above is true this string will display.
  score++;//Adds 1 to the score for getting the correct answer.
  console.log ("Current score is : " + score);//displays the score in the console.
} else if (answerThree.toLowerCase() === "no") {//compares the user input to no.
  alert("Actually it is one of my hobbies.");//if the above is true this string will display.
} else {//if the answer is not yes and is also not no this will run.
  alert("Sorry only 'yes' and 'no' are recognized.");//this string displays if the above is true.
}

alert("You got " + score + " out of 3 right." ); //"Maybe create a different message for each score?");
alert("Bonus question!");

var age = parseInt(prompt("How old am I?"));//Prompts the question. The user input will equal age.
console.log ("age is " + age);//displays the user input in the console.
while (age !== 29) {//if the age entered is not 29 this will run
  if (age < 29) {//If less than 29 will run
    age = parseInt(prompt("That's too low. Try again."));//prompts question again while telling the user the answer is too low
    console.log("Current age is " + age);//logs current age
  } else if (age > 29) {//if greater than 29 will run
    age = parseInt(prompt("That's too high. Try again."));//prompts question while saying guess was too high
    console.log("Current age is " + age);//logs current age
  } else if (age !== 29) {//if a string is entered this will run
    age = parseInt(prompt("Ooops. Try using the number keys this time."));//prompts the question while informing about accepted characters
    console.log("Current age is " + age );//Displays in the console the current age, probably NaN
  }
}
if (age === 29) {//when the above while statement is false this will run
  alert("Great job! I am " + age + " years old.");//displays the correct answer message on screen
}
