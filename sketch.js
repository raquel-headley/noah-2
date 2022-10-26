let img;

function preload(){
  img=loadImage('slay.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  img.resize(img.width/4,img.height/3);

}

function draw() {

happyBirthday = createButton("PRESS HERE");
happyBirthday.position(width/2, height/2);
happyBirthday.mousePressed(bdayMessage);
//button onclick 

image(img, mouseX, mouseY);
}
function bdayMessage(){
  window.alert("HAPPY BIRTHDAY NOAH! \nLove u lots <3 \nWishing you the best for this next year of your life! :)");
}

function mousePressed(){
  background(0);
}