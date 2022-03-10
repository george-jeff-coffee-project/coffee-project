"use strict";

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<div class="coffee-name">' + coffee.name + '</div>';
    html += '<p class="coffee-roast">' + coffee.roast + '</p>';
    html += '</div>';
    return html;
}

// displays coffees in ascending order
function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}
// Adds new Coffee per user input
var addCoffee = function (e) {
    e.preventDefault();
    var coffeeName = addCoffeeField.value;
    var coffeeRoast = addRoast.value;
    var newId = coffees.length + 1;
    var addedCoffeeObj = {
        id: newId,
        name: coffeeName,
        roast: coffeeRoast
    }
    coffees.push(addedCoffeeObj);
    updateCoffees();
}

function updateCoffees(e) {
    // e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (selectedRoast === 'All' && coffee.name.toLowerCase().includes(searchBar.value.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
        else if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(searchBar.value.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


// Grabs appropriate HTML element
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var searchBar = document.querySelector('#searchBar');
var addCoffeeField = document.querySelector('#addCoffeeTxt');
var addCoffeeBtn = document.querySelector('#submitCoffeeName');
var addRoast = document.querySelector('#add-roast');

// Event Listeners
tbody.innerHTML = renderCoffees(coffees);
searchBar.addEventListener('keyup', updateCoffees);
addCoffeeBtn.addEventListener('click', addCoffee);



