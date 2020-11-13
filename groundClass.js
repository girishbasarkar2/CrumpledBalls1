class groundClass {
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
        fill("green")
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
    pop();
    };

};


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var trash;
var sprite;

var backImg;
var walkImg,walkSp;
var backImg;

var ds1,ds2,ds3;
var dog;
var birds;

function preload()
{
	
	backImg=loadImage("background.jpg");
}

function setup() {
	createCanvas(800, 600);

	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		isStatic:false
	}


ground=new groundClass(400,600,800,50); 


ds1=new dustbin(660,525,20,40);
ds2=new dustbin(780,525,20,40);
ds3=new dustbinImg(730,525,0,0);
ds4=new dustbin(780,490,20,200);
trash =new Trash(50,300,50,50);


dog=new BaseClass(450,480,140,130);

birds=new bird(100,50);

	Engine.run(engine);
	keyPressed();
}


function draw() {

  rectMode(CENTER);
  background(backImg);

  
  ground.display();
 
dog.display();
birds.display();
	
	trash.display();
	ds3.display();

	fill("white");
	stroke("black")
	textSize(15);
  text("PRESS THE UP ARROW KEY, AND THROW THE TRASH INTO DUSTBIN !!",200,70);


  drawSprites();
 
}


function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(trash.body,trash.body.position,{x:85,y:-175});
		}
}
