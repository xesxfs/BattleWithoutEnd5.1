module iData {
	export module iSkill {
		export class SkillCategory {
			public static ALL: string;
			public static MELEE: string;
			public static RANGED: string;
			public static MAGIC: string;

			public constructor() {

			}

		}
	}
}

iData.iSkill.SkillCategory.ALL = "all";
iData.iSkill.SkillCategory.MELEE = "melee";
iData.iSkill.SkillCategory.RANGED = "ranged";
iData.iSkill.SkillCategory.MAGIC = "magic";
