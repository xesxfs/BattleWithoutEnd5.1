module iData {
	export module iPet {
		export module iPetSkill {
			export class AttackPetSkillData extends iData.iPet.iPetSkill.PetSkillData {

				public constructor(name: string, realName: string, setList: Array<any>, beaFunction: Function, desFunction: Function) {
					super(name, realName, setList, beaFunction, desFunction);
				}

			}
		}
	}
}

