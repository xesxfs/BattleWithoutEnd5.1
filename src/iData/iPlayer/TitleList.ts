module iData {
	export module iPlayer {
		export class TitleList {
			public static beginner: iData.iPlayer.Title;
			public static reborn: iData.iPlayer.Title;
			public static adult: iData.iPlayer.Title;
			public static all_knowing: iData.iPlayer.Title;
			public static old: iData.iPlayer.Title;
			public static who_reached_Lv_50_at_Age_10: iData.iPlayer.Title;
			public static wise: iData.iPlayer.Title;
			public static strong: iData.iPlayer.Title;
			public static skillfull: iData.iPlayer.Title;
			public static tough: iData.iPlayer.Title;
			public static lucky: iData.iPlayer.Title;
			public static beginner_forger: iData.iPlayer.Title;
			public static advanced_forger: iData.iPlayer.Title;
			public static expert_forger: iData.iPlayer.Title;
			public static god_blessed: iData.iPlayer.Title;
			public static who_experienced_death: iData.iPlayer.Title;
			public static who_transcended_death: iData.iPlayer.Title;
			public static breaker: iData.iPlayer.Title;
			public static terminator: iData.iPlayer.Title;
			public static killer: iData.iPlayer.Title;
			public static warlord: iData.iPlayer.Title;
			public static boss_slayer: iData.iPlayer.Title;
			public static butterfingers: iData.iPlayer.Title;
			public static weakness_discoverer: iData.iPlayer.Title;
			public static the_elemental_apprentice: iData.iPlayer.Title;
			public static the_elemental_master: iData.iPlayer.Title;
			public static the_sniper: iData.iPlayer.Title;
			public static master_of_combat: iData.iPlayer.Title;
			public static master_of_defence: iData.iPlayer.Title;
			public static master_of_counter: iData.iPlayer.Title;
			public static master_of_smash: iData.iPlayer.Title;
			public static master_of_magic: iData.iPlayer.Title;
			public static master_of_icebolt: iData.iPlayer.Title;
			public static master_of_firebolt: iData.iPlayer.Title;
			public static master_of_lightningbolt: iData.iPlayer.Title;
			public static master_of_criticalHit: iData.iPlayer.Title;
			public static master_of_blacksmithing: iData.iPlayer.Title;
			public static master_of_iceSpear: iData.iPlayer.Title;
			public static master_of_fireball: iData.iPlayer.Title;
			public static master_of_thunder: iData.iPlayer.Title;
			public static master_of_range: iData.iPlayer.Title;
			public static master_of_mirageMissle: iData.iPlayer.Title;
			public static master_of_corrosive: iData.iPlayer.Title;
			public static master_of_lifeDrain: iData.iPlayer.Title;
			public static master_of_manaShield: iData.iPlayer.Title;
			public static list: Array<iData.iPlayer.Title>;

			public constructor() {

			}

			public static add_fireball() {
				iGlobal.Player.addSkill(iData.iSkill.SkillDataList.FIREBALL);
			}

			public static add_ice_spear() {
				iGlobal.Player.addSkill(iData.iSkill.SkillDataList.ICE_SPEAR);
			}

			public static add_thunder() {
				iGlobal.Player.addSkill(iData.iSkill.SkillDataList.THUNDER);
			}

			public static add_mana_shield() {
				iGlobal.Player.addSkill(iData.iSkill.SkillDataList.MANA_SHIELD);
			}

			public static add_life_drain() {
				iGlobal.Player.addSkill(iData.iSkill.SkillDataList.LIFE_DRAIN);
			}

			public static add_corrosion() {
				iGlobal.Player.addSkill(iData.iSkill.SkillDataList.CORROSIVE_SHOT);
			}

			public static updateTitleInfo(name: string, max: number = 0, count: number = 0): any {
				switch (name) {
					case iData.iSkill.SkillDataList.BLACKSMITHING.name:
						iData.iPlayer.TitleList.master_of_blacksmithing.updateInfo();
						break;
					case iData.iSkill.SkillDataList.COMBAT_MASTERY.name:
						iData.iPlayer.TitleList.master_of_combat.updateInfo();
						break;
					case iData.iSkill.SkillDataList.COUNTERATTACK.name:
						iData.iPlayer.TitleList.master_of_counter.updateInfo();
						break;
					case iData.iSkill.SkillDataList.CRITICAL_HIT.name:
						iData.iPlayer.TitleList.master_of_criticalHit.updateInfo();
						break;
					case iData.iSkill.SkillDataList.DEFENCE.name:
						iData.iPlayer.TitleList.master_of_defence.updateInfo();
						break;
					case iData.iSkill.SkillDataList.FIREBOLT.name:
						iData.iPlayer.TitleList.master_of_firebolt.updateInfo();
						iData.iPlayer.TitleList.the_elemental_apprentice.updateInfo(0, 1);
						break;
					case iData.iSkill.SkillDataList.ICEBOLT.name:
						iData.iPlayer.TitleList.master_of_icebolt.updateInfo();
						iData.iPlayer.TitleList.the_elemental_apprentice.updateInfo(0, 1);
						break;
					case iData.iSkill.SkillDataList.LIGHTNINGBOLT.name:
						iData.iPlayer.TitleList.master_of_lightningbolt.updateInfo();
						iData.iPlayer.TitleList.the_elemental_apprentice.updateInfo(0, 1);
						break;
					case iData.iSkill.SkillDataList.MAGIC_MASTERY.name:
						iData.iPlayer.TitleList.master_of_magic.updateInfo();
						break;
					case iData.iSkill.SkillDataList.SMASH.name:
						iData.iPlayer.TitleList.master_of_smash.updateInfo();
						break;
					case iData.iSkill.SkillDataList.CORROSIVE_SHOT.name:
						iData.iPlayer.TitleList.master_of_corrosive.updateInfo();
						iData.iPlayer.TitleList.the_sniper.updateInfo(0, 1);
						break;
					case iData.iSkill.SkillDataList.RANGE_MASTERY.name:
						iData.iPlayer.TitleList.master_of_range.updateInfo();
						iData.iPlayer.TitleList.the_sniper.updateInfo(0, 1);
						break;
					case iData.iSkill.SkillDataList.MIRAGE_MISSILE.name:
						iData.iPlayer.TitleList.master_of_mirageMissle.updateInfo();
						iData.iPlayer.TitleList.the_sniper.updateInfo(0, 1);
						break;
					case iData.iSkill.SkillDataList.ICE_SPEAR.name:
						iData.iPlayer.TitleList.master_of_iceSpear.updateInfo();
						iData.iPlayer.TitleList.the_elemental_master.updateInfo(0, 1);
						break;
					case iData.iSkill.SkillDataList.FIREBALL.name:
						iData.iPlayer.TitleList.master_of_fireball.updateInfo();
						iData.iPlayer.TitleList.the_elemental_master.updateInfo(0, 1);
						break;
					case iData.iSkill.SkillDataList.THUNDER.name:
						iData.iPlayer.TitleList.master_of_thunder.updateInfo();
						iData.iPlayer.TitleList.the_elemental_master.updateInfo(0, 1);
						break;
					case iData.iSkill.SkillDataList.MANA_SHIELD.name:
						iData.iPlayer.TitleList.master_of_manaShield.updateInfo();
						break;
					case iData.iSkill.SkillDataList.LIFE_DRAIN.name:
						iData.iPlayer.TitleList.master_of_lifeDrain.updateInfo();
						break;
					case "age":
						iData.iPlayer.TitleList.adult.updateInfo(max);
						iData.iPlayer.TitleList.all_knowing.updateInfo(max);
						iData.iPlayer.TitleList.old.updateInfo(max);
						break;
					case "age10":
						iData.iPlayer.TitleList.who_reached_Lv_50_at_Age_10.updateInfo(max);
						break;
					case iData.iItem.Stat.str:
						iData.iPlayer.TitleList.strong.updateInfo(max);
						break;
					case iData.iItem.Stat.dex:
						iData.iPlayer.TitleList.skillfull.updateInfo(max);
						break;
					case iData.iItem.Stat.intelligence:
						iData.iPlayer.TitleList.wise.updateInfo(max);
						break;
					case iData.iItem.Stat.will:
						iData.iPlayer.TitleList.tough.updateInfo(max);
						break;
					case iData.iItem.Stat.luck:
						iData.iPlayer.TitleList.lucky.updateInfo(max);
						break;
					case "begin":
						iData.iPlayer.TitleList.beginner.updateInfo();
						break;
					case "reborn":
						iData.iPlayer.TitleList.reborn.updateInfo(0, 1);
						break;
					case "forge":
						iData.iPlayer.TitleList.beginner_forger.updateInfo(max, count);
						iData.iPlayer.TitleList.advanced_forger.updateInfo(max, count);
						iData.iPlayer.TitleList.expert_forger.updateInfo(max, count);
						iData.iPlayer.TitleList.god_blessed.updateInfo(max, count);
						break;
					case "endure":
						iData.iPlayer.TitleList.who_experienced_death.updateInfo(max);
						iData.iPlayer.TitleList.who_transcended_death.updateInfo(max);
						break;
					case "damage":
						iData.iPlayer.TitleList.breaker.updateInfo(max);
						iData.iPlayer.TitleList.terminator.updateInfo(max);
						iData.iPlayer.TitleList.killer.updateInfo(max, count);
						iData.iPlayer.TitleList.warlord.updateInfo(max, count);
						break;
					case "kill":
						iData.iPlayer.TitleList.boss_slayer.updateInfo(max, count);
						break;
					case "fail":
						iData.iPlayer.TitleList.butterfingers.updateInfo(max, count);
						break;
					case "crit":
						iData.iPlayer.TitleList.weakness_discoverer.updateInfo(max, count);
				}
			}

		}
	}
}

