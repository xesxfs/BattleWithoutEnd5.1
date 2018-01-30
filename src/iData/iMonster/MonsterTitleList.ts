module iData {
	export module iMonster {
		export class MonsterTitleList {
			public static list: Array<iData.iMonster.MonsterTitle>;
			public static REGION_BOSS: iData.iMonster.MonsterTitle;

			public constructor() {

			}

		}
	}
}

iData.iMonster.MonsterTitleList.list = [

	new iData.iMonster.MonsterTitle("肉盾",
		[
			new iData.iMonster.StatMul(iData.iItem.Stat.hp, 3), new iData.iMonster.StatMul(iData.iItem.Stat.defence, 1.5, 10), new iData.iMonster.StatMul(iData.iItem.Stat.protection, 1.5, 5)
		], 3, 2, 1.5),

	new iData.iMonster.MonsterTitle("难看的",
		[
			new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1.2)
		], 1.2, 1.2, 1.4),

	new iData.iMonster.MonsterTitle("可疑的",
		new Array<iData.iMonster.StatMul>(0), 3, 3, 3),

	new iData.iMonster.MonsterTitle("未知的",
		[
			new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 2, 20),
			new iData.iMonster.StatMul(iData.iItem.Stat.hp, 3, 30),
			new iData.iMonster.StatMul(iData.iItem.Stat.defence, 5, 20),
			new iData.iMonster.StatMul(iData.iItem.Stat.protection, 3, 15)
		], 5, 5, 1.8),

	new iData.iMonster.MonsterTitle("非常难看的",
		[new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1.5)],
		1.5, 1.5, 1.5),

	new iData.iMonster.MonsterTitle("看起来很凶的", [new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 2), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 2)], 2, 1.5, 1.5), new iData.iMonster.MonsterTitle("刚赌赢了一把的", new Array<iData.iMonster.StatMul>(0), 1, 5, 1), new iData.iMonster.MonsterTitle("眼神锐利的", [new iData.iMonster.StatMul(iData.iItem.Stat.crit, 2, 15), new iData.iMonster.StatMul(iData.iItem.Stat.crit_mul, 2)], 2, 1.5, 1.5), new iData.iMonster.MonsterTitle("10岁打到人的", [new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 1.5), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1.5), new iData.iMonster.StatMul(iData.iItem.Stat.crit, 2), new iData.iMonster.StatMul(iData.iItem.Stat.defence, 1, 10), new iData.iMonster.StatMul(iData.iItem.Stat.protection, 1, 5)], 3, 1.5, 1.6), new iData.iMonster.MonsterTitle("努力的 ", [new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 2), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 5), new iData.iMonster.StatMul(iData.iItem.Stat.defence, 2, 10)], 3, 1.5, 1.8), new iData.iMonster.MonsterTitle("头头", [new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 3), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 3), new iData.iMonster.StatMul(iData.iItem.Stat.crit, 3), new iData.iMonster.StatMul(iData.iItem.Stat.defence, 2, 10), new iData.iMonster.StatMul(iData.iItem.Stat.protection, 2, 5), new iData.iMonster.StatMul(iData.iItem.Stat.crit_mul, 2)], 4, 3, 2.2), new iData.iMonster.MonsterTitle("被诅咒的", [new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 2), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 2)], 0.5, 0.5, 0.7), new iData.iMonster.MonsterTitle("弱小的", [new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 0.8), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 0.8)], 0.5, 0.5, 0.7), new iData.iMonster.MonsterTitle("有野心的", [new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 1.5), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 1.5)], 1, 1, 1.4), new iData.iMonster.MonsterTitle("重获新生的", [new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 1.5), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 2)], 1.2, 1, 1.4), new iData.iMonster.MonsterTitle("神圣的", [new iData.iMonster.StatMul(iData.iItem.Stat.defence, 3, 30), new iData.iMonster.StatMul(iData.iItem.Stat.protection, 3, 20)], 3, 3, 2.1), new iData.iMonster.MonsterTitle("将要灭绝的", [new iData.iMonster.StatMul(iData.iItem.Stat.defence, 2, 20), new iData.iMonster.StatMul(iData.iItem.Stat.protection, 2, 10)], 2, 2, 1.7), new iData.iMonster.MonsterTitle("初级召唤的", [new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 1.5, 10), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 2, 30), new iData.iMonster.StatMul(iData.iItem.Stat.defence, 1.5, 10), new iData.iMonster.StatMul(iData.iItem.Stat.protection, 1.5, 5), new iData.iMonster.StatMul(iData.iItem.Stat.crit, 1.5, 10), new iData.iMonster.StatMul(iData.iItem.Stat.crit_mul, 1.5)], 1.5, 1.5, 2), new iData.iMonster.MonsterTitle("进阶召唤的", [new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 2.5, 20), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 3, 60), new iData.iMonster.StatMul(iData.iItem.Stat.defence, 2, 30), new iData.iMonster.StatMul(iData.iItem.Stat.protection, 2, 10), new iData.iMonster.StatMul(iData.iItem.Stat.crit, 2, 15), new iData.iMonster.StatMul(iData.iItem.Stat.crit_mul, 2)], 2, 2, 3), new iData.iMonster.MonsterTitle("大神召唤的", [new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 4, 30), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 5, 90), new iData.iMonster.StatMul(iData.iItem.Stat.defence, 2.5, 50), new iData.iMonster.StatMul(iData.iItem.Stat.protection, 2.5, 18), new iData.iMonster.StatMul(iData.iItem.Stat.crit, 2.5, 25), new iData.iMonster.StatMul(iData.iItem.Stat.crit_mul, 2.5)], 3, 3, 4), new iData.iMonster.MonsterTitle("精英召唤的", [new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 6, 40), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 7, 120), new iData.iMonster.StatMul(iData.iItem.Stat.defence, 3.5, 70), new iData.iMonster.StatMul(iData.iItem.Stat.protection, 3.5, 30), new iData.iMonster.StatMul(iData.iItem.Stat.crit, 3.5, 40), new iData.iMonster.StatMul(iData.iItem.Stat.crit_mul, 3.5)], 5, 5, 5), new iData.iMonster.MonsterTitle("远古的", [new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 3, 50), new iData.iMonster.StatMul(iData.iItem.Stat.hp, 10, 100), new iData.iMonster.StatMul(iData.iItem.Stat.defence, 1.5, 30), new iData.iMonster.StatMul(iData.iItem.Stat.protection, 1.5, 35), new iData.iMonster.StatMul(iData.iItem.Stat.crit, 1.5, 10), new iData.iMonster.StatMul(iData.iItem.Stat.crit_mul, 1.5)], 10, 10, 2.8)];




/**boos称号 */
iData.iMonster.MonsterTitleList.REGION_BOSS =
	new iData.iMonster.MonsterTitle("<font color=\'#ff4040\'>区域BOSS</font>",
		[
			new iData.iMonster.StatMul(iData.iItem.Stat.ATTACK, 3, 50),
			new iData.iMonster.StatMul(iData.iItem.Stat.hp, 50, 100),
			new iData.iMonster.StatMul(iData.iItem.Stat.defence, 0, 0),
			new iData.iMonster.StatMul(iData.iItem.Stat.protection, 1, 50),
			new iData.iMonster.StatMul(iData.iItem.Stat.crit, 2.5, 100),
			new iData.iMonster.StatMul(iData.iItem.Stat.crit_mul, 2.5, 50)
		], 20, 20, 3);
