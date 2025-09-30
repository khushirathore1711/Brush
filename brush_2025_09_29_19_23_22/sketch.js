function setup() {
  createCanvas(700, 480);
  
  // R, G & B values.
  background(255, 204, 50);

  // take a big brush
  strokeWeight(10);
  // dip it in red purple
  stroke("red");
//frameRate(10);
}


function draw() {
 
  //declare variables
  let posY = mouseY;
  let posX = mouseX;
  // place a circle on a screen
  circle(mouseX,mouseY,50);
  
     
  //call jump function
  jump();
}

function jump() {
  console.log('Jumpy!!!!');
}

