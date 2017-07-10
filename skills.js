var skill = {};


skill.waterAbsorb =
{
	//definicion de variables internas

	//definicion de comportamiento
	afterDeffense:function () 
	{
		if (Attacker.Type("Water")) 
		{
			console.log("!Absorber Agua");
			this.hpUp(25);
		}
	},

	///
} 

skill.pararrayos =
{
	onSelected_as_target()
	{
		if (this.team.filter({type:"thunder"})) {}
	}
}