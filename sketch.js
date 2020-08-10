var car,wall,barrier,walli
var speed,weight

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 50, 40, 20);
  car.shapeColor = "white";

  barrier = createSprite(400,100,800,5);
  barrier.shapeColor = "white";
  
  wall = createSprite(750,50,30,45);
  wall.shapeColor = (80,80,80);
  walli = createSprite(740,50,30,45);
  walli.visible = false;

  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;

  if ((0.5 * speed * speed * weight)/22500 > 180) {
    car.shapeColor = "red";
  }

  if ((0.5 * speed * speed * weight)/22500 < 100) {
    car.shapeColor = "green";
  }

  if ((0.5 * speed * speed * weight)/22500 < 180 && (0.5 * speed * speed * weight)/22500 > 100) {
    car.shapeColor = "yellow";
  }
}

function draw() {
  background("grey");  
  drawSprites();

  if (walli.x - car.x < walli.width/2 + car.width/2) {
    car.velocityX = 0;
  }
}