module iData {
	export module iItem {
		export class WeaponCategory {
			public static MELEE: string;
			public static RANGED: string;
			/**武器类型 */
			public constructor() {

			}

		}
	}
}
/**近战 */
iData.iItem.WeaponCategory.MELEE = "melee";
/**远程 弓箭 */
iData.iItem.WeaponCategory.RANGED = "ranged";
