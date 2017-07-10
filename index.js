function log(msj,color,bg)
{
	if (!bg) {bg = "white"}
		if (!color) {color = "black"}
	console.log('%c '+msj, 'background: '+bg+'; color: '+color+'');
}




var jugador = new Player(
	{equipo:[dex.pikachu,
			dex.bulbasaur,
			dex.charmander,
			dex.squirtle,
			dex.meowth,
			dex.dratini]})

var enemy = new Player(
	{equipo:[dex.chikorita,
			dex.totodile,
			dex.treecko,
			dex.blastoise,
			dex.mew,
			dex.pichu]})

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
	// game.get("monsters")[i]


	
	atacante = game.getAttacker();
	defensor = atacante.getTarget();
	// console.log(defensor)
	// defensor = defensor.onSelected_for_target();
	game.battlePhase(atacante,defensor);

	
}
// y = false;

}
