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
    async start() {
        if(gamestate == 0) {
            player = new Player();
            var playercountref = await database.ref('playercount').once("value");
            if(playercountref.exists()) {
                playercount = playercountref.val();
                player.getCount();
            }
            
            form = new Form();
            form.display();
        }
    }
    play() {
        form.hide();
        textSize(30);
        text("Game Started", 120, 100);
        Player.getplayerinfo();
        if(allplayers != undefined) {
            var displayposition = 130;
            for(var p in allplayers) {
                if(p == "player"+ player.index) {
                    fill ("red");
                } else {
                    fill ("black");
                }
                displayposition += 20;
                textSize(15);
                text(allplayers[p].name+" : "+ allplayers[p].distance, 120, displayposition)
            }
        }
        if(keyIsDown(UP_ARROW) && player.index != null) {
            player.distance += 50;
            player.update();
        }
    }
}