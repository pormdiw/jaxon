var jaxon, jaxon_running;
var path;
var bomb;
var coin;

function preload(){
  
  //pre-load images
  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png")
  
  bombImage = loadImage("bomb.png")
  coinImage = loadImage("coin.png")
  pathImage = loadImage("path.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImage);
path.velocityY = 4;

//creating jaxon running
jaxon = createSprite(200,340,20,20);
jaxon.addAnimation("jaxon",jaxon_running);
jaxon.scale=0.09;

}

function draw() {
  background(0);
  
  if(path.y > 400 ){
    path.y = height/2;
  }
   drawSprites();
}
