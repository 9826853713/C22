const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var ground;
var box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
box2=new Box(900,320,70,70)
    box1 = new Box(700,320,70,70);
    pig1=new Pig(800,320);
    log1=new Log(800,300,300,PI/2);
    bird=new Bird(200,200);
ground=new Ground(600,350,1200,20);


}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    pig1.display();
    log1.display();
    bird.display();
}