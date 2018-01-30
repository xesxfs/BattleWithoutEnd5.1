module iData {
	export module iItem {
		export class EquipmentData {
			/**部位 */
			public position: string;
			/**类型 */
			public type: string;
			/**名字 */
			public name: string;
			public realName: string;
			/**随机属性 */
			public stat: Array<iData.iItem.RangeStat>;
			/**排序权重 */
			public sortWeight: number = 0;

			public constructor(pos: string, type: string, name: string, realName: string, stat: Array<iData.iItem.RangeStat>, sortWeight: number) {
				this.position = pos;
				this.type = type;
				this.name = name;
				this.realName = realName;
				this.stat = stat;
				this.sortWeight = sortWeight;
			}

		}
	}
}

