
let img;


let h = 1
let fart = 0.01
function draw() {
  
  let ww =windowWidth
  let wh = windowHeight
  createCanvas(ww, wh);
  translate(ww/2,wh/2)
  rotate(h * fart)
  imageMode(CENTER)
  image(img,0,0);
  
  
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

  }
    
// }
//   else if (keyCode === RIGHT_ARROW){
//     h --;
//   }
//   else if (keyCode === DOWN_ARROW){
//     h = 1;
//   }
// }


  function preload() {
   img = loadImage('Chickon.png');
  
}

