var canvas;
var music;
var s1, s2, s3, s4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
s1=createSprite(0,580,360,30);
s1.shapeColor="blue";

s2=createSprite(295,580,200,30);
s2.shapeColor="purple";

s3=createSprite(515,580,200,30);
s3.shapeColor="orange";

s4=createSprite(740,580,220,30);
s4.shapeColor="green";

    //create box sprite and give velocity
 
box=createSprite(random(20,750),100,40,40);
box.shapeColor="white";
box.velocityX=8;
box.velocityY=4;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

edges=createEdgeSprites();
box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if(s1.isTouching(box)) {
        box.shapeColor="blue";
    }
    if(s2.isTouching(box)) {
        box.shapeColor="purple";
    }
    if(s3.isTouching(box)) {
        box.shapeColor="orange";
    }
    if(s4.isTouching(box)) {
        box.shapeColor="green";
    }
drawSprites();
}