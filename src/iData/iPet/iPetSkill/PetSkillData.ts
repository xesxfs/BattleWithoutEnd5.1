module iData {
	export module iPet {
		export module iPetSkill {
			export class PetSkillData {
				public setList: Array<any>;
				public name: string;
				public realName: string;
				public behaveFunction: Function;
				public desFunction: Function;

				public constructor(name: string, realName: string, setList: Array<any>, behaveFunction: Function, desFunction: Function) {

					this.setList = setList;
					this.name = name;
					this.realName = realName;
					this.behaveFunction = behaveFunction;
					this.desFunction = desFunction;
				}

			}
		}
	}
}

