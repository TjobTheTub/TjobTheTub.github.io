
let img;


let h = 1
let fart = 0.01
function draw() {
  
  let ww =windowWidth
  let wh = windowHeight
  createCanvas(ww, wh);
  translate(mouseX,mouseY)
  rotate(h * fart)
  imageMode(CORNERS)
  image(img,-720/2,-480/2,720/2,480/2);
  
  
  if (keyIsDown(LEFT_ARROW)){
    h ++;

  }
  if (keyIsDown(RIGHT_ARROW)){
    h --;
  }
}
    

  function keyPressed() {
 if (keyCode === UP_ARROW){
  
  fart = fart*2;

 }
  else if (keyCode === DOWN_ARROW){
    fart = 0.01;
  }
}

  
    

  



  function preload() {
   img = loadImage('Chickon.png');
  
}

