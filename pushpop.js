let angle=0;

function setup() {
    createCanvas(800,400);
    
  }
  
  function draw() {
    background("yellow"); 
    fill(255);
  
    push();
    translate(200,200);
    rotate(angle);
    fill("green");
    rect(0,0,100,50);
pop();


translate(300,300);
    fill("blue");
    rectMode(CENTER);
    rotate(-angle);
    rect(0,0,50,60);
  
    angle=angle+5;
    drawSprites();
  }