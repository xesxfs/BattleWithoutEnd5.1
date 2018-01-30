module iData {
	export module iPet {
		export module iPetSkill {
			export class DefencePetSkillData extends iData.iPet.iPetSkill.PetSkillData {

				public constructor(name: string, realName: string, setList: Array<any>, behaveFunction: Function, desFunction: Function) {
					super(name, realName, setList, behaveFunction, desFunction);
				}

			}
		}
	}
}

