class Paper {
    constructor(x, y,radius ) {
      var options = {
          isStatic:false,
          restitution :0.3,
          density:1.2,
          friction: 0.5
      }
      
      this.body = Bodies.circle(x, y, radius, options);
      this.radius=radius;
    
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      
     fill("pink");
      
      ellipseMode(CENTER);
     
      ellipse(pos.x,pos.y,this.radius,this.radius );
      
    }
  };