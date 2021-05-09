var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var bg
var snow=[]

function preload(){
  bg = loadImage("snow1.jpg")
  snow = loadImage("snow5.jpg")
}


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;
 
  if(frameCount%90===0){
    snow.push(new Snow(random(width/2-10,width/2+10),10,10))
   }
}

function draw() {
  background(bg);

  Engine.update(engine);
  
  
 snow.display()

  drawSprites();
}