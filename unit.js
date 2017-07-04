
Unit = Backbone.Model.extend(
{
	defaults:{
		name:"no name",
		atk:1,
		def:1,
		spd:1,
		satk:1,
		sdef:1,
		hp:1,
		acc:0.9,
		eva:0.5,
	},
	initialize:function(){
		this.listenTo(Game,'begin',this.begin)
		this.listenTo(Game,'end',this.end)
	},
	//Atacker Events
	begin:function(){
		console.log(this.get("name") +'Game begin Triggered')
	},
	getTarget:function(){},
	beforeAttack:function(){},
	BeforeAtackerDamageCalc:function(){},
	AfterAtackerDamageCalc:function(){},
	afterAttack:function(){},
	end:function(){
			console.log(this.get("name") +'Game End Triggered')
	},

	//Deffender Events
	onSelected_as_target:function(){},
	onSelected_for_target:function(){},
	beforeDeffens:function(){},
	BeforeDeffenderDamageCalc:function(){},
	AfterDeffenderDamageCalc:function(){},
	afterDefense:function(){},

})
var Attacker = new Unit({name:"Attacker"});
var Deffender = new Unit({name:"Deffender"});