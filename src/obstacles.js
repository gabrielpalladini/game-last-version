class Obstacles {
    constructor(randomY) {
        this.x = width;
        this.y = randomY;
        this.img = game.coinImg;
        this.width = 20;
        this.heigth = 20;
    }

    checkCollision(player) {
        
        if (this.x + this.width >= player.x &&
        this.x <= player.x + player.width &&
        this.y + this.heigth >= player.y &&
        this.y <= player.y + player.height) {
            return true;
        } else {
            return false;
        }
       }

    drawingObstacles() {
        this.x -= 15;
        image(this.img, this.x, this.y, width/25, height/10);
    } 
  
    }
    
