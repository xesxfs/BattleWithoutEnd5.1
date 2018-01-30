module iData {
	export module iSkill {
		export class SkillDataList {
			public static COMBAT_MASTERY: iData.iSkill.PassiveSkillData;
			public static SMASH: iData.iSkill.ActiveSkillData;
			public static CRITICAL_HIT: iData.iSkill.PassiveSkillData;
			public static BLACKSMITHING: iData.iSkill.PassiveSkillData;
			public static DEFENCE: iData.iSkill.ActiveSkillData;
			public static COUNTERATTACK: iData.iSkill.ActiveSkillData;
			public static MAGIC_MASTERY: iData.iSkill.PassiveSkillData;
			public static FIREBOLT: iData.iSkill.ActiveSkillData;
			public static ICEBOLT: iData.iSkill.ActiveSkillData;
			public static LIGHTNINGBOLT: iData.iSkill.ActiveSkillData;
			public static FIREBALL: iData.iSkill.ActiveSkillData;
			public static THUNDER: iData.iSkill.ActiveSkillData;
			public static ICE_SPEAR: iData.iSkill.ActiveSkillData;
			public static MANA_SHIELD: iData.iSkill.ActiveSkillData;
			public static RANGE_MASTERY: iData.iSkill.PassiveSkillData;
			public static MIRAGE_MISSILE: iData.iSkill.ActiveSkillData;
			public static CORROSIVE_SHOT: iData.iSkill.ActiveSkillData;
			public static LIFE_DRAIN: iData.iSkill.ActiveSkillData;
			public static list: Array<iData.iSkill.SkillData>;

			public constructor() {
				
			}

			public static behave_smash(param1: iData.iSkill.ActiveSkill): boolean {
				//这里
				var _loc2_: Array<any> = (param1.skillData as iData.iSkill.ActiveSkillData).setList;
				var _loc3_: number = iData.iSkill.SkillDataList.getCritMul();
				var _loc4_: number = (iGlobal.Player.attack * _loc3_ * _loc2_[param1.level] / 100 - iData.iSkill.SkillDataList.monster.defence) * iData.iSkill.SkillDataList.monsterPro;
				if (_loc4_ < 1) {
					_loc4_ = 1;
				}
				MainScene.battle.monsterHp = MainScene.battle.monsterHp - _loc4_;
				iData.iSkill.SkillDataList.traceAttackInfo(param1.skillData.realName, _loc4_, _loc3_);
				return true;
			}

			public static behave_life_drain(param1: iData.iSkill.ActiveSkill): boolean {
				//这里
				var _loc2_: Array<any> = (param1.skillData as iData.iSkill.ActiveSkillData).setList;
				if (MainScene.battle.playerMp < _loc2_[param1.level][0]) {
					return false;
				}
				MainScene.battle.playerMp = MainScene.battle.playerMp - _loc2_[param1.level][0];
				var critMul: number = iData.iSkill.SkillDataList.getCritMul();
				var monlostHp: number = (iGlobal.Player.attack * critMul * (1 + _loc2_[param1.level][1] * iGlobal.Player.str) - iData.iSkill.SkillDataList.monster.defence) * iData.iSkill.SkillDataList.monsterPro;
				if (monlostHp < 1) {
					monlostHp = 1;
				}
				MainScene.battle.monsterHp = MainScene.battle.monsterHp - monlostHp;
				var lostHp: number = monlostHp * _loc2_[param1.level][2] / 100;
				if (iGlobal.Player.hp - MainScene.battle.playerHp < lostHp) {
					lostHp = iGlobal.Player.hp - MainScene.battle.playerHp;
				}
				MainScene.battle.playerHp = MainScene.battle.playerHp + lostHp;
				iData.iSkill.SkillDataList.traceAttackInfo(param1.skillData.realName, monlostHp, critMul);
				MainScene.allInfoPanel.addText("你回复了 <font color=\'" + iData.iItem.Equipment.GREEN + "\'>" + lostHp + " hp!</font>", iGlobal.Global.battle);
				return true;
			}

			public static behave_defence(param1: iData.iSkill.ActiveSkill): boolean {
				//这里
				var _loc2_: Array<any> = (param1.skillData as iData.iSkill.ActiveSkillData).setList;
				var _loc3_: number = iData.iSkill.SkillDataList.monster.crit - iGlobal.Player.protection * 2;
				if (_loc3_ > iData.iSkill.SkillDataList.CR) {
					_loc3_ = iData.iSkill.SkillDataList.CR;
				}
				var _loc4_: number = <any>1;
				if (Math.random() * 100 < _loc3_) {
					_loc4_ = iData.iSkill.SkillDataList.monster.crit_mul / 100;
				}
				var _loc5_: number = (iData.iSkill.SkillDataList.monster.attack * _loc4_ - iGlobal.Player.defence - _loc2_[param1.level][0]) * (1 - iData.iSkill.SkillDataList.caculateProtection(iGlobal.Player.protection * _loc2_[param1.level][2] + _loc2_[param1.level][1]));
				if (_loc5_ < 1) {
					_loc5_ = 1;
				}
				MainScene.battle.playerHp = MainScene.battle.playerHp - _loc5_;
				if (_loc4_ > 1) {
					MainScene.allInfoPanel.addText("你<font color=\'#ff4040\'>防御</font>成功, " + iData.iSkill.SkillDataList.monster.nameHtml + "对你造成<font color=\'#ff4040\' size=\'20\'>" + _loc5_ + "!</font>伤害", iGlobal.Global.battle);
				}
				else {
					MainScene.allInfoPanel.addText("你<font color=\'#ff4040\'>防御</font>成功, " + iData.iSkill.SkillDataList.monster.nameHtml + "对你造成<font color=\'#ff4040\'>" + _loc5_ + "</font>伤害", iGlobal.Global.battle);
				}
				iData.iPlayer.TitleList.updateTitleInfo("endure", _loc5_);
				return true;
			}

			public static behave_mana_shield(param1: iData.iSkill.ActiveSkill): boolean {
				var _loc2_: Array<any> = (param1.skillData as iData.iSkill.ActiveSkillData).setList;
				if (MainScene.battle.playerMp < _loc2_[param1.level][0]) {
					return false;
				}
				MainScene.battle.playerMp = MainScene.battle.playerMp - _loc2_[param1.level][0];
				var _loc3_: number = iData.iSkill.SkillDataList.monster.crit - iGlobal.Player.protection * 2;
				if (_loc3_ > iData.iSkill.SkillDataList.CR) {
					_loc3_ = iData.iSkill.SkillDataList.CR;
				}
				var _loc4_: number = <any>1;
				if (Math.random() * 100 < _loc3_) {
					_loc4_ = iData.iSkill.SkillDataList.monster.crit_mul / 100;
				}
				var _loc5_: number = (iData.iSkill.SkillDataList.monster.attack * _loc4_ - iGlobal.Player.defence) * (1 - iData.iSkill.SkillDataList.caculateProtection(iGlobal.Player.protection));
				var _loc6_: number = _loc5_ * _loc2_[param1.level][3] / 100;
				_loc5_ = _loc5_ - _loc6_;
				if (_loc5_ < 1) {
					_loc5_ = 1;
				}
				MainScene.battle.playerHp = MainScene.battle.playerHp - _loc5_;
				var _loc7_: number = _loc6_ / (_loc2_[param1.level][2] + iGlobal.Player.intelligence * _loc2_[param1.level][1]);
				MainScene.battle.playerMp = MainScene.battle.playerMp - _loc7_;
				if (_loc4_ > 1) {
					MainScene.allInfoPanel.addText(iData.iSkill.SkillDataList.monster.nameHtml + "对你造成<font color=\'#ff4040\' size=\'20\'>" + _loc5_ + "!</font>伤害," + "<font color=\'#ff4040\'>魔法盾</font>吸收<font color=\'#ff4040\'>" + _loc6_ + "</font>", iGlobal.Global.battle);
				}
				else {
					MainScene.allInfoPanel.addText(iData.iSkill.SkillDataList.monster.nameHtml + "对你造成<font color=\'#ff4040\'>" + _loc5_ + "</font>伤害," + "<font color=\'#ff4040\'>魔法盾</font>吸收<font color=\'#ff4040\'>" + _loc6_ + "</font>", iGlobal.Global.battle);
				}
				iData.iPlayer.TitleList.updateTitleInfo("endure", _loc5_);
				return true;
			}

			public static behave_counterattack(param1: iData.iSkill.ActiveSkill): boolean {
				var _loc2_: Array<any> = (param1.skillData as iData.iSkill.ActiveSkillData).setList;
				var _loc3_: number = iData.iSkill.SkillDataList.monster.crit - iGlobal.Player.protection * 2;
				if (_loc3_ > iData.iSkill.SkillDataList.CR) {
					_loc3_ = iData.iSkill.SkillDataList.CR;
				}
				var _loc4_: number = <any>1;
				if (Math.random() * 100 < _loc3_) {
					_loc4_ = iData.iSkill.SkillDataList.monster.crit_mul / 100;
				}
				var _loc5_: number = (iData.iSkill.SkillDataList.monster.attack * _loc4_ - iGlobal.Player.defence) * (1 - iData.iSkill.SkillDataList.caculateProtection(iGlobal.Player.protection));
				if (_loc5_ < 1) {
					_loc5_ = 1;
				}
				MainScene.battle.playerHp = MainScene.battle.playerHp - _loc5_;
				if (_loc4_ > 1) {
					MainScene.allInfoPanel.addText(iData.iSkill.SkillDataList.monster.nameHtml + "对你造成<font color=\'#ff4040\' size=\'20\'>" + _loc5_ + "!</font>伤害", iGlobal.Global.battle);
				}
				else {
					MainScene.allInfoPanel.addText(iData.iSkill.SkillDataList.monster.nameHtml + "对你造成<font color=\'#ff4040\'>" + _loc5_ + "</font>伤害", iGlobal.Global.battle);
				}
				iData.iPlayer.TitleList.updateTitleInfo("endure", _loc5_);
				if (MainScene.battle.playerHp < 0) {
					return true;
				}
				_loc4_ = iData.iSkill.SkillDataList.getCritMul(_loc2_[param1.level][2]);
				var _loc6_: number = (iGlobal.Player.attack * _loc4_ * _loc2_[param1.level][1] / 100 + _loc5_ * _loc2_[param1.level][0] / 100 - iData.iSkill.SkillDataList.monster.defence) * (1 - iData.iSkill.SkillDataList.caculateProtection(iData.iSkill.SkillDataList.monster.protection - iGlobal.Player.protectionReduce - iGlobal.Player.protectionIgnore - _loc2_[param1.level][2] * 3));
				if (_loc6_ < 1) {
					_loc6_ = 1;
				}
				MainScene.battle.monsterHp = MainScene.battle.monsterHp - _loc6_;
				if (_loc4_ > 1) {
					MainScene.allInfoPanel.addText("你<font color=\'#ff4040\'>反击</font>成功,对" + iData.iSkill.SkillDataList.monster.nameHtml + "造成<font color=\'#ff4040\' size=\'20\'>" + _loc6_ + "!</font>伤害", iGlobal.Global.battle);
					iData.iPlayer.TitleList.updateTitleInfo("crit", 0, 1);
				}
				else {
					MainScene.allInfoPanel.addText("你<font color=\'#ff4040\'>反击</font>成功,对" + iData.iSkill.SkillDataList.monster.nameHtml + "造成<font color=\'#ff4040\'>" + _loc6_ + "</font>伤害", iGlobal.Global.battle);
					iData.iPlayer.TitleList.updateTitleInfo("crit", 0, -1);
				}
				iData.iPlayer.TitleList.updateTitleInfo("damage", _loc6_, _loc6_);
				return true;
			}

			public static behave_bolt(param1: iData.iSkill.ActiveSkill): boolean {
				var _loc2_: Array<any> = (param1.skillData as iData.iSkill.ActiveSkillData).setList;
				if (MainScene.battle.playerMp < _loc2_[param1.level][2]) {
					return false;
				}
				MainScene.battle.playerMp = MainScene.battle.playerMp - _loc2_[param1.level][2];
				var _loc3_: number = iData.iSkill.SkillDataList.getCritMul();
				var _loc4_: number = Tool.MyMath.balanceRandom(iGlobal.Player.magicBalance) * (_loc2_[param1.level][1] - _loc2_[param1.level][0]) + _loc2_[param1.level][0];
				var _loc5_: number = _loc4_ * _loc3_ * (100 + iGlobal.Player.magicDamage) / 100 * iData.iSkill.SkillDataList.monsterPro;
				if (_loc5_ < 1) {
					_loc5_ = 1;
				}
				MainScene.battle.monsterHp = MainScene.battle.monsterHp - _loc5_;
				iData.iSkill.SkillDataList.traceAttackInfo(param1.skillData.realName, _loc5_, _loc3_);
				return true;
			}

			public static behave_thunder(param1: iData.iSkill.ActiveSkill): boolean {
				var _loc2_: Array<any> = (param1.skillData as iData.iSkill.ActiveSkillData).setList;
				if (MainScene.battle.playerMp < _loc2_[param1.level][2]) {
					return false;
				}
				MainScene.battle.playerMp = MainScene.battle.playerMp - _loc2_[param1.level][2];
				var _loc3_: number = iData.iSkill.SkillDataList.getCritMul(_loc2_[param1.level][3]);
				var _loc4_: number = Tool.MyMath.balanceRandom(iGlobal.Player.magicBalance) * (_loc2_[param1.level][1] - _loc2_[param1.level][0]) + _loc2_[param1.level][0];
				var _loc5_: number = _loc4_ * _loc3_ * (100 + iGlobal.Player.magicDamage) / 100 * (1 - iData.iSkill.SkillDataList.caculateProtection(iData.iSkill.SkillDataList.monster.protection - iGlobal.Player.protectionReduce - iGlobal.Player.protectionIgnore - _loc2_[param1.level][3] - iGlobal.Player.will * _loc2_[param1.level][4]));
				if (_loc5_ < 1) {
					_loc5_ = 1;
				}
				MainScene.battle.monsterHp = MainScene.battle.monsterHp - _loc5_;
				iData.iSkill.SkillDataList.traceAttackInfo(param1.skillData.realName, _loc5_, _loc3_);
				return true;
			}

			public static behave_fireball(param1: iData.iSkill.ActiveSkill): boolean {
				var _loc2_: Array<any> = (param1.skillData as iData.iSkill.ActiveSkillData).setList;
				if (MainScene.battle.playerMp < _loc2_[param1.level][2]) {
					return false;
				}
				MainScene.battle.playerMp = MainScene.battle.playerMp - _loc2_[param1.level][2];
				var _loc3_: number = iData.iSkill.SkillDataList.getCritMul();
				var _loc4_: number = Tool.MyMath.balanceRandom(iGlobal.Player.magicBalance) * (_loc2_[param1.level][1] - _loc2_[param1.level][0]) + _loc2_[param1.level][0];
				var _loc5_: number = _loc4_ * _loc3_ * (100 + iGlobal.Player.magicDamage) / 100 * iData.iSkill.SkillDataList.monsterPro;
				if (_loc5_ < 1) {
					_loc5_ = 1;
				}
				MainScene.battle.monsterHp = MainScene.battle.monsterHp - _loc5_;
				iData.iSkill.SkillDataList.traceAttackInfo(param1.skillData.realName, _loc5_, _loc3_);
				iData.iSkill.SkillDataList.monster.addBuff(new iData.iSkill.iBuff.BuffBurn(_loc2_[param1.level][3] * iGlobal.Player.intelligence));
				return true;
			}

			public static behave_ice_spear(param1: iData.iSkill.ActiveSkill): boolean {
				var _loc2_: Array<any> = (param1.skillData as iData.iSkill.ActiveSkillData).setList;
				if (MainScene.battle.playerMp < _loc2_[param1.level][2]) {
					return false;
				}
				MainScene.battle.playerMp = MainScene.battle.playerMp - _loc2_[param1.level][2];
				var _loc3_: number = iData.iSkill.SkillDataList.getCritMul();
				var _loc4_: any = Tool.MyMath.balanceRandom(iGlobal.Player.magicBalance) * (_loc2_[param1.level][1] - _loc2_[param1.level][0]) + _loc2_[param1.level][0];
				var _loc5_: number = (Tool.MyMath.balanceRandom(iGlobal.Player.magicBalance) * (_loc2_[param1.level][1] - _loc2_[param1.level][0]) + _loc2_[param1.level][0]) * _loc3_ * (100 + iGlobal.Player.magicDamage) / 100 * iData.iSkill.SkillDataList.monsterPro;
				if (_loc5_ < 1) {
					_loc5_ = 1;
				}
				MainScene.battle.monsterHp = MainScene.battle.monsterHp - _loc5_;
				iData.iSkill.SkillDataList.traceAttackInfo(param1.skillData.realName, _loc5_, _loc3_);
				if (Math.random() * 100 < _loc2_[param1.level][3] + iGlobal.Player.intelligence * _loc2_[param1.level][4]) {
					iData.iSkill.SkillDataList.monster.addBuff(new iData.iSkill.iBuff.BuffFrozen(_loc2_[param1.level][5]));
				}
				return true;
			}

			public static behave_mirage_missle(param1: iData.iSkill.ActiveSkill): boolean {
				var _loc2_: Array<any> = (param1.skillData as iData.iSkill.ActiveSkillData).setList;
				if (MainScene.battle.playerMp < _loc2_[param1.level][2]) {
					return false;
				}
				MainScene.battle.playerMp = MainScene.battle.playerMp - _loc2_[param1.level][2];
				var _loc3_: number = iData.iSkill.SkillDataList.getCritMul();
				var _loc4_: number = (iGlobal.Player.attack * _loc3_ * _loc2_[param1.level][0] / 100 - iData.iSkill.SkillDataList.monster.defence) * iData.iSkill.SkillDataList.monsterPro;
				if (_loc4_ < 1) {
					_loc4_ = 1;
				}
				MainScene.battle.monsterHp = MainScene.battle.monsterHp - _loc4_;
				iData.iSkill.SkillDataList.traceAttackInfo(param1.skillData.realName, _loc4_, _loc3_);
				iData.iSkill.SkillDataList.monster.addBuff(new iData.iSkill.iBuff.BuffPoison(_loc2_[param1.level][1] + _loc2_[param1.level][3] * iGlobal.Player.will));
				iData.iSkill.SkillDataList.monster.addBuff(new iData.iSkill.iBuff.BuffPoison(_loc2_[param1.level][1] + _loc2_[param1.level][3] * iGlobal.Player.will));
				return true;
			}

			public static behave_corrosive_shot(param1: iData.iSkill.ActiveSkill): boolean {
				var _loc2_: Array<any> = (param1.skillData as iData.iSkill.ActiveSkillData).setList;
				if (MainScene.battle.playerMp < _loc2_[param1.level][2]) {
					return false;
				}
				MainScene.battle.playerMp = MainScene.battle.playerMp - _loc2_[param1.level][2];
				var _loc3_: number = iData.iSkill.SkillDataList.getCritMul();
				var _loc4_: number = (iGlobal.Player.attack * _loc3_ * (_loc2_[param1.level][0] / 100 + iGlobal.Player.dex * _loc2_[param1.level][4] / 100) - iData.iSkill.SkillDataList.monster.defence) * iData.iSkill.SkillDataList.monsterPro;
				if (_loc4_ < 1) {
					_loc4_ = 1;
				}
				MainScene.battle.monsterHp = MainScene.battle.monsterHp - _loc4_;
				iData.iSkill.SkillDataList.traceAttackInfo(param1.skillData.realName, _loc4_, _loc3_);
				iData.iSkill.SkillDataList.monster.addBuff(new iData.iSkill.iBuff.BuffCorrosion(_loc2_[param1.level][1] + iGlobal.Player.dex * _loc2_[param1.level][3]));
				return true;
			}

			private static traceAttackInfo(param1: string, param2: number, param3: number): any {
				if (param3 > 1) {
					MainScene.allInfoPanel.addText("你使用了<font color=\'#ff4040\'>" + param1 + " </font>,对" + iData.iSkill.SkillDataList.monster.nameHtml + "造成了<font color=\'#ff4040\' size=\'20\'> " + param2 + "! </font>伤害.", iGlobal.Global.battle);
					iData.iPlayer.TitleList.updateTitleInfo("crit", 0, 1);
				}
				else {
					MainScene.allInfoPanel.addText("你使用了<font color=\'#ff4040\'>" + param1 + " </font>,对" + iData.iSkill.SkillDataList.monster.nameHtml + "造成了<font color=\'#ff4040\'> " + param2 + "</font>伤害.", iGlobal.Global.battle);
					iData.iPlayer.TitleList.updateTitleInfo("crit", 0, -1);
				}
				iData.iPlayer.TitleList.updateTitleInfo("damage", param2, param2);
			}

			private static get monster(): iData.iMonster.Monster {
				return MainScene.battle.monster;
			}

			private static get CR(): number {
				return MainScene.battle.CR;
			}

			private static get monsterPro(): number {
				return 1 - iData.iSkill.SkillDataList.caculateProtection(iData.iSkill.SkillDataList.monster.protection - iGlobal.Player.protectionReduce - iGlobal.Player.protectionIgnore);
			}

			private static caculateProtection(param1: number): number {
				param1 = param1;
				if (param1 >= 0) {
					return 0.06 * param1 / (1 + 0.06 * param1);
				}
				if (param1 < -1000) {
					return -1;
				}
				return -(1 - Math.pow(0.94, -param1));
			}

			private static getCritMul(param1: number = 0): number {
				var _loc2_: number = iGlobal.Player.crit - (iData.iSkill.SkillDataList.monster.protection - iGlobal.Player.protectionReduce) * 2;
				if (_loc2_ < 0 && param1 > 0) {
					_loc2_ = param1;
				}
				else {
					_loc2_ = _loc2_ + param1;
				}
				if (_loc2_ > iData.iSkill.SkillDataList.CR) {
					_loc2_ = iData.iSkill.SkillDataList.CR;
				}
				var _loc3_: number = <any>1;
				if (Math.random() * 100 < _loc2_) {
					_loc3_ = iGlobal.Player.crit_mul / 100;
				}
				return _loc3_;
			}

			public static des_combat_master(param1: iData.iSkill.Skill): string {
				var _loc2_: any = <any>iData.iSkill.SkillDataList.getTitle(param1);
				_loc2_ = _loc2_ + iData.iSkill.SkillDataList.getStat(param1, param1.level);
				_loc2_ = _loc2_ + iData.iSkill.SkillDataList.getEffect(param1, param1.level);
				if (param1.level < 14) {
					_loc2_ = _loc2_ + ("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>");
					_loc2_ = _loc2_ + "下一级:<br/>";
					_loc2_ = _loc2_ + iData.iSkill.SkillDataList.getStat(param1, param1.level + 1);
					_loc2_ = _loc2_ + iData.iSkill.SkillDataList.getEffect(param1, param1.level + 1);
					_loc2_ = _loc2_ + "</font>";
					if (iGlobal.Player.ap >= param1.skillData.lvupCostList[param1.level + 1]) {
						_loc2_ = _loc2_ + ("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>");
					}
					else {
						_loc2_ = _loc2_ + "<font color=\'#ff4040\'>";
					}
					_loc2_ = _loc2_ + iData.iSkill.SkillDataList.getAp(param1, param1.level + 1);
					_loc2_ = _loc2_ + "</font>";
				}
				return _loc2_;
			}

			public static des_blacksmithing(param1: iData.iSkill.Skill): string {
				var _loc4_: string = <any>null;
				var _loc2_: any = <any>iData.iSkill.SkillDataList.getTitle(param1);
				var _loc3_: number = param1.level;
				_loc2_ = _loc2_ + "<font size=\'20\'>";
				_loc2_ = _loc2_ + "当强化装备时:<br/>";
				_loc2_ = _loc2_ + ("  成功率 +" + _loc3_ + "%<br/>");
				_loc4_ = "";
				if (_loc3_ > 1) {
					_loc4_ = "  +1前不会消失";
				}
				if (_loc3_ > 5) {
					_loc4_ = "  +3前不会消失";
				}
				if (_loc3_ > 9) {
					_loc4_ = "  +5前不会消失";
				}
				if (_loc3_ > 13) {
					_loc4_ = "  +7前不会消失";
				}
				if (_loc3_ > 1) {
					_loc2_ = _loc2_ + (_loc4_ + "<br/>");
				}
				if (_loc3_ > 5) {
					_loc4_ = "  50% 降回+0.";
				}
				if (_loc3_ > 9) {
					_loc4_ = "  50% 降低1级";
				}
				if (_loc3_ > 13) {
					_loc4_ = "  50% 保持不变.";
				}
				if (_loc3_ > 5) {
					_loc2_ = _loc2_ + "  当失败时:<br/>";
					_loc2_ = _loc2_ + (_loc4_ + "<br/>");
				}
				_loc2_ = _loc2_ + "</font>";
				_loc2_ = _loc2_ + iData.iSkill.SkillDataList.getStat(param1, param1.level);
				_loc3_++;
				if (param1.level < 14) {
					_loc2_ = _loc2_ + ("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>");
					_loc2_ = _loc2_ + "下一级:<br/>";
					_loc2_ = _loc2_ + "<font size=\'20\'>";
					_loc2_ = _loc2_ + "当强化装备时:<br/>";
					_loc2_ = _loc2_ + ("  成功率 +" + _loc3_ + "%<br/>");
					_loc4_ = "";
					if (_loc3_ > 1) {
						_loc4_ = "  +1前不会消失";
					}
					if (_loc3_ > 5) {
						_loc4_ = "  +3前不会消失";
					}
					if (_loc3_ > 9) {
						_loc4_ = "  +5前不会消失";
					}
					if (_loc3_ > 13) {
						_loc4_ = "  +7前不会消失";
					}
					if (_loc3_ > 1) {
						_loc2_ = _loc2_ + (_loc4_ + "<br/>");
					}
					if (_loc3_ > 5) {
						_loc4_ = "  50% 降回+0.";
					}
					if (_loc3_ > 9) {
						_loc4_ = "  50% 降低1级";
					}
					if (_loc3_ > 13) {
						_loc4_ = "  50% 保持不变.";
					}
					if (_loc3_ > 5) {
						_loc2_ = _loc2_ + "  当失败时:<br/>";
						_loc2_ = _loc2_ + (_loc4_ + "<br/>");
					}
					_loc2_ = _loc2_ + "</font>";
					_loc2_ = _loc2_ + iData.iSkill.SkillDataList.getStat(param1, param1.level + 1);
					_loc2_ = _loc2_ + "</font>";
					if (iGlobal.Player.ap >= param1.skillData.lvupCostList[param1.level + 1]) {
						_loc2_ = _loc2_ + ("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>");
					}
					else {
						_loc2_ = _loc2_ + "<font color=\'#ff4040\'>";
					}
					_loc2_ = _loc2_ + iData.iSkill.SkillDataList.getAp(param1, param1.level + 1);
					_loc2_ = _loc2_ + "</font>";
				}
				return _loc2_;
			}

			public static des_defence(param1: iData.iSkill.Skill): string {
				var _loc2_: Array<any> = (param1.skillData as iData.iSkill.ActiveSkillData).setList;
				var _loc3_: any = <any>iData.iSkill.SkillDataList.getTitle(param1);
				_loc3_ = _loc3_ + "<font size=\'20\'>当技能使用成功时:<br/>";
				_loc3_ = _loc3_ + ("  防御 +" + _loc2_[param1.level][0] + "<br/>");
				_loc3_ = _loc3_ + ("  护甲 +" + _loc2_[param1.level][1] + "<br/>");
				_loc3_ = _loc3_ + ("  护甲 *" + _loc2_[param1.level][2] + "</font><br/>");
				_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level);
				if (param1.level < 14) {
					_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>");
					_loc3_ = _loc3_ + "下一级:<br/>";
					_loc3_ = _loc3_ + "<font size=\'20\'>当技能使用成功时:<br/>";
					_loc3_ = _loc3_ + ("  防御 +" + _loc2_[param1.level + 1][0] + "<br/>");
					_loc3_ = _loc3_ + ("  护甲 +" + _loc2_[param1.level + 1][1] + "<br/>");
					_loc3_ = _loc3_ + ("  护甲 *" + _loc2_[param1.level + 1][2] + "</font><br/>");
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
					if (iGlobal.Player.ap >= param1.skillData.lvupCostList[param1.level + 1]) {
						_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>");
					}
					else {
						_loc3_ = _loc3_ + "<font color=\'#ff4040\'>";
					}
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getAp(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
				}
				return _loc3_;
			}

			public static des_counterattack(param1: iData.iSkill.Skill): string {
				var _loc2_: Array<any> = (param1.skillData as iData.iSkill.ActiveSkillData).setList;
				var _loc3_: any = <any>iData.iSkill.SkillDataList.getTitle(param1);
				_loc3_ = _loc3_ + "<font size=\'20\'>";
				_loc3_ = _loc3_ + "  反击";
				_loc3_ = _loc3_ + ("" + _loc2_[param1.level][0] + "% 敌人的");
				_loc3_ = _loc3_ + ("+" + _loc2_[param1.level][1] + "% 自身的伤害<br/>");
				_loc3_ = _loc3_ + ("  额外暴击 +" + _loc2_[param1.level][2] + "%<br/>");
				_loc3_ = _loc3_ + ("  无视护甲 +" + _loc2_[param1.level][2] * 3 + "</font><br/>");
				_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level);
				if (param1.level < 14) {
					_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>");
					_loc3_ = _loc3_ + "下一级:<br/>";
					_loc3_ = _loc3_ + "<font size=\'20\'>";
					_loc3_ = _loc3_ + "  反击";
					_loc3_ = _loc3_ + ("" + _loc2_[param1.level + 1][0] + "% 敌人的");
					_loc3_ = _loc3_ + ("+" + _loc2_[param1.level + 1][1] + "% 自身的伤害<br/>");
					_loc3_ = _loc3_ + ("  额外暴击 +" + _loc2_[param1.level + 1][2] + "%<br/>");
					_loc3_ = _loc3_ + ("  无视护甲 +" + _loc2_[param1.level + 1][2] * 3 + "</font><br/>");
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
					if (iGlobal.Player.ap >= param1.skillData.lvupCostList[param1.level + 1]) {
						_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>");
					}
					else {
						_loc3_ = _loc3_ + "<font color=\'#ff4040\'>";
					}
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getAp(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
				}
				return _loc3_;
			}

			public static des_smash(param1: iData.iSkill.Skill): string {
				var _loc2_: Array<any> = (param1.skillData as iData.iSkill.ActiveSkillData).setList;
				var _loc3_: any = <any>iData.iSkill.SkillDataList.getTitle(param1);
				_loc3_ = _loc3_ + "<font size=\'20\'>当技能使用成功时:<br/>";
				_loc3_ = _loc3_ + ("  伤害 " + _loc2_[param1.level] + "%");
				_loc3_ = _loc3_ + "</font><br/>";
				_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level);
				if (param1.level < 14) {
					_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>");
					_loc3_ = _loc3_ + "下一级:<br/>";
					_loc3_ = _loc3_ + "<font size=\'20\'>当技能使用成功时:<br/>";
					_loc3_ = _loc3_ + ("  伤害 " + _loc2_[param1.level + 1] + "%");
					_loc3_ = _loc3_ + "</font><br/>";
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
					if (iGlobal.Player.ap >= param1.skillData.lvupCostList[param1.level + 1]) {
						_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>");
					}
					else {
						_loc3_ = _loc3_ + "<font color=\'#ff4040\'>";
					}
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getAp(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
				}
				return _loc3_;
			}

			public static des_magic_bolt(param1: iData.iSkill.Skill): string {
				var _loc2_: iData.iSkill.ActiveSkillData = param1.skillData as iData.iSkill.ActiveSkillData;
				var _loc3_: any = <any>iData.iSkill.SkillDataList.getTitle(param1);
				_loc3_ = _loc3_ + ("<font size=\'20\'>  伤害:" + _loc2_.setList[param1.level][0] + "~" + _loc2_.setList[param1.level][1] + "<br/>");
				_loc3_ = _loc3_ + ("  耗魔:" + _loc2_.setList[param1.level][2] + "</font><br/>");
				_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level);
				if (param1.level < 14) {
					_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>");
					_loc3_ = _loc3_ + "下一级:<br/>";
					_loc3_ = _loc3_ + ("<font size=\'20\'>  伤害:" + _loc2_.setList[param1.level + 1][0] + "~" + _loc2_.setList[param1.level + 1][1] + "<br/>");
					_loc3_ = _loc3_ + ("  耗魔:" + _loc2_.setList[param1.level + 1][2] + "</font><br/>");
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
					if (iGlobal.Player.ap >= param1.skillData.lvupCostList[param1.level + 1]) {
						_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>");
					}
					else {
						_loc3_ = _loc3_ + "<font color=\'#ff4040\'>";
					}
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getAp(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
				}
				return _loc3_;
			}

			public static des_fireball(param1: iData.iSkill.Skill): string {
				var _loc2_: iData.iSkill.ActiveSkillData = param1.skillData as iData.iSkill.ActiveSkillData;
				var _loc3_: any = <any>iData.iSkill.SkillDataList.getTitle(param1);
				_loc3_ = _loc3_ + ("<font size=\'20\'>  伤害:" + _loc2_.setList[param1.level][0] + "~" + _loc2_.setList[param1.level][1] + "<br/>");
				_loc3_ = _loc3_ + ("  附加状态: 灼烧(造成 智力*" + _loc2_.setList[param1.level][3] + " 伤害每回合,可叠加)<br/>");
				_loc3_ = _loc3_ + ("  耗魔:" + _loc2_.setList[param1.level][2] + "</font><br/>");
				_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level);
				if (param1.level < 14) {
					_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>");
					_loc3_ = _loc3_ + "下一级:<br/>";
					_loc3_ = _loc3_ + ("<font size=\'20\'>  伤害:" + _loc2_.setList[param1.level + 1][0] + "~" + _loc2_.setList[param1.level + 1][1] + "<br/>");
					_loc3_ = _loc3_ + ("  附加状态: 灼烧(造成 智力*" + _loc2_.setList[param1.level + 1][3] + " 伤害每回合,可叠加)<br/>");
					_loc3_ = _loc3_ + ("  耗魔:" + _loc2_.setList[param1.level + 1][2] + "</font><br/>");
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
					if (iGlobal.Player.ap >= param1.skillData.lvupCostList[param1.level + 1]) {
						_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>");
					}
					else {
						_loc3_ = _loc3_ + "<font color=\'#ff4040\'>";
					}
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getAp(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
				}
				return _loc3_;
			}

			public static des_icespear(param1: iData.iSkill.Skill): string {
				var _loc2_: iData.iSkill.ActiveSkillData = param1.skillData as iData.iSkill.ActiveSkillData;
				var _loc3_: any = <any>iData.iSkill.SkillDataList.getTitle(param1);
				_loc3_ = _loc3_ + ("<font size=\'20\'>  伤害:" + _loc2_.setList[param1.level][0] + "~" + _loc2_.setList[param1.level][1] + "<br/>");
				_loc3_ = _loc3_ + ("  附加状态: 冰冻( " + _loc2_.setList[param1.level][3] + "%+ 智力*" + _loc2_.setList[param1.level][4] + "% 概率使目标无法行动" + _loc2_.setList[param1.level][5] + "回合)<br/>");
				_loc3_ = _loc3_ + ("  耗魔:" + _loc2_.setList[param1.level][2] + "</font><br/>");
				_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level);
				if (param1.level < 14) {
					_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>");
					_loc3_ = _loc3_ + "下一级:<br/>";
					_loc3_ = _loc3_ + ("<font size=\'20\'>  伤害:" + _loc2_.setList[param1.level + 1][0] + "~" + _loc2_.setList[param1.level + 1][1] + "<br/>");
					_loc3_ = _loc3_ + ("  附加状态: 冰冻( " + _loc2_.setList[param1.level + 1][3] + "%+ 智力*" + _loc2_.setList[param1.level + 1][4] + "% 概率使目标无法行动" + _loc2_.setList[param1.level + 1][5] + "回合)<br/>");
					_loc3_ = _loc3_ + ("  耗魔:" + _loc2_.setList[param1.level + 1][2] + "</font><br/>");
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
					if (iGlobal.Player.ap >= param1.skillData.lvupCostList[param1.level + 1]) {
						_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>");
					}
					else {
						_loc3_ = _loc3_ + "<font color=\'#ff4040\'>";
					}
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getAp(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
				}
				return _loc3_;
			}

			public static des_thunder(param1: iData.iSkill.Skill): string {
				var _loc2_: iData.iSkill.ActiveSkillData = param1.skillData as iData.iSkill.ActiveSkillData;
				var _loc3_: any = <any>iData.iSkill.SkillDataList.getTitle(param1);
				_loc3_ = _loc3_ + ("<font size=\'20\'>  伤害:" + _loc2_.setList[param1.level][0] + "~" + _loc2_.setList[param1.level][1] + "<br/>");
				_loc3_ = _loc3_ + ("  特效: 无视 " + _loc2_.setList[param1.level][3] + "+ 意志*" + _loc2_.setList[param1.level][4] + " 的目标护甲<br/>");
				_loc3_ = _loc3_ + ("  额外暴击率 +" + _loc2_.setList[param1.level][3] + "<br/>");
				_loc3_ = _loc3_ + ("  耗魔:" + _loc2_.setList[param1.level][2] + "</font><br/>");
				_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level);
				if (param1.level < 14) {
					_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>");
					_loc3_ = _loc3_ + "下一级:<br/>";
					_loc3_ = _loc3_ + ("<font size=\'20\'>  伤害:" + _loc2_.setList[param1.level + 1][0] + "~" + _loc2_.setList[param1.level + 1][1] + "<br/>");
					_loc3_ = _loc3_ + ("  特效: 无视 " + _loc2_.setList[param1.level + 1][3] + "+ 意志*" + _loc2_.setList[param1.level + 1][4] + " 的目标护甲<br/>");
					_loc3_ = _loc3_ + ("  额外暴击率 +" + _loc2_.setList[param1.level + 1][3] + "<br/>");
					_loc3_ = _loc3_ + ("  耗魔:" + _loc2_.setList[param1.level + 1][2] + "</font><br/>");
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
					if (iGlobal.Player.ap >= param1.skillData.lvupCostList[param1.level + 1]) {
						_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>");
					}
					else {
						_loc3_ = _loc3_ + "<font color=\'#ff4040\'>";
					}
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getAp(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
				}
				return _loc3_;
			}

			public static des_mana_shield(param1: iData.iSkill.Skill): string {
				var _loc2_: iData.iSkill.ActiveSkillData = param1.skillData as iData.iSkill.ActiveSkillData;
				var _loc3_: any = <any>iData.iSkill.SkillDataList.getTitle(param1);
				_loc3_ = _loc3_ + "<font size=\'20\'>";
				_loc3_ = _loc3_ + ("  效果: 每点魔法可以吸收 " + _loc2_.setList[param1.level][2] + "+智力*" + _loc2_.setList[param1.level][1] + " 的伤害(最多" + _loc2_.setList[param1.level][3] + "% 的伤害)<br/>");
				_loc3_ = _loc3_ + ("  耗魔:" + _loc2_.setList[param1.level][0] + "</font><br/>");
				_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level);
				if (param1.level < 14) {
					_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>");
					_loc3_ = _loc3_ + "下一级:<br/>";
					_loc3_ = _loc3_ + "<font size=\'20\'>";
					_loc3_ = _loc3_ + ("  效果: 每点魔法可以吸收 " + _loc2_.setList[param1.level + 1][2] + "+智力*" + _loc2_.setList[param1.level + 1][1] + " 的伤害(最多" + _loc2_.setList[param1.level + 1][3] + "% 的伤害)<br/>");
					_loc3_ = _loc3_ + ("  耗魔:" + _loc2_.setList[param1.level + 1][0] + "</font><br/>");
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
					if (iGlobal.Player.ap >= param1.skillData.lvupCostList[param1.level + 1]) {
						_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>");
					}
					else {
						_loc3_ = _loc3_ + "<font color=\'#ff4040\'>";
					}
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getAp(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
				}
				return _loc3_;
			}

			public static des_mirage_missle(param1: iData.iSkill.Skill): string {
				var _loc2_: iData.iSkill.ActiveSkillData = param1.skillData as iData.iSkill.ActiveSkillData;
				var _loc3_: any = <any>iData.iSkill.SkillDataList.getTitle(param1);
				_loc3_ = _loc3_ + ("<font size=\'20\'>  伤害:" + _loc2_.setList[param1.level][0] + "%<br/>");
				_loc3_ = _loc3_ + ("  附加状态: 毒(造成 " + _loc2_.setList[param1.level][1] + "+意志*" + _loc2_.setList[param1.level][3] + " 伤害每回合,可叠加)<br/>");
				_loc3_ = _loc3_ + ("  耗魔:" + _loc2_.setList[param1.level][2] + "</font><br/>");
				_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level);
				if (param1.level < 14) {
					_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>");
					_loc3_ = _loc3_ + "下一级:<br/>";
					_loc3_ = _loc3_ + ("<font size=\'20\'>  伤害:" + _loc2_.setList[param1.level + 1][0] + "%<br/>");
					_loc3_ = _loc3_ + ("  附加状态: 毒(造成 " + _loc2_.setList[param1.level + 1][1] + "+意志*" + _loc2_.setList[param1.level + 1][3] + " 伤害每回合,可叠加)<br/>");
					_loc3_ = _loc3_ + ("  耗魔:" + _loc2_.setList[param1.level + 1][2] + "</font><br/>");
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
					if (iGlobal.Player.ap >= param1.skillData.lvupCostList[param1.level + 1]) {
						_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>");
					}
					else {
						_loc3_ = _loc3_ + "<font color=\'#ff4040\'>";
					}
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getAp(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
				}
				return _loc3_;
			}

			public static des_corrosive_shot(param1: iData.iSkill.Skill): string {
				var _loc2_: iData.iSkill.ActiveSkillData = param1.skillData as iData.iSkill.ActiveSkillData;
				var _loc3_: any = <any>iData.iSkill.SkillDataList.getTitle(param1);
				_loc3_ = _loc3_ + ("<font size=\'20\'>  伤害:" + _loc2_.setList[param1.level][0] + "%+敏捷*" + _loc2_.setList[param1.level][4] + "%<br/>");
				_loc3_ = _loc3_ + ("  附加状态: 破甲(降低 " + _loc2_.setList[param1.level][1] + "+ 敏捷*" + _loc2_.setList[param1.level][3] + " 的目标护甲,可叠加)<br/>");
				_loc3_ = _loc3_ + ("  耗魔:" + _loc2_.setList[param1.level][2] + "</font><br/>");
				_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level);
				if (param1.level < 14) {
					_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>");
					_loc3_ = _loc3_ + "下一级:<br/>";
					_loc3_ = _loc3_ + ("<font size=\'20\'>  伤害:" + _loc2_.setList[param1.level + 1][0] + "%+敏捷*" + _loc2_.setList[param1.level + 1][4] + "%<br/>");
					_loc3_ = _loc3_ + ("  附加状态: 破甲(降低 " + _loc2_.setList[param1.level + 1][1] + "+ 敏捷*" + _loc2_.setList[param1.level + 1][3] + " 的目标护甲,可叠加)<br/>");
					_loc3_ = _loc3_ + ("  耗魔:" + _loc2_.setList[param1.level + 1][2] + "</font><br/>");
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
					if (iGlobal.Player.ap >= param1.skillData.lvupCostList[param1.level + 1]) {
						_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>");
					}
					else {
						_loc3_ = _loc3_ + "<font color=\'#ff4040\'>";
					}
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getAp(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
				}
				return _loc3_;
			}

			public static des_life_drain(param1: iData.iSkill.Skill): string {
				var _loc2_: iData.iSkill.ActiveSkillData = param1.skillData as iData.iSkill.ActiveSkillData;
				var _loc3_: any = <any>iData.iSkill.SkillDataList.getTitle(param1);
				_loc3_ = _loc3_ + ("<font size=\'20\'>  伤害: 100%+ 力量*" + _loc2_.setList[param1.level][1] * 100 + "%<br/>");
				_loc3_ = _loc3_ + ("  效果:吸取 " + _loc2_.setList[param1.level][2] + "% 伤害用于生命回复)<br/>");
				_loc3_ = _loc3_ + ("  耗魔:" + _loc2_.setList[param1.level][0] + "</font><br/>");
				_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level);
				if (param1.level < 14) {
					_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>");
					_loc3_ = _loc3_ + "下一级:<br/>";
					_loc3_ = _loc3_ + ("<font size=\'20\'>  伤害: 100%+ str*" + _loc2_.setList[param1.level + 1][1] * 100 + "%<br/>");
					_loc3_ = _loc3_ + ("  效果:吸取 " + _loc2_.setList[param1.level + 1][2] + "% 伤害用于生命回复)<br/>");
					_loc3_ = _loc3_ + ("  耗魔:" + _loc2_.setList[param1.level + 1][0] + "</font><br/>");
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getStat(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
					if (iGlobal.Player.ap >= param1.skillData.lvupCostList[param1.level + 1]) {
						_loc3_ = _loc3_ + ("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>");
					}
					else {
						_loc3_ = _loc3_ + "<font color=\'#ff4040\'>";
					}
					_loc3_ = _loc3_ + iData.iSkill.SkillDataList.getAp(param1, param1.level + 1);
					_loc3_ = _loc3_ + "</font>";
				}
				return _loc3_;
			}

			private static getTitle(param1: iData.iSkill.Skill): string {
				var _loc2_: any = <any>"<p align=\'center\'>" + param1.skillData.realName + " " + (15 - param1.level).toString(16).toUpperCase() + "</p>";
				_loc2_ = _loc2_ + ("<p align=\'center\'><font size=\'16\'>" + iData.iSkill.SkillDataList.getCategory(param1) + "</font></p>");
				return _loc2_;
			}

			private static getCategory(param1: iData.iSkill.Skill): string {
				switch (param1.skillData.category) {
					case iData.iSkill.SkillCategory.ALL:
						return "全部";
					case iData.iSkill.SkillCategory.MAGIC:
						return "魔法";
					case iData.iSkill.SkillCategory.MELEE:
						return "近战";
					case iData.iSkill.SkillCategory.RANGED:
						return "远程";
					default:
						return param1.skillData.category;
				}
			}

			private static getStat(param1: iData.iSkill.Skill, param2: number): string {
				param2 = param2;
				var _loc3_: any = <any>"";
				_loc3_ = _loc3_ + "<font size=\'20\'>";
				var _loc4_: Array<iData.iItem.Stat> = param1.skillData.statList[param2];
				var i: number = 0;
				while (i < _loc4_.length) {
					_loc3_ = _loc3_ + ("<li>" + _loc4_[i].statTranslate() + " +" + _loc4_[i].value + "</li>");
					i++;
				}
				_loc3_ = _loc3_ + "</font>";
				return _loc3_;
			}

			private static getEffect(param1: iData.iSkill.Skill, param2: number): string {
				var _loc4_: Array<iData.iItem.Stat> = <any>null;
				var _loc5_: number = 0;
				var _loc3_: any = <any>"<font size=\'20\'>";
				if (param1.skillData.category == iData.iSkill.SkillCategory.MELEE) {
					_loc3_ = _loc3_ + "使用近战武器:<br/>";
					_loc4_ = param1.skillData.effectList[param2];
					_loc5_ = 0;
					while (_loc5_ < _loc4_.length) {
						_loc3_ = _loc3_ + ("<li>" + _loc4_[_loc5_].statTranslate() + "+" + _loc4_[_loc5_].value + "</li>");
						_loc5_++;
					}
				}
				else if (param1.skillData.category == iData.iSkill.SkillCategory.RANGED) {
					_loc3_ = _loc3_ + "使用远程武器:<br/>";
					_loc4_ = param1.skillData.effectList[param2];
					_loc5_ = 0;
					while (_loc5_ < _loc4_.length) {
						_loc3_ = _loc3_ + ("<li>" + _loc4_[_loc5_].statTranslate() + "+" + _loc4_[_loc5_].value + "</li>");
						_loc5_++;
					}
				}
				_loc3_ = _loc3_ + "</font>";
				return _loc3_;
			}

			private static getAp(param1: iData.iSkill.Skill, param2: number): string {
				var _loc3_: any = <any>"<font size=\'24\'>";
				_loc3_ = _loc3_ + ("AP:" + param1.skillData.lvupCostList[param2]);
				_loc3_ = _loc3_ + "</font>";
				return _loc3_;
			}

		}
	}
}

