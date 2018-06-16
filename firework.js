class firework{
    constructor(pos, amount){
        this.pos = pos || createVector(0, 0, 0);
        this.amoount = amount;
        this.particles = [];
        this.createParticle();
    }

    createParticle(){
        for(let i = 0; i < this.amoount; i++){
            let p = null;
            p = new particle(createVector(this.pos.x, this.pos.y), createVector(random(-1, 1) * 3.5, random(-0.9, -0.8) * 10), createVector(0, 0.1));
            this.particles.push(p);
        }
    }

    show(){
        for(let p of this.particles){
            show(p.pos.x, p.pos.y, 5, p.Col.r, p.Col.g, p.Col.b, p.Col.a);
        }
    }

    createBurst(p){

        let b = new burst(createVector(this.particles[p].pos.x, this.particles[p].pos.y), new Col(this.particles[p].Col.r, this.particles[p].Col.g, this.particles[p].Col.b, this.particles[p].Col.a));
        bursts.push(b);
        this.particles.splice(p, 1)
    }

    update(){
        if(this.particles.length == 0){
            for(let f in fw){
                if(fw[f] == this){
                    fw.splice(f, 1);
                }
            }
        }
        
        for(let p in this.particles){
            this.particles[p].update();
            if(this.particles[p].velocity.y >= 0){
                this.createBurst(p);
            }
        }
    }

}