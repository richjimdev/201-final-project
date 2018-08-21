'use strict';

var quizResult;

var answerArray = new Array(8);
var text = [
  'Question 1: Which image best describes you?',
  'Question 2: Which city is your perfect vacation destination?',
  'Question 3: Which is your favorite food?',
  'Question 4: What do you want to be when you grow up?',
  'Question 5: Who is your favorite artist/band/music?',
  'Question 6: What is your perfect weekend activity?',
  'Question 7: What is your spirit/favorite animal?',
  'Question 8: What is your favorite app?',
  'Question 9: What is your favorite color?'
];

function Answers(path, staff, qNum) {
  this.path = path;
  this.staff = staff;
  this.qNum = qNum;
  answerArray.push(this);
}

function Questions(num, text) {
  this.num = num;
  this.text = text;
}

var question1 = new Questions(1, text[0]);
var question2 = new Questions(2, text[1]);
var question3 = new Questions(3, text[2]);
var question4 = new Questions(4, text[3]);
var question5 = new Questions(5, text[4]);
var question6 = new Questions(6, text[5]);
var question7 = new Questions(7, text[6]);
var question8 = new Questions(8, text[7]);
var question9 = new Questions(9, text[8]);

// constructor for staff member object with name, img, bio, then push to staff array
function Staff(name, img, bio) {
  this.name = name;
  this.img = img;
  this.bio = bio;
  staffArray.push(this);
}

var staffArray = [];

//create staff objects for each staff member
var michelle = new Staff('Michelle', 'img/michelle/michelle-portrait.png', 'Michelle is your Spirit Animal');
var justin = new Staff('Justin', 'img/justin/justin-flexing.gif', 'Justin is your Spirit Animal');
var joanna = new Staff('Joanna', 'img/joanna/joanna-profile.png', 'Joanna is your Spirit Animal');
var suzanne = new Staff('Suzanne', 'img/suzanne/suzanne-profile.png', 'Suzanne is your Spirit Animal');

// Event listener for submit button that will tally answers
document.getElementById('button').addEventListener('click', function() {
  // Variables to keep tally of answers that pertain to Staff member
  var staff1Answer = 0;
  var staff2Answer = 0;
  var staff3Answer = 0;
  var staff4Answer = 0;

  for (var i = 0; i <= 8; i++) {
    console.log(`question ${i + 1}`);
    if(document.getElementsByClassName('answer1')[i].checked) {
      staff1Answer++;
      console.log('a1 checked');
    } else if(document.getElementsByClassName('answer2')[i].checked) {
      staff2Answer++;
      console.log('a2 checked');
    } else if(document.getElementsByClassName('answer3')[i].checked) {
      staff3Answer++;
      console.log('a3 checked');
    } else {
      staff4Answer++;
      console.log('a4 checked');
    }
  }
  //Place answer tallies into new array
  var staffAnswerArray = [staff1Answer, staff2Answer, staff3Answer, staff4Answer];
  //Determine which staff had most votes
  var finalAnswer = staffAnswerArray.indexOf(Math.max.apply(Math, staffAnswerArray));
  localStorage.setItem('staffWinner', JSON.stringify(staffArray[finalAnswer]));

  location.href = 'results.html';
});
