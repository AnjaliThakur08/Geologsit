class Iron {
    constructor(x, y, width, height) {
      var options = {
        'density':30,
        'friction': 3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
    
      var angle = this.body.angel;
      var ironpos = this.body.position;
      push();
      translate(ironpos.x, ironpos.y);
      rotate(angle);
      strokeWeight(4);
      stroke('black')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };