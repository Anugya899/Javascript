let a = parseInt(prompt ("Enter the first number"));
let b = parseInt (prompt ("Enter the second number"));
let temp;
temp = a;
a = b;
b = temp;
result = (`The value after swapping is : ${a} , ${b}`);
document.getElementById("demo2").innerHTML = result;