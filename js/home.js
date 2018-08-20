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

document.getElementById('button').addEventListener('click', function() {
  if(document.getElementsByClassName('answer1')[0].checked) {
    quizResult = 'answer1';
  } else if(document.getElementsByClassName('answer2')[0].checked) {
    quizResult = 'answer2';
  } else if(document.getElementsByClassName('answer3')[0].checked) {
    quizResult = 'answer3';
  } else {
    quizResult = 'answer4';
  }
  localStorage.setItem('result', JSON.stringify(quizResult));
});
