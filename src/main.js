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

    } else if (breakgame == 2) {
        console.log("Teste")
        image(game.gameoverImg, 100, 50, 1100, 500); 
        document.querySelector("#score").style.display = "none";
        // if(keyCode == ENTER) {
        //     breakgame = 1;
        // }

    }
    
}

function keyPressed() {
    if (keyCode == ENTER) {
        game.player.jump();
    }
    if (breakgame == 1 && keyCode == ENTER) {
        breakgame = 0;
        game.points = 10;
        goingBack();  
    }
    if (breakgame == 2 && keyCode === ENTER) {
        breakgame = 1;
        game.points = 10;
        goingBack();    
    }


}

function points() {
    game.points();
}
