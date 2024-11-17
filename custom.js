// 1st ans:
let name = "mubarak";
let age = 25;

console.log("My name is John and I am 25 years old");

// 2nd ans:

let num = 7;
if (num % 3 === 0){
    console.log("The number is even.");   
}else {
    console.log( "The number is odd.");
}

// 3rd ans:

for (let a = 1; a <= 5; a++) {
    console.log(a);
}



// four ans:

function addNumbers(item1, item2){
    return item1 + item2;
}
let result = addNumbers(3, 7);

console.log(result);

// five ans:

let fruits = ["apple","banana","cherry"];
fruits.push("orange");

console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);

// six ans:
let numbers = [1,2,3,4,5];

numbers.forEach((num) => {
    console.log(num * 2);
});

// eight ans:

let text = "hello world"
console.log(text.toUpperCase());

// nine ans:

const person ={
    name: "Mubarak",
    age: 22,
    greet: function(){
        return "Hello, my name is Mubarak.";
    }
}
console.log(person.greet());





