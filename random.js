let x = Math.floor((Math.random() * 10) + 1);
let user = prompt("Enter a guess number :");
let result;
if (user == x) {
    result = alert ("Good Work :");
}
else{
    result = alert ("Not Matched :");
}
document.getElementById("demo").innerHTML=result;
