var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood,dogButton;
var foodObj;
var feed,lastFed;

//create feed and lastFed variable here


function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here

  dogButton=createrButton("Add Button");
  dogButton.position(875,130);
  dogButton.mousePressed(dogButtons);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  //write code to read fedtime value from the database 
  var foodStock=foodObj.getfoodStock();
if(foodStock<=0){
  foodObj.updateFoodStock(foodStock*0);
}else {
  foodObj.updateFoodStock(foodStock-1);
}
 
  //write code to display text lastFed time here
if(lastFed>12){

}else if(lastFed==0){
  text("Last Feed:12AM",500,150);
}else{

};
 
  drawSprites();
}

//function to read food Stock
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}


function feedDog(){
  dog.addImage(happyDog);

  //write code here to update food stock and last fed time
this.button.mousePressed({

database.ref('/').update({
Food:foodS
})

  
}

//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
