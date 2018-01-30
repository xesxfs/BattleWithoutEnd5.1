module iData {
	export module iSkill {
		export module iBuff {
			export class BuffPoison extends iData.iSkill.iBuff.Buff {

				public constructor(count: number) {
					super(count);
					count = count;
					this.name = "poison";
					this.count = count;
				}

				public run() {
					MainScene.battle.monsterHp = MainScene.battle.monsterHp - this.count;
					MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>毒</font>对" + MainScene.battle.monster.nameHtml + "造成了<font color=\'#ff4040\'>" + this.count + "</font>伤害 ", iGlobal.Global.battle);
				}

				public combine(buff: iData.iSkill.iBuff.Buff) {
					this.count = this.count + buff.count;
				}

			}
		}
	}
}
