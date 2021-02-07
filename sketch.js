const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,dustbin;
var ground;
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(50,610,25); 
  dustbin = new Dustbin;
	ground = new Ground(width/2,650,800,20);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  
  paper.display();
  dustbin.display();
  ground.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    
    Matter.Body.applyForce(paper.body, paper.body.position, {x:95,y:-110});
  }
}

