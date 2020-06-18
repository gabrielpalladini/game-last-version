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
    this.score = loadImage("assets/background/Untitled_copy-removebg-preview (1).png"); 
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
      let randomNumber = random(0, height - 60);
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
          breakgame = 2;
      }
      
      return false; 
      } else {
        return true;
      }
  
    }); 

    image(game.score, 1000, 0, 300, 200);
    text(`Lives: ` + this.points, 1070, 110);
    textSize(35);
    textStyle(BOLD);
    

    //document.querySelector("#score").innerText=`Lives: ${this.points}`

  }
}