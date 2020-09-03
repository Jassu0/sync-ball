var database, gamestate = 0, playercount;
var form, game, player;
var allplayers;
function setup(){
    database = firebase.database();
    createCanvas(500,500);
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