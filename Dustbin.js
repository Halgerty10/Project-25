class Dustbin {
    constructor() {
        var options = {
            isStatic: true
        }
    
        this.body1 = Bodies.rectangle(500,550,this.width,this.height,options);
        this.body2 = Bodies.rectangle(650,550,20,200,options);
        this.body3 = Bodies.rectangle(576,630,165,20,options);
        this.width = 20;
        this.height = 200;
        this.image = loadImage("sprites/dustbingreen.png");

        World.add(world, this.body1);
        World.add(world, this.body2);
        World.add(world, this.body3);
      }
      display(){
        var pos1 = this.body1.position;
        var pos2 = this.body2.position;
        var pos3 = this.body3.position;

        push();
        rectMode(CENTER);
        stroke("red");
        fill("red");
        //rect(pos1.x, pos1.y, this.width, this.height);
        //rect(pos2.x, pos2.y, this.width, this.height);
       //rect(pos3.x, pos3.y, 150, 20);
        imageMode(CENTER);
        image(this.image, 576, 530, 150, 200);
        pop();
      }
}