iData.iSkill.SkillDataList.COMBAT_MASTERY = new iData.iSkill.PassiveSkillData("Combat Mastery", "近战精通", iData.iSkill.SkillCategory.MELEE, [[new iData.iItem.Stat(iData.iItem.Stat.hp, 10), new iData.iItem.Stat(iData.iItem.Stat.str, 1)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 20), new iData.iItem.Stat(iData.iItem.Stat.str, 3)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 30), new iData.iItem.Stat(iData.iItem.Stat.str, 6)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 40), new iData.iItem.Stat(iData.iItem.Stat.str, 9)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 50), new iData.iItem.Stat(iData.iItem.Stat.str, 12)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 60), new iData.iItem.Stat(iData.iItem.Stat.str, 16)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 70), new iData.iItem.Stat(iData.iItem.Stat.str, 20)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 80), new iData.iItem.Stat(iData.iItem.Stat.str, 24)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 90), new iData.iItem.Stat(iData.iItem.Stat.str, 28)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 100), new iData.iItem.Stat(iData.iItem.Stat.str, 32)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 110), new iData.iItem.Stat(iData.iItem.Stat.str, 34), new iData.iItem.Stat(iData.iItem.Stat.dex, 2)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 120), new iData.iItem.Stat(iData.iItem.Stat.str, 36), new iData.iItem.Stat(iData.iItem.Stat.dex, 4)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 130), new iData.iItem.Stat(iData.iItem.Stat.str, 38), new iData.iItem.Stat(iData.iItem.Stat.dex, 6)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 140), new iData.iItem.Stat(iData.iItem.Stat.str, 40), new iData.iItem.Stat(iData.iItem.Stat.dex, 8)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 150), new iData.iItem.Stat(iData.iItem.Stat.str, 42), new iData.iItem.Stat(iData.iItem.Stat.dex, 10)]], [[new iData.iItem.Stat(iData.iItem.Stat.attackMax, 1), new iData.iItem.Stat(iData.iItem.Stat.balance, 1)], [new iData.iItem.Stat(iData.iItem.Stat.attackMax, 2), new iData.iItem.Stat(iData.iItem.Stat.balance, 2)], [new iData.iItem.Stat(iData.iItem.Stat.attackMax, 3), new iData.iItem.Stat(iData.iItem.Stat.balance, 3)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 1), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 4), new iData.iItem.Stat(iData.iItem.Stat.balance, 4)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 2), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 5), new iData.iItem.Stat(iData.iItem.Stat.balance, 5)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 3), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 5), new iData.iItem.Stat(iData.iItem.Stat.balance, 6)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 4), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 6), new iData.iItem.Stat(iData.iItem.Stat.balance, 7)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 4), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 7), new iData.iItem.Stat(iData.iItem.Stat.balance, 8)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 4), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 8), new iData.iItem.Stat(iData.iItem.Stat.balance, 9)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 4), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 9), new iData.iItem.Stat(iData.iItem.Stat.balance, 10)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 5), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 10), new iData.iItem.Stat(iData.iItem.Stat.balance, 11)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 6), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 11), new iData.iItem.Stat(iData.iItem.Stat.balance, 12)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 6), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 13), new iData.iItem.Stat(iData.iItem.Stat.balance, 13)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 6), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 16), new iData.iItem.Stat(iData.iItem.Stat.balance, 14)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 8), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 18), new iData.iItem.Stat(iData.iItem.Stat.balance, 15)]], [0, 1, 3, 5, 7, 8, 10, 12, 14, 16, 20, 22, 24, 26, 30], iData.iSkill.SkillDataList.des_combat_master);
iData.iSkill.SkillDataList.SMASH = new iData.iSkill.ActiveSkillData("Smash", "重击", iData.iSkill.SkillType.ATTACK, iData.iSkill.SkillCategory.MELEE, [new Array<iData.iItem.Stat>(0), new Array<iData.iItem.Stat>(0), new Array<iData.iItem.Stat>(0), new Array<iData.iItem.Stat>(0), new Array<iData.iItem.Stat>(0), new Array<iData.iItem.Stat>(0), new Array<iData.iItem.Stat>(0), [new iData.iItem.Stat(iData.iItem.Stat.str, 1), new iData.iItem.Stat(iData.iItem.Stat.will, 1)], [new iData.iItem.Stat(iData.iItem.Stat.str, 2), new iData.iItem.Stat(iData.iItem.Stat.will, 2)], [new iData.iItem.Stat(iData.iItem.Stat.str, 3), new iData.iItem.Stat(iData.iItem.Stat.will, 3)], [new iData.iItem.Stat(iData.iItem.Stat.str, 4), new iData.iItem.Stat(iData.iItem.Stat.will, 4)], [new iData.iItem.Stat(iData.iItem.Stat.str, 5), new iData.iItem.Stat(iData.iItem.Stat.will, 5)], [new iData.iItem.Stat(iData.iItem.Stat.str, 6), new iData.iItem.Stat(iData.iItem.Stat.will, 6)], [new iData.iItem.Stat(iData.iItem.Stat.str, 7), new iData.iItem.Stat(iData.iItem.Stat.will, 7)], [new iData.iItem.Stat(iData.iItem.Stat.str, 8), new iData.iItem.Stat(iData.iItem.Stat.will, 8)]], null, [0, 2, 4, 6, 8, 10, 11, 11, 11, 11, 13, 13, 13, 13, 20], [200, 210, 220, 230, 240, 250, 300, 310, 320, 330, 400, 420, 440, 460, 500], iData.iSkill.SkillDataList.des_smash, iData.iSkill.SkillDataList.behave_smash);
iData.iSkill.SkillDataList.CRITICAL_HIT = new iData.iSkill.PassiveSkillData("Critical Hit", "暴击", iData.iSkill.SkillCategory.ALL, [[new iData.iItem.Stat(iData.iItem.Stat.will, 3), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 50)], [new iData.iItem.Stat(iData.iItem.Stat.will, 6), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 55)], [new iData.iItem.Stat(iData.iItem.Stat.will, 9), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 60)], [new iData.iItem.Stat(iData.iItem.Stat.will, 12), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 65)], [new iData.iItem.Stat(iData.iItem.Stat.will, 15), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 70)], [new iData.iItem.Stat(iData.iItem.Stat.will, 18), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 75)], [new iData.iItem.Stat(iData.iItem.Stat.will, 21), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 90)], [new iData.iItem.Stat(iData.iItem.Stat.will, 24), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 95)], [new iData.iItem.Stat(iData.iItem.Stat.will, 27), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 100)], [new iData.iItem.Stat(iData.iItem.Stat.will, 30), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 105)], [new iData.iItem.Stat(iData.iItem.Stat.will, 33), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 110)], [new iData.iItem.Stat(iData.iItem.Stat.will, 36), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 120)], [new iData.iItem.Stat(iData.iItem.Stat.will, 39), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 130)], [new iData.iItem.Stat(iData.iItem.Stat.will, 42), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 140)], [new iData.iItem.Stat(iData.iItem.Stat.will, 45), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 150)]], null, [3, 3, 3, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 18, 20], iData.iSkill.SkillDataList.des_combat_master);
iData.iSkill.SkillDataList.BLACKSMITHING = new iData.iSkill.PassiveSkillData("Blacksmithing", "锻造", iData.iSkill.SkillCategory.ALL, [[new iData.iItem.Stat(iData.iItem.Stat.dex, 1), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 1)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 2), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 2)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 3), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 3)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 4), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 4)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 5), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 5)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 6), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 6)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 7), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 7)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 8), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 8)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 9), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 9)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 11), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 11)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 13), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 13)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 15), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 15)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 17), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 17)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 19), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 19)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 21), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 21)]], null, [0, 1, 2, 3, 4, 5, 10, 11, 12, 13, 20, 21, 22, 23, 30], iData.iSkill.SkillDataList.des_blacksmithing);
iData.iSkill.SkillDataList.DEFENCE = new iData.iSkill.ActiveSkillData("Defence", "防御", iData.iSkill.SkillType.DEFENCE, iData.iSkill.SkillCategory.ALL, [[new iData.iItem.Stat(iData.iItem.Stat.hp, 2), new iData.iItem.Stat(iData.iItem.Stat.defence, 1)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 4), new iData.iItem.Stat(iData.iItem.Stat.defence, 2)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 6), new iData.iItem.Stat(iData.iItem.Stat.defence, 3)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 8), new iData.iItem.Stat(iData.iItem.Stat.defence, 4)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 10), new iData.iItem.Stat(iData.iItem.Stat.defence, 5)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 12), new iData.iItem.Stat(iData.iItem.Stat.defence, 6)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 14), new iData.iItem.Stat(iData.iItem.Stat.defence, 7)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 16), new iData.iItem.Stat(iData.iItem.Stat.defence, 8)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 18), new iData.iItem.Stat(iData.iItem.Stat.defence, 9)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 20), new iData.iItem.Stat(iData.iItem.Stat.defence, 10)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 22), new iData.iItem.Stat(iData.iItem.Stat.defence, 11)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 25), new iData.iItem.Stat(iData.iItem.Stat.defence, 12)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 28), new iData.iItem.Stat(iData.iItem.Stat.defence, 13)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 31), new iData.iItem.Stat(iData.iItem.Stat.defence, 14)], [new iData.iItem.Stat(iData.iItem.Stat.hp, 41), new iData.iItem.Stat(iData.iItem.Stat.defence, 15)]], null, [0, 1, 3, 5, 7, 8, 11, 12, 13, 14, 17, 18, 19, 20, 25], [[20, 5, 1.1], [21, 6, 1.15], [22, 7, 1.2], [24, 8, 1.25], [26, 9, 1.3], [28, 10, 1.4], [32, 12, 1.45], [34, 13, 1.5], [38, 14, 1.55], [42, 15, 1.7], [46, 17, 1.75], [50, 20, 1.8], [54, 23, 1.85], [59, 26, 1.9], [65, 30, 2]], iData.iSkill.SkillDataList.des_defence, iData.iSkill.SkillDataList.behave_defence);
iData.iSkill.SkillDataList.COUNTERATTACK = new iData.iSkill.ActiveSkillData("Counterattack", "反击", iData.iSkill.SkillType.DEFENCE, iData.iSkill.SkillCategory.MELEE, [[new iData.iItem.Stat(iData.iItem.Stat.dex, 1)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 2)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 3)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 4)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 5)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 6)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 7)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 8)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 9)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 10)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 11)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 12)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 13)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 14)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 15)]], null, [3, 4, 5, 6, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 18], [[50, 100, 5, 5], [60, 100, 5, 5], [70, 100, 5, 5], [80, 100, 5, 5], [90, 100, 5, 5], [100, 100, 5, 5], [120, 110, 10, 10], [130, 115, 10, 10], [140, 120, 10, 10], [150, 125, 10, 10], [160, 130, 15, 15], [170, 135, 15, 15], [180, 140, 15, 15], [190, 140, 15, 15], [200, 150, 20, 20]], iData.iSkill.SkillDataList.des_counterattack, iData.iSkill.SkillDataList.behave_counterattack);
iData.iSkill.SkillDataList.MAGIC_MASTERY = new iData.iSkill.PassiveSkillData("Magic Mastery", "魔法精通", iData.iSkill.SkillCategory.MAGIC, [[new iData.iItem.Stat(iData.iItem.Stat.mp, 10)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 20)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 30)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 40)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 50)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 60)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 70), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 1)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 80), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 2)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 90), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 3)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 100), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 4)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 110), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 6)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 120), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 8)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 130), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 10)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 140), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 12)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 150), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 17)]], null, [1, 1, 2, 2, 3, 3, 5, 5, 7, 7, 10, 10, 10, 10, 15], iData.iSkill.SkillDataList.des_combat_master);
iData.iSkill.SkillDataList.FIREBOLT = new iData.iSkill.ActiveSkillData("Firebolt", "火焰", iData.iSkill.SkillType.ATTACK, iData.iSkill.SkillCategory.MAGIC, [[new iData.iItem.Stat(iData.iItem.Stat.intelligence, 1)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 3)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 5)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 7)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 10)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 13)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 16)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 20)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 24)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 28)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 32)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 37)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 42)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 47)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 52)]], null, [1, 1, 2, 2, 3, 3, 5, 5, 7, 7, 12, 12, 12, 12, 15], [[7, 25, 10], [8, 27, 10], [9, 28, 15], [11, 30, 15], [13, 35, 15], [15, 40, 15], [18, 45, 20], [21, 50, 20], [25, 55, 20], [29, 60, 20], [40, 80, 25], [45, 85, 25], [50, 90, 25], [55, 95, 25], [60, 120, 30]], iData.iSkill.SkillDataList.des_magic_bolt, iData.iSkill.SkillDataList.behave_bolt);
iData.iSkill.SkillDataList.ICEBOLT = new iData.iSkill.ActiveSkillData("Icebolt", "冰矛", iData.iSkill.SkillType.ATTACK, iData.iSkill.SkillCategory.MAGIC, [[new iData.iItem.Stat(iData.iItem.Stat.intelligence, 1)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 3)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 5)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 7)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 10)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 13)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 16)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 20)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 24)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 28)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 32)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 37)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 42)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 47)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 52)]], null, [1, 1, 2, 2, 3, 3, 3, 5, 5, 5, 7, 8, 9, 10, 20], [[10, 20, 5], [11, 21, 5], [13, 23, 5], [15, 25, 5], [18, 27, 5], [21, 30, 5], [24, 35, 10], [28, 40, 10], [32, 45, 10], [37, 48, 10], [48, 54, 15], [53, 59, 15], [59, 65, 15], [63, 72, 15], [70, 80, 20]], iData.iSkill.SkillDataList.des_magic_bolt, iData.iSkill.SkillDataList.behave_bolt);
iData.iSkill.SkillDataList.LIGHTNINGBOLT = new iData.iSkill.ActiveSkillData("LightningBolt", "雷矢", iData.iSkill.SkillType.ATTACK, iData.iSkill.SkillCategory.MAGIC, [[new iData.iItem.Stat(iData.iItem.Stat.intelligence, 1)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 3)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 5)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 7)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 10)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 13)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 16)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 20)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 24)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 28)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 32)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 37)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 42)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 47)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 52)]], null, [1, 2, 3, 4, 5, 5, 8, 8, 8, 8, 10, 10, 10, 10, 20], [[1, 40, 15], [2, 46, 15], [3, 52, 15], [4, 58, 15], [5, 65, 15], [6, 72, 15], [8, 79, 15], [9, 86, 15], [11, 93, 15], [13, 100, 15], [20, 110, 20], [24, 120, 20], [28, 130, 20], [32, 140, 20], [40, 150, 25]], iData.iSkill.SkillDataList.des_magic_bolt, iData.iSkill.SkillDataList.behave_bolt);
iData.iSkill.SkillDataList.FIREBALL = new iData.iSkill.ActiveSkillData("Fireball", "火球", iData.iSkill.SkillType.ATTACK, iData.iSkill.SkillCategory.MAGIC, [[new iData.iItem.Stat(iData.iItem.Stat.intelligence, 3)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 6)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 9)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 12)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 16)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 20)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 24)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 29)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 34)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 39)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 44)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 49), new iData.iItem.Stat(iData.iItem.Stat.str, 2)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 54), new iData.iItem.Stat(iData.iItem.Stat.str, 5)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 59), new iData.iItem.Stat(iData.iItem.Stat.str, 8)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 64), new iData.iItem.Stat(iData.iItem.Stat.str, 12)]], null, [7, 8, 9, 10, 12, 15, 17, 20, 25, 30, 35, 40, 45, 50, 60], [[32, 80, 40, 0.2], [48, 128, 40, 0.2], [64, 160, 40, 0.2], [80, 192, 45, 0.2], [112, 208, 45, 0.25], [144, 240, 45, 0.25], [208, 320, 50, 0.25], [224, 336, 50, 0.3], [240, 352, 50, 0.4], [288, 368, 50, 0.5], [288, 400, 50, 0.6], [288, 416, 50, 0.7], [288, 432, 50, 0.8], [288, 448, 50, 0.9], [320, 480, 55, 1]], iData.iSkill.SkillDataList.des_fireball, iData.iSkill.SkillDataList.behave_fireball);
iData.iSkill.SkillDataList.THUNDER = new iData.iSkill.ActiveSkillData("Thunder", "雷击", iData.iSkill.SkillType.ATTACK, iData.iSkill.SkillCategory.MAGIC, [[new iData.iItem.Stat(iData.iItem.Stat.mp, 5), new iData.iItem.Stat(iData.iItem.Stat.will, 1)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 10), new iData.iItem.Stat(iData.iItem.Stat.will, 2)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 15), new iData.iItem.Stat(iData.iItem.Stat.will, 3)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 21), new iData.iItem.Stat(iData.iItem.Stat.will, 4)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 27), new iData.iItem.Stat(iData.iItem.Stat.will, 5)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 33), new iData.iItem.Stat(iData.iItem.Stat.will, 6)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 40), new iData.iItem.Stat(iData.iItem.Stat.will, 8)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 47), new iData.iItem.Stat(iData.iItem.Stat.will, 10)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 55), new iData.iItem.Stat(iData.iItem.Stat.will, 12)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 65), new iData.iItem.Stat(iData.iItem.Stat.will, 14)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 70), new iData.iItem.Stat(iData.iItem.Stat.will, 17)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 75), new iData.iItem.Stat(iData.iItem.Stat.will, 20)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 80), new iData.iItem.Stat(iData.iItem.Stat.will, 23)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 85), new iData.iItem.Stat(iData.iItem.Stat.will, 26)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 90), new iData.iItem.Stat(iData.iItem.Stat.will, 29)]], null, [2, 4, 6, 9, 12, 16, 20, 25, 30, 35, 40, 45, 50, 55, 60], [[16, 106, 45, 5, 0.02], [26, 160, 45, 5, 0.02], [34, 210, 45, 5, 0.02], [50, 262, 45, 5, 0.02], [70, 328, 45, 10, 0.025], [82, 380, 50, 10, 0.025], [98, 460, 50, 10, 0.025], [104, 536, 50, 10, 0.03], [118, 572, 50, 10, 0.04], [126, 628, 50, 10, 0.05], [134, 660, 50, 10, 0.06], [148, 716, 55, 10, 0.07], [148, 782, 55, 10, 0.08], [148, 848, 55, 10, 0.09], [160, 880, 60, 15, 0.1]], iData.iSkill.SkillDataList.des_thunder, iData.iSkill.SkillDataList.behave_thunder);
iData.iSkill.SkillDataList.ICE_SPEAR = new iData.iSkill.ActiveSkillData("Ice Spear", "冰刃", iData.iSkill.SkillType.ATTACK, iData.iSkill.SkillCategory.MAGIC, [[new iData.iItem.Stat(iData.iItem.Stat.intelligence, 1)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 2)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 3)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 4)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 5)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 6)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 8)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 10)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 12)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 14)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 17), new iData.iItem.Stat(iData.iItem.Stat.mp, 5)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 20), new iData.iItem.Stat(iData.iItem.Stat.mp, 10)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 23), new iData.iItem.Stat(iData.iItem.Stat.mp, 15)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 26), new iData.iItem.Stat(iData.iItem.Stat.mp, 20)], [new iData.iItem.Stat(iData.iItem.Stat.intelligence, 29), new iData.iItem.Stat(iData.iItem.Stat.mp, 30)]], null, [4, 6, 8, 10, 12, 14, 20, 25, 30, 35, 42, 48, 54, 60, 70], [[80, 88, 30, 5, 0.02, 1], [84, 96, 30, 5, 0.02, 1], [88, 104, 30, 5, 0.02, 1], [92, 112, 30, 5, 0.02, 1], [96, 120, 30, 10, 0.025, 1], [100, 128, 30, 10, 0.025, 1], [112, 144, 35, 10, 0.025, 1], [116, 152, 35, 10, 0.03, 1], [120, 160, 35, 10, 0.04, 1], [124, 168, 35, 10, 0.05, 1], [136, 184, 35, 10, 0.06, 2], [140, 192, 40, 10, 0.07, 2], [144, 200, 40, 10, 0.08, 2], [148, 208, 40, 10, 0.09, 2], [160, 240, 45, 15, 0.1, 3]], iData.iSkill.SkillDataList.des_icespear, iData.iSkill.SkillDataList.behave_ice_spear);
iData.iSkill.SkillDataList.MANA_SHIELD = new iData.iSkill.ActiveSkillData("Mana Shield", "魔法盾", iData.iSkill.SkillType.DEFENCE, iData.iSkill.SkillCategory.MAGIC, [[new iData.iItem.Stat(iData.iItem.Stat.mp, 2)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 4)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 6)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 8)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 10)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 12)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 15), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 1)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 18), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 2)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 21), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 3)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 24), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 4)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 28), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 5)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 32), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 6)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 36), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 7)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 40), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 8)], [new iData.iItem.Stat(iData.iItem.Stat.mp, 50), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 11)]], null, [4, 6, 8, 10, 12, 14, 17, 20, 23, 26, 30, 34, 38, 42, 50], [[5, 0.002, 0.5, 30], [5, 0.002, 0.5, 35], [5, 0.002, 0.5, 40], [5, 0.002, 0.5, 45], [10, 0.0025, 0.75, 50], [10, 0.0025, 0.75, 55], [10, 0.0025, 0.75, 60], [10, 0.003, 0.75, 65], [10, 0.004, 1, 70], [10, 0.005, 1, 75], [10, 0.006, 1, 80], [10, 0.007, 1, 85], [10, 0.008, 1, 90], [10, 0.009, 1, 95], [15, 0.01, 1.5, 95]], iData.iSkill.SkillDataList.des_mana_shield, iData.iSkill.SkillDataList.behave_mana_shield);
iData.iSkill.SkillDataList.RANGE_MASTERY = new iData.iSkill.PassiveSkillData("Range Mastery", "远程精通", iData.iSkill.SkillCategory.RANGED, [[new iData.iItem.Stat(iData.iItem.Stat.dex, 2)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 4)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 6)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 8)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 10)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 14)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 18)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 22)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 26)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 30), new iData.iItem.Stat(iData.iItem.Stat.str, 1)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 34), new iData.iItem.Stat(iData.iItem.Stat.str, 2), new iData.iItem.Stat(iData.iItem.Stat.will, 2)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 38), new iData.iItem.Stat(iData.iItem.Stat.str, 3), new iData.iItem.Stat(iData.iItem.Stat.will, 4)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 42), new iData.iItem.Stat(iData.iItem.Stat.str, 4), new iData.iItem.Stat(iData.iItem.Stat.will, 6)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 46), new iData.iItem.Stat(iData.iItem.Stat.str, 5), new iData.iItem.Stat(iData.iItem.Stat.will, 8)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 50), new iData.iItem.Stat(iData.iItem.Stat.str, 6), new iData.iItem.Stat(iData.iItem.Stat.will, 10)]], [[new iData.iItem.Stat(iData.iItem.Stat.attackMax, 1), new iData.iItem.Stat(iData.iItem.Stat.balance, 1)], [new iData.iItem.Stat(iData.iItem.Stat.attackMax, 2), new iData.iItem.Stat(iData.iItem.Stat.balance, 2)], [new iData.iItem.Stat(iData.iItem.Stat.attackMax, 3), new iData.iItem.Stat(iData.iItem.Stat.balance, 3)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 1), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 4), new iData.iItem.Stat(iData.iItem.Stat.balance, 4)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 1), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 5), new iData.iItem.Stat(iData.iItem.Stat.balance, 5)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 1), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 5), new iData.iItem.Stat(iData.iItem.Stat.balance, 6)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 1), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 6), new iData.iItem.Stat(iData.iItem.Stat.balance, 7)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 2), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 7), new iData.iItem.Stat(iData.iItem.Stat.balance, 8)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 2), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 8), new iData.iItem.Stat(iData.iItem.Stat.balance, 9)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 2), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 9), new iData.iItem.Stat(iData.iItem.Stat.balance, 10)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 3), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 11), new iData.iItem.Stat(iData.iItem.Stat.balance, 11)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 4), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 13), new iData.iItem.Stat(iData.iItem.Stat.balance, 12)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 6), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 18), new iData.iItem.Stat(iData.iItem.Stat.balance, 13)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 8), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 22), new iData.iItem.Stat(iData.iItem.Stat.balance, 14)], [new iData.iItem.Stat(iData.iItem.Stat.attackMin, 10), new iData.iItem.Stat(iData.iItem.Stat.attackMax, 25), new iData.iItem.Stat(iData.iItem.Stat.balance, 15)]], [0, 1, 3, 5, 7, 8, 9, 10, 12, 14, 15, 16, 17, 18, 20], iData.iSkill.SkillDataList.des_combat_master);
iData.iSkill.SkillDataList.MIRAGE_MISSILE = new iData.iSkill.ActiveSkillData("Mirage Missile", "毒箭", iData.iSkill.SkillType.ATTACK, iData.iSkill.SkillCategory.RANGED, [[new iData.iItem.Stat(iData.iItem.Stat.dex, 1)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 2)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 3)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 4)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 5)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 6), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 1)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 7), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 2)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 8), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 3)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 9), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 4)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 10), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 5)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 12), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 6)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 14), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 7)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 16), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 8)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 18), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 9)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 23), new iData.iItem.Stat(iData.iItem.Stat.intelligence, 14)]], null, [1, 2, 3, 4, 5, 6, 9, 11, 13, 15, 20, 22, 24, 26, 40], [[100, 4, 6, 0.05], [105, 4, 6, 0.05], [110, 5, 6, 0.1], [115, 6, 7, 0.1], [120, 7, 7, 0.15], [130, 9, 7, 0.15], [135, 9, 8, 0.2], [140, 12, 8, 0.25], [145, 13, 8, 0.3], [150, 15, 9, 0.3], [160, 17, 10, 0.4], [170, 19, 11, 0.45], [180, 21, 12, 0.5], [190, 23, 13, 0.6], [200, 26, 15, 0.7]], iData.iSkill.SkillDataList.des_mirage_missle, iData.iSkill.SkillDataList.behave_mirage_missle);
iData.iSkill.SkillDataList.CORROSIVE_SHOT = new iData.iSkill.ActiveSkillData("Corrosive Shot", "腐蚀箭", iData.iSkill.SkillType.ATTACK, iData.iSkill.SkillCategory.RANGED, [[new iData.iItem.Stat(iData.iItem.Stat.dex, 1)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 3)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 5)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 7)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 10)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 13)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 16)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 20)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 24)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 28)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 32)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 37)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 42)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 47)], [new iData.iItem.Stat(iData.iItem.Stat.dex, 52)]], null, [2, 4, 6, 9, 12, 16, 20, 25, 30, 35, 40, 45, 50, 55, 60], [[100, 1, 10, 0.01, 0.1], [105, 1, 10, 0.01, 0.1], [110, 1, 10, 0.01, 0.1], [115, 1, 10, 0.01, 0.1], [120, 1, 10, 0.01, 0.1], [130, 2, 15, 0.015, 0.15], [135, 2, 15, 0.015, 0.2], [140, 2, 15, 0.015, 0.3], [145, 2, 15, 0.015, 0.3], [150, 2, 20, 0.02, 0.3], [160, 2, 20, 0.022, 0.3], [170, 2, 20, 0.024, 0.35], [180, 2, 20, 0.026, 0.4], [190, 2, 20, 0.028, 0.45], [200, 3, 25, 0.03, 0.5]], iData.iSkill.SkillDataList.des_corrosive_shot, iData.iSkill.SkillDataList.behave_corrosive_shot);
iData.iSkill.SkillDataList.LIFE_DRAIN = new iData.iSkill.ActiveSkillData("Life Drain", "吸血", iData.iSkill.SkillType.ATTACK, iData.iSkill.SkillCategory.MELEE, [[new iData.iItem.Stat(iData.iItem.Stat.str, 1)], [new iData.iItem.Stat(iData.iItem.Stat.str, 2)], [new iData.iItem.Stat(iData.iItem.Stat.str, 3)], [new iData.iItem.Stat(iData.iItem.Stat.str, 4)], [new iData.iItem.Stat(iData.iItem.Stat.str, 5)], [new iData.iItem.Stat(iData.iItem.Stat.str, 6)], [new iData.iItem.Stat(iData.iItem.Stat.str, 8)], [new iData.iItem.Stat(iData.iItem.Stat.str, 10)], [new iData.iItem.Stat(iData.iItem.Stat.str, 12)], [new iData.iItem.Stat(iData.iItem.Stat.str, 14)], [new iData.iItem.Stat(iData.iItem.Stat.str, 17), new iData.iItem.Stat(iData.iItem.Stat.hp, 5)], [new iData.iItem.Stat(iData.iItem.Stat.str, 20), new iData.iItem.Stat(iData.iItem.Stat.hp, 10)], [new iData.iItem.Stat(iData.iItem.Stat.str, 23), new iData.iItem.Stat(iData.iItem.Stat.hp, 15)], [new iData.iItem.Stat(iData.iItem.Stat.str, 26), new iData.iItem.Stat(iData.iItem.Stat.hp, 20)], [new iData.iItem.Stat(iData.iItem.Stat.str, 29), new iData.iItem.Stat(iData.iItem.Stat.hp, 30)]], null, [4, 6, 8, 10, 12, 14, 17, 20, 23, 26, 30, 34, 38, 42, 50], [[10, 0.001, 30], [10, 0.001, 35], [15, 0.0015, 40], [15, 0.002, 45], [20, 0.0025, 50], [25, 0.0025, 55], [25, 0.0025, 60], [25, 0.003, 65], [25, 0.0035, 70], [25, 0.004, 75], [30, 0.005, 80], [30, 0.0055, 85], [30, 0.006, 90], [30, 0.0065, 95], [35, 0.0075, 100]], iData.iSkill.SkillDataList.des_life_drain, iData.iSkill.SkillDataList.behave_life_drain);
iData.iSkill.SkillDataList.list = [iData.iSkill.SkillDataList.COMBAT_MASTERY, iData.iSkill.SkillDataList.SMASH, iData.iSkill.SkillDataList.CRITICAL_HIT, iData.iSkill.SkillDataList.BLACKSMITHING, iData.iSkill.SkillDataList.DEFENCE, iData.iSkill.SkillDataList.COUNTERATTACK, iData.iSkill.SkillDataList.MAGIC_MASTERY, iData.iSkill.SkillDataList.FIREBOLT, iData.iSkill.SkillDataList.ICEBOLT, iData.iSkill.SkillDataList.LIGHTNINGBOLT, iData.iSkill.SkillDataList.FIREBALL, iData.iSkill.SkillDataList.ICE_SPEAR, iData.iSkill.SkillDataList.THUNDER, iData.iSkill.SkillDataList.RANGE_MASTERY, iData.iSkill.SkillDataList.MIRAGE_MISSILE, iData.iSkill.SkillDataList.CORROSIVE_SHOT, iData.iSkill.SkillDataList.LIFE_DRAIN, iData.iSkill.SkillDataList.MANA_SHIELD];
