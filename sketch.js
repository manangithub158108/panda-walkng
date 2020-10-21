function preload(){
  pandaAnime = loadAnimation("panda1.png", "panda2.png", "panda3.png");
  backgroundImg = loadImage("forest.png");
}

function setup() {
  createCanvas(1000,500);
  panda = createSprite(100, 380, 50, 50);
  panda.addAnimation("animation",pandaAnime);
  panda.scale = 3;
  panda.velocityX = 9;
}

function draw() {
  background(backgroundImg);  

  if(panda.x > 1000){
    panda.x = 0;
  }

  drawSprites();
}