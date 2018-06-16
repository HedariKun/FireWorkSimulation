class particle {
    constructor(pos, velocity, gravity, cl){
       this.pos = createVector(pos.x, pos.y);
       this.gravity = gravity || 0;
       this.accel = createVector(0, 0);
       this.velocity = velocity || createVector(0, 0, 0); 
       this.lifeSpam = 0;
       this.Col = cl || new Col(random(0, 255), random(105, 255), random(50, 255), 255);
    }

    addAccel(value){
        this.accel.add(value);
    }

    update(){
        this.addAccel(this.gravity);
        this.velocity.add(this.accel);
        this.pos.add(this.velocity);
        this.accel = createVector(0, 0);
        this.lifeSpam++;
    }

}

function show(x, y, radius, r, g, b, a){
    push();
    stroke(r, g, b, a);
    strokeWeight(radius);
    point(x, y);
    pop();
}