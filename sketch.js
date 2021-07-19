const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground 
var base1
var base2
var block1
var block2
var block3
var block4
var block5
var block6
var block7
var block8
var block9
var block10
var block11
var block12
var block13
var block14
var block15
var block16
var block17
var block18
var block19
var block20
var block21
var block22
var block23
var block24
var block25
var polygoning
var ball
var slingshot
function preload(){
polygoning = loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(2000,950);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine); 
    ground = new Ground(600,height,2800,20); /// always canvas size 
    base1 = new Ground(800,770,400,15);
    base2 = new Ground(1360,550,300,15);
    block1 = new Block(650,742.5,50,40);
    
    block2 = new Block(700,742.5,50,40);
   
    block3 = new Block(750,742.5,50,40);
   
    block4 = new Block(800,742.5,50,40);
    
    block5 = new Block(850,742.5,50,40);
    
    block6 = new Block(900,742.5,50,40);
    
    block7 = new Block(950,742.5,50,40);
    
    block8 = new Block(700,702.5,50,40);
    
    block9 = new Block(750,702.5,50,40);
    
    block10 = new Block(800,702.5,50,40);
    
    block11 = new Block(850,702.5,50,40);
    
    block12 = new Block(900,702.5,50,40);
  
    block13 = new Block(750,662.5,50,40);
    
    block14 = new Block(800,662.5,50,40);
    
    block15 = new Block(850,662.5,50,40);
    
    block16 = new Block(800,622.5,50,40);
   
    block17 = new Block(1260,522.5,50,40);
    block18 = new Block(1310,522.5,50,40);
    block19 = new Block(1360,522.5,50,40);
    block20 = new Block(1410,522.5,50,40);
    block21 = new Block(1460,522.5,50,40);
    block22 = new Block(1310,482.5,50,40);
   
    block23 = new Block(1360,482.5,50,40);
   
    block24 = new Block(1410,482.5,50,40);
    
    block25 = new Block(1360,442.5,50,40);
   
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    slingshot = new Slingshot(this.ball,{x:100,y:200})
}  
     





function draw(){
background("purple");




base1.display();
base2.display();
ground.display();
fill("red")
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
fill("yellow")
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
fill("green")
block13.display();
block14.display();
block15.display();
fill("blue")
block16.display();
fill("turquoise")
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
fill("magenta")
block22.display();
block23.display();
block24.display();
fill("pink")
block25.display();
imageMode(CENTER)
image(polygoning,ball.position.x,ball.position.y,40,40)
slingshot.display();
}
function mouseDragged(){ Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY}); } 
function mouseReleased(){ slingshot.fly(); }