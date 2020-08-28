
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var can,ball1,ground;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	ball1 = new Ball(200,200,20);
	ground = new Ground(400,300,300,10);

	
	can = new Slingshot(ball1,{x:200, y:50});
	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
	background(0);
  
	
	can.display();
	ball1.display();
	ground.display(); 
	drawSprites();
 
}



