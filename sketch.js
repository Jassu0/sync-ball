var database, gamestate = 0, playercount;
var form, game, player;
var allplayers;
var cars, car1, car2, car3, car4;

function setup(){
    database = firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playercount == 4) {
        game.update(1);
    }
    if(gamestate == 1) {
        clear();
        game.play();
    }
}