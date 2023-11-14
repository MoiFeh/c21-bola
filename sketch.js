
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let ball, groundObj, leftSide, rightSide;
let world;
let radius = 40;

function preload() {

}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	let ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	ball = bodies.circle(260, 100, radius / 2, ball_options);
	World.add(world, ball);

	groundObj = new ground(width / 2, 670, width, 20);
	leftSide = new ground(1100, 600, 20, 120);
	rightSide = new ground(1300, 600, 20, 120);






	//Create the Bodies Here.


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	ellipse(ball.position.x, ball.postion.y, radius, radius);

	groundObj.display();
	leftSide.display();
	rightSide.display();

	drawSprites();

}



