  
const Engine = Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var ourEngine,ourWorld;

var ground,ball;


function setup() {
  createCanvas(800,400);

  ourEngine = Engine.create();

  ourWorld = ourEngine.world;

  var options ={
    isStatic : true
    
  }

  ground = Bodies.rectangle(400,390,800,20,options);
   
  World.add(ourWorld, ground);
  // console.log(ground);
  // console.log(ground.position.x);
  // console.log(ground.position.y);

  var ball_options = {
    restitution : 3.0,
    density : 1
  }

  ball = Bodies.circle(400,100,20,ball_options);

  World.add(ourWorld, ball);
  console.log(ball);
  
}

function draw() {
  background(220);  

  Engine.update(ourEngine);
  
  rectMode(CENTER);
  fill("brown");
  stroke("green");
  rect(ground.position.x,ground.position.y,800,20);

  fill("white");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  
}