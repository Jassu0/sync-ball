class Player {
    constructor() {
        this.index = 0;
        this.name = null;
        this.distance = 0;
    }
    getCount() {
        var playercountref = database.ref('playercount');
        playercountref.on("value", function(data){
            playercount = data.val();
        })
    }
    updateCount(count) {
        database.ref('/').update({
            playercount: count
        })
    }
    update() {
        var playerindex = "players/player"+ playercount;
        database.ref(playerindex).set({
            name: name
        })
    }
}