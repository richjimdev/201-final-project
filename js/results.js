'use strict';

// Get result from local storage
var newResult = JSON.parse(localStorage.getItem('staffWinner'));
console.log(newResult);

// If results are in localstorage display staff information, if not display message of no quiz results yet
var resultsNode = document.getElementById('resultsDisplay');
if (newResult) {
  for(var i = 0; i < newResult.length; i++) {
    var staffName = document.createElement('h1');
    var staffImg = document.createElement('img');
    var staffBio = document.createElement('p');
    staffName.textContent = newResult[i].name;
    staffImg.src = newResult[i].img;
    staffBio.textContent = newResult[i].bio;
    resultsNode.appendChild(staffName);
    resultsNode.appendChild(staffImg);
    resultsNode.appendChild(staffBio);
  }
} else {
  var noResults = document.createElement('h1');
  noResults.textContent = 'No results dummy';
  resultsNode.appendChild(noResults);
}
