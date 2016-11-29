var birdIMG;
var downMotion = 0;

function preload() {
  birdIMG = loadImage('content/bird.png');
}

function Bird() {
  // this.y = createVector(0.01, 0);
  this.y = height / 2;
  this.x = 64;
  //this.acceleration = createVector(0,0);
  //this.gravity = 1; // force causing the velocity to increase. down
  //this.gravity = 0.1; // not so strong
  this.gravity = -0.6; // not so strong
  //but better with other forces:
  //this.lift = -10; // negative added so goes down
  this.lift = -10; // negative added so goes down
  this.velocity = 0;


  this.show = function() {
    fill(255);
    image(birdIMG, this.x, this.y, 35, 35);
  }

  this.up = function() {
    this.velocity += this.lift
    this.velocity *= -1; // air resistance limits speed. shrinking it a bit
    this.velocity += this.gravity * 10;

    /*
    downMotion++;

    console.log("downMotion: " + downMotion);

    if (downMotion > 5) {
      this.velocity = -  1;
      this.lift = -5;
      // this.gravity = -0.6 * 4;
    } */

    // this.x += this.velocity;

    // this.velocity = createVector(0, 0.5);
  }
  this.update = function() {
      this.velocity += this.gravity;
      this.y += this.velocity; // pushing bird down

      // this.acceleration.mult(0);

      if (this.y > height) {
        this.y = height;
        this.velocity = 0;
      }

      // also for the top
      if (this.y < 0) {
        this.y = 0;
        this.velocity = 0;
      }

    }
    /*
    this.applyForce = function(force) {
      var f = p5.Vector.div(force, this.gravity);
      this.acceleration.add(f);
    }
    */

  this.down = function() {
    this.velocity *= 3;
    this.velocity += this.gravity * -5;
  }
}