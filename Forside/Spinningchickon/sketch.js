
let img;
let imgleft;
let imgdown;
let imgright;
let imgup;
let h = 1
let fart = 0.01

function preload() {
  img = loadImage('Chickon.png');

  imgleft = loadImage('left_arrow.png')

  imgdown = loadImage('down_arrow.png')

  imgright = loadImage('right_arrow.png')

  imgup = loadImage('up_arrow.png')
}

function draw() {

  let ww = windowWidth
  let wh = windowHeight

let imgs = 50




  createCanvas(ww, wh);
  imageMode(CORNER)
  image(imgleft,ww/100+10,wh-wh/100-imgs-20,imgs,imgs);
  textSize(20);
text('Spin left', ww/100, wh-wh/100);

imageMode(CORNER)
  image(imgdown,ww/100+110,wh-wh/100-imgs-20,imgs,imgs);
  textSize(20);
text('Slow down', ww/100+90, wh-wh/100);


imageMode(CORNER)
  image(imgright,ww/100+220,wh-wh/100-imgs-20,imgs,imgs);
  textSize(20);
text('Spin right', ww/100+200, wh-wh/100);
  
imageMode(CORNER)
  image(imgup,ww/100+110,wh-wh/100-imgs-110,imgs,imgs);
  textSize(20);
text('Speed up', ww/100+90, wh-wh/100-80);
  translate(mouseX, mouseY)
  rotate(h * fart)

  imageMode(CORNERS)
  image(img, -720 / 2, -480 / 2, 720 / 2, 480 / 2)

  if (keyIsDown(RIGHT_ARROW)) {
    h++;

  }
  if (keyIsDown(LEFT_ARROW)) {
    h--;
  }
}


function keyPressed() {
  if (keyCode === UP_ARROW) {

    fart = fart + 0.05;

  }
  else if (keyCode === DOWN_ARROW) {
    fart = fart - 0.05;
  }
}











