module iData {
	export class Race {
		/*种族名字*/
		public name: string;
		/*最初属性*/
		public initial: iData.BasicStatus;
		/*年龄属性列表*/
		public ageupList: Array<iData.BasicStatus>;

		public constructor(name: string, initial: iData.BasicStatus, ageupList: Array<iData.BasicStatus>) {

			this.name = name;
			this.initial = initial;
			this.ageupList = ageupList;
		}

		/*通过年龄计算属性值*/
		public caculateStat(age: number): iData.BasicStatus {
			var stat: iData.BasicStatus = this.initial.clone();
			var value: number = age - 25;
			if (age > 25) {
				age = 25;
			}
			var baseAge: number = 10;
			while (baseAge < age) {
				stat.hp = stat.hp + (this.ageupList[baseAge - 10].hp + 1);
				stat.mp = stat.mp + (this.ageupList[baseAge - 10].mp + 1);
				stat.str = stat.str + this.ageupList[baseAge - 10].str;
				stat.dex = stat.dex + this.ageupList[baseAge - 10].dex;
				stat.will = stat.will + this.ageupList[baseAge - 10].will;
				stat.intelligence = stat.intelligence + this.ageupList[baseAge - 10].intelligence;
				stat.luck = stat.luck + this.ageupList[baseAge - 10].luck;
				baseAge++;
			}
			/*25岁后只加hp和mp*/
			if (age == 25) {
				stat.hp = stat.hp + value;
				stat.mp = stat.mp + value;
			}
			return stat;
		}

	}
}

