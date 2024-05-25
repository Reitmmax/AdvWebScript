'use strict' 

function calculate(operation) {
      const num1 = parseFloat($('#num1').val()); // gets result from num1
      const num2 = parseFloat($('#num2').val()); // gets result from num2

      if (isNaN(num1) || isNaN(num2)) { // if nothing is entered...
        alert('Please enter valid numbers');
        return;
      }

      let result; // sets up variable 'result'
      let expression; // sets up variable 'expression'

      switch (operation) { // switch between operations dependent on what was clicked
        case 'add':
          result = num1 + num2;
          expression = `${num1} + ${num2} = ${result}`;
          break;
        case 'subtract':
          result = num1 - num2;
          expression = `${num1} - ${num2} = ${result}`;
          break;
        case 'multiply':
          result = num1 * num2;
          expression = `${num1} * ${num2} = ${result}`;
          break;
        case 'divide':
          if (num2 === 0) {
            alert('Cannot divide by zero');
            return;
          }
          result = num1 / num2;
          expression = `${num1} / ${num2} = ${result}`;
          break;
        default:
          alert('Invalid operation');
          return;
      }

      $('#expression').text(expression); // show the equation
      $('#result').text(result); // show the result

  
let previousResults = localStorage.getItem('calculatorResults') ? localStorage.getItem('calculatorResults').split(',') : []; // retrieves result ? if there is already a result, add it to the array : if there are no stored results, assign to whatever the previous result.


previousResults.push(expression); // Add the new expression to the array


localStorage.setItem('calculatorResults', previousResults.join(',')); // Store the updated array in local storage

displayResults(previousResults); // Display the expressions

localStorage.setItem('calculatorResult', result); // Store the current result in web storage

    }

    function clearData() {

  localStorage.removeItem('calculatorResults');  // Clear the stored results in local storage

  
  displayResults([]);// Clear the displayed results on the page

 
  localStorage.removeItem('calculatorResult');  // Clear the current result in web storage
}

function editData() {
  
  let previousResults = localStorage.getItem('calculatorResults') ? localStorage.getItem('calculatorResults').split(',') : []; // Retrieve the stored results from local storage 

  // Ensure there are previous results to edit
  if (previousResults.length === 0) {
    alert('No results to edit');
    return;
  }


  const lastIndex = previousResults.length - 1;   // Get the index of the last result

  
  const lastResult = previousResults[lastIndex]; // Get the last result

 
  const newEquation = prompt('Enter the new equation.( / is division, and * is multiplication ):');  // Prompt the user for a new equation

  if (!newEquation) {
    // if nothing is typed, or if the action is cancelled, return to page.
    return;
  }

  
  try { // Attempt to evaluate the new equation
    const result = eval(newEquation); // Using eval to perform the calculation
    const expression = `${newEquation} = ${result}`; // Whatever is typed in the text box is now the equation

    // Update the result and expression on the webpage
    $('#expression').text(expression);
    $('#result').text(result);

    
    previousResults[lastIndex] = expression; // Update the last result in the array

    
    localStorage.setItem('calculatorResults', previousResults.join(',')); // Store the updated array in local storage

  
    displayResults(previousResults);   // Display the expressions

    
    localStorage.setItem('calculatorResult', result); // Store the current result in web storage
  } catch (error) { // if the prompt does work...
    alert('Invalid equation. Please enter a valid expression.');
  }
}
$(document).ready(() => { 
     
  displayResults(localStorage.getItem('calculatorResults') ? localStorage.getItem('calculatorResults').split(',') : []); // Display previous results on page load
});

function displayResults(results) {
  $('#results').empty(); // Clear previous results

  if (results && results.length > 0) { // if results is valid, and if results has an array...
    results.forEach((expression) => {
      $('#results').append(`<li>${expression}</li>`); // puts the previous equations in a list
    });
  } else {
    $('#results').append('<li>No results available</li>'); // if there's no previous equations, display this
  }
	
}