iData.iPlayer.TitleList.beginner = new iData.iPlayer.Title("the Beginner", "初心者", "欢迎来到战斗无止境的游戏世界", [new iData.iMonster.StatMul(iData.iItem.Stat.protection, 1, 1), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1, 5)]);
iData.iPlayer.TitleList.reborn = new iData.iPlayer.Title("the Reborn", "转生的", "在20岁后转生", [new iData.iMonster.StatMul(iData.iItem.Stat.str, 1, 6), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1, 6), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1, 6), new iData.iMonster.StatMul(iData.iItem.Stat.will, 1, 6), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1, 6)], 0, 1);
iData.iPlayer.TitleList.adult = new iData.iPlayer.Title("the Adult", "成年的", "达到18岁", [new iData.iMonster.StatMul(iData.iItem.Stat.will, 1, 15), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1, 3), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1, -5)], 18);
iData.iPlayer.TitleList.all_knowing = new iData.iPlayer.Title("the All-Knowing", "睿智的", "达到30岁", [new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1.1, 20), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1, 20), new iData.iMonster.StatMul(iData.iItem.Stat.will, 1, -30), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1, -5), new iData.iMonster.StatMul(iData.iItem.Stat.mp, 1, -5)], 30);
iData.iPlayer.TitleList.old = new iData.iPlayer.Title("the Old", "年老的", "达到40岁", [new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1.2, 35), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1, 10), new iData.iMonster.StatMul(iData.iItem.Stat.will, 1, -40), new iData.iMonster.StatMul(iData.iItem.Stat.str, 1, -5), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1, -10), new iData.iMonster.StatMul(iData.iItem.Stat.mp, 1, -10)], 40);
iData.iPlayer.TitleList.who_reached_Lv_50_at_Age_10 = new iData.iPlayer.Title("who Reached Lv 50 at Age 10 ", "10岁达到50级的", "在10岁时达到50级", [new iData.iMonster.StatMul(iData.iItem.Stat.str, 1.05, 20), new iData.iMonster.StatMul(iData.iItem.Stat.will, 1.05, 10), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1, -20), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1, -20), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1, 10)], 50);
iData.iPlayer.TitleList.wise = new iData.iPlayer.Title("the Wise", "聪明的", "智力超过200", [new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1.1, 20)], 200);
iData.iPlayer.TitleList.strong = new iData.iPlayer.Title("the Strong", "强壮的", "力量超过200", [new iData.iMonster.StatMul(iData.iItem.Stat.str, 1.1, 20)], 200);
iData.iPlayer.TitleList.skillfull = new iData.iPlayer.Title("the Skillful", "灵巧的", "敏捷超过200", [new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1.1, 20)], 200);
iData.iPlayer.TitleList.tough = new iData.iPlayer.Title("the Tough", "坚强的", "意志超过200", [new iData.iMonster.StatMul(iData.iItem.Stat.will, 1.1, 20)], 200);
iData.iPlayer.TitleList.lucky = new iData.iPlayer.Title("the Lucky", "幸运的", "幸运超过200", [new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1.1, 20)], 200);
iData.iPlayer.TitleList.beginner_forger = new iData.iPlayer.Title("the Beginner Forger", "初级铁匠", "强化出+5的装备", [new iData.iMonster.StatMul(iData.iItem.Stat.str, 1, 10), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1, 10), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1, -10), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1, -10)], 5);
iData.iPlayer.TitleList.advanced_forger = new iData.iPlayer.Title("the Advanced Forger", "进阶铁匠", "强化出+8的装备", [new iData.iMonster.StatMul(iData.iItem.Stat.str, 1.05, 15), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1.05, 15), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 0.95, -15), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 0.95, -15)], 8);
iData.iPlayer.TitleList.expert_forger = new iData.iPlayer.Title("the Expert Forger", "专业铁匠", "强化出+12的装备", [new iData.iMonster.StatMul(iData.iItem.Stat.str, 1.1, 20), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1.1, 20), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 0.9, -20), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 0.9, -20)], 12);
iData.iPlayer.TitleList.god_blessed = new iData.iPlayer.Title("the God blessed", "上帝保佑的", "强化出+15的装备", [new iData.iMonster.StatMul(iData.iItem.Stat.str, 1.2, 30), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1.2, 30), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 0.8, -30), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 0.8, -30)], 15);
iData.iPlayer.TitleList.who_experienced_death = new iData.iPlayer.Title("who Experienced Death", "经历死亡的", "一次承受了超过500点伤害", [new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1.05, 50), new iData.iMonster.StatMul(iData.iItem.Stat.protection, 1, 5), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1, -30), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1, -30)], 500);
iData.iPlayer.TitleList.who_transcended_death = new iData.iPlayer.Title("who Transcended Death", "超越死亡的", "一次承受了超过1000点伤害", [new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1.1, 80), new iData.iMonster.StatMul(iData.iItem.Stat.protection, 1.05, 8), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1, -20), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1, -20)], 1000);
iData.iPlayer.TitleList.breaker = new iData.iPlayer.Title("the Breaker", "破坏者", "一次造成了500点伤害", [new iData.iMonster.StatMul(iData.iItem.Stat.str, 1.05, 20), new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 1, 10), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1, -30), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1, -20)], 500);
iData.iPlayer.TitleList.terminator = new iData.iPlayer.Title("the Terminator", "终结者", "一次造成了1000点伤害", [new iData.iMonster.StatMul(iData.iItem.Stat.str, 1.1, 30), new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 1.05, 20), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1, -20), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1, -15)], 1000);
iData.iPlayer.TitleList.killer = new iData.iPlayer.Title("the Killer", "杀手", "总计造成10万伤害", [new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1.05, 30), new iData.iMonster.StatMul(iData.iItem.Stat.defence, 1.05, 10)], 0, 100000);
iData.iPlayer.TitleList.warlord = new iData.iPlayer.Title("the Warlord", "战神", "总计造成100万伤害", [new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1.1, 50), new iData.iMonster.StatMul(iData.iItem.Stat.defence, 1.1, 15)], 0, 1000000);
iData.iPlayer.TitleList.boss_slayer = new iData.iPlayer.Title("the Boss Slayer", "Boss屠戮者", "击败100个boss", [new iData.iMonster.StatMul(iData.iItem.Stat.protectionIgnore, 1, 5), new iData.iMonster.StatMul(iData.iItem.Stat.protectionReduce, 1, 3)], 0, 100);
iData.iPlayer.TitleList.butterfingers = new iData.iPlayer.Title("the Butterfingers", "手划的", "强化装备时连续失败4次", [new iData.iMonster.StatMul(iData.iItem.Stat.protection, 1, 10), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1, -20), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1, -20)], 0, 4);
iData.iPlayer.TitleList.weakness_discoverer = new iData.iPlayer.Title("the Weakness Discoverer", "弱点观察者", "连续7次暴击", [new iData.iMonster.StatMul(iData.iItem.Stat.crit, 1.1, 20), new iData.iMonster.StatMul(iData.iItem.Stat.crit_mul, 1.05, 30)], 0, 7);
iData.iPlayer.TitleList.the_elemental_apprentice = new iData.iPlayer.Title("the Elemental Apprentice", "初级元素师", "冰矛、火焰、雷矢都达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.mp, 1.1, 100), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1.1, 30), new iData.iMonster.StatMul(iData.iItem.Stat.magicDamage, 1.1, 10), new iData.iMonster.StatMul(iData.iItem.Stat.str, 0.8, -20), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 0.9, -30)], 0, 3);
iData.iPlayer.TitleList.the_elemental_master = new iData.iPlayer.Title("the Elemental Master", "大师元素师", "冰刃、火球、雷击都达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.mp, 1.2, 200), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1.2, 50), new iData.iMonster.StatMul(iData.iItem.Stat.magicDamage, 1.15, 15), new iData.iMonster.StatMul(iData.iItem.Stat.str, 0.7, -30), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 0.8, -60), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 0.9, -30), new iData.iMonster.StatMul(iData.iItem.Stat.protection, 1, 3)], 0, 3);
iData.iPlayer.TitleList.the_sniper = new iData.iPlayer.Title("the Sniper", "狙击者", "远程精通、毒箭、破甲箭都达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1.2, 30), new iData.iMonster.StatMul(iData.iItem.Stat.crit, 1.2, 20)], 0, 3);
iData.iPlayer.TitleList.master_of_combat = new iData.iPlayer.Title("the Combat Master", "近战大师", "近战精通达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1, 50), new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 1.2), new iData.iMonster.StatMul(iData.iItem.Stat.str, 1, 20), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 0.8, -20), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1, -20)], 0, 0, iData.iPlayer.TitleList.add_life_drain);
iData.iPlayer.TitleList.master_of_defence = new iData.iPlayer.Title("the Master of Defence", "防御大师", "防御达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1.1, 100), new iData.iMonster.StatMul(iData.iItem.Stat.defence, 1, 20), new iData.iMonster.StatMul(iData.iItem.Stat.protection, 1, 10), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 0.9, -10), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1, -10)]);
iData.iPlayer.TitleList.master_of_counter = new iData.iPlayer.Title("the Master of Counter", "反击大师", "反击达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.mp, 1, -30), new iData.iMonster.StatMul(iData.iItem.Stat.str, 1, -20), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1, 20), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1.1, 20)]);
iData.iPlayer.TitleList.master_of_smash = new iData.iPlayer.Title("the Master of Smash", "重击大师", "重击达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.str, 1.2, 20), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1, -20), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1, 20), new iData.iMonster.StatMul(iData.iItem.Stat.protection, 1, -10)]);
iData.iPlayer.TitleList.master_of_magic = new iData.iPlayer.Title("the Magic Master", "魔法大师", "魔法精通达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.mp, 1.1, 50), new iData.iMonster.StatMul(iData.iItem.Stat.magicDamage, 1, 5)], 0, 0, iData.iPlayer.TitleList.add_mana_shield);
iData.iPlayer.TitleList.master_of_icebolt = new iData.iPlayer.Title("the Master of Icebolt", "冰矛大师", "冰矛达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.mp, 1.1, 20), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1.1, 15), new iData.iMonster.StatMul(iData.iItem.Stat.str, 0.9, -20), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1, 15)], 0, 0, iData.iPlayer.TitleList.add_ice_spear);
iData.iPlayer.TitleList.master_of_firebolt = new iData.iPlayer.Title("the Master of Firebolt", "火焰大师", "火焰达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.mp, 1.1, 30), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1.1, 15), new iData.iMonster.StatMul(iData.iItem.Stat.str, 0.9, -10), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1, 15), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1, -10)], 0, 0, iData.iPlayer.TitleList.add_fireball);
iData.iPlayer.TitleList.master_of_lightningbolt = new iData.iPlayer.Title("the Master of Lightning Bolt", "雷矢大师", "雷矢达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.mp, 1.1, 30), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 0.9, -30), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1.1, 15), new iData.iMonster.StatMul(iData.iItem.Stat.str, 1, 10), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1, -10)], 0, 0, iData.iPlayer.TitleList.add_thunder);
iData.iPlayer.TitleList.master_of_criticalHit = new iData.iPlayer.Title("the Master of Critical Hit", "暴击大师", "暴击达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1, 30), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 0.9, -10), new iData.iMonster.StatMul(iData.iItem.Stat.protection, 1, -5), new iData.iMonster.StatMul(iData.iItem.Stat.will, 1.2, 30), new iData.iMonster.StatMul(iData.iItem.Stat.crit_mul, 1, 50)]);
iData.iPlayer.TitleList.master_of_blacksmithing = new iData.iPlayer.Title("the Master of Blacksmithing", "锻造大师", "铁匠达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1, -30), new iData.iMonster.StatMul(iData.iItem.Stat.mp, 1, -30), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1, 30), new iData.iMonster.StatMul(iData.iItem.Stat.will, 1, 10), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1.1, 20)]);
iData.iPlayer.TitleList.master_of_iceSpear = new iData.iPlayer.Title("the Master of Ice Spear", "冰刃大师", "冰刃达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.mp, 1.2, 30), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1.3, 25), new iData.iMonster.StatMul(iData.iItem.Stat.str, 0.8, -20), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 0.9), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1, 25), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1, 20)]);
iData.iPlayer.TitleList.master_of_fireball = new iData.iPlayer.Title("the Master of Fireball", "火球大师", "火球达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.mp, 1.2, 30), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1.2, 15), new iData.iMonster.StatMul(iData.iItem.Stat.str, 1.1, 10), new iData.iMonster.StatMul(iData.iItem.Stat.will, 0.8, -10), new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1, -20), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1, -20)]);
iData.iPlayer.TitleList.master_of_thunder = new iData.iPlayer.Title("the Master of Thunder", "雷击大师", "雷击达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.mp, 1.2, 30), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1, 15), new iData.iMonster.StatMul(iData.iItem.Stat.will, 1.2, 30), new iData.iMonster.StatMul(iData.iItem.Stat.str, 0.8, -15)]);
iData.iPlayer.TitleList.master_of_range = new iData.iPlayer.Title("the Master of Range", "远程大师", "远程精通达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1.2, 30), new iData.iMonster.StatMul(iData.iItem.Stat.str, 0.9, -25), new iData.iMonster.StatMul(iData.iItem.Stat.will, 1, -30), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1, 25)], 0, 0, iData.iPlayer.TitleList.add_corrosion);
iData.iPlayer.TitleList.master_of_mirageMissle = new iData.iPlayer.Title("the Master of Mirage Missle", "毒箭大师", "毒箭达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1.1, 20), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1, 25), new iData.iMonster.StatMul(iData.iItem.Stat.str, 1, -20), new iData.iMonster.StatMul(iData.iItem.Stat.will, 1, -15), new iData.iMonster.StatMul(iData.iItem.Stat.mp, 1, 30)]);
iData.iPlayer.TitleList.master_of_corrosive = new iData.iPlayer.Title("the Master of Corrosion", "破甲大师", "破甲箭达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.dex, 1.3, 35), new iData.iMonster.StatMul(iData.iItem.Stat.will, 1, 25), new iData.iMonster.StatMul(iData.iItem.Stat.str, 0.8, -20), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1, -35), new iData.iMonster.StatMul(iData.iItem.Stat.mp, 1, 50)]);
iData.iPlayer.TitleList.master_of_lifeDrain = new iData.iPlayer.Title("the Life Drain Master", "吸血大师", "吸血达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1.2, 50), new iData.iMonster.StatMul(iData.iItem.Stat.str, 1.1, 25), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 0.8, -20), new iData.iMonster.StatMul(iData.iItem.Stat.luck, 1, -20)]);
iData.iPlayer.TitleList.master_of_manaShield = new iData.iPlayer.Title("the Mana Shield Master", "魔法盾大师", "魔法盾达到Rank 1", [new iData.iMonster.StatMul(iData.iItem.Stat.mp, 1.2, 50), new iData.iMonster.StatMul(iData.iItem.Stat.intelligence, 1, 25), new iData.iMonster.StatMul(iData.iItem.Stat.str, 0.9, -10)]);
iData.iPlayer.TitleList.list = [iData.iPlayer.TitleList.beginner, iData.iPlayer.TitleList.reborn, iData.iPlayer.TitleList.adult, iData.iPlayer.TitleList.all_knowing, iData.iPlayer.TitleList.old, iData.iPlayer.TitleList.who_reached_Lv_50_at_Age_10, iData.iPlayer.TitleList.wise, iData.iPlayer.TitleList.strong, iData.iPlayer.TitleList.skillfull, iData.iPlayer.TitleList.tough, iData.iPlayer.TitleList.lucky, iData.iPlayer.TitleList.beginner_forger, iData.iPlayer.TitleList.advanced_forger, iData.iPlayer.TitleList.expert_forger, iData.iPlayer.TitleList.god_blessed, iData.iPlayer.TitleList.who_experienced_death, iData.iPlayer.TitleList.who_transcended_death, iData.iPlayer.TitleList.breaker, iData.iPlayer.TitleList.terminator, iData.iPlayer.TitleList.killer, iData.iPlayer.TitleList.warlord, iData.iPlayer.TitleList.boss_slayer, iData.iPlayer.TitleList.butterfingers, iData.iPlayer.TitleList.weakness_discoverer, iData.iPlayer.TitleList.the_elemental_apprentice, iData.iPlayer.TitleList.the_elemental_master, iData.iPlayer.TitleList.the_sniper, iData.iPlayer.TitleList.master_of_blacksmithing, iData.iPlayer.TitleList.master_of_combat, iData.iPlayer.TitleList.master_of_counter, iData.iPlayer.TitleList.master_of_criticalHit, iData.iPlayer.TitleList.master_of_defence, iData.iPlayer.TitleList.master_of_firebolt, iData.iPlayer.TitleList.master_of_icebolt, iData.iPlayer.TitleList.master_of_lightningbolt, iData.iPlayer.TitleList.master_of_magic, iData.iPlayer.TitleList.master_of_smash, iData.iPlayer.TitleList.master_of_range, iData.iPlayer.TitleList.master_of_mirageMissle, iData.iPlayer.TitleList.master_of_corrosive, iData.iPlayer.TitleList.master_of_fireball, iData.iPlayer.TitleList.master_of_iceSpear, iData.iPlayer.TitleList.master_of_thunder, iData.iPlayer.TitleList.master_of_manaShield, iData.iPlayer.TitleList.master_of_lifeDrain];
