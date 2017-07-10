var Player =  Backbone.Model.extend({
	defaults:{

	},
	initialize:function () 
	{
		
					var team = new Team()
					team.comparator = function(team) {
						  return -team.get("spe"); 
						};
				for (var i = 0; i < this.get("equipo").length; i++) {
					var u =  new Unit(this.get("equipo")[i]);
					u.set({owner:this})
					team.add(u)

				}
				this.set({team:team});
		
	},
	isAlive:function(){
		var team  = this.get("team");
		isAlive = false;
		team.each(function(model,index,list)
		{
			if (model.get("hp")>0) {isAlive=true}
		})
		return isAlive;
	},
	setEnemy:function(Player)
	{
		this.set({enemy:Player})
	}


})



var Team = Backbone.Collection.extend({
	Model:Unit,

})

