class Rope{
    constructor(bodyA, pointB){
        var options={
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 1.2,
            lenght : 250,
        }

        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(4);
        stroke(84,39,15);
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
    }

    fly(){
        this.rope.bodyA = null;
    }

    attach(body){
        this.rope.bodyA = body;
    }
}