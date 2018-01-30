module iData {
	export module iItem {
		export class EquipmentList {
			public static list: Array<iData.iItem.EquipmentData>;
			/**装备列表 */
			public constructor() {

			}

		}
	}
}

iData.iItem.EquipmentList.list = [
	new iData.iItem.WeaponData(iData.iItem.Weapon.ONEHAND, iData.iItem.WeaponType.SWORD, "sword", "剑",
		[
			new iData.iItem.RangeStat(iData.iItem.Stat.attackMin, 10, 10),
			new iData.iItem.RangeStat(iData.iItem.Stat.attackMax, 16, 16),
			new iData.iItem.RangeStat(iData.iItem.Stat.balance, 30, 3),
			new iData.iItem.RangeStat(iData.iItem.Stat.crit, 15, 3)
		],
		iData.iItem.WeaponCategory.MELEE,
		1),

	new iData.iItem.WeaponData(iData.iItem.Weapon.TWOHAND, iData.iItem.WeaponType.AXE, "axe", "斧",
		[
			new iData.iItem.RangeStat(iData.iItem.Stat.attackMin, 5, 5),
			new iData.iItem.RangeStat(iData.iItem.Stat.attackMax, 24, 24),
			new iData.iItem.RangeStat(iData.iItem.Stat.balance, 15, 3),
			new iData.iItem.RangeStat(iData.iItem.Stat.crit, 15, 3)
		],
		iData.iItem.WeaponCategory.MELEE,
		2),

	new iData.iItem.WeaponData(iData.iItem.Weapon.TWOHAND, iData.iItem.WeaponType.BOW, "bow", "弓",
		[
			new iData.iItem.RangeStat(iData.iItem.Stat.attackMin, 5, 5),
			new iData.iItem.RangeStat(iData.iItem.Stat.attackMax, 10, 10),
			new iData.iItem.RangeStat(iData.iItem.Stat.balance, 30, 3),
			new iData.iItem.RangeStat(iData.iItem.Stat.crit, 30, 3)
		],
		iData.iItem.WeaponCategory.RANGED,
		3),

	new iData.iItem.WeaponData(iData.iItem.Weapon.TWOHAND, iData.iItem.WeaponType.CROSSBOW, "crossbow", "弩",
		[
			new iData.iItem.RangeStat(iData.iItem.Stat.attackMin, 10, 10),
			new iData.iItem.RangeStat(iData.iItem.Stat.attackMax, 16, 16),
			new iData.iItem.RangeStat(iData.iItem.Stat.balance, 15, 3),
			new iData.iItem.RangeStat(iData.iItem.Stat.crit, 30, 3)
		],
		iData.iItem.WeaponCategory.RANGED,
		4),


	new iData.iItem.WeaponData(iData.iItem.Weapon.ONEHAND, iData.iItem.WeaponType.SCEPTRE, "sceptre", "权杖",
		[
			new iData.iItem.RangeStat(iData.iItem.Stat.attackMin, 10, 10),
			new iData.iItem.RangeStat(iData.iItem.Stat.attackMax, 16, 16),
			new iData.iItem.RangeStat(iData.iItem.Stat.balance, 15, 3),
			new iData.iItem.RangeStat(iData.iItem.Stat.crit, 5, 3)
		],
		iData.iItem.WeaponCategory.MELEE,
		5),


	new iData.iItem.WeaponData(iData.iItem.Weapon.TWOHAND, iData.iItem.WeaponType.STAFF, "staff", "法杖",
		[
			new iData.iItem.RangeStat(iData.iItem.Stat.attackMin, 10, 10),
			new iData.iItem.RangeStat(iData.iItem.Stat.attackMax, 16, 16),
			new iData.iItem.RangeStat(iData.iItem.Stat.balance, 30, 3),
			new iData.iItem.RangeStat(iData.iItem.Stat.crit, 15, 3)
		],
		iData.iItem.WeaponCategory.MELEE,
		6),


	new iData.iItem.WeaponData(iData.iItem.Weapon.OFFHAND, iData.iItem.WeaponType.TOME, "tome", "书",
		[
			new iData.iItem.RangeStat(iData.iItem.Stat.mp, 10, 10),
			new iData.iItem.RangeStat(iData.iItem.Stat.defence, 1, 4)
		],
		iData.iItem.WeaponCategory.MELEE,
		7),


	new iData.iItem.WeaponData(iData.iItem.Weapon.OFFHAND, iData.iItem.WeaponType.SHIELD, "shield", "盾",
		[
			new iData.iItem.RangeStat(iData.iItem.Stat.defence, 1, 4),
			new iData.iItem.RangeStat(iData.iItem.Stat.protection, 1, 4)
		],
		iData.iItem.WeaponCategory.MELEE,
		8),


	new iData.iItem.WeaponData(iData.iItem.Weapon.OFFHAND, iData.iItem.WeaponType.DAGGER, "dagger", "匕首",
		[
			new iData.iItem.RangeStat(iData.iItem.Stat.attackMin, 5, 5),
			new iData.iItem.RangeStat(iData.iItem.Stat.attackMax, 8, 8),
			new iData.iItem.RangeStat(iData.iItem.Stat.crit, 5, 3)
		],
		iData.iItem.WeaponCategory.MELEE,
		9),


	new iData.iItem.EquipmentData(iData.iItem.Equipment.BODY, iData.iItem.EquipType.LIGHT, "suit", "布衣",
		[
			new iData.iItem.RangeStat(iData.iItem.Stat.defence, 1, 4),
			new iData.iItem.RangeStat(iData.iItem.Stat.protection, 1, 2)
		],
		10),


	new iData.iItem.EquipmentData(iData.iItem.Equipment.BODY, iData.iItem.EquipType.MEDIUM, "jerkin", "皮衣",
		[
			new iData.iItem.RangeStat(iData.iItem.Stat.defence, 1, 2),
			new iData.iItem.RangeStat(iData.iItem.Stat.protection, 1, 4)
		],
		11),


	new iData.iItem.EquipmentData(iData.iItem.Equipment.BODY, iData.iItem.EquipType.HEAVY, "breastplate", "铠甲",
		[new iData.iItem.RangeStat(iData.iItem.Stat.defence, 1, 3), new iData.iItem.RangeStat(iData.iItem.Stat.protection, 1, 3)], 12),


	new iData.iItem.EquipmentData(iData.iItem.Equipment.HEAD, iData.iItem.EquipType.LIGHT, "fur hat", "布帽",
		[new iData.iItem.RangeStat(iData.iItem.Stat.defence, 1, 4), new iData.iItem.RangeStat(iData.iItem.Stat.protection, 1, 2)], 13),


	new iData.iItem.EquipmentData(iData.iItem.Equipment.HEAD, iData.iItem.EquipType.MEDIUM, "felt hat", "皮帽",
		[new iData.iItem.RangeStat(iData.iItem.Stat.defence, 1, 2), new iData.iItem.RangeStat(iData.iItem.Stat.protection, 1, 4)], 14),


	new iData.iItem.EquipmentData(iData.iItem.Equipment.HEAD, iData.iItem.EquipType.HEAVY, "helm", "头盔",
		[new iData.iItem.RangeStat(iData.iItem.Stat.defence, 1, 3), new iData.iItem.RangeStat(iData.iItem.Stat.protection, 1, 3)], 15),


	new iData.iItem.EquipmentData(iData.iItem.Equipment.FEET, iData.iItem.EquipType.LIGHT, "Shoes", "布鞋",
		[new iData.iItem.RangeStat(iData.iItem.Stat.defence, 1, 4), new iData.iItem.RangeStat(iData.iItem.Stat.protection, 1, 2)], 16),


	new iData.iItem.EquipmentData(iData.iItem.Equipment.FEET, iData.iItem.EquipType.MEDIUM, "Boots", "皮鞋",
		[new iData.iItem.RangeStat(iData.iItem.Stat.defence, 1, 2), new iData.iItem.RangeStat(iData.iItem.Stat.protection, 1, 4)], 17),


	new iData.iItem.EquipmentData(iData.iItem.Equipment.FEET, iData.iItem.EquipType.HEAVY, "Greaves", "铁靴",
		[new iData.iItem.RangeStat(iData.iItem.Stat.defence, 1, 3), new iData.iItem.RangeStat(iData.iItem.Stat.protection, 1, 3)], 18),


	new iData.iItem.EquipmentData(iData.iItem.Equipment.NECKLACE, iData.iItem.EquipType.ACCESORY, "necklace", "项链", new Array<iData.iItem.RangeStat>(0), 19),


	new iData.iItem.EquipmentData(iData.iItem.Equipment.RING, iData.iItem.EquipType.ACCESORY, "ring", "戒指", new Array<iData.iItem.RangeStat>(0), 20)
];
