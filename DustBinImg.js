class dustbinImg {
    constructor(x,y,width,height,angle){
        var options={
            'isStatic':true,
            'friction':1,
            'restitution':0.8,
            'density':1
        };
        this.body=Bodies.rectangle(x,535,width,height,options);
        this.width=150;
        this.height=160;
        this.image=loadImage("dustbin.png");
        World.add(world,this.body);
    };
    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y);
        rotate(angle);
        fill("black")
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
    pop();
    };

};

