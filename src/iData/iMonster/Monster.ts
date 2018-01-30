module iData {
	export module iMonster {
		export class Monster {
			/***称号 */
			public title: iData.iMonster.MonsterTitle;
			/**数据 */
			public data: iData.iMonster.MonsterData;

			public buffList: Array<iData.iSkill.iBuff.Buff>;

			public RED: string = "#ff4040";
			public BLUE: string = "#4a60d7";
			public YELLOW: string = "#FFA640";
			public GREEN: string = "#4BB814";
			public BROWN: string = "#bf7130";
			public PURPLE: string = "#BC38d3";
			public PINK: string = "#EE6b9c";

			public constructor(monsterData: iData.iMonster.MonsterData) {

				this.data = monsterData.clone();
				this.buffList = new Array<iData.iSkill.iBuff.Buff>();
				this.generateTitle();
			}

			protected generateTitle() {
				if (Math.random() > 0.8) {
					this.title = iData.iMonster.MonsterTitleList.list[iData.iMonster.MonsterTitleList.list.length * Math.random() >> 0];
					this.addTitleStat();
				}
			}
			/**增加称号单位属性 */
			protected addTitleStat() {
				var statMul: iData.iMonster.StatMul = null;
				var length: number = this.title.statMulList.length;
				var i: number = 0;
				while (i < length) {
					statMul = this.title.statMulList[i];
					if (statMul.name == iData.iItem.Stat.attackMin) {
						this.data.attack = new iData.iNumber.DamageNumber(this.data.attack.min * statMul.mul + statMul.add, this.data.attack.max);
					}
					else if (statMul.name == iData.iItem.Stat.attackMax) {
						this.data.attack = new iData.iNumber.DamageNumber(this.data.attack.min, this.data.attack.max * statMul.mul + statMul.add);
					}
					else if (statMul.name == iData.iItem.Stat.ATTACK) {
						this.data.attack = new iData.iNumber.DamageNumber(this.data.attack.min * statMul.mul + statMul.add, this.data.attack.max * statMul.mul + statMul.add);
					}
					else {
						this.data[statMul.name] = this.data[statMul.name] * statMul.mul;
						this.data[statMul.name] = this.data[statMul.name] + statMul.add;
					}
					i++;
				}
			}

			public addBuff(buff: iData.iSkill.iBuff.Buff) {
				var buf: iData.iSkill.iBuff.Buff = this.isContainBuff(buff.name);
				if (buf == null) {
					this.buffList.push(buff);
				}
				else {
					buf.combine(buff);
				}
				MainScene.monsterInfoPanel.updateBuff();
			}

			public runBuff() {
				var length: number = this.buffList.length;
				var i: number = 0;
				while (i < length) {
					this.buffList[i].run();
					i++;
				}
				this.removeBuff();
			}

			public removeBuff() {
				var length: number = this.buffList.length;
				var i: number = 0;
				while (i < length) {
					if (this.buffList[i].isOver()) {
						this.buffList.splice(i, 1);
						MainScene.monsterInfoPanel.updateBuff();
						return;
					}
					i++;
				}
			}

			public isContainBuff(bName: string): iData.iSkill.iBuff.Buff {
				var length: number = this.buffList.length;
				var i: number = 0;
				while (i < length) {
					if (this.buffList[i].name == bName) {
						return this.buffList[i];
					}
					i++;
				}
				return null;
			}

			public get CP(): number {
				return this.data.CP;
			}

			public get money(): number {
				var clacMoney: number = (this.CP / iGlobal.Player.combatPower + iGlobal.Global.map.mapData.modifier) * this.CP / 10 * (1 + iGlobal.Player.luck / 300);
				if (this.title) {
					clacMoney = clacMoney * this.title.goldMul;
				}
				return Math.round(clacMoney);
			}

			public get exp(): number {
				var clacExp: number = (this.CP / iGlobal.Player.combatPower + iGlobal.Global.map.mapData.modifier) * this.CP * (1 + iGlobal.Player.luck / 300);
				if (this.title) {
					clacExp = clacExp * this.title.xpMul;
				}
				return Math.round(clacExp);
			}

			public get dropRate(): number {
				var rate: number = (this.CP / iGlobal.Player.combatPower + iGlobal.Global.map.mapData.modifier) * (1 + iGlobal.Player.luck / 300);
				if (this.title) {
					rate = rate * this.title.dropMul;
				}
				return rate;
			}

			public dropItem() {
				var eData: iData.iItem.EquipmentData = null;
				var equi: iData.iItem.Equipment = null;
				var toggle: boolean = false;
				if (Math.random() * 10 < 20 * this.dropRate) {
					eData = iData.iItem.EquipmentList.list[iData.iItem.EquipmentList.list.length * Math.random() >> 0];
					if (eData instanceof iData.iItem.WeaponData) {
						var loc1 = eData as iData.iItem.WeaponData;
						equi = new iData.iItem.Weapon(loc1, this.dropRate);
					}
					else {
						equi = new iData.iItem.Equipment(eData, this.dropRate);
					}
					toggle = false;
					if (!iGlobal.Global["item" + equi.quality + "_toggle"]) {
						toggle = true;
					}
					if (!toggle) {
						if ((equi instanceof iData.iItem.Weapon) || equi.type == iData.iItem.EquipType.ACCESORY) {
							if (<any>!iGlobal.Global[equi.name + "_toggle"]) {
								toggle = true;
							}
						}
						else if (<any>!iGlobal.Global[equi.position + "_" + equi.type + "_toggle"]) {
							toggle = true;
						}
					}
					if (!toggle && iGlobal.Player.addItem(equi)) {
						if (MainScene.lootPanel) {
							switch (equi.quality) {
								case 0:
									MainScene.lootPanel.basic++;
									break;
								case 1:
									MainScene.lootPanel.magic++;
									break;
								case 2:
									MainScene.lootPanel.rare++;
									break;
								case 3:
									MainScene.lootPanel.perfect++;
									break;
								case 4:
									MainScene.lootPanel.epic++;
									break;
								case 5:
									MainScene.lootPanel.legendary++;
							}
						}
					}
					else {
						toggle = true;
					}
					if (toggle) {
						iGlobal.Player.addMoney(equi.getMoney());
					}
				}
			}

			public dropPet() {
			}

			public get nameHtml(): string {
				var color: string = null;
				var title: string = null;
				var cp: number = this.CP / iGlobal.Player.combatPower;
				if (cp < 0.8) {
					color = this.PINK;
					title = "WEAKEST";
				}
				else if (cp < 1) {
					color = this.PURPLE;
					title = "WEAK";
				}
				else if (cp < 1.4) {
					color = this.BROWN;
					title = "NORMAL";
				}
				else if (cp < 2) {
					color = this.GREEN;
					title = "STRONG";
				}
				else if (cp < 3) {
					color = this.YELLOW;
					title = "AWFUL";
				}
				else {
					color = this.RED;
					title = "BOSS";
				}
				return "<font color=\'" + color + "\'>" + this.data.realName + "</font>";
			}

			public get attack(): number {
				return this.data.attack.min + (this.data.attack.max - this.data.attack.min) * Tool.MyMath.balanceRandom(this.balance);
			}

			public get hp(): number {
				return this.data.hp;
			}

			public get balance(): number {
				if (this.data.balance > 100) {
					this.data.balance = 100;
				}
				if (this.data.balance < 0) {
					this.data.balance = 0;
				}
				return this.data.balance;
			}

			public get crit(): number {
				return this.data.crit;
			}

			public get crit_mul(): number {
				return this.data.crit_mul;
			}

			public get defence(): number {
				return this.data.defence;
			}

			public get protection(): number {
				var pro: number = this.data.protection;
				var buff: iData.iSkill.iBuff.Buff = this.isContainBuff("corrosion");
				if (buff != null) {
					pro = pro - buff.count;
				}
				return pro;
			}

		}
	}
}

