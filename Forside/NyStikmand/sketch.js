function setup() {
  createCanvas(400, 400);
}

function draw() {
  strokeWeight(3); // Default
  background(100);
  
   let x = 210+0.05*mouseX;
  let y = 95+0.05*mouseY;
  
  //Hojrearm//
line(250,200,200,200);
  line(250,200,300,250-0.30*mouseX);
  
  //venstrearm
  line(150,200,200,200);
  line(150,200,100,250-0.30*mouseX);
  
  //hals 
  line(200,200,200,170)
  //mave
  line(200,300,200,200);
  
  //hojrebien
line(200,300,120,380);
  
 //venstrabien
  line(200,300,280,380)
  
  //hoved
  fill(255)
  circle (200,124,100);
  
  strokeWeight(4); 
  //venstre oje
  strokeWeight(2)
  fill(200)
  circle (180,100, 20);
   
  //venstreojebolle
  strokeWeight(2);
  fill(25,25,200);
   circle (170+0.05 * mouseX,95+0.05*mouseY, 5);
   
  
  
  //Hojre oje
strokeWeight(2)
  fill(200);
   circle (220,100, 20);

  
  //hojreojebolle
   fill(25,25,200)
  strokeWeight(1)
  circle (x,y, 5);

 
  //hojremund
   strokeWeight(5); 
  line(230,160 -0.06*mouseX,220,150);
  //venstremund
   strokeWeight(5); // Beastly
  line(180,150,170, 160 + -0.06 *mouseX);
  
  strokeWeight(5); // Beastly
  line(220,150,180,150);
  
  
  //nosenose
  strokeWeight(5)
  line(200,122,196+0.030*mouseX,132+0,05*mouseX) 
  line(196+0.030*mouseX,132,200,132)
  
  
 

  
  
  
  
  
}