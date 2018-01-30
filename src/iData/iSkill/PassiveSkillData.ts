module iData {
	export module iSkill {
		export class PassiveSkillData extends iData.iSkill.SkillData {

			public constructor(param1:string,param2:string,param3:string,param4:Array<Array<iData.iItem.Stat>>,param5:Array<Array<iData.iItem.Stat>>,param6:Array<number>,param7:Function)
			{
				super(param1,param2,param3,param4,param5,param6,param7);
			}

		}
	}
}
