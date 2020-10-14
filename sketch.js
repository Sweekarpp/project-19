var covid,covidImage,mask,maskImage,warrior,warriorImage;
var gamestate = PLAY;
var PLAY = 1;
var END = 0;

function preload() {
  covidImage = loadImage("covid.png");
  maskImage = loadImage("mask.png");
  warriorImage = loadImage("covid warrior.png")
}

function setup() {
  createCanvas(400,400);
  
  if(gamestate === PLAY){
  covid = createSprite(200,0,200,200);
  covid.addImage("covid",covidImage);
  covid.velocityY = 3;
  covid.scale = 0.3;

  warrior = createSprite(200,350,200,200);
  warrior.addImage("warrior",warriorImage);
  warrior.scale = 0.3;

  mask = createSprite(300,0,200,200);
  mask.addImage("mask",maskImage);
  mask.scale = 0.3;
  }
}

function draw() {
  background(48,48,48);
  
  if(gamestate === PLAY){
  warrior.x = mouseX;
  warrior.y = mouseY;
  if(warrior.isTouching(covid)){
  covid.y = 0;
  text("gameover",200,200);
  covid.velocityY = 0;
  gamestate = END;
  }
}
  drawSprites();
}