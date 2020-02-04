export default class Particle {
    constructor(id, x,y, r, color, interactive) {
        this.radius = r;
        this.x = x;
        this.y = y;
        this.vx = 1;
        this.vy = 1;
        this.direction = { x: Math.floor((Math.random()*5))/2-1, y: Math.floor((Math.random()*5))/2-1 };//-1, -0.5, 0, 0.5, 1
        this.color = color;
        this.id = id;
        this.isInteractive = interactive;
    }
}