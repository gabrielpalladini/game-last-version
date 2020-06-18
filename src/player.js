class Player {
constructor() {
    this.gravity = 0.4;
    this.speed = 0;
    this.jumps = 0;
    this.x = 50;
    this.y;
}

setupPlayer() {
    this.y = height - 50;
    this.width = width/15;
    this.height = height/8;
}

jump() {
    this.jumps += 1;
    
        this.speed = -9;
}

drawingThePlayer() {
    // console.log(this.y) 
    this.speed += this.gravity;
    this.y += this.speed;

    if(this.y >= height - this.height) {
        this.y = height - this.height;
        this.jumps = 0;
    }

    if(this.y <= 0) 
    {
        this.y = 0,
        this.jumps = 0;
    }

    image(game.playerImg, this.x, this.y, this.width, this.height);
}
}