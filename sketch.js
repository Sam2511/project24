
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var cage1,cage2,cage3,cage4,cage5,cage6;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	

paper = new Paper(100,490,20);
ground = new Ground(800,500,1600,40);
cage1 = new cage(1400,425,10,100);
cage2 = new cage(1500,425,10,100);
cage3 = new cage(1450,470,100,10);
cage4 = new cage(1295,230,10,50);
cage5 = new cage(1395,230,10,50);
}


function draw() {
  rectMode(CENTER);

  background(0);
  


  paper.display();
  ground.display();
  cage1.display();
  cage2.display();
  cage3.display();
  cage4.display();
  cage5.display();

  drawSprites();
 
}

function keyPressed(){
	
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:88 ,y:-88});
		
	}
}













