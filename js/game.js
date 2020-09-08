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
        car1 = createSprite(100, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);
        cars = [car1, car2, car3, car4];
    }
    play() {
        form.hide();
        textSize(30);
        text("Game Started", 120, 100);
        Player.getplayerinfo();
        if(allplayers != undefined) {
            var index = 0;
            var x = 0;
            var y;
            for(var p in allplayers) {
                index += 1;
                x += 200;
                y = displayHeight-allplayers[p].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                if(index == player.index) {
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
            }
        }
        if(keyIsDown(UP_ARROW) && player.index != null) {
            player.distance += 50;
            player.update();
        }
        drawSprites();
    }
}