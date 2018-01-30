module iData {
	export module iMonster {
		export class MonsterData extends egret.HashObject {
			public name: string;
			public realName: string;
			public hp: number = 0;
			public attack: iData.iNumber.DamageNumber;
			public defence: number = 0;
			public protection: number = 0;
			public crit: number = 0;
			public crit_mul: number = 0;
			public balance: number = 0;
			public CP: number = 0;

			public constructor(name: string = "unknow", rname: string = "", hp: number = 0, minAtt: number = 0, maxAtt: number = 0, defence: number = 0, pro: number = 0, crit: number = 0, cirtm: number = 0, blance: number = 0, cp: number = 0) {
				super();
				this.name = name;
				this.realName = rname;
				this.hp = hp;
				this.attack = new iData.iNumber.DamageNumber(minAtt, maxAtt);
				this.defence = defence;
				this.protection = pro;
				this.crit = crit;
				this.crit_mul = cirtm;
				this.balance = blance;
				this.CP = cp;
			}

			public clone(): iData.iMonster.MonsterData {
				return new iData.iMonster.MonsterData(this.name, this.realName, this.hp, this.attack.min, this.attack.max, this.defence, this.protection, this.crit, this.crit_mul, this.balance, this.CP);
			}

		}
	}
}

