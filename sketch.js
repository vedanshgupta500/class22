const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var world,engine,box,ground

function setup() {
  createCanvas(800,400)
engine=Engine.create()
world=engine.world
ground=Bodies.rectangle(400,380,800,20,{isStatic:true})
World.add( world,ground)
box=Bodies.rectangle(200,200,50,50)
World.add( world,box)
ball=Bodies.circle(400,200,50,{restitution:2})
World.add( world,ball)
console.log(box.position.x)
console.log(box.position.y)


}

function draw() {
  background(0);  
  Engine.update(engine)
rectMode(CENTER)

rect(ground.position.x,ground.position.y,800,20)
rect(box.position.x,box.position.y,50,50)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,50)

}