let bursts = [];

class burst {
    constructor(pos, cl){
        this.pos = pos;
        this.particles = [];
        this.amount = 100;
        this.cl = cl;
        this.createParticle();
    }

    createParticle(){
        for(let i = 0; i < this.amount; i++){
            let p = new particle(createVector(this.pos.x, this.pos.y), createVector(random(-1, 1) *3, random(-1, 1) * 3), createVector(0, 0.005), this.cl);
            this.particles.push(p);
        }
    }

    show (){
        for(let p of this.particles){
            let a = map(p.lifeSpam, 0, 50, 255, 0);
            show(p.pos.x, p.pos.y, 5, p.Col.r, p.Col.g, p.Col.b, a);
        }
    }

    update(){
        if(this.particles.length == 0){
            for(let b in bursts){
                if(bursts[b] == this){
                    bursts.splice(b, 1);
                }
            }
        }
        for(let p in this.particles){
            this.particles[p].update();
            if(this.particles[p].lifeSpam == 100){
                this.particles.splice(p, 1);
            }
        }
    }


}