//Array.
var array = new Array();
var array = [];

//1.
var cars = ['Tesla', 'Audi', 'Volvo'];
cars.push('BMW');
cars[4] = 'Benz';

//2.
var cars = ['Tesla', 'Audi', 'Volvo'];
delete cars[2];
console.log(cars);

//3.
var cars = [];
cars.push('Tesla');
cars.push('Audi');
console.log(cars.length);

//4.
var cars = [];
cars.push('Tesla');
console.log(cars);

//5.
var cars = ['Tesla', 'Audi', 'Volvo'];
var message = cars.join();
console.log(message);

//6.
var cars = ['Tesla', 'Audi', 'Volvo'];
var reverse = cars.reverse();
console.log(reverse);