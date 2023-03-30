const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const submit = document.getElementById('submit');
const output = document.getElementById('output');


// Listen for event
submit.addEventListener('click', function(){
    // Get input field values
    let number1 = Number(document.getElementById('num1').value);
    let number2 = Number(document.getElementById('num2').value);
    // Add numbers to sum
    let sum = number1 + number2;
    output.innerHTML = sum;    
});






