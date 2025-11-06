
var characterX = 100; 
var characterY = 100; 

var enemyaX = 200;
var enemyaY = 200;
var enemyaXSpeed = 3;
var enemyaYSpeed = 5;

var enemybX = 300;
var enemybY = 300;
var enemybXSpeed = 6;
var enemybYSpeed = 2;

var mouseShapex;
var mouseShapey;

function setup()
{
    createCanvas(800,600);
}
function draw() 
{
  background(20,100,100);

  fill(20,100,100);
  strokeWeight(30);
  rect(0,0,800,600);

  strokeWeight(0);
  rect(770,480,30,100);

  fill(255);
  strokeWeight(3);
  circle(characterX,characterY,50);
  
  if(characterX > 800 && characterY > 470)
  {
    textSize(50);
    text("YOU WIN!!", 400, 100);
  }

  fill(50,50,10);
  square(enemyaX,enemyaY,20);
  enemyaX += enemyaXSpeed;
  enemyaY += enemyaYSpeed; 

  if(enemyaX > 800)
  {
    enemyaX = 0;
  }
  if(enemyaX < 0)
  { 
    enemyaX = 800;
  }
  if(enemyaY > 600)
  {
    enemyaY = 0;
  }
  if(enemyaY < 0)
  { 
    enemyaY = 600;
  }

  fill(50,10,50);
  square(enemybX,enemybY,40);
  enemybX += enemybXSpeed;
  enemybY += enemybYSpeed; 

  if(enemybX > 800)
  {
    enemybX = 0;
  }
  if(enemybX < 0)
  { 
    enemybX = 800;
  }
  if(enemybY > 600)
  {
    enemybY = 0;
  }
  if(enemybY < 0)
  { 
    enemybY = 600;
  }

  fill(10,50,50);
  circle(mouseShapex,mouseShapey,25);
}

function keyPressed() 
{
  if (key == 'd') 
  {
    characterX+=50;
  } 
  else if (key == 'a') 
  {
    characterX-=50;
  }
  else if (key == 'w')
  {
    characterY-=50;
  }
  else if (key == 's')
  {
    characterY+=50;
  }
}

function mouseClicked()
{
    mouseShapex = mouseX;
    mouseShapey = mouseY;
}