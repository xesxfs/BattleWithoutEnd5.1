module iData {
	export module iSkill {
		export class ActiveSkillData extends iData.iSkill.SkillData {
			public type:string;
			public setList:Array<any>;
			public behaveFunction:Function;

			public constructor(param1:string,param2:string,type:string,param4:string,param5:Array<Array<iData.iItem.Stat>>,param6:Array<Array<iData.iItem.Stat>>,param7:Array<number>,setList:Array<any>,param9:Function,behave:Function = null)
			{
				super(param1,param2,param4,param5,param6,param7,param9);
				this.type = type;
				this.setList = setList;
				this.behaveFunction = behave;
			}

		}
	}
}

