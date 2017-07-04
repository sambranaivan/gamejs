var skill = {};


skill.waterAbsorb =
{
	//definicion de variables internas

	//definision de comportamiento
	afterDeffense:function () 
	{
		if (Attacker.Type("Water")) 
		{
			console.log("!Absorber Agua");
			this.HpUp(25);
		}
	},

	end:function(){
		this.hpUp(25);
		console.log("Override end function for waterAbsorb")
	}
	///
} 