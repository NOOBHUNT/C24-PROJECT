
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20)
	hammer = new hammer(810,260,300, PI/2);
	stone  = new stone(700,320,70,70);


	//Create the Bodies Here.

	Engine.run(engine);
  
}


function draw() {

Engine.update(engine)
 
	
	rectMode(CENTER);

  background(0);
  

  ground.display();
  hammer.display();
  stone.display();


  drawSprites();
 
}



