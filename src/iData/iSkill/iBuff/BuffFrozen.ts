module iData {
	export module iSkill {
		export module iBuff {
			export class BuffFrozen extends iData.iSkill.iBuff.Buff {

				public constructor(count: number) {
					super(count);
					this.name = "frozen";
					this.count = count;
				}

				public run() {
					this.count--;
					MainScene.allInfoPanel.addText(MainScene.battle.monster.nameHtml + "被<font color=\'#ff4040\'>冰冻了!</font>", iGlobal.Global.battle);
				}

				public combine(buff: iData.iSkill.iBuff.Buff) {
					this.count = buff.count;
				}

			}
		}
	}
}
