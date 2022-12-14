class Employee {
    constructor (id , name , age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    employee(){
     return this.id + " " + this.name + " " + this.age;   
    }
}
let emp1 = new Employee (1 , "Prabhat", 22);
let emp2 = new Employee (2, "Nitesh" , 23);
console.log(emp1.employee());
console.log(emp2.employee());
