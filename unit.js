
var Unit = Backbone.Model.extend(
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
		this.set({type:this.get("types")[0]})

		// _.extend(t,this.get("hab"))


		// _.extend(t.attributes,this.get("stats"))


		// this.listenTo(Game,'begin',this.begin)
		// this.listenTo(Game,'end',this.end)



		//Event Listeners
		this.on("change:hp",function(event){
			console.log(this.previous("hp")+"-->"+this.get("hp"))
			if(this.get("hp")<0)
			{
				if (!this.get("owner").isAlive()) 
				{
					this.get("owner").get("enemy").win();
				}
			}

		})

		// console.log(this)
	},

//////////////////////////////GETTER Y SETTERS/////
	getName:function(){
		return this.get("species")
	},

/////////////////////////Atacker Events////////////////////////////////////
	begin:function(){
		// console.log(this.get("name") +' Game begin')
		// this.getN
	},
	getTarget:function(){
		///funcion que determina a cual enemigo atacar
		equipo_enemigo = this.get("owner").getTargets();
		///por defecto usemos atacar al que tiene mas vida
		equipo_enemigo.comparator = "hp"
		equipo_enemigo.sort();
		var target = equipo_enemigo.last()
		target.show("Deffender:")
		// log(this.getName()+" selecciona a "+target.getName()+" enemigo para ataque")
		return target

	},
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
		
		this.set({hp:(this.get("baseStats").hp * (1+(porc/100)))})
	},
	hpDmg:function(dmg)
	{
		log("Apply damage "+dmg)
		this.set({hp:(this.get("hp") - dmg)})


	},
	isAlive:function()
	{
		if (this.get("hp")>0) {
			return true
		}
		else
		{
			log(this.getName()+" is Dead",this.get("owner").get("bg"))
			return false
		}
	},
	show:function(msg)
	{
		this.get("owner").show(msg+" "+this.getName()+" hp:"+this.get("hp"));
	}

})

