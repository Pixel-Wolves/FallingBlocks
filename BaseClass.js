class BaseClass{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.alive=true;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("red")
        fill(255);
        rect(0,0,this.width,this.height);
        if(pos.y>canvas.height+this.height){
          if(timeleft>0){
            score+=1
          }
          Matter.Body.setPosition(this.body,{x:random(0,canvas.width),y:0})
          console.log("Up it goes!")
        }
        pop();
      }
}