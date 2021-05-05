var rectangle1;
var rectangle2;
var rectangle3;
var rectangle4;
var edges;

function setup() {
  createCanvas(800,400);
  rectangle1=createSprite(300,300,50,10);
  rectangle2=createSprite(200,100,50,10);
  rectangle3=createSprite(400,200,50,10);
  rectangle4=createSprite(300,200,50,10);
  rectangle1.shapeColor="red";
  rectangle2.shapeColor="red";
  rectangle4.shapeColor="red";
  rectangle3.shapeColor="red";
  rectangle4.velocityY=-6;
  rectangle1.velocityY=6;
  edges=createEdgeSprites();
}

function draw() {
  background("black");
  rectangle2.x=mouseX;
  rectangle2.y=mouseY;
  console.log(rectangle2.y-rectangle1.y);
  rectangle3.bounceOff(edges);
  rectangle1.bounceOff(edges);
  rectangle4.bounceOff(edges);
  if (isTouching(rectangle3,rectangle2)){
    rectangle2.shapeColor="pink";
    rectangle3.shapeColor="yellow"; 
    rectangle3.velocityX=7;
    
  }else{
    rectangle3.shapeColor="red";
    rectangle2.shapeColor="red";
    rectangle3.velocityX=-7;
    
  }
  bounceOff(rectangle1,rectangle4);
  drawSprites();
}
function isTouching(object1,object2){
  if(object2.x-object1.x<object1.width/2+object2.width/2 &&
    object1.x-object2.x<object2.width/2+object1.width/2 &&
    object1.y-object2.y<object2.height/2+object1.height/2 &&
    object2.y-object1.y<object2.height/2+object1.height/2){
    return true;
  }else{
    return false;
  }
}
//bounceOff Function
function bounceOff(object1,object2){
  if(object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object1.width/2+object2.width/2){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
      
    }
  if (object1.y-object2.y<object2.height/2+object1.height/2 &&
    object2.y-object1.y<object2.height/2+object1.height/2){
      object2.velocityY=object2.velocityY*(-1);
      object1.velocityY=object1.velocityY*(-1);
      object1.shapeColor="pink";
      object2.shapeColor="pink";
  }
}