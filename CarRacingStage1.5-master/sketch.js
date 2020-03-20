var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var car1Image , car2Image, car3Image,car4Image, trackImage;

function preload(){
trackImage = loadImage("../sprites/track.jpg");
car1Image = loadImage("../sprites/car1.png");
car2Image = loadImage("../sprites/car2.png");
car3Image = loadImage("../sprites/car3.jpg");
car4Image = loadImage("../sprites/car4.jpg");

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
