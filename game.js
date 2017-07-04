
GAME = Backbone.Model.extend({
	defaults:{
		critic:1,
	},
	initialize:function(){
		console.log("game.init()")
	
	},
	begin:function()
	{
		// trigger global begins of anoter monsters
		this.trigger("begin")		
	},
	getAttacker:function(){

	},
	battlePhase:function(){
			Game.setDefaultVariables()

			Attacker.BeforeAtackerDamageCalc()
			Deffender.BeforeDeffenderDamageCalc()

			Game.damageCalc()

			Deffender.AfterDeffenderDamageCalc()
			Attacker.AfterAtackerDamageCalc()
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
	}
})


var Game = new GAME();