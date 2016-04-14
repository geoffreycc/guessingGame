var userName = prompt("What is your name?");//creates the variable userName which will store the user input from the question.
console.log("userName is " + userName);//displays in the developer console what the user input was.
var score = 0;//Creates the score variable that equals 0.
console.log("Current score is : " + score);//displays current score.

var els = [
  document.getElementById("qOne"),
  document.getElementById("qTwo"),
  document.getElementById("qThree"),
  document.getElementById("qFour"),
  document.getElementById("qFive"),
  document.getElementById("numCorr")
];

var question = [
  userName + ", am I from Washington?",
  userName + ", did I work at Sega?",
  "Is painting one of my hobbies?",
  "How old am I?"
  ];

var answer = [
  "yes",
  "no",
  "yes",
  29
];

var corrAns = [
  "Great job " + userName + "!",
  "That is correct " + userName + ".",
  "That's right " + userName + " it sure is.",
  "Great job! I am 29 years old."
];

var wrngAns = [
  "Sorry " + userName + " that is incorrect.",
  "I did not work at sega.",
  "Actually it is one of my hobbies.",
  "That's too low. Try again."
];

var notValid = [
  "I'm sorry. The only accepted answers are 'yes' and 'no'.",
  "Only 'yes' and 'no' are accepted for this question.",
  "Sorry only 'yes' and 'no' are recognized.",
  "Ooops. Try using the number keys this time."
];

var favColors = ["blue", "green", "red"];

function game(question, answers, corrAns, wrngAns, els) {
  var userInput = prompt(questions).toLowerCase();
  if (isNaN(parseInt(userInput))) {
    if (userInput === answers) {
      els.textContent = corrAns;
      score++;
    } else {
      els.textContent = wrngAns;
    }
  } else {
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
}
}
  //  } else if (typeof parseInt(userInput) === "number") {
  //    if (parseInt(userInput) === answers) {
  //     elements[i].textContent = corrAns;
  //     score++;
  //   } else if (parseInt(userInput < answers)) {
  //     elements[i].textContent = wrngAns;
  //   } else if (parseInt(userInput > answers)) {
  //     elements[i+1].textContent = wrngAns;
  //   }
  //  }
  // }

for(i = 0; i < questions.length; i++) {
  game(question[i], answer[i], corrAns[i], wrngAns[i], els[i])
}

var results = document.getElementById("score");
results.textContent = "You got " + score + " out of 3 right."; //"Maybe create a different message for each score?");

// var age = parseInt(prompt("How old am I?"));//Prompts the question. The user input will equal age.
// console.log ("age is " + age);//displays the user input in the console.
// while (age !== 29) {//if the age entered is not 29 this will run
//   if (age < 29) {//If less than 29 will run
//     age = parseInt(prompt("That's too low. Try again."));//prompts question again while telling the user the answer is too low
//     console.log("Current age is " + age);//logs current age
//   } else if (age > 29) {//if greater than 29 will run
//     age = parseInt(prompt("That's too high. Try again."));//prompts question while saying guess was too high
//     console.log("Current age is " + age);//logs current age
//   } else if (age !== 29) {//if a string is entered this will run
//     age = parseInt(prompt("Ooops. Try using the number keys this time."));//prompts the question while informing about accepted characters
//     console.log("Current age is " + age );//Displays in the console the current age, probably NaN
//   }
// }

// if (age === 29) {//when the above while statement is false this will run
//   alert("Great job! I am " + age + " years old.");//displays the correct answer message on screen
// }
