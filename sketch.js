var cat, tom1, tom2, tom3;
var jerry, j1,j2,j3;
var bg;


function preload() 
{
  bg =   loadImage("images/garden.png");
  tom1 = loadAnimation("images/cat1.png");
  tom2 = loadAnimation("images/cat2.png","images/cat3.png");
  tom3 = loadAnimation("images/cat4.png");
  j1 = loadAnimation("images/mouse1.png");
  j2 = loadAnimation("images/mouse2.png","images/mouse3.png");
  j3 = loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
  
    cat = createSprite(870,600);
    //cat.addAnimation("tomRunning",tom2);

    cat.addAnimation("Sleeping",tom1);
    cat.scale = 0.2

    jerry = createSprite(200,600);
   // jerry.addAnimation("scared",j2)

    jerry.addAnimation("jSleeping",j1);
    jerry.scale = 0.2

}

function draw() {

    background(bg);
    if(cat.x - jerry.x < (cat.width - jerry.width)/2)
    {
      cat.velocityX = 0;
      cat.addAnimation("tomLast",tom3);
      cat.x = 300;
      cat.scale = 0.2;
      cat.changeAnimation("tomLast");

      jerry.addAnimation("jerryLast",j3);
      jerry.scale = 0.2;
      jerry.changeAnimation("jerryLast");
    }

    drawSprites();
}


function keyPressed(){

if(keyCode === LEFT_ARROW)
{
  cat.velocityX = -5
  cat.addAnimation("tomRunning",tom2);
  cat.changeAnimation("tomRunning");

  jerry.addAnimation("scared",j2)
  jerry.changeAnimation("scared");
}   

}
