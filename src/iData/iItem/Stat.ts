module iData {
	export module iItem {
		/***单个属性 */
		export class Stat {
			public static ATTACK: string;
			public static hp: string;
			public static mp: string;
			public static str: string;
			public static dex: string;
			public static intelligence: string;
			public static will: string;
			public static luck: string;
			public static attackMin: string;
			public static attackMax: string;
			public static balance: string;
			public static crit: string;
			public static crit_mul: string;
			public static defence: string;
			public static protection: string;
			/**释放概率 */
			public static spellChance: string;
			public static manaConsumption: string;
			public static protectionIgnore: string;
			public static protectionReduce: string;
			public static magicDamage: string;
			public name: string;
			public value: number = 0;

			public constructor(name: string, value: number) {

				this.name = name;
				this.value = value;
			}

			public static generate(range: iData.iItem.RangeStat, valueMul: number): iData.iItem.Stat {
				return new iData.iItem.Stat(range.name, ((range.valueMin + range.changeRange * Math.random() * valueMul * Math.random()) * 100 >> 0) / 100);
			}
			/**加载 */
			public static load(stats: string): iData.iItem.Stat {
				var stat: Array<any> = stats.split("$");
				return new iData.iItem.Stat(stat[0], parseInt(stat[1]));
			}

			public clone(): iData.iItem.Stat {
				return new iData.iItem.Stat(this.name, this.value);
			}

			public statTranslate(): string {
				switch (this.name) {
					case iData.iItem.Stat.intelligence:
						return "智力";
					case iData.iItem.Stat.attackMin:
						return "最小攻击";
					case iData.iItem.Stat.attackMax:
						return "最大攻击";
					case iData.iItem.Stat.ATTACK:
						return "攻击";
					case iData.iItem.Stat.crit_mul:
						return "暴击倍数";
					case iData.iItem.Stat.spellChance:
						return "释放概率";
					case iData.iItem.Stat.protectionIgnore:
						return "无视护甲";
					case iData.iItem.Stat.protectionReduce:
						return "降低护甲";
					case iData.iItem.Stat.magicDamage:
						return "魔法伤害";
					case iData.iItem.Stat.str:
						return "力量";
					case iData.iItem.Stat.dex:
						return "敏捷";
					case iData.iItem.Stat.will:
						return "意志";
					case iData.iItem.Stat.luck:
						return "幸运";
					case iData.iItem.Stat.balance:
						return "平衡";
					case iData.iItem.Stat.crit:
						return "暴击";
					case iData.iItem.Stat.defence:
						return "防御";
					case iData.iItem.Stat.protection:
						return "护甲";
					default:
						return this.name;
				}
			}
			/**保存 */
			public save(): string {
				var save: string = "";
				save = save + (this.name + "$" + this.value);
				return save;
			}

		}
	}
}

iData.iItem.Stat.ATTACK = "ATTACK";
iData.iItem.Stat.hp = "hp";
iData.iItem.Stat.mp = "mp";
iData.iItem.Stat.str = "str";
iData.iItem.Stat.dex = "dex";
iData.iItem.Stat.intelligence = "intelligence";
iData.iItem.Stat.will = "will";
iData.iItem.Stat.luck = "luck";
iData.iItem.Stat.attackMin = "attackMin";
iData.iItem.Stat.attackMax = "attackMax";
iData.iItem.Stat.balance = "balance";
iData.iItem.Stat.crit = "crit";
iData.iItem.Stat.crit_mul = "crit_mul";
iData.iItem.Stat.defence = "defence";
iData.iItem.Stat.protection = "protection";
iData.iItem.Stat.spellChance = "spellChance";
iData.iItem.Stat.manaConsumption = "manaComsuption";
iData.iItem.Stat.protectionIgnore = "protectionIgnore";
iData.iItem.Stat.protectionReduce = "protectionReduce";
iData.iItem.Stat.magicDamage = "magicDamage";
