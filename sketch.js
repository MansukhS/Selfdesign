var Anamatronics;
var Freddy;
var Foxy;
var Ballora;
var GoldenFreddy;
var Nightmare;
var NightmareFredbear;
var ScrapBaby;
var Glitchtrap;
var Puppet; 
var Springtrap;

var Mansukh;

var FreddyImg, FoxyImg, BalloraImg, GoldenFreddyImg;
var NightmareImg, NightmareFredbearImg,ScrapBabyImg,GlitchtrapImg; 
var PuppetImg, SpringtrapImg;

var BalloraS;

function preload(){
  FreddyImg = loadAnimation("images/freddy.png","images/Freddy2.png", "images/Freddy4.png");
  FoxyImg = loadAnimation("images/Foxy.png",'images/Foxy2.png', 'images/Foxy3.png');
  BalloraImg = loadAnimation("images/Ballora.png",'images/Ballora2.png','images/ballora3.png','images/Ballora4.png');
  GoldenFreddyImg = loadAnimation("images/GF.png",'images/GoldenFreddy2.png','images/Goldenfreddy3.png');
  NightmareImg = loadAnimation("images/Nightmare.png","images/Nightmare2.png",'images/Nightmare3.png');
  NightmareFredbearImg = loadAnimation("images/NightmareFredbear.png",'images/NFB2.png','images/NFB3.png');
  ScrapBabyImg = loadAnimation("images/ScrapBaby.png",'images/Scrapbaby2.png','images/Scrapbaby3.png');
  GlitchtrapImg = loadAnimation('images/Glitchtrap.png','images/Glitchtrap2.png','images/Glitchtrap3.png');
  PuppetImg = loadAnimation('images/Puppet.png','images/Puppet2.png','images/Puppet3.png');
  SpringtrapImg = loadAnimation('images/Springtrap.png','images/Springtrap2.png','images/Springtrap3.png');

  BalloraS = loadSound('sounds/Balloras Song2.0.mp3');
}

function setup() {
  createCanvas(600,300);

  Mansukh = createSprite(300,150);
  
  Freddy = createSprite(2000,300, 50,50);
  Freddy.addAnimation('Running',FreddyImg);
  Freddy.scale = 0.5;

  Foxy = createSprite(100,300,50,50);
  Foxy.addAnimation('Closing in',FoxyImg);
  Foxy.scale = 0.5;

  Ballora = createSprite(1000,900,50,50);
  Ballora.addAnimation('Dancing',BalloraImg);
  Ballora.scale = 0.6;
  

  GoldenFreddy = createSprite(667,900,50,50);
  GoldenFreddy.addAnimation("Waking",GoldenFreddyImg);
  GoldenFreddy.scale = 0.5;

  Nightmare = createSprite(900,600,50,50);
  Nightmare.addAnimation('Turning',NightmareImg);
  Nightmare.scale = 0.5;

  NightmareFredbear = createSprite(600,300,50,50);
  NightmareFredbear.addAnimation('Coming',NightmareFredbearImg);
  NightmareFredbear.scale = 0.5;

  ScrapBaby = createSprite(1500,900,50,50);
  ScrapBaby.addAnimation('Looking',ScrapBabyImg);
  ScrapBaby.scale = 0.5;

  Glitchtrap = createSprite(200,800,50,50);
  Glitchtrap.addAnimation('Glitching',GlitchtrapImg);
  Glitchtrap.scale = 0.5;

  Puppet = createSprite(2800,500,100,100);
  Puppet.addAnimation('Changing',PuppetImg);
  Puppet.scale = 1.0;

  Springtrap = createSprite(2800,1000,50,50);
  Springtrap.addAnimation('Jumpscare',SpringtrapImg);
  Springtrap.scale = 0.5;


}

function draw() {
  background(0);
  
  if(keyDown('B')){
    BalloraS.play();
  }
  
  if(keyDown('Space')){
   Ballora.y = Ballora.y -5;
  }
  if(keyDown('S')){
    Ballora.y = Ballora.y +5;
  }
  if(keyDown('A')){
    Ballora.x = Ballora.x -5;
  }
  if(keyDown('W')){
    Ballora.x = Ballora.x  +5;
  }

  drawSprites();
}