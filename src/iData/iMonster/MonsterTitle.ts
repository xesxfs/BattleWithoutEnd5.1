module iData {
	export module iMonster {
		export class MonsterTitle {
			public name: string;
			public statMulList: Array<iData.iMonster.StatMul>;
			public xpMul: number = 0;
			public goldMul: number = 0;
			public dropMul: number = 0;

			public constructor(name: string, statMul: Array<iData.iMonster.StatMul>, xpMul: number, goldMul: number, dropMul: number) {
				this.name = name;
				this.statMulList = statMul;
				this.xpMul = xpMul;
				this.goldMul = goldMul;
				this.dropMul = dropMul;
			}

			public get description(): string {
				var desc: string = "";
				var length: number = this.statMulList.length;
				var i: number = 0;
				while (i < length) {
					if (this.statMulList[i].add > 0) {
						desc = desc + ("<font size=\'20\' color=\'" + iData.iItem.Equipment.GREEN + "\'>  " + Tool.MyMath.FirstLetterToUpper(this.statMulList[i].statTranslate()) + " +" + this.statMulList[i].add + "</font><br/>");
					}
					else if (this.statMulList[i].add < 0) {
						desc = desc + ("<font size=\'20\' color=\'#ff4040\'>  " + Tool.MyMath.FirstLetterToUpper(this.statMulList[i].statTranslate()) + " " + this.statMulList[i].add + "</font><br/>");
					}
					if (this.statMulList[i].mul > 1) {
						desc = desc + ("<font size=\'20\' color=\'" + iData.iItem.Equipment.GREEN + "\'>  " + Tool.MyMath.FirstLetterToUpper(this.statMulList[i].statTranslate()) + " x" + this.statMulList[i].mul + "</font><br/>");
					}
					else if (this.statMulList[i].mul < 1) {
						desc = desc + ("<font size=\'20\' color=\'#ff4040\'>  " + Tool.MyMath.FirstLetterToUpper(this.statMulList[i].statTranslate()) + " x" + this.statMulList[i].mul + "</font><br/>");
					}
					i++;
				}
				if (desc == "") {
					desc = "???";
				}
				return desc;
			}

		}
	}
}

