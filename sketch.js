let fw = [];
function setup() {
	createCanvas(640, (640/4)*3);
	setInterval(()=>{
		let p = new firework(createVector(width/2, height), 2);
		fw.push(p);
	}, 1500);
}

window.onkeydown = (e) => {
	if(e.key == "e"){
		let p = new firework(createVector(width/2, height), 1);
		console.log(p.particles[0].Col);
		fw.push(p);
	}
}

function draw() {
	background(51);
	for(let p of fw){
		p.update();
		p.show();
	}
	for(let b of bursts){
		b.update();
		b.show();
	}
}