var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/background.jpg")
cloudImage = loadImage("assets/cloud.png")
girlImage = loadImage("assets/girl.jpg")


}

function setup(){
  createCanvas(windowWidth,windowHeight)

//background image
bg = createSprite(displayWidth/2-40,displayHeight/2-40,50,50);
bg.addImage(bgImg);
bg.scale = 1.7;

girl = createSprite(150,550,10,10)
girl.addImage(girlImage);
girl.scale = 0.3

cloudsGroup = new Group();




}

function draw() {
  
  background("black");
        
        
   
        drawSprites();
     spawnClouds();
        
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
    var cloud = createSprite(width,height-250,40,10);
    cloud.y = Math.round(random(height-600,height-250));
    cloud.addImage(cloudImage);
    cloud.scale = 0.1;
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    cloud.lifetime = 500;
    
   
    
    //add each cloud to the group
    cloudsGroup.add(cloud);
  }
  
}