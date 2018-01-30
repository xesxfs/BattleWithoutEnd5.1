module iData {
	export module iItem {
		export class EquipType {
			public static HEAVY: string;
			public static MEDIUM: string;
			public static LIGHT: string;
			public static ACCESORY: string;

			public static HEAVY_BASE: Array<iData.iItem.Stat>;
			public static MEDIUM_BASE: Array<iData.iItem.Stat>;
			public static LIGHT_BASE: Array<iData.iItem.Stat>;
			public static ACCESORY_BASE: Array<iData.iItem.Stat>;
			/**装备类型 */
			public constructor() {

			}

		}
	}
}
/**重甲 */
iData.iItem.EquipType.HEAVY = "heavy";
/**皮甲 */
iData.iItem.EquipType.MEDIUM = "medium";
/**轻甲 */
iData.iItem.EquipType.LIGHT = "light";
/**配饰*/
iData.iItem.EquipType.ACCESORY = "accesory";

iData.iItem.EquipType.HEAVY_BASE = [new iData.iItem.Stat(iData.iItem.Stat.defence, 2), new iData.iItem.Stat(iData.iItem.Stat.protection, 1)];
iData.iItem.EquipType.MEDIUM_BASE = [new iData.iItem.Stat(iData.iItem.Stat.hp, 5), new iData.iItem.Stat(iData.iItem.Stat.protection, 1)];
iData.iItem.EquipType.LIGHT_BASE = [new iData.iItem.Stat(iData.iItem.Stat.hp, 5), new iData.iItem.Stat(iData.iItem.Stat.defence, 2)];
iData.iItem.EquipType.ACCESORY_BASE = new Array<iData.iItem.Stat>();
