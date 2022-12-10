let a = parseInt(prompt("Enter the first number:"));
let b= parseInt(prompt("Enter the second number"));
let multiply;
multiply = a*b;
let divide;
divide = a/b;
function multiplication(){
    document.getElementById('demo').innerHTML = multiply;
}
function Division(){
    document.getElementById('demo1').innerHTML = divide;
}