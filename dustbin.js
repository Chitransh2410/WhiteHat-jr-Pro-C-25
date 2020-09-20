class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=100;
		this.wallThickness=20;
			
		
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.image = loadImage("dustbingreen.png");

		this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})

		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.bottomBody.position;
			var posLeft=this.leftWallBody.position;
			var posRight=this.rightWallBody.position;


			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER);
			rect(20,0,this.wallThickness, this.dustbinHeight);
			this.rightWallBody.depth = this.rightWallBody.depth + 2;
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER);
			rect(-20,0,this.wallThickness, this.dustbinHeight);
			this.leftWallBody.depth = this.leftWallBody.depth + 2;
			pop()
			
			push()
			translate(posBottom.x, posBottom.y);
			imageMode(CENTER)
			image(this.image,0,-60,this.dustbinWidth, this.wallThickness+120);
			
			pop()
			 
	   
	}

}