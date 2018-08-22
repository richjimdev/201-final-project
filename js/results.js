'use strict';

// Get result from local storage
var newResult = JSON.parse(localStorage.getItem('staffWinner'));

// Removes item from local storage
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
  newResult = JSON.parse(localStorage.getItem('staffWinner'));
  for(var i = 0; i < newResult.length; i++) {
    var resultWrapper = document.createElement('div');
    resultWrapper.classList.add('resultWrapper');

    var resultTitle = document.createElement('div');
    resultTitle.classList.add('titleWrapper');

    var staffName = document.createElement('h2');
    var ecks = document.createElement('span');
    ecks.textContent = 'Click here to remove';
    ecks.classList.add('remover');
    ecks.id = i;

    var staffImg = document.createElement('img');
    var staffBio = document.createElement('p');
    staffName.textContent = newResult[i].name;
    staffImg.src = newResult[i].img;
    staffBio.textContent = newResult[i].bio;
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
resultsNode.addEventListener('click', removeQuizResult);

// If results are in localstorage display staff information, if not display message of no quiz results yet
if (newResult) {
  var resultExplain = document.createElement('h1');
  resultExplain.textContent = 'Who is your staff spirit animal?';
  document.getElementById('resultExplain').appendChild(resultExplain);
  renderResult();
}
