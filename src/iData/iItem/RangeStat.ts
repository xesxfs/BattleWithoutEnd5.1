module iData {
	export module iItem {
		export class RangeStat {
			public name: string;
			public valueMin: number = 0;
			public changeRange: number = 0;
			/***单个属性随机**/
			public constructor(name: string, min: number, changeRange: number) {
				this.name = name;
				this.valueMin = min;
				this.changeRange = changeRange;
			}

		}
	}
}

