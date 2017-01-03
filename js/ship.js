function Ship() { //constructor to make the ship
	this.x = width/2; //ship starts at the middle.

	this.show = function () {
		fill(255); //Ship will be white
		rectMode(CENTER); //draws the rect by its center
		rect(this.x, height - 22, 20, 20);
	}

	this.move = function(dir) {
		this.x += dir*10;
	}
}