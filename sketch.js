let font;
let txt = "";
let changeFlag = false;
let count = 0;
let c;
let bgHue;

function setup() {
	createCanvas(windowWidth, windowHeight);
  textFont('"游明朝体", "Yu Mincho", YuMincho, "ヒラギノ明朝 Pro", "Hiragino Mincho Pro", "MS P明朝", "MS PMincho", serif');
	textAlign(CENTER, CENTER);
	c = random(10) >= 5 ? random(0, 50) : random(200, 255);
	let size = height / 5;
	textSize(size);
	textLeading(size * 0.9);

	for (let i = 0; i < 4; i++) {
		txt += String.fromCodePoint(floor(random(12353, 12437)));
		if (i != 3) {
			txt += "\n";
		}
	}

	bgHue = random(360);
}

function draw() {
	push();
	colorMode(HSB, 360, 100, 100, 100);
	background(bgHue, 50, 50, 50);
	pop();

	fill(c);
	stroke(c);

	if (changeFlag) {
		txt = "";
		c = random(10) >= 5 ? random(0, 50) : random(200, 255);

		size = random(height / 10, height / 5);
		textSize(size);
		textLeading(size * 0.9);
		for (let i = 0; i < 4; i++) {
			txt += String.fromCodePoint(floor(random(12353, 12437)));
			if (i != 3) {
				txt += "\n";
			}
		}
	}

	text(txt, width / 2, height / 2);

	count++;
	if (!changeFlag && count > 100) {
		count = 0;
		changeFlag = true;
	}
	if (changeFlag && count > 10) {
		count = 0;
		bgHue = random(360);
		changeFlag = false;
	}
}