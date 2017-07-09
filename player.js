var Player =  Backbone.Model.extend({
	defaults:{

	},
	initialize:function () 
	{
		
					var team = new Team()
					team.comparator = 'spe';
				for (var i = 0; i < this.get("equipo").length; i++) {
					var u =  new Unit(this.get("equipo")[i]);
					u.set({owner:this})
					team.add(u)

				}
				this.set({team:team});
		
	},
	isAlive:function(){
		var team  = this.get("team");

		team.each(function(model,index,list){

		})
	}


})



var Team = Backbone.Collection.extend({
	Model:Unit,

})



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



jugador.isAlive();