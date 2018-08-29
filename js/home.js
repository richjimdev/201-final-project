'use strict';

// Array of question objects
var qArr = [];

// Array of text for questions
var text = [
  'Which gif best describes you?',
  'Which city is your perfect vacation destination?',
  'What is your favorite food?',
  'What did you want to be when you grow up?',
  'Who is your favorite band?',
  'What is your perfect weekend activity?',
  'What is your spirit animal?',
  'What is your favorite app?',
  'What is your favorite color?'
];

// Answers constructor
// Nitpick: in general, you should use singular words (i.e. Answer) for constructors, not plurals.
function Answers(descriptor, path, staff) {
  this.descriptor = descriptor;
  this.path = path;
  this.staff = staff;
}

// Questions constructor
function Questions(text) {
  this.text = text;
  qArr.push(this);
  this.qAnswersArr = [];
}

// Add behavior to Questions objects
Questions.prototype.render = render;

// Creating question objects
var question1 = new Questions(text[0]);
var question2 = new Questions(text[1]);
var question3 = new Questions(text[2]);
var question4 = new Questions(text[3]);
var question5 = new Questions(text[4]);
var question6 = new Questions(text[5]);
var question7 = new Questions(text[6]);
var question8 = new Questions(text[7]);
var question9 = new Questions(text[8]);

// Creating answer objects
var answer1 = new Answers('Jumpy Nemo', 'img/michelle/michelle.gif', 'Michelle');
question1.qAnswersArr.push(answer1);
var answer2 = new Answers('Flexing Man', 'img/justin/justin-flexing.gif', 'Justin');
question1.qAnswersArr.push(answer2);
var answer3 = new Answers('Inhaling Sweets', 'img/joanna/joanna-gif.gif', 'Joanna');
question1.qAnswersArr.push(answer3);
var answer4 = new Answers('Starry-Eyed Sailer Moon', 'img/suzanne/suzanna-gif.gif', 'Suzanne');
question1.qAnswersArr.push(answer4);
var answer5 = new Answers('San Diego, Califonia', 'img/michelle/san-diego.jpg', 'Michelle');
question2.qAnswersArr.push(answer5);
var answer6 = new Answers('Maui, Hawaii', 'img/justin/maui.jpg', 'Justin');
question2.qAnswersArr.push(answer6);
var answer7 = new Answers('Amalfi Coast, Italy', 'img/joanna/amalfi-coast.jpg', 'Joanna');
question2.qAnswersArr.push(answer7);
var answer8 = new Answers('Home', 'img/suzanne/suzanna-home.jpg', 'Suzanne');
question2.qAnswersArr.push(answer8);
var answer9 = new Answers('High-quality Milk Chocolate', 'img/michelle/milkchocolate.jpg', 'Michelle');
question3.qAnswersArr.push(answer9);
var answer10 = new Answers('Fajitas', 'img/justin/fajitas.jpg', 'Justin');
question3.qAnswersArr.push(answer10);
var answer11 = new Answers('Thai Curry', 'img/joanna/thai-curry.jpg', 'Joanna');
question3.qAnswersArr.push(answer11);
var answer12 = new Answers('Biscuits and Gravy', 'img/suzanne/suzanna-biscuits-and-gravy.jpg', 'Suzanne');
question3.qAnswersArr.push(answer12);
var answer13 = new Answers('Big Sister', 'img/michelle/big-sister.jpg', 'Michelle');
question4.qAnswersArr.push(answer13);
var answer14 = new Answers('Astronaut', 'img/justin/astronaut.jpg', 'Justin');
question4.qAnswersArr.push(answer14);
var answer15 = new Answers('Doctor', 'img/joanna/doctor.jpg', 'Joanna');
question4.qAnswersArr.push(answer15);
var answer16 = new Answers('Ballerina', 'img/suzanne/suzanna-ballerina.jpg', 'Suzanne');
question4.qAnswersArr.push(answer16);
var answer17 = new Answers('Walk the Moon', 'img/michelle/walk-the-moon.jpg', 'Michelle');
question5.qAnswersArr.push(answer17);
var answer18 = new Answers('Beautiful Eulogy', 'img/justin/beautiful-eulogy.jpg', 'Justin');
question5.qAnswersArr.push(answer18);
var answer19 = new Answers('Roisin Murphy', 'img/joanna/roisin-murphy.jpg', 'Joanna');
question5.qAnswersArr.push(answer19);
var answer20 = new Answers('Glass Animals', 'img/suzanne/suzanna-glass-animals.jpg', 'Suzanne');
question5.qAnswersArr.push(answer20);
var answer21 = new Answers('Escape Room', 'img/michelle/escape-room.jpg', 'Michelle');
question6.qAnswersArr.push(answer21);
var answer22 = new Answers('Sleeping', 'img/justin/sleep.jpg', 'Justin');
question6.qAnswersArr.push(answer22);
var answer23 = new Answers('Beach Time', 'img/joanna/beach-time.jpg', 'Joanna');
question6.qAnswersArr.push(answer23);
var answer24 = new Answers('Riding Roller-coasters', 'img/suzanne/suzanna-roller-coaster.jpg', 'Suzanne');
question6.qAnswersArr.push(answer24);
var answer25 = new Answers('Dolphin', 'img/michelle/dolphin.jpg', 'Michelle');
question7.qAnswersArr.push(answer25);
var answer26 = new Answers('Creepy Wispy Dog', 'img/justin/justin-gif.gif', 'Justin');
question7.qAnswersArr.push(answer26);
var answer27 = new Answers('German Sheperd', 'img/joanna/german-sheperd.jpg', 'Joanna');
question7.qAnswersArr.push(answer27);
var answer28 = new Answers('Cat', 'img/suzanne/cat.jpg', 'Suzanne');
question7.qAnswersArr.push(answer28);
var answer29 = new Answers('Minimal Sudoku', 'img/michelle/minimal-sudoku.JPG', 'Michelle');
question8.qAnswersArr.push(answer29);
var answer30 = new Answers('Amazon', 'img/justin/amazon-logo.png', 'Justin');
question8.qAnswersArr.push(answer30);
var answer31 = new Answers('Trello', 'img/joanna/trello.png', 'Joanna');
question8.qAnswersArr.push(answer31);
var answer32 = new Answers('Netflix', 'img/suzanne/netflix.jpg', 'Suzanne');
question8.qAnswersArr.push(answer32);
var answer33 = new Answers('Purple', 'img/michelle/purple.jpg', 'Michelle');
question9.qAnswersArr.push(answer33);
var answer34 = new Answers('Blue', 'img/justin/blue.jpg', 'Justin');
question9.qAnswersArr.push(answer34);
var answer35 = new Answers('Lime Green', 'img/joanna/lime-green.jpg', 'Joanna');
question9.qAnswersArr.push(answer35);
var answer36 = new Answers('Gray', 'img/suzanne/gray.jpg', 'Suzanne');
question9.qAnswersArr.push(answer36);

