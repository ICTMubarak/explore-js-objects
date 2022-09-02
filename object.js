const player = {};
player.name = 'small nirob';
player.speciality = 'batsman';
player.bat = function(){
    console.log('swing your bat');
}

player.bat();
console.log(player);

const student = {
    name: 'panday',
    job: 'khay andey',
    ball: function(){
        console.log('throw the ball');
    },
    salary: 10000
}

console.log(student);

// 2. Object constructor

const person = new Object(); 

console.log(person);

// 3. object creat method.

const item = Object.create(null);
console.log(item);

// chain concept

const atel = Object.create(student);
console.log(atel.name);

class Person{
    name = 'abul';
    address = 'sodor ghat';
    constructor(age){
        this.age = age;
    }
}

const person1 = new Person(56);

console.log(person1);

 function Car(model, price){
    this.model = model;
    this.price = price;
 }

 const tesla = new Car('elon', 32);

 console.log(tesla);

 