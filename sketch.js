const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10,
box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;

var canvas;
var ground;
var ball;
var rope;
var boxes=[];
var frame=0;
var box1;
var box2;
var box3;
var box4;
var box5;
var gameState=0;
var timeleft=600;
var score=0;
var highScore=0;

function setup(){
    canvas = createCanvas(windowWidth,windowHeight);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(windowWidth/2,600,windowWidth,20);

    box1 = new Box(random(0,windowWidth),-50,100,100)
    box2 = new Box(random(0,windowWidth),-200,100,100)
    box3 = new Box(random(0,windowWidth),-350,100,100)
    box4 = new Box(random(0,windowWidth),-500,100,100)
    box5 = new Box(random(0,windowWidth),-650,100,100)

    ball = new Ball(50,-50,80,80);
    rope = new Rope(ball.body,{x:530,y:50});
}

function draw(){
    frame+=1;
    background("gray");
    Engine.update(engine);

    ground.display();

    if(gameState==0){
        text("Press Space to Start",100,200)
        if(keyIsDown(32)){
            gameState=1;
        }
    }
    else{
        if(timeleft>0){
            box1.display();
            box2.display();
            box3.display();
            box4.display();
            box5.display();
            timeleft-=1;
        }
        else{
            if(score>highScore){
                highScore=score
            }
            timeleft=600;
            gameState=0;
            score=0;
        }
    }

    rope.display();
    ball.display();

    if(mouseIsPressed && mouseButton === LEFT){
        Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY});
    }

    textSize(64)
    text("Score:"+score,100,100)
    text("Time Left:"+round(timeleft/60),100,150)
    text("HI:"+highScore,500,100)
}