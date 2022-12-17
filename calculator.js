x = parseInt(prompt("Enter the number "));
y = parseInt(prompt("Enter the other number "));
class calculator{
    constructor (x , y){
        this.x = x;
        this.y =y;
    }
    add(){
        return this.x + this.y;
    }
    get addition(){
        return this.add();
    }
    subtract(){
      return this.x-this.y;
    }
    get subtraction(){
        return this.subtract();
    }
    multiply(){
        return this.x * this.y;
    }
    get multiplication(){
        return this.multiply();
    }
    divide(){
        return this.x / this.y;
    }
    get division(){
        return this.divide();
    }

}
const a = new calculator(x , y);
const s = new calculator(x ,y);
const m = new calculator(x , y);
const d = new calculator(x , y);
document.getElementById("demo").innerHTML = a.addition;
document.getElementById("demo1").innerHTML = s.subtraction;
document.getElementById("demo2").innerHTML = m.multiplication;
document.getElementById("demo3").innerHTML = d.division;

