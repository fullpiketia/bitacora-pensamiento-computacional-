https://editor.p5js.org/coni05/sketches/DRuz2FQHC

function setup() {
  createCanvas(400 , 300);
}

function draw() {
  background(211 , 12 , 123);
  //se elige color de fondo

  fill(205 , 247 , 246); //color del texto 
   textFont('Times New Roman'); //se añade tipografía
  textAlign(CENTER, CENTER); //ubicación del texto en el lienzo
  textSize(25); //tamaño texto
  text("Todavía quiero volver contigo", width/2, height/2);
  
  noStroke(); //elipse sin bordes 
  fill(211 , 12 , 123); //mismo color del fondo
  ellipse(mouseX, mouseY, 74, 50); //tamaño elipse
  
}
//la idea es tapar una palabra con el elipse
//pero aun asi, al leerse la frase sigue teniendo sentido
