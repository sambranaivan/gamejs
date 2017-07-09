
Unit = Backbone.Model.extend(
{
///////////////////////DEfaults////////////////////A/////////////////////////A
	defaults:{
		species:"Default",
		acc:0.9,
		eva:0.5,
		lvl:0,
	},
/////////////////////////INITIALIZE/////////////////////////A
	initialize:function(){
		//bind events
		//Aplicar Habilidades
		var t = this
		// _.extend(t,this.get("hab"))
		//Aplicar Stats Originales
		_.extend(t.attributes,this.get("baseStats"))
		this.set({type:this.get("types")[0]});

		//Event Listeners
		this.on("change:hp",function(event){
			console.log(this.previous("hp")+"-->"+this.get("hp"))
		})

		// console.log(this)
	},

//////////////////////////////GETTER Y SETTERS/////
	getName:function(){
		return this.get("species")
	},

/////////////////////////Atacker Events////////////////////////////////////
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

/////////////////////////ADeffender Events/////////////////////////A
	onSelected_as_target:function(){},
	onSelected_for_target:function(){},
	beforeDeffens:function(){},
	BeforeDeffenderDamageCalc:function(){},
	AfterDeffenderDamageCalc:function(){},
	afterDefense:function(){},

///////////////////////////modifiers/////////////////////////A
	hpUp:function(porc)
	{
		
		this.set({hp:(this.get("stats").hp * (1+(porc/100)))})
	}

})



