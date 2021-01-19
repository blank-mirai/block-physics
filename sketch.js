const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, ground;

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(400,400);
  ground = new Ground(200, 390, 400, 20);
  box1 = new Box(200, 200, 50, 50);
  box2 = new Box(240, 100, 50, 50);
 
}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
}