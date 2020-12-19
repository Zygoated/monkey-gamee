
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var score
var gameState= "PLAY"
var survivalTime
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
  
}



function setup() {
  createCanvas(600,600);
  ground=createSprite(400,390,900,10);
  ground.velocityX=-4;
  
  console.log(ground.x)
 
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);                 
  monkey.scale=0.1
  
  foodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
 background("white");
 stroke("white");
 textSize(20);
 fill("white");
 text("Score :"+ score, 500,50);
  
 stroke("black");
 textSize(20);
 fill("black");
 survivalTime=Math.ceil(frameCount/frameRate());
 text("Survival Time :"+ survivalTime,100,50);
 ground.x=ground.width/2;
 monkey.collide(ground);
 monkey.velocityY=monkey.velocityY + 1;
 
 if (keyDown("space")&& monkey.y >= 305){
   monkey.velocityY=-17;
   
 }

  
  
  
 if (gameState==="PLAY"){
   Sbanana();
   Sobstacles();
 }
 
  
  
  
  
  
  
  
  drawSprites();
}

function Sbanana() {
  if (frameCount%100===0){
    banana=createSprite(600,30,30,30);
    banana.addImage("banana",bananaImage)
    banana.velocityX=-7
    banana.y=Math.round(random(120,180));
    banana.lifetime=900;
    banana.scale=0.1
    foodGroup.add(banana);
}

}

function Sobstacles(){
  if (frameCount%180===0){
    obstacle=createSprite(600,340,60,60);
    obstacle.addImage("rock",obstacleImage); 
    obstacle.lifetime=900;
    obstacle.scale=0.2;
    obstacle.velocityX=-5;
    obstacleGroup.add(obstacle);    
  }
  
  
  
  
  
}


