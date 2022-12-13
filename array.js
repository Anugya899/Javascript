let names = ["abc","def","xyz"];
let nlen = names.length;
let text = "<ul>";
for (let i=0;i<nlen;i++){
    text = text + "<li>" + names[i] + "</li>";
}
text = text + "</ul>";
document.getElementById("demo").innerHTML = text;
