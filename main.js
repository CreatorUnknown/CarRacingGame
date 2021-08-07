var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");

//Car 1 variables
var car1_width = 120;
var car1_height = 70;
var car1_image = "car1.png";
var car1_x = 10;
var car1_y = 10;

//Car 2 variables
var car2_width = 120;
var car2_height = 70;
var car2_image = "car2.png";
var car2_x = 10;
var car2_y = 10;

var background_image = "racing.png";

function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackround;
    background_imgTag.src = background_image;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_image;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_image;
}

function uploadBackround(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car2_height);
}

function uploadCar2(){
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '38'){
        car1_up();
        console.log("Up Arrow key");
    }

    if(keyPressed == '40'){
        car1_down();
        console.log("Down Arrow key");
    }

    if(keyPressed == '37'){
        car1_left();
        console.log("Left Arrow key");
    }

    if(keyPressed == '39'){
        car1_right();
        console.log("Right Arrow key");
    }

    if(keyPressed == '87'){
        car2_up();
        console.log("Key 'w'");
    }

    if(keyPressed == '65'){
        car2_left();
        console.log("Key 'a'");
    }

    if(keyPressed == '83'){
        car2_down();
        console.log("Key 's'");
    }

    if(keyPressed == '68'){
        car2_right();
        console.log("Key 'd'");
    }
}

function car1_up(){
    if(car1_y >= 0){
        car1_y = car1_y - 10;
        console.log("When up arrow is pressed y = "+ car1_y + " | x = " + car1_x);
        uploadBackround();
        uploadCar1();
        uploadCar2();
    }
}   

function car1_down(){
    if(car1_y <= 500){
        car1_y = car1_y + 10;
        console.log("When down arrow is pressed y = "+ car1_y + " | x = " + car1_x);
        uploadBackround();
        uploadCar1();
        uploadCar2();
    }
}

function car1_left(){
    if(car1_x >= 0){
        car1_x = car1_x - 10;
        console.log("When up arrow is pressed y = "+ car1_y + " | x = " + car1_x);
        uploadBackround();
        uploadCar1();
        uploadCar2();
    }
}

function car1_right(){
    if(car1_x <= 500){
        car1_x = car1_x + 10;
        console.log("When up arrow is pressed y = "+ car1_y + " | x = " + car1_x);
        uploadBackround();
        uploadCar1();
        uploadCar2();
    }
}

//car 2 movements
function car2_up(){
    if(car2_y >= 0){
        car2_y = car2_y - 10;
        console.log("When 'w' is pressed y = "+ car2_y + " | x = " + car2_x);
        uploadBackround();
        uploadCar1();
        uploadCar2();
    }
}

function car2_down(){
    if(car2_y <= 500){
        car2_y = car2_y + 10;
        console.log("When 's' is pressed y = "+ car2_y + " | x = " + car2_x);
        uploadBackround();
        uploadCar1();
        uploadCar2();
    }
}

function car2_left(){
    if(car2_x >= 0){
        car2_x = car2_x - 10;
        console.log("When up arrow is pressed y = "+ car2_y + " | x = " + car2_x);
        uploadBackround();
        uploadCar1();
        uploadCar2();
    }
}

function car2_right(){
    if(car2_x <= 500){
        car2_x = car2_x + 10;
        console.log("When up arrow is pressed y = "+ car2_y + " | x = " + car2_x);
        uploadBackround();
        uploadCar1();
        uploadCar2();
    }
}
while (true) {
if (car1_x > 700) {
    document.getElementById('game_status').innerHTML = "Car 1 won!!!";
}
if (car2_x > 700) {
    document.getElementById('game_status').innerHTML = "Car 2 won!!!";
}
}