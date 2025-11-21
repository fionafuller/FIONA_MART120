
var characterX = 100; 
var characterY = 100; 

var mouseShapex;
var mouseShapey;

var shapeX = 30;
var shapeY = 50;
 
var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var rValue = [];
var gValue = [];
var bValue = [];


function setup()
{
  createCanvas(800,600);

  var x = 50;
  var y = 50;
  var diameter = 25;
  for(var i = 0; i < 10; i++)
  {
      shapeXs[i] = x;
      shapeYs[i] = y;
      diameters[i] = diameter;
      x += 50;
      y += 50;
      diameter += 25;
  }

  for (var i = 0; i < 10; i++) 
  {
    shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeXs[i] = getRandomNumber(300);
    shapeYs[i] = getRandomNumber(700);
    diameters[i] = getRandomNumber(50);
    rValue [i] = getRandomNumber (100);
    gValue [i] = getRandomNumber (255);
    bValue [i] = getRandomNumber (255);
  }
}

function draw() 
{
  background(20,100,100);

  createBorders();

  createCharacter();
  
  youWin();

  mouseObstacle();

  for(var i = 0; i < 10; i++)
  {
      fill (rValue[i], gValue[i], bValue[i]);
      circle(shapeXs[i],shapeYs[i],diameters[i]);
      shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

      shapeXs[i] += shapeXSpeeds[i];
      shapeYs[i] += shapeYSpeeds[i];
  
    if (shapeXs[i] > width) 
      {
        shapeXs[i] = 0;
      }
    if (shapeXs[i] < 0) 
      {
      shapeXs[i] = width;
      }
    if (shapeYs[i] > height) 
      {
      shapeYs[i] = 0;
      }
    if (shapeYs[i] < 0) 
      {
      shapeYs[i] = height;
      }
  }

}

function mouseObstacle()
{
  fill(10,50,50);
  circle(mouseShapex,mouseShapey,25);
}

function createBorders()
{
  fill(20,100,100);
  strokeWeight(30);
  rect(0,0,800,600);

  strokeWeight(0);
  rect(770,480,30,100);
}

function youWin()
{
   if(characterX > 800 && characterY > 470)
  {
    textSize(50);
    text("YOU WIN!!", 400, 100);
  }
}

function createCharacter()
{
  fill(255);
  strokeWeight(3);
  circle(characterX,characterY,50);
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

function getRandomNumber(number) 
{
    return Math.floor(Math.random() * number) + 10;
}