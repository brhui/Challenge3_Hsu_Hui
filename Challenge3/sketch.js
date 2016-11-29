//Shiffman https://www.youtube.com/watch?v=cXgA1d_E-jY
var bird;
var bars = [];


function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  bars.push(new Block());
}

function draw() {
  background(56, 94, 81);

  //count ++;

  for (var i = bars.length - 1; i >= 0; i--) {
    bars[i].show();
    bars[i].update();

    if (bars[i].hits(bird)) {
      console.log("hit");

    }

    if (bars[i].offscreen()) {
      bars.splice(i, 1);
    }
  }

  //var wind = createVector(0.01, 0);

  bird.update();
  bird.show();
  //bird.applyForce(wind);




  if (frameCount % 100 === 0) {
    bars.push(new Block());
  }

}

function keyPressed() {
  if (key == ' ') {
    console.log("space");
    bird.up();
  }
  
  if (key == 'a' || key == 'A'){
    bird.down();
    console.log("a");
  }
  
}