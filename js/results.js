'use strict';

var newResult = JSON.parse(localStorage.getItem('staffWinner'));

console.log(newResult);

var resultsNode = document.getElementById('resultsDisplay');

if (newResult) {
  var staffName = document.createElement('h1');
  var staffImg = document.createElement('img');
  var staffBio = document.createElement('p');
  staffName.textContent = newResult.name;
  staffImg.src = newResult.img;
  staffBio.textContent = newResult.bio;
  resultsNode.appendChild(staffName);
  resultsNode.appendChild(staffImg);
  resultsNode.appendChild(staffBio);
} else {
  var noResults = document.createElement('h1');
  noResults.textContent = 'No results dummy';
  resultsNode.appendChild(noResults);
}

