console.log('ffff');
console.error('ffff');

const age = 30;

let score = 10;
score = 20;

console.log(age, score);

const name= 'jj';

console.log(`my name is ${name} and im ${age}`);    //*
console.log(name.length);

const s = 'technology, computers, it, code';
console.log(s.split(', '));
//-------------------------------------------
const numbers = new Array(1,2,3,4);
const lalala = ['apples', 'pears', 11];
lalala.push('mamgos');
lalala.unshift('nana');
console.log(lalala);

const person = {
    name:'hogn', 
    age: 30,
    hobbies: ['a', 'b'],
    address: {
        street: '50 st',
        city: 'la'
    }
}
console.log(person.hobbies[0]);
person.email = 'gmail.com';     //*
console.log(person.email);

//-------------------------------------------
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    }
]
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
//-------------------------------------------
for(let i = 0; i<10 ; i++){
    console.log(`loop: ${i}`);
}

for (let todo of todos){
    console.log(todo.id);
}

todos.forEach(function(todo) {      //for each
    console.log(todo.text);
});
const todoText = todos.map(function(todo){      //map
    return todo.text;
});
const todoComplete = todos.map(function(todo){      //filter
    return todo.isCompleted === true;//value and type ===
});
console.log(todoComplete);

//-------------------------------------------
const x = '10';
if(x == 10){
    console.log('x = 10');
}   
if(x === 10){
    console.log('x is 10');
}  

const color = x > 10 ? 'red' : 'blue';
console.log(color);

switch(color){
    case 'red':
        console.log('is red');
        break;
    case 'blue':
        break;
}
//--------------------------------------
function addnums(num1, num2){
    return num1 + num2;
}
console.log(addnums(5,6));

const addnum = num1 => num1 + 5;
console.log(addnum(5));

todos.forEach(todo => console.log(todo));

//--------------------------------------
function Person(firstName, lastName, dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);

    /*this.getBirthYear = function(){
        return this.dob.getFullYear();
    }*/
}
const person1 = new Person('John', 'Doe', '4-3-2000');
console.log(person1);
console.log(person1.dob.getFullYear());

Person.prototype.getBirthYear = function(){     //prototype
    return this.dob.getFullYear();
}
console.log(person1.getBirthYear());

class Personn {                  //class~prototype
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear(){
        return this.dob.getFullYear();
    }
}
const person2 = new Personn('John', 'Doe', '4-3-2000');
console.log(person2);
//---------------------------------------------
//single element
document.getElementById('app');
document.querySelector(h1);

//multiple element
document.querySelectorAll('.item');     //array
