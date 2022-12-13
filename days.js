let u = prompt("Choose between 1 to 7");
if (u==1){
    console.log("Sunday");
} else if (u==2){
    console.log ("Monday");
} else if (u==3){
    console.log("Tuesday");
} else if (u==4){
    console.log("Wednesday");
} else if (u==5){
    console.log("Thursday");
} else if (u==6){
    console.log("Friday");
} else if (u==7){
    console.log("Saturday");
}
try{
    if (u>7) throw "You have chosen wrong number";
}
catch(err){
    console.log(err);
}
