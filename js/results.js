'use strict';

// Get result from local storage
var newResult = JSON.parse(localStorage.getItem('staffWinner'));

// Removes deleted item from local storage
function removeItem(item) {
  newResult.splice(item, 1);
}

// Removes quiz result from page and redraws results
function removeQuizResult(event) {
  if(event.target.classList.contains('remover')) {
    removeItem(parseInt(event.target.id));
  }
  localStorage.setItem('staffWinner', JSON.stringify(newResult));
  while(resultsNode.firstChild) {
    resultsNode.removeChild(resultsNode.firstChild);
  }
  renderResult();
}

// Adds quiz results to the page
function renderResult() {
  // You already run this line on page load: no need to load from localStorage twice!
  newResult = JSON.parse(localStorage.getItem('staffWinner'));
  for(var i = 0; i < newResult.length; i++) {
    // Create div for results
    var resultWrapper = document.createElement('div');
    resultWrapper.classList.add('resultWrapper');
    // Result title
    var resultTitle = document.createElement('div');
    resultTitle.classList.add('titleWrapper');
    var staffName = document.createElement('h2');
    // Create button to remove results
    var ecks = document.createElement('button');
    ecks.textContent = 'Remove';
    ecks.classList.add('remover');
    ecks.id = i;
    // Add event listener to each button
    ecks.addEventListener('click', removeQuizResult);
    // Create elements for image and paragraph for result
    var staffImg = document.createElement('img');
    var staffBio = document.createElement('p');
    // Add content to created elements
    staffName.textContent = newResult[i].name;
    staffImg.src = newResult[i].img;
    staffBio.textContent = newResult[i].bio;
    // Add elements to the page
    resultsNode.appendChild(resultWrapper);
    resultWrapper.appendChild(resultTitle);
    resultTitle.appendChild(staffName);
    resultTitle.appendChild(ecks);
    resultWrapper.appendChild(staffImg);
    resultWrapper.appendChild(staffBio);
  }
}

// Selects element to add quiz results to
var resultsNode = document.getElementById('resultsDisplay');

// If results are in localstorage display staff information, if not display message of no quiz results yet
if (newResult) {
  var resultExplain = document.createElement('h1');
  resultExplain.textContent = 'Who is your staff spirit animal?';
  document.getElementById('resultExplain').appendChild(resultExplain);
  renderResult();
}
