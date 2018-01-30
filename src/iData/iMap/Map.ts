module iData {
	export module iMap {
		export class Map {
			public mapData: iData.iMap.MapData;
			public averageCp: number = 0;

			public constructor(mapData: iData.iMap.MapData) {

				this.mapData = mapData;
				this.setAverageCp();
			}
			/**平均战力 */
			public setAverageCp() {
				var i: number = 0;
				var cp: number = 0;
				var length: number = this.mapData.monsterList.length;
				while (i < length) {
					cp = cp + this.mapData.monsterList[i].CP;
					i++;
				}
				this.averageCp = cp / length;
			}

			/**获得一个Boss */
			public getBoss(): iData.iMonster.Boss {
				//在当前地图，怪物列表随机一个怪物，生成本地图的Boss
				var boos: iData.iMonster.Boss = new iData.iMonster.Boss(this.mapData.monsterList[Math.random() * this.mapData.monsterList.length >> 0]);
				return boos;
			}

		}
	}
}

