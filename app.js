const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const submit = document.getElementById('submit');
const output = document.getElementById('#output');


submit.addEventListener('click', function(){
    
    let number1 = Number(document.getElementById('num1').value);
    let number2 = Number(document.getElementById('num2').value);
    
    let sum = number1 + number2;
    alert(sum);    
});






