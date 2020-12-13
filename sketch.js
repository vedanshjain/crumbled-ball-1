
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;







function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;





box1 = new Box(600,670,150,20)
box2 = new Box(530,630,20,100)
box3 = new Box(675,630,20,100)

Paper1 = new Paper(40,670,40)

ground = new Box(400,680,800,5)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();

Paper1.display();

  ground.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(Paper1.body,Paper1.body.position,{x:250,y:-250});

  
	}


}