// Render function: puts things on the page
function render() {
  // the fact that you use the i variable from the outer function hurts very much.
  // My recommendation would be that you do something using template literals instead of using
  // HTML that's already built into your HTML page.
  // Something like...
// var html = `<div class="question-bubble">
//   <div class="question">
//     <h2>${this.question}</h2>
//   </div>

//   <div class="img-row">
//     <label>
//       <input type="radio" name="question1" class="${this.qAnswersArr[0].staff}">
//       <img src="{this.qAnswersArr[0].path}" class="${this.qAnswersArr[0].staff}Img">
//       <p class="${this.qAnswersArr[0].staff}Text">${this.qAnswersArr[0].descriptor}</p>
//     </label>

//     <label>
//       <input type="radio" name="question1" class="{this.qAnswersArr[1].staff}">
//       <img src="{this.qAnswersArr[1].path}" class="{this.qAnswersArr[1].staff}Img">
//       <p class="{this.qAnswersArr[1].staff}Text">${this.qAnswersArr[1].descriptor}</p>
//     </label>
//   </div>

//   <div class="img-row">
//     <label>
//       <input type="radio" name="question1" class="{this.qAnswersArr[2].staff}">
//       <img src="{this.qAnswersArr[2].path}" class="{this.qAnswersArr[2].staff}Img">
//       <p class="{this.qAnswersArr[2].staff}Text">${this.qAnswersArr[2].descriptor}</p>
//     </label>

//     <label>
//       <input type="radio" name="question1" class="this.qAnswersArr[3].staff">
//       <img src="{this.qAnswersArr[3].path}" class="this.qAnswersArr[3].staffImg">
//       <p class="this.qAnswersArr[3].staffText">${this.qAnswersArr[3].descriptor}</p>
//     </label>
//   </div>
// </div>`;
// var wrapperElt = document.createElement('div');
// wrapperElt.innerHTML = html;
// formElt.appendChild(wrapperElt);

  var question = document.getElementsByTagName('h2')[i];
  question.textContent = this.text;
  var michelleImg = document.getElementsByClassName('michelleImg')[i];
  var michelleText = document.getElementsByClassName('michelleText')[i];
  var justinImg = document.getElementsByClassName('justinImg')[i];
  var justinText = document.getElementsByClassName('justinText')[i];
  var suzanneImg = document.getElementsByClassName('suzanneImg')[i];
  var suzanneText = document.getElementsByClassName('suzanneText')[i];
  var joannaImg = document.getElementsByClassName('joannaImg')[i];
  var joannaText = document.getElementsByClassName('joannaText')[i];
  // Assigns correct image and description to correct location
  for(var j = 0; j < this.qAnswersArr.length; j++) {
    if(this.qAnswersArr[j].staff === 'Michelle') {
      michelleImg.src = this.qAnswersArr[j].path;
      michelleText.textContent = this.qAnswersArr[j].descriptor;
    } else if (this.qAnswersArr[j].staff === 'Justin') {
      justinImg.src = this.qAnswersArr[j].path;
      justinText.textContent = this.qAnswersArr[j].descriptor;
    } else if (this.qAnswersArr[j].staff === 'Suzanne') {
      suzanneImg.src = this.qAnswersArr[j].path;
      suzanneText.textContent = this.qAnswersArr[j].descriptor;
    } else if (this.qAnswersArr[j].staff === 'Joanna') {
      joannaImg.src = this.qAnswersArr[j].path;
      joannaText.textContent = this.qAnswersArr[j].descriptor;
    }
  }
}

