function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background("yellow"); 
  fill(255);

  //Initially origin was (0,0) and rectangle was drawn at (50,50,100,50);
  //Example :
  //rect(50,50,100,50);
  

  //Then we used translate(50,50).By doing this origin has shifted from (0,0) to (50,50)
 //so now rect(0,0,100,50) is same as the above code rect(50,50,100,50) written before translation.
  //Example :
 //translate(50,50);
  //rect(0,0,100,50)

//Now shift the origin to mouseX and mouseY
//so with resepect to mouseX,mouseY origin the below rectangles are printed
  translate(mouseX,mouseY)
  rect(0,0,100,50);
  rect(200,200,50,60);

  drawSprites();
}