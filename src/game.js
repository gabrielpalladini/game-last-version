class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.obstacles = [];
    this.points=10
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
    this.coinImg = loadImage("assets/coins/flame.png");
    this.startImg = loadImage("assets/startimage/startimage.jpg"); 
    this.gameoverImg = loadImage("assets/gameover/bozofire02.png");
    this.score = loadImage("assets/background/5118.jpg"); 
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
    if (frameCount % 15 === 0) {
      let randomNumber = random(0, height - 80);
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
          breakgame = breakgame + 2;
      }
      
      return false; 
      } else {
        return true;
      }
  
    }); 

    text(`Lives: ` + this.points, 1120, 70);
    textSize(32);
    image(game.score, 1050, 40, 200, 200);

    //document.querySelector("#score").innerText=`Lives: ${this.points}`

  }
}