const game = new Game();

let breakgame = 1;

let WIDTH = 1300;
let HEIGHT = 600;

function preload() {
    game.preloadGame();
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    game.setup();
}

function draw() {
    if(breakgame === 1) {
        image(game.startImg, 0, 0, this.width, this.height)
        document.querySelector("#score").style.display = "none"
    } else if(breakgame == 0) {
        game.drawingGame()
        document.querySelector("#score").style.display = ""

    } else if (breakgame != 0) {
        console.log("Teste")
        image(game.gameoverImg, 0, 0, this.width, this.height); 
        document.querySelector("#score").style.display = "none";

    }
    
}

function keyPressed() {
    if (keyCode == 32) {
        game.player.jump();
    }

    if (breakgame != 0 && keyCode === 32) {
        breakgame = 0;
        game.points = 2;
    }


}

function points() {
    game.points();
}
