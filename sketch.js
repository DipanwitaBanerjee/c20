var rect1,rect2;

function setup() {
  createCanvas(800,400);
  rect1= createSprite(600, 200, 50, 50);
  rect1.shapeColor="green";
  rect2=createSprite(400,200,50,70);
  rect2.shapeColor="yellow";
  
}

function draw() {
  background(255,255,255);
  
  rect2.x=World.mouseX;
  rect2.y=World.mouseY; 
  if(rect2.x - rect1.x === rect1.width/2 + rect2.width/2) 
    
      {
    rect2.shapeColor="red";
  }
  else{
    rect2.shapeColor="yellow";
  }
 
  drawSprites();
}