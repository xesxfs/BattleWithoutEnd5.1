module iData {
	export module iItem {
		export class WeaponType {
			/**类型名字 */
			public static SWORD: string;
			public static AXE: string;
			public static BOW: string;
			public static CROSSBOW: string;
			public static STAFF: string;
			public static SCEPTRE: string;
			public static DAGGER: string;
			public static SHIELD: string;
			public static TOME: string;

			/**基础属性 */
			public static SWORD_BASE: Array<iData.iItem.Stat>;
			public static AXE_BASE: Array<iData.iItem.Stat>;
			public static BOW_BASE: Array<iData.iItem.Stat>;
			public static CROSSBOW_BASE: Array<iData.iItem.Stat>;
			public static STAFF_BASE: Array<iData.iItem.Stat>;
			public static SCEPTRE_BASE: Array<iData.iItem.Stat>;
			public static DAGGER_BASE: Array<iData.iItem.Stat>;
			public static SHIELD_BASE: Array<iData.iItem.Stat>;
			public static TOME_BASE: Array<iData.iItem.Stat>;
			/**武器类型 */
			public constructor() {

			}

		}
	}
}

iData.iItem.WeaponType.SWORD = "sword";
iData.iItem.WeaponType.AXE = "axe";
iData.iItem.WeaponType.BOW = "bow";
iData.iItem.WeaponType.CROSSBOW = "crossbow";
iData.iItem.WeaponType.STAFF = "staff";
iData.iItem.WeaponType.SCEPTRE = "sceptre";
iData.iItem.WeaponType.DAGGER = "dagger";
iData.iItem.WeaponType.SHIELD = "shield";
iData.iItem.WeaponType.TOME = "tome";

iData.iItem.WeaponType.SWORD_BASE = [new iData.iItem.Stat(iData.iItem.Stat.ATTACK, 2.5), new iData.iItem.Stat(iData.iItem.Stat.crit, 2)];
iData.iItem.WeaponType.AXE_BASE = [new iData.iItem.Stat(iData.iItem.Stat.ATTACK, 4), new iData.iItem.Stat(iData.iItem.Stat.hp, 5)];
iData.iItem.WeaponType.BOW_BASE = [new iData.iItem.Stat(iData.iItem.Stat.ATTACK, 3), new iData.iItem.Stat(iData.iItem.Stat.protectionIgnore, 1)];
iData.iItem.WeaponType.CROSSBOW_BASE = [new iData.iItem.Stat(iData.iItem.Stat.ATTACK, 4), new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 3)];
iData.iItem.WeaponType.STAFF_BASE = [new iData.iItem.Stat(iData.iItem.Stat.mp, 5), new iData.iItem.Stat(iData.iItem.Stat.magicDamage, 1)];
iData.iItem.WeaponType.SCEPTRE_BASE = [new iData.iItem.Stat(iData.iItem.Stat.ATTACK, 2), new iData.iItem.Stat(iData.iItem.Stat.mp, 5)];
iData.iItem.WeaponType.DAGGER_BASE = [new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 3)];
iData.iItem.WeaponType.SHIELD_BASE = [new iData.iItem.Stat(iData.iItem.Stat.defence, 3)];
iData.iItem.WeaponType.TOME_BASE = [new iData.iItem.Stat(iData.iItem.Stat.spellChance, 0.3)];
