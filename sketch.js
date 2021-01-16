const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	paper = new BALL(100, 600, 10);
  ground = new GROUND(400, 680, 800, 20);
  dust1 = new DUSTBIN(550, 620, 20, 100);
  dust2 = new DUSTBIN(610, 660, 100, 20);
  dust3 = new DUSTBIN(670, 620, 20, 100);
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  dust1.display();
  dust2.display();
  dust3.display();
  drawSprites();
}
function keyPressed(){
  if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:10, y: -25})
  }
}
