var playre_img,player,player1,player2,player3,player4,base,obstical,Intro,database,Distancea,distanceValue=0;
var g=0;
function setup() {
  Intro=new intro()
  database=firebase.database();
  Distancea =new  distance ()
 
  
 
  

 
  
  
 // playre_img.resize(200,200)
 
}
function preload()

{
  player1=loadImage("runing1.jpg")
  player2=loadImage("runing2.jpg")
  player3=loadImage("runing3.jpg")
  player4=loadImage("runing4.jpg")
  playre_img=loadAnimation(player1,player2,player3,player4)
  
  player=createSprite(200,200)
  player.addAnimation("player",playre_img)
  


}

function draw() {
  Intro.display()
  
  if(g===1)
  {
   
  background(255);
 

  createCanvas(displayWidth, displayHeight);
 
  base=createSprite(300,600,5000,10)
  base.shapeColor="blue"
  base.velocityX=-5
  
  
  
  player.collide(base)
  player.debug=true
  player1.resize(90,90)
  player2.resize(90,90)
  player3.resize(90,90)
  player4.resize(90,90)
  
  if(player.x>500)
  {
    base.x=100
  }
  if (frameCount%100===0)
  {
    obstical=createSprite(550,550,40,40)
    obstical.velocityX=-5
    obstical.debug=true
    
    

  }
  if (frameCount%2===0)
  {
    distanceValue=distanceValue+1

    Distance.getDistance()
    Distance. writeDistance(distanceValue)

  }
 

  camera.position.x=player.x
  if(keyDown("space")&&(player.y>500))
  {
    player.velocityY=-10
  }
  player.velocityY=player.velocityY+0.5
  
}
drawSprites()
}