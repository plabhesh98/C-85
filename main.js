canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

nasa_images_array = ["Mars1.jpg" , "Mars2.jpg" , "Mars3.jpg" , "Mars4.jpg"];
var rover_width = 100;
var rover_height = 100;
var rover_x = 10;
var rover_y = 10;

random_number = Math.floor(Math.random()* 4);
background_image = nasa_images_array[random_number];
console.log("backgorund image = , " + background_image);
rover_image = "rover.png";

function add() {

    background_imgTag = new Image; 
    background_imgTag.onload = uploadBackground; 
    background_imgTag.src = background_image;

    rover_imgTag = new Image; 
    rover_imgTag.onload = upload_rover; 
    rover_imgTag.src = rover_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0,0, canvas.width, canvas.height );
}
function upload_rover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e) {
     keypressed = e.keyCode; 
      if (keypressed == '38') {
          up();
          console.log("38");
      }
      if (keypressed == '40') {
          down();
          console.log("40");
      }
      if (keypressed == '37') {
          left();
          console.log("37");
      }
      if (keypressed == '39') {
         right();
         console.log("39")
      }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed. X = ,"  + rover_x + ", Y = " + rover_y);
        uploadBackground();
        upload_rover();
    }
}
function down() {
    if (rover_y <= 500) {
       rover_y = rover_y + 10;
       console.log("When down arrow is pressed. X = ," + rover_x + ", Y = " + rover_y);
       uploadBackground();
       upload_rover();
    }
}
function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow pressed. X = ," + rover_x + "Y = " + rover_y);
        uploadBackground();
        upload_rover();
    }
}
function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow pressed. X = ," + rover_x + "Y = " + rover_y);
        uploadBackground();
        upload_rover();
    }
}