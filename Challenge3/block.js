var count = 0;

function Block() {

  this.top = random(height / 2);
  this.bottom = random(height / 2);
  this.x = width;
  this.w = random(10,30);
  this.speed = 2;

  this.highlight = false;

  this.show = function() {
    fill(86, 53, 30);
    noStroke();
    if (this.highlight) {
      fill(241, 153, 83);
    }

    rect(this.x, 0, this.w, this.top);
    rect(this.x, height - this.bottom, this.w, this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }

  this.hits = function(bird) {
    if (bird.y < this.top || bird.y > height - this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {

        scale(2.5, 2.5);
        bird.width;
        bird.height;


        count++;

        console.log(count);

        if (count >= 45) {
          bird.gravity = 0.0000000002;
        }

        this.highlight = true;
        return true;


      }

    }
    this.highlight = false;
    return false;

  }

}