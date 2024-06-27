class Paddle {
    constructor(x, y, l, w, c) {
        this.x = x;
        this.y=y;
        this.l=l;
        this.w=w;
        this.c=c;
        this.vy = 0;
    }

    draw(ctx) {
        ctx.fillStyle=this.c;
        ctx.strokeStyle="black";
        ctx.fillRect(this.x, this.y, this.w, this.l);
        ctx.strokeRect(this.x, this.y, this.w, this.l);


    }

    move() {
        let newY = this.y + this.vy;
        if (newY < 0) return;
        if (newY + this.l > boardHeight) return;

        this.y = newY;
    }
    
    moveCPU(ball, x, y, vx, vy) {
      let point= y-(x*(vy/vx))
      point-=dif;
        paddleL.y=point

        
       
    }
}
