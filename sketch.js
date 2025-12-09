


function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(200);
    textSize(20);
    fill(0);
    text("Github Collaborative Data Drawing Task", 50, 50);

    //draw 2 circles
    //change colours of the circle to navy blues with no strokes
    // Add two squares with two more gradients
    
    noStroke();
    fill(0, 0, 128);
    radialGradientCircle(400, 300, 50, color(255, 0, 0), color(0, 0, 255));
    radialGradientCircle(400, 500, 100, color(0, 0, 255), color(255, 0, 0));

}

function radialGradientCircle(x, y, d, innerCol, outerCol) {
  for (let r = d; r > 0; r--) {
    let amt = r / d;
    let c = lerpColor(innerCol, outerCol, amt);
    fill(c);
    circle(x, y, r);
  
  }
}
