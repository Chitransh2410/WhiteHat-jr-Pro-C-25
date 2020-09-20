var paper;
var ground;
var dustbin;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	
	paper = new Paper(200,690,20,20);
	ground = new Ground(200,690,3200,20);
	
	dustbin = new Dustbin(1200,675);

	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  rectMode(CENTER);

 


 paper.display();

 ground.display();
 dustbin.display();

  keyPressed();
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW) {	
	Matter.Body.applyForce(paper.body,paper.body.position,{x:0.85,y:-0.85});	
	}
}




