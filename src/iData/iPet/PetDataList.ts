module iData {
	export module iPet {
		export class PetDataList extends egret.HashObject {
			public static att_fox: iData.iPet.PetData;
			public static def_fox: iData.iPet.PetData;
			public static bal_fox: iData.iPet.PetData;
			public static att_rat: iData.iPet.PetData;
			public static def_rat: iData.iPet.PetData;
			public static mag_rat: iData.iPet.PetData;
			public static att_spider: iData.iPet.PetData;
			public static def_spider: iData.iPet.PetData;
			public static att_wolf: iData.iPet.PetData;
			public static mag_wolf: iData.iPet.PetData;
			public static att_bear: iData.iPet.PetData;
			public static def_bear: iData.iPet.PetData;
			public static bal_bear: iData.iPet.PetData;
			public static att_goblin: iData.iPet.PetData;
			public static def_goblin: iData.iPet.PetData;
			public static bal_goblin: iData.iPet.PetData;
			public static mag_goblin: iData.iPet.PetData;
			public static att_skeleton: iData.iPet.PetData;
			public static def_skeleton: iData.iPet.PetData;
			public static bal_skeleton: iData.iPet.PetData;
			public static mag_skeleton: iData.iPet.PetData;
			public static att_ghost: iData.iPet.PetData;
			public static def_ghost: iData.iPet.PetData;
			public static bal_ghost: iData.iPet.PetData;
			public static mag_ghost: iData.iPet.PetData;
			public static att_zombie: iData.iPet.PetData;
			public static def_zombie: iData.iPet.PetData;
			public static bal_zombie: iData.iPet.PetData;
			public static mag_zombie: iData.iPet.PetData;
			public static att_ruin: iData.iPet.PetData;
			public static def_ruin: iData.iPet.PetData;
			public static bal_ruin: iData.iPet.PetData;
			public static mag_ruin: iData.iPet.PetData;
			public static def_unicorn: iData.iPet.PetData;
			public static bal_unicorn: iData.iPet.PetData;
			public static att_dragon: iData.iPet.PetData;
			public static mag_dragon: iData.iPet.PetData;
			public static list: Array<iData.iPet.PetData>;

			public constructor() {
				super();
			}

		}
	}
}

