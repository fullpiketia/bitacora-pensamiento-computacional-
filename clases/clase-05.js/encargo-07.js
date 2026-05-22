https://editor.p5js.org/coni05/sketches/LleMp2Rkj

let pablo;
//cargo la imagen del cantante chileno Pablo Chill-E

let escenario2;
//cargo imagen de fondo

let cancion;
//carga canción "GITANA, Pablo Chill-E ft. Bryartz"

let velocidad = 2;
let velocidadY = 2;
//velocidades de ejes 

let dirX = 1;
let dirY = 1;
//estas variables controlan la dirección

let posX = 0;
let posY = 0;
//establece posición inicial del cantante

function preload(){
  soundFormats("mp3");
  cancion = loadSound("cancion.mp3");
}

function setup() {
  
  createCanvas(400 , 300);

  pablo = loadImage("./pablo.png");
  //se carga la imagen del cantante
  
  escenario2 = loadImage("./escenario2.jpg");
//se carga la imagen de fondo
  
  cancion.play();
  //permite que la canción comience al darle play al lienzo
}

function draw() {

  image(escenario2, 0, 0, width, height);
 //se carga el fondo
 
  image(pablo, posX, posY, 50, 100);
  //se carga imagen del cantante y su posición inicial

  posX = posX + velocidad * dirX;
 //movimiento horizontal

  posY = posY + velocidadY * dirY;
//movimiento vertical 
  
  if (posX > width * 6/6 - 100)
  //el -100 evita que la imagen salga del lienzo
  {

    dirX = -1;
    //cambia la dirección hacia la izquierda

    velocidad = random(3 , 5);
    //regulador de velocidad
  }

  
  if (posX < width * 1/6)
  //linea imaginaria que divide el lienzo em seis partes 
  {

    dirX = 1;
    //cambia la dirección hacia la derecha

    velocidad = random(2,5);
    //regula velocidad horizontal
  }

  
  if (posY > height - 100)
  //se puede controlar hasta donde llega la imagen
    //se peude evitar que llegue hasta abajo o que se salga del lienzo
  {

    dirY = -1;
//cambia direccion vertical hacia arriba
    velocidadY = random(2,5);
    //regula velocidad vertical
  }

  if (posY < 0) {
  //controla rebote en eje vertical
    dirY = 1;
    //cambia dirección vertical hacia abajo

    velocidadY = random(1 , 2);
    //regula la velocidad vertical


    }


  
  
  //se utilizó chatgpt para entender mejor como funcionan los
  //elementos vistos en clases
  //en otro lienzo aprendí a poner sonido en el proyecto, en     //este caso el estracto de una canción, y como hacer que       //comience a sonar al darle play al lienzo, también con ayuda de chatgpt

  
}
