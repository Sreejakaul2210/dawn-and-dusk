const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);

    fill("black");
    textSize(30);
    console.log("hour is"+hour);
    if(hour>=12){
        text("Time : "+Math.round( hour%12) + " PM", 50,100);
    }else if(hour==00){
        text("Time : 12 AM",100,100);
    }else{
        text("Time : "+ Math.round( hour%12) + " AM", 50,100);
    }

}


    

    
 
async function getBackgroundImg(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/asia/kolkata");
    var responseJSON=await response.json();
    var dt=responseJSON.datetime;
    console.log(dt);
    hour=dt.slice(11,13);
    console.log(hour);

    if(hour>=00 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    backgroundImg=loadImage(bg);
  }