var ship;
var flowers = []; //an array of enemies
var drops = []; //an array of drops

function setup () {
	createCanvas(600, 400);
	ship = new Ship();
	//drop = new Drop(width/2, height);
	for (var i = 0; i < 6; i++) {
		flowers[i] = new Flower(i*80+80, 60);
	}

}

function draw () {
	background(50);
	ship.show();

	for (var i = 0; i< drops.length; i ++) {
		drops[i].show();
		drops[i].move();
		for (var j = 0; j < flowers.length; j++) {
			if (drops[i].hits(flowers[j])) {
				flowers[j].grow();
				drops[i].evap();
				console.log("hit");
			}
		}
	}
	
	for (var i = 0; i < flowers.length; i++) {
		flowers[i].show();
	}

	for (var i = drops.length-1; i>= 0; i--) { //going through the array backwards so that you dont skip an element
		if (drops[i].toDelete) {
			drops.splice(i, 1);
		}
	}
}

function keyPressed() {

	if (key === ' ') {
		var drop = new Drop(ship.x, height); //start the drops from the ships x location
		drops.push(drop);
	}

	if (keyCode === RIGHT_ARROW) {
		ship.move(1); //could make two functions (left and right)
	} else if (keyCode === LEFT_ARROW) {
		ship.move(-1);
	}
}