function log(msj,color,bg)
{
	if (!bg) {bg = "white"}
		if (!color) {color = "black"}
	console.log('%c '+msj, 'background: '+bg+'; color: '+color+'');
}




var jugador = new Player(
	{equipo:[dex.pikachu,
			dex.pikachu,
			dex.pikachu,
			dex.pikachu,
			dex.pikachu,
			dex.pikachu]})

jugador.set({bg:"blue",color:"white"})

var enemy = new Player(
	{equipo:[dex.pikachu,
			dex.pikachu,
			dex.pikachu,
			dex.pikachu,
			dex.pikachu,
			dex.pikachu]})
enemy.set({bg:"red",color:"white"})

var game = new GAME({player:jugador,enemy:enemy});

var atacante
var defensor

// while(Game.isAlive())
var y = true;
while(game.isAlive())
{

	game.begin();
	game.sort();

for (var i = 0; i < game.get("monsters").length; i++) {
	if (game.isAlive()) 
	{
	atacante = game.getAttacker();
	defensor = atacante.getTarget();
	game.battlePhase(atacante,defensor);	
	}
	
}
// y = false;

}
		log("GAME END")

