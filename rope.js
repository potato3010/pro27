class Rope {
    constructor (body1,body2, offsetX, offsetY) {

        this.offsetX=offsetX // OFFSETX ,"X" is defined in capital
        
        this.offsetY=offsetY
        
        var options={
        
        bodyA: body1,
        
        bodyB:body2,
        
        pointB:{x:this.offsetX, y:this.offsetY}
        
        } /console.log(options);
        
        this.rope=Constraint.create(options)// this.rope= "-" minus is wrong
        World.add(world, this.rope)
    } 
    display(){
        var pointA = this.rope.bodyA.position //rope in place chain
        var pointB = this.rope.bodyB.position
        strokeWeight(4);
        var Anchor1X=pointA.x // additional lines
		var Anchor1Y=pointA.y

		var Anchor2X=pointB.x+this.offsetX
		var Anchor2Y=pointB.y+this.offsetY

		line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
      //  line(pointA.x,pointA.y,pointB.x,pointB.y) 
    }
}

