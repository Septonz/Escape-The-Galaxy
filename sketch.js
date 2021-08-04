 var gameState="start"
var score=0
function preload(){
  bgImg=loadImage("AnyFaithfulHylaeosaurus-size_restricted.gif")
    StartbgImg=loadImage("s.png")
  PlatformImg=loadImage("astoroid-1.png")
  bigAtstoroid=loadImage("big astoroid.png")
  endscreen1=loadImage("end.png");
    controls=loadImage("st-1.png");
    playAgain=loadImage("p.png");
  playAgainButton=loadImage("bu.png");
  laserImg=loadImage("laser.png")
  startMusic=loadSound("My Video (1).mp3")
  cartoonstartplayer=loadAnimation("Charcter 1.png", "Charecter 2.png","Charecter 3.png","Charecter 4.png", "Charecter 5.png")
    Astronuatstartplayer=loadAnimation("Astrounaut 1.png", "Astrounaut 2.png","Astrounaut 3.png","Astrounaut 4.png", "Astrounaut 5.png","Astrounaut 6.png","Astrounaut 7.png")
     Trexstartplayer=loadAnimation("Trex 1.png", "Trex 1.png","Trex 2.png","Trex 3.png", "Trex 4.png","Trex 5.png","Trex 6.png","Trex 7.png","Trex 8.png" )
       UFOStartNpc=loadAnimation("Retro UFO 1.png", "Retro UFO 2.png","Retro UFO 3.png","Retro UFO 4.png", "Retro UFO 5.png","Retro UFO 6.png","Retro UFO 7.png","Retro UFO 8.png","Retro UFO 9.png", "Retro UFO 4.png" )
  
  Astronuatplayplayer=loadAnimation("1-1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png")
  
}
      
