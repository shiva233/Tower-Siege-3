const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pigIMG

var Score = 0

var color = 255;
function setup() {
  engine = Engine.create();
  world = engine.world;
 
  createCanvas(800,400);
  
  ground1 = new Ground(width/2,375,width,20)

  ground2 = new Ground(500,250,200,20);

  block1 = new Box(450,205,30,40);
  block2 = new Box(480,205,30,40);
  block3 = new Box(510,205,30,40);
  block4 = new Box(540,205,30,40);

  block5 = new Box(480,185,30,40);
  block6 = new Box(510,185,30,40);

  block7 = new Box(495,135,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  pigIMG = loadImage("sprites/enemy.png"); 

  slingshot1 = new SlingShot(polygon,{x:100,y:220})
  

}

function draw() {
 
 
  background(255);
  
  Engine.update(engine);

  ground1.display();
  ground2.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();

  slingshot1.display();


  imageMode(CENTER)
  image(pigIMG,polygon.position.x,polygon.position.y,40,40);

  

  drawSprites();

  text("Score:" + Score,750,40)

  fill(0);
  text(mouseX +"," + mouseY,mouseX,mouseY);
}

function mouseDragged(){

  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});

}

function mouseReleased(){

  slingshot1.fly();

}

async function getBackground(){

    
  var response = await fetch("http://worldtimeapi.org/api/timezone/america/Toronto");

  var responseJson = await response.json()

  var dateTime = responseJson.datetime;

  var hour = dateTime.slice(11,13);

  if(hour >= 06 && hour <= 19){

     color = 255;
     background(255)

  }

  else{

     color = 0;
     background(0)

  }
}