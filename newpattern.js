let n=5;
let string = "";
for (let x=1;x<=n;x++){
    for (let y=1;y<n-x;y++){
        string = string + "";
    }
        for (let z=1;z<=x;z++){
            string = string + "*" ;
        }
        string = string + "\n"; 
}
console.log(string);
