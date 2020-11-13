class bird extends BaseClass{
    constructor(x,y) {
     super(x,y,200,200);
     
     this.image=loadImage("birds.png");
      
  }
}class dustbin {
    constructor(x,y,width,height,angle){
        var options={
            'isStatic':true,
            'friction':1,
            'restitution':0.8,
            'density':1
        };
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("dog.png");
        World.add(world,this.body);
    };
    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        fill("black")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    pop();
    };

};
