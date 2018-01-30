module iData {
	export module iSkill {
		export class SkillData {
			public name: string;
			public realName: string;
			public category: string;
			public statList: Array<Array<iData.iItem.Stat>>;
			public effectList: Array<Array<iData.iItem.Stat>>;
			public lvupCostList: Array<number>;
			public desFunction: Function;

			public constructor(name: string, realName: string, category: string, setList: Array<Array<iData.iItem.Stat>>, param5: Array<Array<iData.iItem.Stat>>, lvupCostList: Array<number>, desFunc: Function) {

				this.name = name;
				this.realName = realName;
				this.category = category;
				this.statList = setList;
				this.effectList = param5;
				this.lvupCostList = lvupCostList;
				this.desFunction = desFunc;
			}

		}
	}
}

