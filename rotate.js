let angle=0;
let x=50;
let y=50;
function setup() {
    createCanvas(800,400);
    angleMode(DEGREES);
  }
  
  function draw() {
    background("GREEN"); 
    fill(255);

    //translate(200,200);
    translate(x,y);
    rotate(angle);

    stroke(255);
   /* line(0,0,50,50);
    
    rect(50,50,100,50); */
   
//by writting rect(0,0,100,50), rectangle is rotating around the origin (new origin at 200,200)
   // rect(0,0,100,50);


    //now we want rectangle to rotate around its centre.
    rectMode(CENTER);
    rect(0,0,100,50);



 // angle=angle+1;
angle=angle+5;

//rotating and moving
x=x+2;
    drawSprites();
  }