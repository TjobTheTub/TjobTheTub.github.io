


function setup() {
  createCanvas(1, 1);
}
let n=1
function draw() {
  background(220);
  

  let lightspeed = 3.0e8
  let planker = 6.63e-34
  let r= 1.09e7
  let en =   -planker * lightspeed * r * 1 / (n*n) 
  let env = en /1.602e-19

    
  
  createP ("Energiniveu " +n + " er lig med ---> "  + env + " chicknugs");
  n++;
  
  if(n >= 11){
    createP("Ding Dongi Donsie");
  noLoop();
  }
  
  
}
