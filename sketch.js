//delare alias for matter modules
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
//declare the game variables
var world,engine,box,ground

function setup() {
  createCanvas(800,400)
  //create game engine by using create function of engine module of matter.js library
engine=Engine.create()
//assign world of engine to variable world
world=engine.world

box= new Box(200,200,50,50)
ground= new Ground(400,380,800,20) 



}

function draw() {
  background(0);  
  Engine.update(engine)
  //displaying the body for the soul created in function set up
  box.display()


ground.display()



}