function setup(){
  createCanvas(800,800)
  startMusic.loop()
    startbg=createSprite(370,230)
  startbg.addImage(StartbgImg)
  startbg.scale=0.45
  
      control=createSprite(400,630)
  control.addImage(controls)
  control.scale=0.355
  
    playagain=createSprite(400,630)
  playagain.addImage(playAgain)
  playagain.scale=0.7
playagain.visible=false;
  
      playagainBu=createSprite(400,680)
  playagainBu.addImage(playAgainButton)
  playagainBu.scale=0.4
playagainBu.visible=false;
  // Startcarplayer=createSprite(60,250,20,20);
  // Startcarplayer.addAnimation("c1", cartoonstartplayer)
  // Startcarplayer.scale=0.8
  
  
  Startastplayer=createSprite(200,255,20,20);
  Startastplayer.addAnimation("a1", Astronuatstartplayer)
  Startastplayer.scale=0.9
  

//   Starttrxplayer=createSprite(500,250,20,20);
//   Starttrxplayer.addAnimation("t1", Trexstartplayer)
//   Starttrxplayer.scale=1.5
  
  // Carplayer=createSprite(250,320,20,20);
  //  Carplayer.addAnimation("r1", cartoonrunplayer)
  
  Astronuatplayer=createSprite(mouseY,450)
  Astronuatplayer.addAnimation("a2",Astronuatplayplayer )
  
    UFONpc=createSprite(700,50)
    UFONpc.addAnimation("u1",UFOStartNpc )
    UFONpc.scale=0.5
    UFONpc.visible=false;
  
//   laser=createSprite(mouseX,70)
 
  startpad=createSprite(400,880,1150,100)
  startpad.scale=0.7
  // startpad.addImage(bigAtstoroid)
  startpad.visible=false;
  startpad.shapeColor="grey"
  
  endscreen=createSprite(370,230)
    endscreen.addImage(endscreen1)
  endscreen.scale=0.4
  endscreen.visible=false;
  
  leftborder=createSprite(-280,400,10,800);
  // leftborder.visible=false;
  
   rightborder=createSprite(1080,400,10,800);
  // leftborder.visible=false;
  
   topborder=createSprite(400,-200,800,10);
  
   UFOBorder=createSprite(400,50,800,10);
  UFOBorder.visible=false;
  // leftborder.visible=false;
  platformG=new Group();
  laserG=new Group();

}
function draw(){
  background(0)
  if(gameState==="start"){
    control.visible=true;
    playagainBu.visible=false;
    Astronuatplayer.visible=false;
 UFONpc.visible=false;
   
       if(mousePressedOver(Startastplayer)){
     gameState="play"
     Startastplayer.visible=false;
     startbg.visible=false
         
     
   }
//        if(mousePressedOver(Starttrxplayer)){
//      gameState="play"
//      Starttrxplayer.visible=false;
//      startbg.visible=false
     
//    }
    
  }
  
  
  if(gameState==="play"){
    
      startpad.visible=true;
    control.visible=false;
 score=score+Math.round(frameRate()/60);
    playagain.visible=false;
    playagainBu.visible=false;
      endscreen.visible=false;
UFONpc.visible=false;
    if(score>=50){
      UFONpc.visible=true
     
        Astronuatplayer.bounceOff(UFOBorder)
      UFONpc.x=Astronuatplayer.x
       if (World.frameCount % 50 == 0) {
  var laser = createSprite(700,70,10, 10);
         laser.x=UFONpc.x
        laserG.velocityY=-(6 + 3*score/100);
   laser.addImage(laserImg)
  laser.scale=0.1
  laser.velocityY = 7;
  laser.lifetime = 500;
           laserG.add(laser);

          laser.depth=UFONpc.depth
    UFONpc.depth=UFONpc.depth+1
          laser.depth=Astronuatplayer.depth
         if(Astronuatplayer.isTouching(laserG)){
           gameState="end"
         }
       }
    }

     background(bgImg)
     // Startcarplayer.visible=false;
    // bg.visible=false;
    Astronuatplayer.visible=true;
     Astronuatplayer.x=mouseX
    Astronuatplayer.bounceOff(leftborder);
        Astronuatplayer.bounceOff(rightborder)
  Astronuatplayer.bounceOff(topborder)
  
    createPlatform()
    
    // if(Astronuatplayer.isTouching(startpad)){
    //   startpad.visible=true;
    // } 
    // else {
    //   startpad.visible=false;
    // }
      if (World.frameCount % 30 == 0) {
  var platform = createSprite(random(80, 750),10, 10, 10);
        platformG.velocityY=-(6 + 3*score/100);
  platform.addImage(PlatformImg);
  platform.scale=0.15;
  platform.velocityY = 7;
  platform.lifetime = 500;
    
    if(Astronuatplayer.isTouching(platformG)){
       // Astronuatplayer.x=200
      Astronuatplayer.velocityY= Astronuatplayer.velocityY+10
      
      // Astronuatplayer.velocityY+=1
      console.log( Astronuatplayer.velocityY)
      
    }
        
          if(Astronuatplayer.isTouching(topborder)){
       // Astronuatplayer.x=200
      Astronuatplayer.velocityY= Astronuatplayer.velocityY+10
      
      // Astronuatplayer.velocityY+=1
      console.log( Astronuatplayer.velocityY)
    }
  platformG.add(platform);

    platform.depth=Astronuatplayer.depth
    Astronuatplayer.depth=Astronuatplayer.depth+1
    Astronuatplayer.collide(platform)
  
        
    
    }
    
    if(keyDown("space")){
    Astronuatplayer.velocityY=-3
      
      
    }
    
    
    
    
    
    
          console.log(gameState)
  }
  
  
  
  if(Astronuatplayer.y>920){
    gameState="end"
  }
  
  if(gameState==="end"){
    // background(endscreen1)
    endscreen.visible=true
    playagain.visible=true;
    playagainBu.visible=true;
    Astronuatplayer.visible=false;
    platformG.destroyEach()
    UFONpc.visible=false;
    laserG.destroyEach()
    
      if(mousePressedOver(playagainBu)){
      reset()
      
    }
  }
  drawSprites()
  
    textSize(20)
 fill("white")
  text("SCORE: "+score,275,30);
  
  
}

function createPlatform() {
//   if (World.frameCount % 50 == 0) {
//   var platform = createSprite(random(80, 750),10, 10, 10);
//   platform.addImage(PlatformImg);
//   platform.scale=0.4;
//   platform.velocityY = 7;
//   platform.lifetime = 500;
    
    

// //   platformG.add(platform);

//     platform.depth=Astronuatplayer.depth
//     Astronuatplayer.depth=Astronuatplayer.depth+1
//     Astronuatplayer.collide(platform)
//   }
}
  
  function reset(){
  gameState="play";
  score=0;
      Astronuatplayer.y=450
}