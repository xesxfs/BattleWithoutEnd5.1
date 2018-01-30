module iData {
	export module iPlayer {
		export class Title {
			public name: string;
			public realName: string;
			public statMulList: Array<iData.iMonster.StatMul>;
			public maxFix: number = 0;
			public countFix: number = 0;
			public max: number = 0;
			public count: number = 0;
			public description: string;
			public behaveFunction: Function;
			public isGot: boolean = false;

			public constructor(name: string, realName: string, description: string, statMulList: Array<iData.iMonster.StatMul>, maxFix: number = 0, countFix: number = 0, behaveFunction: Function = null) {

				this.name = name;
				this.realName = realName;
				this.description = description;
				this.statMulList = statMulList;
				this.maxFix = maxFix;
				this.countFix = countFix;
				this.behaveFunction = behaveFunction;
			}

			public setGot() {
				if (!this.isGot) {
					this.isGot = true;
					if (MainScene.allInfoPanel) {
						MainScene.allInfoPanel.addText("<font color=\'" + iData.iItem.Equipment.ORANGE + "\'>You get Title &lt;" + this.name + "&gt; </font>");
					}
					if (this.behaveFunction) {
						this.behaveFunction();
					}
					if (MainScene.otherPanel) {
						if (MainScene.otherPanel.titleWindow) {
							MainScene.otherPanel.titleWindow.update();
						}
					}
				}
			}

			public updateInfo(max: number = 0, count: number = 0) {
				if (max > this.max) {
					this.max = max;
				}
				if (count < 0) {
					this.count = 0;
				}
				else {
					this.count = this.count + count;
				}
				if (this.isGot) {
					return;
				}
				if (this.count >= this.countFix && this.max >= this.maxFix) {
					this.setGot();
				}
			}

			public getDescription(): string {
				var desc: string = "";
				desc = desc + ("<p align=\'center\'>" + this.description + "</p>");
				desc = desc + "--------------<br/>";
				if (this.maxFix != 0) {
					desc = desc + ("记录:" + this.max + "<br/>");
					desc = desc + "--------------<br/>";
				}
				if (this.countFix != 0) {
					desc = desc + ("记录:" + this.count + "<br/>");
					desc = desc + "--------------<br/>";
				}
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
				return desc;
			}

			public save(): string {
				var save: string = "";
				save = save + (this.max + "#" + this.count + "#");
				if (this.isGot) {
					save = save + "1";
				}
				else {
					save = save + "0";
				}
				return save;
			}

			public load(loadStr: string) {
				var arr: Array<string> = loadStr.split("#");
				this.max = parseInt(arr[0]);
				this.count = parseInt(arr[1]);
				if (parseInt(arr[2]) == 0) {
					this.isGot = false;
				} else {
					this.isGot = true;
				}
			}

		}
	}
}

