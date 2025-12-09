var characterX = 100; 
var characterY = 100; 
 
var snowXs = [];
var snowYs = [];
var snowDiameters = [];

var snowXSpeeds = [];
var snowYSpeeds = []; 

function setup()
{
  createCanvas(800,600);

  var x = 50;
  var y = 50;
  var diameter = 5;
  
  for(var i = 0; i < 10; i++)
  {
      snowXs[i] = x;
      snowYs[i] = y;
      snowDiameters[i] = diameter;
      x += 5;
      y += 5;
      diameter += 5;
  }

  for (var i = 0; i < 100; i++) 
  {
    snowXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
    snowYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    snowXs[i] = getRandomNumber(800);
    snowYs[i] = getRandomNumber(900);
    snowDiameters[i] = getRandomNumber(5);
  }
}

function draw() 
{
  background(0,0,0);

  createLandscape();

  createGoalText();
  
  createSnowmanBody();
  
  createCharacter();

  createSnowmanFace();
  
  youWin();
}

function createGoalText()
{
  fill (199,230,248);
  strokeWeight(0);
  rect(200,50,500,100);
  fill(0,0,0);
  textSize(20);
  text("hint... become the snowman's head", 200, 100);
}

function createSnowmanBody()
{
  fill(255,255,255);
  strokeWeight(3);
  circle(520,500,180);
  circle(520,400,150);
}

function createSnowmanFace()
{
  fill(243,147,88);
  triangle(510,300,510,320,470,310);

  fill(0,0,0);
  circle(480,330,10);
  circle(495,340,10);
  circle(515,345,10);
  circle(535,340,10);
  circle(550,330,10);

  circle(495,280,20);
  circle(535,278,20);
}

function createLandscape()
{
  fill (199,230,248);
  strokeWeight(0);
  rect(0,0,800,600);
  
  fill(246,249,255);
  strokeWeight(0);
  rect(0,440,800,300);
}

function youWin()
{
   if(characterX == 520 && characterY == 300)
  {
    fill (199,230,248);
    strokeWeight(0);
    rect(200,50,500,100);
    fill(184,56,90);
    textSize(50);
    text("HAPPY HOLIDAYS!!", 200, 100);

    for(var i = 0; i < 100; i++)
  {
      fill (255, 255, 255);
      strokeWeight (0);
      circle(snowXs[i],snowYs[i],snowDiameters[i]);
      snowXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
      snowYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

      snowXs[i] += snowXSpeeds[i];
      snowYs[i] += snowYSpeeds[i];
  
    if (snowXs[i] > width) 
      {
        snowXs[i] = 0;
      }
    if (snowXs[i] < 0) 
      {
      snowXs[i] = width;
      }
    if (snowYs[i] > height) 
      {
      snowYs[i] = 0;
      }
    if (snowYs[i] < 0) 
      {
      snowYs[i] = height;
      }
  }
  }
}

function createCharacter()
{
  fill(255);
  strokeWeight(3);
  circle(characterX,characterY,130);
}

function keyPressed() 
{
  if (key == 'd') 
  {
    characterX+=10;
  } 
  else if (key == 'a') 
  {
    characterX-=10;
  }
  else if (key == 'w')
  {
    characterY-=10;
  }
  else if (key == 's')
  {
    characterY+=10;
  }
}

function getRandomNumber(number) 
{
    return Math.floor(Math.random() * number) + 10;
}