// Constructor for staff member object with name, img, bio, then push to staff array
function Staff(name, img, bio) {
  this.name = name;
  this.img = img;
  this.bio = bio;
  staffArr.push(this);
}

// Array of staff objects
var staffArr = [];

// Create staff objects for each staff member
// I might think about creating this info on the results page, and just saving the name of the staff member in local storage.
// Also, you don't need the variables for each of these! Can just be 4 lines that start "new Staff..."
var michelle = new Staff('Michelle', 'img/michelle/michelle-portrait.png', 'You are a coding rockstar that is here to school us all!');
var justin = new Staff('Justin', 'img/justin/justin-flexing.gif', 'You march to the beat of your own drum, always with a smile on your face.');
var joanna = new Staff('Joanna', 'img/joanna/joanna-profile.png', 'You are a social butterfly that can find a friend anywhere!');
var suzanne = new Staff('Suzanne', 'img/suzanne/suzanne-profile.png', 'The cat is out of the bag, you are the adventurous one!');

// Function to add results to local storage
function addLocalStorage(name, value) {
  var results = JSON.parse(localStorage.getItem(name));
  if(!results) {
    results = [];
  }
  results.push(value);
  localStorage.setItem(name, JSON.stringify(results));
}

// Event listener for submit button that will tally answers
document.getElementById('button').addEventListener('click', function() {
  // Variables to keep tally of answers that pertain to Staff member
  var michelleAnswers = 0;
  var justinAnswers = 0;
  var joannaAnswers = 0;
  var suzanneAnswers = 0;

  // Check that tallies up user responses
  for (var i = 0; i <= 8; i++) {
    if(document.getElementsByClassName('michelle')[i].checked) {
      michelleAnswers++;
    } else if(document.getElementsByClassName('justin')[i].checked) {
      justinAnswers++;
    } else if(document.getElementsByClassName('joanna')[i].checked) {
      joannaAnswers++;
    } else if(document.getElementsByClassName('suzanne')[i].checked) {
      suzanneAnswers++;
    } else {
      return alert('You must have a selection for each question!');
    }
  }

  // Place answer tallies into new array
  var staffAnswerArr = [michelleAnswers, justinAnswers, joannaAnswers, suzanneAnswers];

  // Determine which staff had most votes
  var finalAnswer = staffAnswerArr.indexOf(Math.max.apply(Math, staffAnswerArr));

  addLocalStorage('staffWinner', staffArr[finalAnswer]);

  // Automatically redirects to results page
  location.href = 'results.html';
});

// Invokes render on each question object
for (var i = 0; i < qArr.length; i++) {
  qArr[i].render();
}
