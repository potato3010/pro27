
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObject1 = new bob (200,100,30,30); //Bob "b" is small in class name
    bobObject2 = new bob (250,100,30,30);
    bobObject3 = new bob (300,100,30,30);
   	bobObject4 = new bob(350,100,30,30);
  	bobObject5 = new bob (400,100,30,30);

   // roof = new Roof (200,50,50.50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  strokeWeight(4);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
   
 // roof.display();

  drawSprites();
 
}



