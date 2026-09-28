// var let const a = 1;     decleration
let num=5;
num++; // increment
num--; // decrement
console.log(num); // output 5
let a=10;
let b=20;
let c=a+b; 
console.log(a, b); // output 10 20
console.log(c); // output 30

//operators
5==5; // true   (comparison)
5===5; // true  (strict equality)
5!=5; // false
5!==5; // false   (strict inequality)

a+=5; // a = a + 5 
a*=5; // a = a * 5
a **= 2; // a = a ** 2

// &&  logical AND
// ||  logical OR
// !   logical NOT

// conditional statements
if(c>5){
    console.log("c is greater than 5");
}
else if(c==5){
        console.log("c is equal to 5");
    }

else{
    console.log("c is less than 5");
}

// let result = (c>5) ? "c is greater than 5" : "c is less than or equal to 5";     (ternary operator)

//switch case
switch(c){
    case 5:
        console.log("c is equal to 5");
        break;
    case 10:
        console.log("c is equal to 10");
        break;
    case 15:
        console.log("c is equal to 15");
        break;
    default:
        console.log("c is not equal to 5, 10 or 15");
}

// loops 
let i=0;
while(i<5){
    console.log(i);
    i++;
}

for(let j=0; j<5; j++){
    console.log(j);
}

//arrays

let fruits=["apple", "banana", "orange"];
console.log(fruits[0]); // output apple
console.log(fruits[1]); // output banana
console.log(fruits[2]); // output orange
 fruits.push("grapes"); // add element at the end
 fruits.pop(); // remove element from the end
 fruits.shift(); // remove element from the start
 fruits.unshift("mango"); // add element at the start
 console.log(fruits); // output ["mango", "banana", "orange"]
let somefruits = fruits.slice(1, 3); // copy elements from index 1 to 2
console.log(somefruits); // output ["banana", "orange"]
let removedfruits = fruits.splice(1, 2); // remove 2 elements from index 1
console.log(removedfruits); // output ["banana", "orange"]
console.log(fruits); // output ["mango"]
fruits.splice(1, 0, "kiwi", "pear"); // add elements at index 1
console.log(fruits); // output ["mango", "kiwi", "pear"]
let fruitString = fruits.join('-');  // output "mango-kiwi-pear"
console.log(fruitString);
fruits.includes("banana"); // check if an element is present
fruits.sort(); // sort the array
console.log(fruits); // output ["kiwi", "mango", "pear"]
fruits.reverse(); // reverse the array
console.log(fruits); // output ["pear", "kiwi", "mango"]
let index = fruits.indexOf("kiwi"); // find the index of an element
console.log(index); // output 1
let isPresent = fruits.includes("kiwi"); // check if an element is present
console.log(isPresent); // output true

let arr=[1,2,3,4,5];
arr.sort(function(a, b){return b-a}); // sort in descending order
let filteredArr = arr.filter(function(num){return num>2}); // filter elements greater than 2
console.log(filteredArr); // output [5, 4, 3]
let roots = filteredArr.map(function(num){return Math.sqrt(num)}); // find square root of each element
// output [2.23606797749979, 1.7320508075688772, 1.4142135623730951]
roots.fill(0); // fill the array with 0

for(let k=0; k<arr.length; k++){
    console.log(arr[k]);
}

// ways to crteate function in javascript
function greet(name){
    console.log("Hello " + name);
}
greet("krishna");

let greet = function(name){
    console.log("Hello " + name);
}
greet("krishna");

let greet = (name) => {
    console.log("Hello " + name);
}
greet("krishna");

// object 
let car = {
    maker: "Toyota",
    model: "Camry",
    year: 2020,
    color: "white",
    start: function(){
        console.log("Car started!");
    }
}

let obj = new Object();
obj.name = "krishna";
obj.age = 20;
obj.greet = function(){
    console.log("Hello " + this.name);
}
obj.greet(); // output Hello krishna

let obj1 = {
    name: "krishna",
    age: 20,
}
obj.name = "Sharma";
console.log(obj.name); // output Sharma 
delete obj.age; // delete property
console.log(obj.age); // output undefined

// classes
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("Hello " + this.name);
    }
}

let person1 = new Person("krishna", 20);
person1.greet(); // output Hello krishna


// map
const map1 = new Map([
    ['id', 1], // key: id    value: 1
    ['name', alice],
    ['age', 20],
])

map.size(); //2
map.get('id')    //1
map.has('id');  //true
map.has('none')  //false
map.delete('age');

map.clear();   // clear the map and size become 0

const map = new Map()
map.set('name', 'bob').set('age', 20)
for(const[key, value] of map){
    console.log('${key}: ${value}')
}
//name: bob
//age: 20


//string
let str1= "hello ";
let str2= "world!";
let result= str1.concat(str2);
console.log(result);   //Output: hello world!
let char = result.charAt(4);   //o 
let index1= result.indexOf("world");  // 6
let slicestr=result.slice(6,11);   // world!
let newstr= result.replace("world", "universe");
let tolower= result.toLowerCase()


// Error Handling

try{  // code that may throw an error
    let x = y;    // y is not defined so the error is thrown
}
catch(error){       // code to handle the error
    console.log(error.message);   //output: y is not defined
}
finally{    //code to be executed regardless from an error
    console.log("hahahaha")
}


function divide(a,b){
    if(b==0){
        throw new Error("Division by 0 is not allowed");
    }
    return a/b;
}