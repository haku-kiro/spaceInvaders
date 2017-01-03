function Drop(x, y) {
	this.x = x;
	this.y = y;
	this.r = 8;
	this.toDelete = false; // a flag var to check when to delete a drop

	this.show = function() {
		noStroke();
		fill(150, 0, 255);
		ellipse(this.x, this.y, this.r*2, this.r*2);
	}

	this.hits = function(flower) {
		var distance = dist(this.x, this.y, flower.x, flower.y)
		if (distance < this.r + flower.r) { //.r refers to the radius
			return true;
		} else {
			return false;
		}
	}

	this.move = function() { //The drop will move from the bottom of the screen to the top.
		this.y = this.y - 5;
	}

	this.evap = function() {
		this.toDelete = true;
	}
}