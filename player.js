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
	},
	show:function(msg)
	{
		log(msg,this.get("color"),this.get("bg"))
	},
	getTargets:function()
	{
		//FILTRO PARA QUE NO ELIGAN A UN MUERTO COMO TARGET
		var filter = new Team();

		this.get("enemy").get("team").each(function(model,index,list)
		{
			if (model.get("hp")>0) 
			{
				filter.add(model)
			}
		})
		
		return filter;

	},
	win:function()
	{
		// alert("end")
	}


})



var Team = Backbone.Collection.extend({
	Model:Unit,

})

