'use strict';

var formEl = document.getElementById('choose-food');

formEl.addEventListener('submit', function(e) {
  e.preventDefault();
  window.location.href = 'response.html';
});