class Game {
    constructor() {
    }
    getState() {
        var gameStateref = database.ref('gamestate');
        gameStateref.on("value",function(data){
            gamestate = data.val();
        })
    }
    update(state) {
        database.ref('/').update({
            gamestate: state
        });
    }
    start() {
        if(gamestate == 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}