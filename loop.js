let text = "";
for (let i=0;i<16;i++) {
    if (i%2 == 0){
        text +=  i + " " + "is even" + "<br>";
    }
    else{
        text += i + " " + "is odd" + "<br>";
    }
}
document.getElementById("demo").innerHTML = text;