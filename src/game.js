class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
    this.points=2
  }

  preloadGame() {
    this.backgroundImgs = [
      { src: loadImage("assets/background/plx-1.png"), x: 0, speed: 0 },
      { src: loadImage("assets/background/plx-2.png"), x: 0, speed: 1},
      //  { src: loadImage("assets/background/plx-3.png"), x: 0, speed: 1 },
      // { src: loadImage("assets/background/plx-4.png"), x: 0, speed: 3 },
      // { src: loadImage("assets/background/plx-5.png"), x: 0, speed: 4 },
    ];
    this.playerImg = loadImage("assets/player/bird.png");
    this.coinImg = loadImage("assets/coins/BlueFish4.png");
    this.startImg = loadImage("assets/coins/tile001.png"); 
    this.gameoverImg = loadImage("assets/coins/tile002.png"); 
  }  

  setup() {
    this.player.setupPlayer();
  }

  drawGameOver() {

  }

  drawingGame() {
    clear();
    frameRate(50);
    this.background.drawingBackground();
    this.player.drawingThePlayer();
    
 
    // Puts obstacles aleatory
    if (frameCount % 90 === 0) {
      let randomNumber = random(0, height - 10);
      this.obstacles.push(new Obstacles(randomNumber));
    }
 

     
    this.obstacles.forEach((elem) => {
      elem.drawingObstacles();
      // elem.checkCollision(this.player);
    });
 

    // Checking collision  
    this.obstacles = this.obstacles.filter((obstacle) => {
      if (obstacle.checkCollision(this.player)) {
        this.points--;
        if(this.points === 0) {
          breakgame = breakgame + 1;
      }
      
      return false; 
      } else {
        return true;
      }
  
    }); 

    
    document.querySelector("#score").innerText=`Lives: ${this.points}`

  }
}