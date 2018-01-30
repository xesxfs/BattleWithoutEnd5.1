module iData {
	export module iSkill {
		export class Skill {
			public level: number = 0;
			public skillData: iData.iSkill.SkillData;

			public constructor(data: iData.iSkill.SkillData) {

				this.skillData = data;
				this.level = 0;
			}

			public static load(skillStr: string): iData.iSkill.Skill {
				var skill: iData.iSkill.Skill = null;
				var arr: Array<string> = skillStr.split("#");
				var i: number = 0;
				while (i < iData.iSkill.SkillDataList.list.length) {
					if (iData.iSkill.SkillDataList.list[i].name == arr[1]) {
						if (iData.iSkill.SkillDataList.list[i] instanceof iData.iSkill.PassiveSkillData) {

							skill = new iData.iSkill.PassiveSkill(iData.iSkill.SkillDataList.list[i] as iData.iSkill.PassiveSkillData);
						}
						else {

							skill = new iData.iSkill.ActiveSkill(iData.iSkill.SkillDataList.list[i] as iData.iSkill.ActiveSkillData);
						}
						break;
					}
					i++;
				}
				skill.level = parseInt(arr[0]);
				return skill;
			}

			public getDescription(): string {
				if (this.skillData.desFunction) {
					return this.skillData.desFunction(this);
				}
				return "no function";
			}

			public levelup() {
				iGlobal.Player.addAp(-this.skillData.lvupCostList[this.level + 1]);
				this.level++;
				MainScene.allInfoPanel.addText("<font color=\'#FF4040\'>Skill " + this.skillData.name + " level up to " + (15 - this.level).toString(16).toUpperCase() + "!</font>.");
				if (this.level == 14) {
					iData.iPlayer.TitleList.updateTitleInfo(this.skillData.name);
				}
			}

			public canLevelup(): boolean {
				if (this.level >= 14) {
					return false;
				}
				if (this.skillData.lvupCostList[this.level + 1] > iGlobal.Player.ap) {
					return false;
				}
				return true;
			}

			public save(): string {
				var savestr: string = "";
				savestr = savestr + (this.level + "#" + this.skillData.name);
				return savestr;
			}

		}
	}
}

