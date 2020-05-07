var car, wall;
var speed, weight;
var deform;

function setup() {
  createCanvas(800,400);
  car = createSprite(50,200,50,15);
  wall = createSprite(750,200,50,150); 

  car.shapeColor="blue";
  wall.shapeColor="black";

 
}

function draw() {
  background("yellow");  

  speed= random(55,90);
  weight= random(400,1500);

  car.velocityX =speed;

  text("DEFORMATION DONE IS ",350,50);
  text(deform,500,50);

 deformation();

 drawSprites();
}



function deformation(){
    deform=weight*speed/11250;
  if(isTouching(car,wall)){
    if(deform>180){
      car.shapeColor="red";
      car.velocityX=0;
  }
  else if(deform<180 && deform>80){
       car.shapeColor="yellow";
       car.velocityX=0;
  }
  else if(deform<100 && deform>0){
       car.shapeColor="green";
       car.velocityX=0;
  }

  }
  else{
    car.shapeColor="blue";
  }
  }
    
  
