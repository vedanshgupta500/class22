class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.8
        }
   this.body =Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
World.add( world,this.body)
}
    display(){
        push ()
            strokeWeight(4)
            stroke("green")
            fill ("red")
            rectMode(CENTER)
            rect(this.body.position.x,this.body.position.y,this.width,this.height)
            pop ()
    }
}