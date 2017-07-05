
UNIT = Backbone.Model.extend(
{
	defaults:{
		name:"Default",
		acc:0.9,
		eva:0.5,
	},
	initialize:function(){
		//bind events
		var t = this
		_.extend(t,this.get("hab"))


		_.extend(t.attributes,this.get("stats"))


		// this.listenTo(Game,'begin',this.begin)
		// this.listenTo(Game,'end',this.end)


		this.on("change:hp",function(event){
			console.log(this.previous("hp")+"-->"+this.get("hp"))
		})
	},
	//Atacker Events
	begin:function(){
		console.log(this.get("name") +' Game begin Triggered')
	},
	getTarget:function(){},
	beforeAttack:function(){},
	BeforeAtackerDamageCalc:function(){},
	AfterAtackerDamageCalc:function(){},
	afterAttack:function(){},
	end:function(){
			console.log(this.get("name") +' Game End Triggered')
	},

	//Deffender Events
	onSelected_as_target:function(){},
	onSelected_for_target:function(){},
	beforeDeffens:function(){},
	BeforeDeffenderDamageCalc:function(){},
	AfterDeffenderDamageCalc:function(){},
	afterDefense:function(){},


	////modifiers 
	hpUp:function(porc)
	{
		
		this.set({hp:(this.get("stats").hp * (1+(porc/100)))})
	}

})

TEAM = Backbone.Collection.extend(
	{
		model:UNIT,
		initialize:function () 
		{
			this.on("add",function(model){
				console.log("add "+model.get("name")+" ")
			})
		}
	})



var Attacker = new UNIT(dex.vaporeon);
var Deffender = new UNIT(dex.default);