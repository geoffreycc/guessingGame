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

function game(question, answer, corrAns, wrngAns, notValid, els) {
  var userInput = prompt(question).toLowerCase();
  if (isNaN(parseInt(userInput))) {
    if (userInput === answer || userInput === answer.substr(0,1)) {
      els.textContent = corrAns;
      score++;
    } else if (userInput !== ("no" || "n") && userInput !== ("yes" || "y")) {
      els.textContent = notValid;
    } else {
      els.textContent = wrngAns;
    }
  } else {
    while (parseInt(userInput) !== answer) {
      if (parseInt(userInput) < 29) {
        userInput = parseInt(prompt(wrngAns));
      } else if (parseInt(userInput) > 29) {
        userInput = parseInt(prompt("That's too high. Try again."));
      } else if (userInput !== 29) {
        userInput = parseInt(prompt(notValid));
      }
    }
    if (parseInt(userInput) === 29) {
      els.textContent = corrAns;
      score++;
    }
  }
}

for(i = 0; i < question.length; i++) {
  game(question[i], answer[i], corrAns[i], wrngAns[i], notValid[i], els[i]);
}

var results = document.getElementById("score");
results.textContent = "You got " + score + " out of 3 right.";