iData.iPet.PetDataList.att_fox = new iData.iPet.PetData("Red Fox", "红狐狸", iData.iPet.PetTypeList.attack, "fox");
iData.iPet.PetDataList.def_fox = new iData.iPet.PetData("Brown Fox", "棕狐狸", iData.iPet.PetTypeList.defence, "fox");
iData.iPet.PetDataList.bal_fox = new iData.iPet.PetData("Gray Fox", "灰狐狸", iData.iPet.PetTypeList.balance, "fox");
iData.iPet.PetDataList.att_rat = new iData.iPet.PetData("Town Rat", "白鼠", iData.iPet.PetTypeList.attack, "rat");
iData.iPet.PetDataList.def_rat = new iData.iPet.PetData("Black Rat", "黑鼠", iData.iPet.PetTypeList.defence, "rat");
iData.iPet.PetDataList.mag_rat = new iData.iPet.PetData("Rat Mage", "魔鼠", iData.iPet.PetTypeList.magic, "rat");
iData.iPet.PetDataList.att_spider = new iData.iPet.PetData("Red Spider", "红蜘蛛", iData.iPet.PetTypeList.attack, "spider");
iData.iPet.PetDataList.def_spider = new iData.iPet.PetData("Giant Spider", "巨蜘蛛", iData.iPet.PetTypeList.defence, "spider");
iData.iPet.PetDataList.att_wolf = new iData.iPet.PetData("Wild Wolf", "野狼", iData.iPet.PetTypeList.attack, "wolf");
iData.iPet.PetDataList.mag_wolf = new iData.iPet.PetData("Werewolf", "狼人", iData.iPet.PetTypeList.magic, "wolf");
iData.iPet.PetDataList.att_bear = new iData.iPet.PetData("Red Bear", "红熊", iData.iPet.PetTypeList.attack, "bear");
iData.iPet.PetDataList.def_bear = new iData.iPet.PetData("Brown Bear", "棕熊", iData.iPet.PetTypeList.defence, "bear");
iData.iPet.PetDataList.bal_bear = new iData.iPet.PetData("Gray Bear", "灰熊", iData.iPet.PetTypeList.balance, "bear");
iData.iPet.PetDataList.att_goblin = new iData.iPet.PetData("Goblin Warrior", "哥布林战士", iData.iPet.PetTypeList.attack, "goblin");
iData.iPet.PetDataList.def_goblin = new iData.iPet.PetData("Goblin Protector", "哥布林卫士", iData.iPet.PetTypeList.defence, "goblin");
iData.iPet.PetDataList.bal_goblin = new iData.iPet.PetData("Goblin Archer", "哥布林弓手", iData.iPet.PetTypeList.balance, "goblin");
iData.iPet.PetDataList.mag_goblin = new iData.iPet.PetData("Goblin Mage", "哥布林法师", iData.iPet.PetTypeList.magic, "goblin");
iData.iPet.PetDataList.att_skeleton = new iData.iPet.PetData("Skeleton Warrior", "骷髅战士", iData.iPet.PetTypeList.attack, "skeleton");
iData.iPet.PetDataList.def_skeleton = new iData.iPet.PetData("Skeleton Protector", "骷髅卫士", iData.iPet.PetTypeList.defence, "skeleton");
iData.iPet.PetDataList.bal_skeleton = new iData.iPet.PetData("Skeleton Archer", "骷髅弓手", iData.iPet.PetTypeList.balance, "skeleton");
iData.iPet.PetDataList.mag_skeleton = new iData.iPet.PetData("Skeleton Mage", "骷髅法师", iData.iPet.PetTypeList.magic, "skeleton");
iData.iPet.PetDataList.att_ghost = new iData.iPet.PetData("Fire Sprite", "火焰幽灵", iData.iPet.PetTypeList.attack, "ghost");
iData.iPet.PetDataList.def_ghost = new iData.iPet.PetData("Stone Sprite", "岩石幽灵", iData.iPet.PetTypeList.defence, "ghost");
iData.iPet.PetDataList.bal_ghost = new iData.iPet.PetData("Wind Sprite", "风幽灵", iData.iPet.PetTypeList.balance, "ghost");
iData.iPet.PetDataList.mag_ghost = new iData.iPet.PetData("Lightning Sprite", "雷幽灵", iData.iPet.PetTypeList.magic, "ghost");
iData.iPet.PetDataList.att_zombie = new iData.iPet.PetData("Zombie Warrior", "僵尸武士", iData.iPet.PetTypeList.attack, "zombie");
iData.iPet.PetDataList.def_zombie = new iData.iPet.PetData("Zombie Protector", "僵尸卫士", iData.iPet.PetTypeList.defence, "zombie");
iData.iPet.PetDataList.bal_zombie = new iData.iPet.PetData("Zombie Archer", "僵尸弓手", iData.iPet.PetTypeList.balance, "zombie");
iData.iPet.PetDataList.mag_zombie = new iData.iPet.PetData("Zombie Mage", "僵尸法师", iData.iPet.PetTypeList.magic, "zombie");
iData.iPet.PetDataList.att_ruin = new iData.iPet.PetData("Warrior of Ruins", "毁灭战士", iData.iPet.PetTypeList.attack, "attack");
iData.iPet.PetDataList.def_ruin = new iData.iPet.PetData("Protector of Ruins", "毁灭卫士", iData.iPet.PetTypeList.defence, "defence");
iData.iPet.PetDataList.bal_ruin = new iData.iPet.PetData("Archer of Ruins", "毁灭弓手", iData.iPet.PetTypeList.balance, "balance");
iData.iPet.PetDataList.mag_ruin = new iData.iPet.PetData("Mage of Ruins", "毁灭法师", iData.iPet.PetTypeList.magic, "magic");
iData.iPet.PetDataList.def_unicorn = new iData.iPet.PetData("Holy Unicorn", "神圣独角兽", iData.iPet.PetTypeList.defence, "unicorn");
iData.iPet.PetDataList.bal_unicorn = new iData.iPet.PetData("Prairie Unicorn", "自然独角兽", iData.iPet.PetTypeList.balance, "unicorn");
iData.iPet.PetDataList.att_dragon = new iData.iPet.PetData("Dark Dragon", "暗黑龙", iData.iPet.PetTypeList.attack, "dragon");
iData.iPet.PetDataList.mag_dragon = new iData.iPet.PetData("Shining Dragon", "光明龙", iData.iPet.PetTypeList.magic, "dragon");
iData.iPet.PetDataList.list = [iData.iPet.PetDataList.att_bear, iData.iPet.PetDataList.att_dragon, iData.iPet.PetDataList.att_fox, iData.iPet.PetDataList.att_ghost, iData.iPet.PetDataList.att_goblin, iData.iPet.PetDataList.att_rat, iData.iPet.PetDataList.att_ruin, iData.iPet.PetDataList.att_skeleton, iData.iPet.PetDataList.att_spider, iData.iPet.PetDataList.att_wolf, iData.iPet.PetDataList.att_zombie, iData.iPet.PetDataList.def_bear, iData.iPet.PetDataList.def_fox, iData.iPet.PetDataList.def_ghost, iData.iPet.PetDataList.def_goblin, iData.iPet.PetDataList.def_rat, iData.iPet.PetDataList.def_ruin, iData.iPet.PetDataList.def_skeleton, iData.iPet.PetDataList.def_spider, iData.iPet.PetDataList.def_unicorn, iData.iPet.PetDataList.def_zombie, iData.iPet.PetDataList.bal_bear, iData.iPet.PetDataList.bal_fox, iData.iPet.PetDataList.bal_ghost, iData.iPet.PetDataList.bal_goblin, iData.iPet.PetDataList.bal_ruin, iData.iPet.PetDataList.bal_skeleton, iData.iPet.PetDataList.bal_unicorn, iData.iPet.PetDataList.bal_zombie, iData.iPet.PetDataList.mag_dragon, iData.iPet.PetDataList.mag_ghost, iData.iPet.PetDataList.mag_ghost, iData.iPet.PetDataList.mag_goblin, iData.iPet.PetDataList.mag_rat, iData.iPet.PetDataList.mag_ruin, iData.iPet.PetDataList.mag_skeleton, iData.iPet.PetDataList.mag_wolf, iData.iPet.PetDataList.mag_zombie];
