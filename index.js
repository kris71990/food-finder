'use strict';

var formEl = document.getElementById('choose-food');

formEl.addEventListener('submit', setValues);

function setValues(e) {
  e.preventDefault();
  localStorage.setItem('cuisine', JSON.stringify(e.target[1].value));
  localStorage.setItem('neighborhood', JSON.stringify(e.target[3].value));
  window.location = 'response.html';
}