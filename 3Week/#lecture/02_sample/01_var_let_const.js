//var.
var 변수 = 값;

//1.
var foo = 1;

//2.
var foo = 'apple';

//3.
var foo = 1;
console.log(typeof foo);

//4.
var foo = 'apple';
console.log(typeof foo);

//3.
var foo = {name : 'apple', number : 1};
console.log(typeof foo);

//4.
var foo = ['apple', 'orange', 'cherry'];
console.log(typeof foo);

//5.
var foo = [1,2,3,4];
console.log(typeof foo);

//let.
let 상수 = 값;

//1.
var foo = 1;
foo = 2;
console.log(foo);

//2.
let foo = 1;
foo = 2;
console.log(foo);

//3.
var foo = 'apple';
console.log('1', foo);
if(true){
    var foo = 'orange';
    console.log('2', foo);
}
console.log('3', foo);

//4.
let foo = 'apple';
console.log('1', foo);
if(true){
    let foo = 'orange';
    console.log('2', foo);
}
console.log('3', foo);

//5.
let foo = 'apple';
console.log('1', foo);
if(true){
    console.log('2', foo);
    foo = 'orange';
    console.log('3', foo);
}
console.log('4', foo);

//6.
let foo = 'apple';
console.log('1', foo);
if(true){
    console.log('2', foo);
    let foo = 'orange';
}
console.log('3', foo);

//const.
const 상수선언 = 값;

//1.
const foo = 1;
foo = 1;

//2.
const foo = [1,2];
const bar = foo;

foo.push(3);
bar[0] = 10;

console.log('1', foo);
console.log('2', bar);