//Loop - for.
for(초기화; 반복조건; 반복시 실행되는 코드){
    반복해서 실행되는 코드
}

//1.
for(var i = 0; i < 10; i++){
    document.write('for loop ' + i + '<br/>');
}

//2.
var buttons = document.getElementsByClassName('button');
for(var i = 0, max = buttons.length; i < max; i++){
    buttons[i].innerHTML = 'Button ' + i;
}

//Loop - while.
while(조건){
    반복해서 실행되는 코드
}

//1.
var count = 0;
var sum = 0;
while(count < 10){
    count++;
    sum += count;
}

//Loop - for 중첩.
for(var i = 0; i < 10; i++){
    for(var j = 0; j < 10; j++){
        document.write(String(i) + ' '+ String(j) + '<br/>');
    }
}

//Loop - break.
for(var i = 0; i < 10; i++){
    if(i === 5){
        break;
    }
    document.write('for loop ' + i + '<br/>');
}

//Loop - continue.
for(var i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    document.write('for loop ' + i + '<br/>');
}

//Loop - for ... in.
for(변수 in 객체){
    반복해서 실행되는 코드
}

//1.
var cars = {Tesla : '테슬라', Audi : '아우디'};
var name = '';
var nameKo = [];
for(var name in cars){
    nameKo.push(cars[name]);
}

//Loop - forEach
배열.forEach(function(변수){
    반복해서 실행되는 코드
});

//1.
var cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];
cars.forEach(function(name){
    console.log(name);
});

//2.
var cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];
cars.forEach(function(name, index){
    console.log('name', name);
    console.log('index', index);
});

//3.
var cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];
cars.forEach(function(name, index){
    if(index >= 2){
        break;
    }
    console.log('name', name);
    console.log('index', index);
});

//Loop - for ... of
for(변수 of 배열){
    반복해서 실행되는 코드
}

//1.
var cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];
for(var name of cars){
    console.log(name);
}

//2.
var cars = ['Tesla', 'Audi', 'Volvo', 'Benz'];
var index = 0;
for(var name of cars){
    if(index >= 2){
        break;
    }
    console.log(name);
    index++;
}