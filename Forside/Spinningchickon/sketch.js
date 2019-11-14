
let img;
let vinkel = 20
function draw() {
  let ww = windowWidth
let wh = windowHeight
let imgw = 720
let imgh = 480

  createCanvas(ww, wh);
  translate(ww/2,wh/2)
  rotate(0.01 * vinkel)
  imageMode(CENTER)
  image(img,0,0);
  vinkel --
  }
   
  
  
  
  function preload() {
   img = loadImage('Chickon.png');
  
}


























