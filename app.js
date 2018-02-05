'use strict';

var mainEl = document.getElementById('recs');

Restaurant.allRestaurants = [];

function Restaurant(name, cuisine, neighborhood, parking, price) {
  this.name = name;
  this.cuisine = cuisine;
  this.neighborhood = neighborhood;
  this.parking = parking;
  this.price = price;
  Restaurant.allRestaurants.push(this);
}

new Restaurant('Garam Masala', 'Indian', 'University District', false, 1);
new Restaurant('Shawarma King', 'Mediterranean', 'University District', false, 1);
new Restaurant('Un Bien', 'Cuban', 'Ballard', false, 1);
new Restaurant('Pam\'s Kitchen', 'Carribean', 'University District', false, 2);
new Restaurant('Blue Water Taco Grill', 'Mexican', 'Queen Anne', false, 1);


function createList() {
  for (var i = 0; i < Restaurant.allRestaurants.length; i++) {
    var sectionEl = document.createElement('section');
    sectionEl.innerHTML = '<h1>' + Restaurant.allRestaurants[i].name + '</h1>';
    mainEl.appendChild(sectionEl);
  }
}

createList();