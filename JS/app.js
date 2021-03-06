(function () {
  var userName = prompt("What is your name?");
  var score = 0;
  var els = [
    document.getElementById("qOne"),
    document.getElementById("qTwo"),
    document.getElementById("qThree"),
    document.getElementById("qFour"),
    document.getElementById("qFive"),
    document.getElementById("numCorr")
  ];
  var questions = [
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

  function game(q, ans, correct, wrong, invalid, element) {
    var userInput = prompt(q).toLowerCase();
    if (isNaN(parseInt(userInput))) {
      if (userInput === ans) {
        element.textContent = correct;
        element.className = 'right';
        document.getElementById("img").innerHTML += '<img src="Images/correct.png">';
        score++;
      } else if (userInput !== ("no" || "n") && userInput !== ("yes" || "y")) {
        element.textContent = invalid;
        element.className = 'notUsed';
        document.getElementById('img').innerHTML += '<img src="Images/invalid.gif">';
      } else {
        element.textContent = wrong;
        element.className = 'incorrect';
        document.getElementById('img').innerHTML += '<img src="Images/incorrect.png">';
      }
    } else {
      while (parseInt(userInput) !== ans) {
        if (parseInt(userInput) < 29) {
          userInput = parseInt(prompt(wrong));
        } else if (parseInt(userInput) > 29) {
          userInput = parseInt(prompt("That's too high. Try again."));
        } else if (userInput !== 29) {
          userInput = parseInt(prompt(invalid));
        }
      }
      if (parseInt(userInput) === 29) {
        element.textContent = correct;
        element.className = 'right';
        document.getElementById("img").innerHTML += '<img src="Images/correct.png">';
        score++;
      }
    }
  }

  for(var i = 0; i < questions.length; i++) {
    game(questions[i], answer[i], corrAns[i], wrngAns[i], notValid[i], els[i]);
  }

  var color = prompt("What is one of my favorite colors?").toLowerCase();
  for(var j = 0; j < favColors.length; j++) {
    if (color === favColors[j]) {
      els[4].textContent = color.substr(0,1).toUpperCase() + color.substr(1) + " is one of my favorite colors!";
      els[4].className = 'right';
      document.getElementById("img").innerHTML += '<img src="Images/correct.png">';
      score++;
      break;
    } else {
      els[4].textContent = color.substr(0,1).toUpperCase() + color.substr(1) + " is not one of my favorite colors!";
      els[4].className = 'incorrect';
      document.getElementById('img').innerHTML += '<img src="Images/incorrect.png">';
      break;
      }
    }

  els[5].textContent = "You got " + score + " out of 5 right.";
})();
