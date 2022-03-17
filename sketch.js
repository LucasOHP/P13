var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  createApples();

  rabbit.x = mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
  
}

/*function createApples() {
  apple = createSprite(random(50,350),420,20,20)

}*/

function createApples(){
  if(frameCount%120 === 0){
    apple = createSprite(random(50,350),-20,30,30);
    var apple
    apple.addImage(appleImg);
    apple.scale = 0.1
    apple.setVelocity(0,4)
    apple.lifetime = 150;
  }
} 

function createLeaves(){
  if(frameCount%90 === 0){
    var leave
    leave = createSprite(random(50,350),-20,30,30);
    leave.addImage(orangeImg);
    apple.scale = 0.1
    apple.setVelocity(0,4)
    apple.lifetime = 150;
  }
} 