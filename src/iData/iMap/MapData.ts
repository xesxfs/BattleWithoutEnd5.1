module iData {
	export module iMap {
		/**地图数据 */
		export class MapData {
			/**怪物列表 */
			public monsterList: Array<iData.iMonster.MonsterData>;
			/**地图英文名字 */
			public name: string;
			/**地图中文名字 */
			public realName: string;
			/**横坐标 */
			public x: number = 0;
			/**纵坐标 */
			public y: number = 0;
			/**调节参数 */
			public modifier: number = 0;
			/**宠物列表 */
			public petList: Array<iData.iPet.PetData>;

			public constructor(x: number, y: number, name: string, rName: string, modifier: number, monsterList: Array<iData.iMonster.MonsterData>, petList: Array<iData.iPet.PetData>) {

				this.name = name;
				this.realName = rName;
				this.x = x;
				this.y = y;
				this.monsterList = monsterList;
				this.modifier = modifier;
				this.petList = petList;
			}

		}
	}
}

