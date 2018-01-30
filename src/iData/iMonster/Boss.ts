module iData {
	export module iMonster {
		/**Boss类 */
		export class Boss extends iData.iMonster.Monster {
			/**boss血量*/
			public hpleft: number = 0;

			public constructor(data: iData.iMonster.MonsterData) {
				super(data);
				this.hpleft = this.hp;
			}

			protected generateTitle() {
				this.title = iData.iMonster.MonsterTitleList.REGION_BOSS;
				this.addTitleStat();
			}

			public get CP(): number {
				return this.data.CP * 2;
			}

			public dropItem() {
				var equipment: iData.iItem.Equipment = null;
				var equipmentData: iData.iItem.EquipmentData = iData.iItem.EquipmentList.list[(iData.iItem.EquipmentList.list.length * Math.random()) >> 0];
				if (equipmentData instanceof iData.iItem.WeaponData) {
					equipment = new iData.iItem.Weapon(equipmentData, this.dropRate, true);
				}
				else {
					equipment = new iData.iItem.Equipment(equipmentData, this.dropRate, true);
				}
				var itemToggle: boolean = false;
				if (!iGlobal.Global["item" + equipment.quality + "_toggle"]) {
					itemToggle = true;
				}
				if (!itemToggle) {
					if ((equipment instanceof iData.iItem.Weapon) || equipment.type == iData.iItem.EquipType.ACCESORY) {
						if (!iGlobal.Global[equipment.name + "_toggle"]) {
							itemToggle = true;
						}
					}
					else if (!iGlobal.Global[equipment.position + "_" + equipment.type + "_toggle"]) {
						itemToggle = true;
					}
				}
				if (!itemToggle && iGlobal.Player.addItem(equipment)) {
					if (MainScene.lootPanel) {
						switch (equipment.quality) {
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
					itemToggle = true;
				}

				if (itemToggle) {
					iGlobal.Player.addMoney(equipment.getMoney());
				}
			}

			public dropPet() {
				var statusRate: number = 0;
				var statusCount: number = 0;
				var dropRate: number = 20 * (1 + iGlobal.Player.luck / 200);
				if (dropRate > 40) {
					dropRate = 40;
				}
				if (Math.random() * 100 < dropRate) {
					statusRate = iGlobal.Player.luck / 500;
					if (statusRate > 1) {
						statusRate = 1;
					}
					statusCount = (1 + iGlobal.Global.map.mapData.modifier) * (1 + statusRate);
					iGlobal.Player.addPet(new iData.iPet.Pet(iGlobal.Global.map.mapData.petList[iGlobal.Global.map.mapData.petList.length * Math.random() >> 0], statusCount));
				}
			}

		}
	}
}

