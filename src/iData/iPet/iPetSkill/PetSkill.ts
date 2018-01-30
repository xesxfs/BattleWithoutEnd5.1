module iData {
	export module iPet {
		export module iPetSkill {
			export class PetSkill {
				public skillData: iData.iPet.iPetSkill.PetSkillData;
				public level: number = 0;

				public constructor(skillData: iData.iPet.iPetSkill.PetSkillData) {


					this.skillData = skillData;
					this.level = Math.random() * 2;
				}

				public static load(petSkillStr: string): iData.iPet.iPetSkill.PetSkill {
					var _loc3_: iData.iPet.iPetSkill.PetSkill = <any>null;
					var _loc2_: Array<any> = petSkillStr.split("$");
					var _loc4_: number = 0;
					while (_loc4_ < iData.iPet.iPetSkill.PetSkillList.list.length) {
						if (iData.iPet.iPetSkill.PetSkillList.list[_loc4_].name == _loc2_[0]) {
							_loc3_ = new iData.iPet.iPetSkill.PetSkill(iData.iPet.iPetSkill.PetSkillList.list[_loc4_]);
						}
						_loc4_++;
					}
					_loc3_.level = _loc2_[1];
					return _loc3_;
				}

				public getName(): string {
					if (this.level) {
						return "Advanced " + this.skillData.name;
					}
					return this.skillData.name;
				}

				public getRealName(): string {
					if (this.level) {
						return "进阶" + this.skillData.realName;
					}
					return this.skillData.realName;
				}

				public getSetArray(): Array<any> {
					if (this.level) {
						return this.skillData.setList[1];
					}
					return this.skillData.setList[0];
				}

				public save(): string {
					var _loc1_: string = "";
					_loc1_ = _loc1_ + (this.skillData.name + "$" + this.level);
					return _loc1_;
				}

			}
		}
	}
}

