
    var x = 200;
    var y = 200;
    var xmovement = 10;
    var ymovement = 10;

    var xx = 200;
    var yy = 200;
    var xxmovement = 10;
    var yymovement = 10;
    

    var textSize1 = 15;
    var textGrow = 1;

function setup() 
{
  createCanvas(400,400);
  xmovement = floor(random() * 10) + 1;
  ymovement = floor(random() * 10) + 1;
  xxmovement = floor(random() * 10) + 1;
  yymovement = floor(random() * 10) + 1;
}

function draw() 
{
    
  background(220);


    fill(10);
    textSize(textSize1);
    text('"me if i was just a little sinister" by fiona fuller',10,30);
    if (textSize1 >= 5 || x <= 30)
    {
        textGrow *= -1;
    }
        textSize1 += textGrow;

  
  fill(220);
  strokeWeight(3);

  circle(x,200,250);
  if (x >= 400 || x <= 0)
  {
       xmovement *= -1;
  }
     x += xmovement;


  ellipse(xx,240,40,20);
  if (xx >= 300 || xx <= 100)
  {
    xxmovement *= -1;
  }
   xx += xxmovement;

  line(160,270,240,270);

  line(160,270,160,260);

  line(240,270,240,260);

  square(80,y,100);
    if (y >= 400 || y <= 0)
    {
       ymovement *= -1;
     }
     y += ymovement;

  square(220,yy,100);
  if (yy >= 400 || yy <= 0)
    {
       yymovement *= -1;
     }
     yy += yymovement;

  circle(x,y,30)

  line(180,180,220,180);

  triangle(140,170,120,190,160,190);
  
  triangle(260,170,240,190,280,190);

  strokeWeight(15);

  point(140,180);

  point(260,180);

  strokeWeight(3);
}