var rectangle1 ,rectangle2;
function setup() {
  createCanvas(800,400);
  rectangle1=createSprite(400, 200, 50, 100);
rectangle2=createSprite(600,300,100,50);
rectangle1.shapeColour="red";
rectangle2.shapeColour="yellow";

}

function draw() {
  background(255,255,255);  
  rectangle2.x=world.mouseX;
  rectangle2.y=world.mouseY;
  drawSprites();
  console.log(rectangle1.x-rectangle2.x)
  if(rectangle1.x-rectangle2.x===rectangle1.width/2+rectangle2.width/2){
    rectangle1.shapeColour="orange"
    rectangle2.shapeColour="orange"

  }
}