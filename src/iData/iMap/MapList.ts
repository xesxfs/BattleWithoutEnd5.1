module iData {
	export module iMap {
		/**地图数据 */
		export class MapList {
			/**关卡地图数据 */
			public static list: Array<iData.iMap.MapData>;
			public constructor() {

			}

		}
	}
}

iData.iMap.MapList.list = [
	new iData.iMap.MapData(85, 314, "Town of Beginner", "新手镇", 0,
		[
			iData.iMonster.MonsterList.Young_Raccoon,
			iData.iMonster.MonsterList.Young_Gray_Raccoon,
			iData.iMonster.MonsterList.Young_Brown_Fox,
			iData.iMonster.MonsterList.White_Spiderling,
			iData.iMonster.MonsterList.White_Spider,
			iData.iMonster.MonsterList.Brown_Fox,
			iData.iMonster.MonsterList.Young_Red_Fox,
			iData.iMonster.MonsterList.Black_Town_Rat,
			iData.iMonster.MonsterList.Brown_Town_Rat
		],
		[
			iData.iPet.PetDataList.att_fox,
			iData.iPet.PetDataList.att_rat,
			iData.iPet.PetDataList.def_fox,
			iData.iPet.PetDataList.bal_fox
		]
	),



	new iData.iMap.MapData(130, 270, "Gairech Hill", "格林山脉", 0.4,
		[
			iData.iMonster.MonsterList.Raccoon,
			iData.iMonster.MonsterList.Old_Mimic,
			iData.iMonster.MonsterList.Red_Spiderling,
			iData.iMonster.MonsterList.Young_Gray_Fox,
			iData.iMonster.MonsterList.Giant_Spiderling,
			iData.iMonster.MonsterList.Red_Fox
		],
		[
			iData.iPet.PetDataList.def_rat,
			iData.iPet.PetDataList.att_rat,
			iData.iPet.PetDataList.mag_rat,
			iData.iPet.PetDataList.att_spider,
			iData.iPet.PetDataList.def_spider,
			iData.iPet.PetDataList.att_fox,
			iData.iPet.PetDataList.def_fox,
			iData.iPet.PetDataList.bal_fox
		]
	),


	new iData.iMap.MapData(40, 240, "Alby Peninsula", "斯特莱恩", 0.8,
		[
			iData.iMonster.MonsterList.White_Kiwi,
			iData.iMonster.MonsterList.Black_Kiwi,
			iData.iMonster.MonsterList.Green_Kiwi,
			iData.iMonster.MonsterList.Gold_Kiwi,
			iData.iMonster.MonsterList.Old_Sand_Mimic,
			iData.iMonster.MonsterList.Young_Goblin
		],
		[
			iData.iPet.PetDataList.def_rat,
			iData.iPet.PetDataList.att_rat,
			iData.iPet.PetDataList.mag_rat,
			iData.iPet.PetDataList.att_spider,
			iData.iPet.PetDataList.def_spider,
			iData.iPet.PetDataList.att_wolf,
			iData.iPet.PetDataList.mag_wolf
		]
	),


	new iData.iMap.MapData(115, 170, "Forest of Souls", "灵魂之森", 1.2,
		[
			iData.iMonster.MonsterList.Dingo,
			iData.iMonster.MonsterList.Small_Ice_Worm,
			iData.iMonster.MonsterList.Stone_Mimic,
			iData.iMonster.MonsterList.Young_Poison_Goblin,
			iData.iMonster.MonsterList.Brown_tailed_Mongoose,
			iData.iMonster.MonsterList.White_Ant_Lion
		],
		[
			iData.iPet.PetDataList.att_spider,
			iData.iPet.PetDataList.def_spider,
			iData.iPet.PetDataList.att_wolf,
			iData.iPet.PetDataList.mag_wolf,
			iData.iPet.PetDataList.def_bear,
			iData.iPet.PetDataList.bal_bear
		]
	),


	new iData.iMap.MapData(219, 137, "Filia", "费拉", 1.6,
		[
			iData.iMonster.MonsterList.Cave_Rat,
			iData.iMonster.MonsterList.Goblin,
			iData.iMonster.MonsterList.Mimic,
			iData.iMonster.MonsterList.Masked_Goblin,
			iData.iMonster.MonsterList.Black_Aardvark,
			iData.iMonster.MonsterList.Black_Wolf,
			iData.iMonster.MonsterList.Brown_Dire_Wolf,
			iData.iMonster.MonsterList.Young_Brown_Warg
		],
		[
			iData.iPet.PetDataList.att_wolf,
			iData.iPet.PetDataList.mag_wolf,
			iData.iPet.PetDataList.def_bear,
			iData.iPet.PetDataList.bal_bear,
			iData.iPet.PetDataList.att_bear
		]
	),


	new iData.iMap.MapData(300, 90, "The Frozen Shore", "冰封角", 2,
		[
			iData.iMonster.MonsterList.Bandersnatch,
			iData.iMonster.MonsterList.Blue_Snake,
			iData.iMonster.MonsterList.Kobold,
			iData.iMonster.MonsterList.Rat_Man,
			iData.iMonster.MonsterList.Red_Spider,
			iData.iMonster.MonsterList.White_Hair_Llama,
			iData.iMonster.MonsterList.Kobold_Bandit
		],
		[
			iData.iPet.PetDataList.def_bear,
			iData.iPet.PetDataList.bal_bear,
			iData.iPet.PetDataList.att_bear,
			iData.iPet.PetDataList.att_goblin,
			iData.iPet.PetDataList.def_goblin,
			iData.iPet.PetDataList.bal_goblin,
			iData.iPet.PetDataList.mag_goblin
		]
	),


	new iData.iMap.MapData(405, 63, "Ghost Hill", "幽魂谷", 2.4,
		[
			iData.iMonster.MonsterList.Coyote,
			iData.iMonster.MonsterList.Zombie_Soldier,
			iData.iMonster.MonsterList.White_Bear,
			iData.iMonster.MonsterList.Maned_Aardvark,
			iData.iMonster.MonsterList.Stone_Hound,
			iData.iMonster.MonsterList.Goblin_Keeper,
			iData.iMonster.MonsterList.Bard_Skeleton,
			iData.iMonster.MonsterList.Bard_Skeleton
		],
		[
			iData.iPet.PetDataList.att_goblin,
			iData.iPet.PetDataList.def_goblin,
			iData.iPet.PetDataList.bal_goblin,
			iData.iPet.PetDataList.mag_goblin
		]
	),

	new iData.iMap.MapData(440, 156, "Misty Mountain", "谜雾山", 2.8,
		[
			iData.iMonster.MonsterList.Burgundy_Spider,
			iData.iMonster.MonsterList.Giant_Forest_Rat,
			iData.iMonster.MonsterList.Gold_Goblin,
			iData.iMonster.MonsterList.Gold_Kobold,
			iData.iMonster.MonsterList.Gray_Gremlin,
			iData.iMonster.MonsterList.Young_Lungfish,
			iData.iMonster.MonsterList.Jackal
		],
		[
			iData.iPet.PetDataList.att_goblin,
			iData.iPet.PetDataList.def_goblin,
			iData.iPet.PetDataList.bal_goblin,
			iData.iPet.PetDataList.mag_goblin
		]
	),


	new iData.iMap.MapData(550, 100, "The Bite", "食人湾", 3.2,
		[
			iData.iMonster.MonsterList.Stripeless_Hyena,
			iData.iMonster.MonsterList.Phantom_Silver_Tableware,
			iData.iMonster.MonsterList.Stone_Mask,
			iData.iMonster.MonsterList.Dragonfly,
			iData.iMonster.MonsterList.Imp,
			iData.iMonster.MonsterList.Ice_Sprite,
			iData.iMonster.MonsterList.Lightning_Sprite
		],
		[
			iData.iPet.PetDataList.att_goblin,
			iData.iPet.PetDataList.def_goblin,
			iData.iPet.PetDataList.bal_goblin,
			iData.iPet.PetDataList.mag_goblin,
			iData.iPet.PetDataList.att_skeleton,
			iData.iPet.PetDataList.def_skeleton,
			iData.iPet.PetDataList.bal_skeleton,
			iData.iPet.PetDataList.mag_skeleton
		]
	),


	new iData.iMap.MapData(635, 137, "The Gullet", "加尔特", 3.6,
		[
			iData.iMonster.MonsterList.Red_Lynx,
			iData.iMonster.MonsterList.Skeleton,
			iData.iMonster.MonsterList.Candle_Warrior,
			iData.iMonster.MonsterList.Guardian_Horse_of_Ruins,
			iData.iMonster.MonsterList.Gorgon,
			iData.iMonster.MonsterList.Stone_Horse,
			iData.iMonster.MonsterList.Topaz_Beetle,
			iData.iMonster.MonsterList.Brown_Bear
		],
		[
			iData.iPet.PetDataList.att_skeleton,
			iData.iPet.PetDataList.def_skeleton,
			iData.iPet.PetDataList.bal_skeleton,
			iData.iPet.PetDataList.mag_skeleton
		]
	),


	new iData.iMap.MapData(680, 189, "Casterly Rock", "暴土城", 4,
		[
			iData.iMonster.MonsterList.Red_Kobold,
			iData.iMonster.MonsterList.Stone_Zombie,
			iData.iMonster.MonsterList.Black_Buffalo,
			iData.iMonster.MonsterList.Shrieker,
			iData.iMonster.MonsterList.Long_Horn_Gnu,
			iData.iMonster.MonsterList.Wisp,
			iData.iMonster.MonsterList.Saturos,
			iData.iMonster.MonsterList.Skeleton_Ghost,
			iData.iMonster.MonsterList.Guardian_of_Ruins
		],
		[
			iData.iPet.PetDataList.att_skeleton,
			iData.iPet.PetDataList.def_skeleton,
			iData.iPet.PetDataList.bal_skeleton,
			iData.iPet.PetDataList.mag_skeleton,
			iData.iPet.PetDataList.att_ghost,
			iData.iPet.PetDataList.def_ghost,
			iData.iPet.PetDataList.bal_ghost,
			iData.iPet.PetDataList.mag_ghost
		]
	),


	new iData.iMap.MapData(689, 264, "Bone Cave", "埋骨所", 4.4,
		[
			iData.iMonster.MonsterList.Black_Succubus,
			iData.iMonster.MonsterList.Giant_Spider,
			iData.iMonster.MonsterList.Stone_Horse,
			iData.iMonster.MonsterList.Troll,
			iData.iMonster.MonsterList.Gnoll,
			iData.iMonster.MonsterList.Magic_Golem,
			iData.iMonster.MonsterList.Captain_Skeleton,
			iData.iMonster.MonsterList.Green_Snake,
			iData.iMonster.MonsterList.Lost_Sahuagin
		],
		[
			iData.iPet.PetDataList.att_ghost,
			iData.iPet.PetDataList.def_ghost,
			iData.iPet.PetDataList.bal_ghost,
			iData.iPet.PetDataList.mag_ghost
		]
	),


	new iData.iMap.MapData(754, 323, "Cape Warth", "风怒角", 4.8,
		[
			iData.iMonster.MonsterList.Hippo,
			iData.iMonster.MonsterList.Brown_Ixion,
			iData.iMonster.MonsterList.Incubus,
			iData.iMonster.MonsterList.Zombie,
			iData.iMonster.MonsterList.Bisque_Doll,
			iData.iMonster.MonsterList.Ogre,
			iData.iMonster.MonsterList.Esras,
			iData.iMonster.MonsterList.Ogre_Warrior,
			iData.iMonster.MonsterList.Giant_Ogre,
			iData.iMonster.MonsterList.Siren
		],
		[
			iData.iPet.PetDataList.att_zombie,
			iData.iPet.PetDataList.def_zombie,
			iData.iPet.PetDataList.bal_zombie,
			iData.iPet.PetDataList.mag_zombie
		]
	),


	new iData.iMap.MapData(376, 448, "Wyl", "魔渊", 5.2,
		[
			iData.iMonster.MonsterList.Lion,
			iData.iMonster.MonsterList.Balrog,
			iData.iMonster.MonsterList.Cyclops,
			iData.iMonster.MonsterList.Argus,
			iData.iMonster.MonsterList.Grendel,
			iData.iMonster.MonsterList.Cloaker,
			iData.iMonster.MonsterList.Wight,
			iData.iMonster.MonsterList.Ghost_Cloaker,
			iData.iMonster.MonsterList.Black_Warrior,
			iData.iMonster.MonsterList.Pink_Succubus,
			iData.iMonster.MonsterList.Spider_Warrior
		],
		[
			iData.iPet.PetDataList.att_ruin,
			iData.iPet.PetDataList.def_ruin,
			iData.iPet.PetDataList.bal_ruin,
			iData.iPet.PetDataList.mag_ruin
		]
	),


	new iData.iMap.MapData(204, 501, "Vaith", "神墓", 5.6,
		[
			iData.iMonster.MonsterList.Head_Hyena,
			iData.iMonster.MonsterList.Hellcat,
			iData.iMonster.MonsterList.Salamander,
			iData.iMonster.MonsterList.Banshee,
			iData.iMonster.MonsterList.Ruairi,
			iData.iMonster.MonsterList.Yeti,
			iData.iMonster.MonsterList.Mammoth,
			iData.iMonster.MonsterList.Giant_Sand_Worm,
			iData.iMonster.MonsterList.Ifrit
		],
		[
			iData.iPet.PetDataList.att_ruin,
			iData.iPet.PetDataList.def_ruin,
			iData.iPet.PetDataList.bal_ruin,
			iData.iPet.PetDataList.mag_ruin,
			iData.iPet.PetDataList.def_unicorn,
			iData.iPet.PetDataList.bal_unicorn
		]
	),
	new iData.iMap.MapData(395, 265, "???", "???", 6,
		[
			iData.iMonster.MonsterList.Prairie_Dragon,
			iData.iMonster.MonsterList.Giant_Lion,
			iData.iMonster.MonsterList.Arc_Lich,
			iData.iMonster.MonsterList.Desert_Dragon
		],
		[
			iData.iPet.PetDataList.att_dragon,
			iData.iPet.PetDataList.mag_dragon,
			iData.iPet.PetDataList.def_unicorn,
			iData.iPet.PetDataList.bal_unicorn]
	)
];
