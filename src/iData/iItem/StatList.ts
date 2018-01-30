module iData {
	export module iItem {
		export class StatList {
			public static list: Array<iData.iItem.Stat>;
			/**单个属性列表 */
			public constructor() {

			}

		}
	}
}

iData.iItem.StatList.list = [
	new iData.iItem.Stat(iData.iItem.Stat.hp, 5),
	new iData.iItem.Stat(iData.iItem.Stat.mp, 5),
	new iData.iItem.Stat(iData.iItem.Stat.attackMin, 2),
	new iData.iItem.Stat(iData.iItem.Stat.attackMax, 2),
	new iData.iItem.Stat(iData.iItem.Stat.str, 3),
	new iData.iItem.Stat(iData.iItem.Stat.dex, 3),
	new iData.iItem.Stat(iData.iItem.Stat.intelligence, 3),
	new iData.iItem.Stat(iData.iItem.Stat.will, 3),
	new iData.iItem.Stat(iData.iItem.Stat.luck, 1),
	new iData.iItem.Stat(iData.iItem.Stat.defence, 1),
	new iData.iItem.Stat(iData.iItem.Stat.protection, 1),
	new iData.iItem.Stat(iData.iItem.Stat.crit, 1),
	new iData.iItem.Stat(iData.iItem.Stat.crit_mul, 1),
	new iData.iItem.Stat(iData.iItem.Stat.magicDamage, 1),
	new iData.iItem.Stat(iData.iItem.Stat.protectionIgnore, 1),
	new iData.iItem.Stat(iData.iItem.Stat.spellChance, 0.5),
	new iData.iItem.Stat(iData.iItem.Stat.balance, 1)
];
