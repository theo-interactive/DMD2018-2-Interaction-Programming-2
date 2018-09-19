//Object.
var object = new Object();
var object = {};

//1.
var car = {};
car.name = 'Tesla';
car.model = 'Model 3';
car.color = 'white';

//2.
var car = {
    name : 'Tesla',
    model : 'Model 3',
    color : 'white'
};

//3.
var car = {};
car.tesla = 'Model 3';
car.bmw = '';
car.audi = '';
console.log(car.hasOwnProperty('tesla'));

//4.
var car = {};
car.name = 'Tesla';
car['name'] = 'Tesla';
console.log(car.name);
console.log(car['name']);

//5.
var car = {};
car.name = 'Tesla';
delete car.name;
console.log(car.name);

//6.
var car = {};
car.drive = function(){
    console.log('Car driving');
};
car.drive();

//7.
var car = {
    drive : function(){
        console.log('Car driving');
    }
};
car.drive();