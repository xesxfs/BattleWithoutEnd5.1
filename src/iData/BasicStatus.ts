module iData {
	/**基本属性 */
	export class BasicStatus {
		/*血*/
		public hp: number = 0;
		/*蓝*/
		public mp: number = 0;
		/*力量*/
		public str: number = 0;
		/*敏捷*/
		public dex: number = 0;
		/*智力*/
		public intelligence: number = 0;
		/*意志*/
		public will: number = 0;
		/*幸运*/
		public luck: number = 0;
		/*攻击伤害*/
		public attack: iData.iNumber.DamageNumber;
		/*平衡*/
		public balance: number = 0;
		/*暴击*/
		public crit: number = 0;
		/*暴击倍数*/
		public crit_mul: number = 0;
		/*防御*/
		public defence: number = 0;
		/*护甲*/
		public protection: number = 0;
		public spellChance: number = 0;
		public manaConsumption: number = 0;
		/*无视护甲*/
		public protectionIgnore: number = 0;
		public protectionReduce: number = 0;
		/*魔法伤害*/
		public magicDamage: number = 0;

		public constructor(hp: number, mp: number, str: number, dex: number, intelligence: number, will: number, luck: number, attMin: number = 0, attMax: number = 0, balance: number = 0, crit: number = 0, critMul: number = 0, defence: number = 0, protection: number = 0, param15: number = 0, protectionIgnore: number = 0, protectionReduce: number = 0, magicDamage: number = 0) {

			this.hp = hp;
			this.mp = mp;
			this.str = str;
			this.dex = dex;
			this.intelligence = intelligence;
			this.will = will;
			this.luck = luck;
			this.attack = new iData.iNumber.DamageNumber(attMin, attMax);
			this.balance = balance;
			this.crit = crit;
			this.crit_mul = critMul;
			this.defence = defence;
			this.protection = protection;
			this.spellChance = param15;
			this.protectionIgnore = protectionIgnore;
			this.protectionReduce = protectionReduce;
			this.magicDamage = magicDamage;
		}

		public clone(): iData.BasicStatus {
			return new iData.BasicStatus(this.hp, this.mp, this.str, this.dex, this.intelligence, this.will, this.luck, this.attack.min, this.attack.max, this.balance, this.crit, this.crit_mul, this.defence, this.protection, this.spellChance, this.protectionIgnore, this.protectionReduce);
		}

	}
}

