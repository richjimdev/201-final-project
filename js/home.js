'use strict';

var quizResult;

var answerArray = new Array(8);
var text = [
  'Question 1',
  'Question 2',
  'Question 3',
  'Question 4',
  'Question 5',
  'Question 6',
  'Question 7',
  'Question 8'
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

// Variables to keep tally of answers that pertain to Staff member
var staff1counter = 0;
var staff2counter = 0;
var staff3counter = 0;
var staff4counter = 0;

var staff1FinalScore;
var staff2FinalScore;
var staff3FinalScore;
var staff4FinalScore;

// Event listener for submit button that will tally answers
document.getElementById('button').addEventListener('click', function() {
  var staff1Answer = 0;
  var staff2Answer = 0;
  var staff3Answer = 0;
  var staff4Answer = 0;
  
  if(document.getElementsByClassName('answer1')[0].checked) {
    staff1Answer++;
    staff1FinalScore = staff1counter + staff1Answer;
    console.log(staff1Answer);
    console.log('a1 checked');
  } else if(document.getElementsByClassName('answer2')[0].checked) {
    staff2Answer++;
    staff2FinalScore = staff2counter + staff2Answer;
    console.log(staff2Answer);
    console.log('a2 checked');
  } else if(document.getElementsByClassName('answer3')[0].checked) {
    staff3Answer++;
    staff3FinalScore = staff3counter + staff3Answer;
    console.log(staff3Answer);
    console.log('a3 checked');
  } else {
    staff4Answer++;
    staff4FinalScore = staff4counter + staff4Answer;
    console.log(staff4Answer);
    console.log('a4 checked');
  }

  if(document.getElementsByClassName('answer1')[1].checked) {
    staff1Answer++;
    staff1FinalScore = staff1counter + staff1Answer;
    console.log(staff1Answer);
    console.log('a1 checked');
  } else if(document.getElementsByClassName('answer2')[1].checked) {
    staff2Answer++;
    staff2FinalScore = staff2counter + staff2Answer;
    console.log(staff2Answer);
    console.log('a2 checked');
  } else if(document.getElementsByClassName('answer3')[1].checked) {
    staff3Answer++;
    staff3FinalScore = staff3counter + staff3Answer;
    console.log(staff3Answer);
    console.log('a3 checked');
  } else {
    staff4Answer++;
    staff4FinalScore = staff4counter + staff4Answer;
    console.log(staff4Answer);
    console.log('a4 checked');
  }
  // var finalAnswer = Math.max.apply(Math, staffAnswerArray);
  // localStorage.setItem('result', JSON.stringify(finalAnswer));
});

// var staffAnswerArray = [staff1Answer, staff2Answer, staff3Answer, staff4Answer];