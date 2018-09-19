//Function.
function name(){
    실행되는 코드
}

//1. 
var drive = function(){
    console.log('Car driving');
};
drive();

//2.
function drive(){
    console.log('Car driving');
};
drive();

//3.
function myCar(){
    var car = 'Tesla';
};
console.log(myCar());

//4.
function myCar(){
    var car = 'Tesla';
    return car;
};
console.log(myCar());

//5.
function myCar(){
    var car = 'Tesla';
    return car;
    car += ' Model 3';
};
console.log(myCar());

//6.
var coffee = '아메리카노';
function myCoffee(coffee){
    coffee = '에스프레소';
}
myCoffee(coffee);
console.log(coffee);

//7.
function orderCoffee(name, menu, cups){
    return name + ' 고객님, 주문하신 ' + menu + ', ' + cups + '잔 나왔습니다.';
}
var coffee = orderCoffee('김용원', '아메리카노', 3, '감사합니다.');
console.log(coffee);

//8.
var run = (function(){
    var x = 2;
    var y = 1;
    return x + y;
}());
console.log(run);

//9.
var name = 'Tesla';
function changeName(){
    var name = 'Audi';
}
changeName();
console.log(name);

//10.
var name = 'Tesla';
function changeName(){
    name = 'Audi';
}
changeName();
console.log(name);

//11.
function changeName(){
    var name = 'Tesla';
}
changeName();
console.log(name);