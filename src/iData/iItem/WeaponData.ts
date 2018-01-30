module iData {
	export module iItem {
		export class WeaponData extends iData.iItem.EquipmentData {
			public category: string;

			public constructor(pos: string, type: string, name: string, realName: string, stat: Array<iData.iItem.RangeStat>, category: string, sortWeight: number) {
				super(pos, type, name, realName, stat, sortWeight);
				// param7 = param7;
				this.category = category;
			}

		}
	}
}

