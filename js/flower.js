function Flower(x, y) { //flower constructor, change this to enemy ships ?
	this.x = x;
	this.y = y;
	this.r = 30;

	this.show = function() {
		fill(255, 0, 200);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}

	this.grow = function() {
		this.r = this.r + 2;
	}
}