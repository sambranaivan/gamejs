
GAME = Backbone.Model.extend({
	defaults:{
		critic:1,
		atk_index:0,
		round:0,
		turns:0,
	},
	initialize:function(){
		console.log("game.init()");
		var monsters = new Team();
		
		
		this.get("player").get("team").each(function(model)
		{
			monsters.add(model)
		})
		this.get("enemy").get("team").each(function(model)
		{
			monsters.add(model)
		})



		this.get("player").setEnemy(this.get("enemy"))
		this.get("enemy").setEnemy(this.get("player"))


		this.set({monsters:monsters})

	
	},
	begin:function()
	{
	
		this.set({round:this.get("round")+1})
		log("ROUND "+this.get("round"),"white","black")
			
	},
	getAttacker:function(){

	},
	setDefaultVariables:function()
	{

	},
	damageCalc:function()
	{

	},
	end:function(){
		//trigger global begins of anoter monsters
		this.trigger("end");
	},
	isAlive:function()
	{
		if (this.get("player").isAlive() & this.get("enemy").isAlive()) 
		{
			return true;
		}
		else
		{
			return false;
		}
	},
	sort:function()
	{
		//update sort event
		log("Reordenar Monsters","green")
		this.get("monsters").comparator = function(monsters) {
						  return -monsters.get("spe"); 
						};
		this.get("monsters").sort();
		console.log(this.get("monsters").pluck("species"))
	},
	getAttacker:function()
	{
		this.set({turns:this.get("turns")+1})
		log("Select Attacker "+this.get("atk_index"));
		var atk = this.get("monsters").at(this.get("atk_index"));

		
		if (atk.get("owner") == this.get("player")) 
		{
			log(atk.getName(),"blue")
		}
		else
		{
			log(atk.getName(),"red")
		}
		// atk.end();
		this.nextAtk();
		return atk;

	},
	nextAtk:function(){
		var turn = this.get("atk_index");
		turn = turn +1;
		if (turn>11) 
			{
				turn = 0
			}
		this.set({atk_index:turn})

	},
	battlePhase:function(Attacker,defensor)
	{
		atk = Attacker.get("atk");
		satk = Attacker.get("spa");
		def = defensor.get("def");
		sdef = defensor.get("spd");

		if (atk>satk) 
		//el pkm es de tipo fisico
		{
			dmg = atk - def

		}
		else
		//el pkm es de tipo especial
		{ dmg = satk - sdef}

		dmg = Math.floor( dmg * 0.2);
		if (dmg<1) {dmg = 1}

		defensor.hpDmg(dmg)
	if (!defensor.isAlive()) 
	{
		log("!! "+defensor.getName()+" IS DEAD","red")
	}

	}
})

