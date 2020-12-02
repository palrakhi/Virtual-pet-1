
var dog;
var happydog;
var database;
var foodS;
var foodStock;
var dogimg;
var doghimg;

function preload()
{
  //instead of dogImg.png you wrote dogimg.png
  dogimg=loadImage("dogImg.png");
  doghimg=loadImage("dogImg1.png");
}

function setup() {
  database= firebase.database();
  console.log(database);

  createCanvas(500, 500);
  Dog= createSprite(250,250,10,10);
  //instead of Dog you wrote dog
  Dog.addImage(dogimg);

  foodStock=database.ref("food");
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
  // you gave the drawsprites and text proeprty inside if statement.
  if(keyWentDown(UP_ARROW))
  {
   writeStock(foodS);
   Dog.addImage(doghimg);
   
  
  }
  drawSprites();
  text("Note:Press UP_ARROW Key To Feed Drake Milk",100,100)

}
function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  if(x<=0){
x=0;
  }else{
    x=x-1
  }
  
  database.ref("/").update({
    food:x
  })
}



