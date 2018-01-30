module iData {
	export module iItem {
		export class Weapon extends iData.iItem.Equipment {
			public static ONEHAND: string;
			public static OFFHAND: string;
			public static TWOHAND: string;
			/**种类 */
			public category: string;

			public constructor(wData: iData.iItem.WeaponData, ratio: number, isBoos: boolean = false) {
				super(wData, ratio, isBoos);
			}

			protected setData(eData: iData.iItem.EquipmentData): any {
				super.setData(eData);
				//这里
				var param = eData as iData.iItem.WeaponData;
				this.category = param.category;
			}

			public getCategory(): string {
				switch (this.category) {
					case iData.iItem.WeaponCategory.RANGED:
						return "远程";
					case iData.iItem.WeaponCategory.MELEE:
						return "近战";
					default:
						return this.category;
				}
			}

		}
	}
}
/**单手 */
iData.iItem.Weapon.ONEHAND = "one-handed";
/**不用手 */
iData.iItem.Weapon.OFFHAND = "off hand";
/**双手 */
iData.iItem.Weapon.TWOHAND = "two-handed";

