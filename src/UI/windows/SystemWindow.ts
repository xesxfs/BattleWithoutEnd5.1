class SystemWindow extends IWindow {
	private startX: number = 10;
	private startY: number = 10;
	private gapY: number = 30;
	private gapX: number = 70;
	private gapBigY: number = 60;
	private fontSize_small: number = 16;
	private fontSize_meddle: number = 24;
	private fontSize_big: number = 32;
	private lootStartX: number = 10;
	private lootStartY: number = 110;
	private lootGapSmallY: number = 20;
	private lootGapY: number = 25;
	private lootGapMidY: number = 45;
	private lootGapBitY: number = 65;
	private lootGapX: number = 65;
	public constructor() {
		super();
		var bgs: egret.Sprite = new BasicCell(200, 540);
		this.addChild(bgs);
		this.init();
	}



	private init() {
		this.setToggle();
		// this.setBody();
		// this.setFeet();
		// this.setHead();
		this.setItemToggle();
		this.autoSell();
		// this.setWeaponToggle();
		// this.setOffhand();
	}




	private setToggle() {
		/***战况 */
		var battleDown: Function = null;
		var battleUp: Function = null;
		/**战果 */
		var battleIntroDown: Function = null;
		var battleIntroUp: Function = null;
		/***金币 */
		var moneyDown: Function = null;
		var moneyUp: Function = null;
		/***经验 */
		var expDown: Function = null;
		var expUp: Function = null;
		/***道具 */
		var itemDown: Function = null;
		var itemUp: Function = null;

		battleDown = function () {
			iGlobal.Global.battle_toggle = true;
		};
		battleUp = function () {
			iGlobal.Global.battle_toggle = false;
		};
		battleIntroDown = function () {
			iGlobal.Global.battleIntro_toggle = true;
		};
		battleIntroUp = function () {
			iGlobal.Global.battleIntro_toggle = false;
		};
		moneyDown = function () {
			iGlobal.Global.money_toggle = true;
		};
		moneyUp = function () {
			iGlobal.Global.money_toggle = false;
		};
		expDown = function () {
			iGlobal.Global.exp_toggle = true;
		};
		expUp = function () {
			iGlobal.Global.exp_toggle = false;
		};
		itemDown = function () {
			iGlobal.Global.item_toggle = true;
		};
		itemUp = function () {
			iGlobal.Global.item_toggle = false;
		};
		var text = new StringCell("日志显示", 150, this.fontSize_big);
		this.addChild(text);
		text.x = 5;
		text.y = 10;

		var battle = new ToggleBox("战况", this.fontSize_small, iGlobal.Global.battle_toggle);
		this.addChild(battle);
		battle.x = 10;
		battle.y = 60;
		battle.downFunction = battleDown;
		battle.upFunction = battleUp;

		var battleIntro = new ToggleBox("战果", this.fontSize_small, iGlobal.Global.battleIntro_toggle);
		this.addChild(battleIntro);
		battleIntro.x = 70;
		battleIntro.y = 60;
		battleIntro.downFunction = battleIntroDown;
		battleIntro.upFunction = battleIntroUp;


		var money = new ToggleBox("$", this.fontSize_small, iGlobal.Global.money_toggle);
		this.addChild(money);
		money.x = 140;
		money.y = 60;
		money["downFunction"] = moneyDown;
		money["upFunction"] = moneyUp;

		var exp = new ToggleBox("Exp", this.fontSize_small, iGlobal.Global.exp_toggle);
		this.addChild(exp);
		exp.x = 10;
		exp.y = 90;
		exp.downFunction = expDown;
		exp.upFunction = expUp;

		var item = new ToggleBox("道具", this.fontSize_small, iGlobal.Global.item_toggle);
		this.addChild(item);
		item.x = 70;
		item.y = 90;
		item.downFunction = itemDown;
		item.upFunction = itemUp;
	}



	private setItemToggle() {
		var item0Down: Function = null;
		var item0Up: Function = null;
		var item1Down: Function = null;
		var item1Up: Function = null;
		var item2Down: Function = null;
		var item2Up: Function = null;
		var item3Down: Function = null;
		var item3Up: Function = null;
		var item4Down: Function = null;
		var item4Up: Function = null;
		var item5Down: Function = null;
		var item5Up: Function = null;
		item0Down = function () {
			iGlobal.Global.item0_toggle = true;
		};
		item0Up = function () {
			iGlobal.Global.item0_toggle = false;
		};
		item1Down = function () {
			iGlobal.Global.item1_toggle = true;
		};
		item1Up = function () {
			iGlobal.Global.item1_toggle = false;
		};
		item2Down = function () {
			iGlobal.Global.item2_toggle = true;
		};
		item2Up = function () {
			iGlobal.Global.item2_toggle = false;
		};
		item3Down = function () {
			iGlobal.Global.item3_toggle = true;
		};
		item3Up = function () {
			iGlobal.Global.item3_toggle = false;
		};
		item4Down = function () {
			iGlobal.Global.item4_toggle = true;
		};
		item4Up = function () {
			iGlobal.Global.item4_toggle = false;
		};
		item5Down = function () {
			iGlobal.Global.item5_toggle = true;
		};
		item5Up = function () {
			iGlobal.Global.item5_toggle = false;
		};


		var text: StringCell = new StringCell("道具拾取", 150, this.fontSize_big);
		this.addChild(text);
		text.x = 5;
		text.y = this.lootStartY;
		var item0 = new ToggleBox("基础", this.fontSize_small, iGlobal.Global.item0_toggle);
		this.addChild(item0);
		item0.x = this.lootStartX;
		item0.y = this.lootStartY + this.lootGapMidY * 1;
		item0.downFunction = item0Down;
		item0.upFunction = item0Up;
		var item1 = new ToggleBox("<font color=\'" + iData.iItem.Equipment.GREEN + "\'>精品</font>", this.fontSize_small, iGlobal.Global.item1_toggle);
		this.addChild(item1);
		item1.x = this.lootStartX + this.lootGapX * 1;
		item1.y = this.lootStartY + this.lootGapMidY * 1;
		item1.downFunction = item1Down;
		item1.upFunction = item1Up;
		var item2 = new ToggleBox("<font color=\'" + iData.iItem.Equipment.BLUE + "\'>稀有</font>", this.fontSize_small, iGlobal.Global.item2_toggle);
		this.addChild(item2);
		item2.x = this.lootStartX + this.lootGapX * 2;
		item2.y = this.lootStartY + this.lootGapMidY * 1;
		item2.downFunction = item2Down;
		item2.upFunction = item2Up;
		var item3 = new ToggleBox("<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>完美</font>", this.fontSize_small, iGlobal.Global.item3_toggle);
		this.addChild(item3);
		item3.x = this.lootStartX + this.lootGapX * 0;
		item3.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapY * 1;
		item3.downFunction = item3Down;
		item3.upFunction = item3Up;
		var item4 = new ToggleBox("<font color=\'" + iData.iItem.Equipment.ORANGE + "\'>史诗</font>", this.fontSize_small, iGlobal.Global.item4_toggle);
		this.addChild(item4);
		item4.x = this.lootStartX + this.lootGapX * 1;
		item4.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapY * 1;
		item4.downFunction = item4Down;
		item4.upFunction = item4Up;
		var item5 = new ToggleBox("<font color=\'" + iData.iItem.Equipment.PURPLE + "\'>传奇</font>", this.fontSize_small, iGlobal.Global.item5_toggle);
		this.addChild(item5);
		item5.x = this.lootStartX + this.lootGapX * 2;
		item5.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapY * 1;
		item5.downFunction = item5Down;
		item5.upFunction = item5Up;
		this.setWeaponToggle();
		this.setOffhand();
		this.setHead();
		this.setBody();
		this.setFeet();
		this.setAccessory();
	}


	private setWeaponToggle() {
		var swordDown: Function = null;
		var swordUp: Function = null;
		var axeDown: Function = null;
		var axeUp: Function = null;
		var bowDown: Function = null;
		var bowUp: Function = null;
		var crossbowDown: Function = null;
		var crossbowUp: Function = null;
		var sceptreDown: Function = null;
		var sceptreUp: Function = null;
		var staffDown: Function = null;
		var staffUp: Function = null;
		swordDown = function () {
			iGlobal.Global.sword_toggle = true;
		};
		swordUp = function () {
			iGlobal.Global.sword_toggle = false;
		};
		axeDown = function () {
			iGlobal.Global.axe_toggle = true;
		};
		axeUp = function () {
			iGlobal.Global.axe_toggle = false;
		};
		bowDown = function () {
			iGlobal.Global.bow_toggle = true;
		};
		bowUp = function () {
			iGlobal.Global.bow_toggle = false;
		};
		crossbowDown = function () {
			iGlobal.Global.crossbow_toggle = true;
		};
		crossbowUp = function () {
			iGlobal.Global.crossbow_toggle = false;
		};
		sceptreDown = function () {
			iGlobal.Global.sceptre_toggle = true;
		};
		sceptreUp = function () {
			iGlobal.Global.sceptre_toggle = false;
		};
		staffDown = function () {
			iGlobal.Global.staff_toggle = true;
		};
		staffUp = function () {
			iGlobal.Global.staff_toggle = false;
		};
		var text = new StringCell("武器拾取", 150, 20);
		this.addChild(text);
		text.x = this.lootStartX + this.lootGapX * 0;
		text.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 1 + this.lootGapY * 1;
		var sword = new ToggleBox("剑", this.fontSize_small, iGlobal.Global.sword_toggle);
		this.addChild(sword);
		sword.x = this.lootStartX + this.lootGapX * 0;
		sword.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 1 + this.lootGapY * 2;
		sword.downFunction = swordDown;
		sword.upFunction = swordUp;
		var axe = new ToggleBox("斧", this.fontSize_small, iGlobal.Global.axe_toggle);
		this.addChild(axe);
		axe.x = this.lootStartX + this.lootGapX * 1;
		axe.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 1 + this.lootGapY * 2;
		axe.downFunction = axeDown;
		axe.upFunction = axeUp;
		var bow = new ToggleBox("弓", this.fontSize_small, iGlobal.Global.bow_toggle);
		this.addChild(bow);
		bow.x = this.lootStartX + this.lootGapX * 2;
		bow.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 1 + this.lootGapY * 2;
		bow.downFunction = bowDown;
		bow.upFunction = bowUp;
		var crossbow = new ToggleBox("弩", this.fontSize_small, iGlobal.Global.crossbow_toggle);
		this.addChild(crossbow);
		crossbow.x = this.lootStartX + this.lootGapX * 0;
		crossbow.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 1 + this.lootGapY * 3;
		crossbow.downFunction = crossbowDown;
		crossbow.upFunction = crossbowUp;
		var sceptre = new ToggleBox("权杖", this.fontSize_small, iGlobal.Global.sceptre_toggle);
		this.addChild(sceptre);
		sceptre.x = this.lootStartX + this.lootGapX * 1;
		sceptre.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 1 + this.lootGapY * 3;
		sceptre.downFunction = sceptreDown;
		sceptre.upFunction = sceptreUp;
		var staff = new ToggleBox("法杖", this.fontSize_small, iGlobal.Global.staff_toggle);
		this.addChild(staff);
		staff.x = this.lootStartX + this.lootGapX * 2;
		staff.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 1 + this.lootGapY * 3;
		staff.downFunction = staffDown;
		staff.upFunction = staffUp;
	}


	private setOffhand() {
		var daggerDown: Function = null;
		var daggerUp: Function = null;
		var tomeDown: Function = null;
		var tomeUp: Function = null;
		var shieldDown: Function = null;
		var shieldUp: Function = null;
		daggerDown = function () {
			iGlobal.Global.dagger_toggle = true;
		};
		daggerUp = function () {
			iGlobal.Global.dagger_toggle = false;
		};
		tomeDown = function () {
			iGlobal.Global.tome_toggle = true;
		};
		tomeUp = function () {
			iGlobal.Global.tome_toggle = false;
		};
		shieldDown = function () {
			iGlobal.Global.shield_toggle = true;
		};
		shieldUp = function () {
			iGlobal.Global.shield_toggle = false;
		};
		var text = new StringCell("副手拾取", 150, 20);
		this.addChild(text);
		text.x = this.lootStartX + this.lootGapX * 0;
		text.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 2 + this.lootGapY * 3;
		var dagger = new ToggleBox("匕首", this.fontSize_small, iGlobal.Global.dagger_toggle);
		this.addChild(dagger);
		dagger.x = this.lootStartX + this.lootGapX * 0;
		dagger.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 2 + this.lootGapY * 4;
		dagger.downFunction = daggerDown;
		dagger.upFunction = daggerUp;
		var tome = new ToggleBox("书", this.fontSize_small, iGlobal.Global.tome_toggle);
		this.addChild(tome);
		tome.x = this.lootStartX + this.lootGapX * 1;
		tome.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 2 + this.lootGapY * 4;
		tome.downFunction = tomeDown;
		tome.upFunction = tomeUp;
		var shield = new ToggleBox("盾", this.fontSize_small, iGlobal.Global.shield_toggle);
		this.addChild(shield);
		shield.x = this.lootStartX + this.lootGapX * 2;
		shield.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 2 + this.lootGapY * 4;
		shield.downFunction = shieldDown;
		shield.upFunction = shieldUp;
	}



	private setHead() {
		var headLightDown: Function = null;
		var headLightUp: Function = null;
		var headMediumDown: Function = null;
		var headMediumUp: Function = null;
		var headHeavyDown: Function = null;
		var headHeavyUp: Function = null;
		headLightDown = function () {
			iGlobal.Global.head_light_toggle = true;
		};
		headLightUp = function () {
			iGlobal.Global.head_light_toggle = false;
		};
		headMediumDown = function () {
			iGlobal.Global.head_medium_toggle = true;
		};
		headMediumUp = function () {
			iGlobal.Global.head_medium_toggle = false;
		};
		headHeavyDown = function () {
			iGlobal.Global.head_heavy_toggle = true;
		};
		headHeavyUp = function () {
			iGlobal.Global.head_heavy_toggle = false;
		};
		var text: StringCell = new StringCell("头部拾取", 150, 20);
		this.addChild(text);
		text.x = this.lootStartX + this.lootGapX * 0;
		text.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 3 + this.lootGapY * 4;
		var headLight: ToggleBox = new ToggleBox("轻甲", this.fontSize_small, iGlobal.Global.head_light_toggle);
		this.addChild(headLight);
		headLight.x = this.lootStartX + this.lootGapX * 0;
		headLight.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 3 + this.lootGapY * 5;
		headLight.downFunction = headLightDown;
		headLight.upFunction = headLightUp;
		var headMedium: ToggleBox = new ToggleBox("中甲", this.fontSize_small, iGlobal.Global.head_medium_toggle);
		this.addChild(headMedium);
		headMedium.x = this.lootStartX + this.lootGapX * 1;
		headMedium.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 3 + this.lootGapY * 5;
		headMedium.downFunction = headMediumDown;
		headMedium.upFunction = headMediumUp;
		var headHeavy: ToggleBox = new ToggleBox("重甲", this.fontSize_small, iGlobal.Global.head_heavy_toggle);
		this.addChild(headHeavy);
		headHeavy.x = this.lootStartX + this.lootGapX * 2;
		headHeavy.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 3 + this.lootGapY * 5;
		headHeavy.downFunction = headHeavyDown;
		headHeavy.upFunction = headHeavyUp;
	}



	private setBody() {
		var bodyLightDown: Function = null;
		var bodyLightUp: Function = null;
		var bodyMediumDown: Function = null;
		var bodyMediumUp: Function = null;
		var bodyHeavyDown: Function = null;
		var bodyHeavyUp: Function = null;
		bodyLightDown = function () {
			iGlobal.Global.body_light_toggle = true;
		};
		bodyLightUp = function () {
			iGlobal.Global.body_light_toggle = false;
		};
		bodyMediumDown = function () {
			iGlobal.Global.body_medium_toggle = true;
		};
		bodyMediumUp = function () {
			iGlobal.Global.body_medium_toggle = false;
		};
		bodyHeavyDown = function () {
			iGlobal.Global.body_heavy_toggle = true;
		};
		bodyHeavyUp = function () {
			iGlobal.Global.body_heavy_toggle = false;
		};
		var text: StringCell = new StringCell("身体拾取", 150, 20);
		this.addChild(text);
		text.x = this.lootStartX + this.lootGapX * 0;
		text.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 4 + this.lootGapY * 5;
		var bodyLight: ToggleBox = new ToggleBox("轻甲", this.fontSize_small, iGlobal.Global.body_light_toggle);
		this.addChild(bodyLight);
		bodyLight.x = this.lootStartX + this.lootGapX * 0;
		bodyLight.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 4 + this.lootGapY * 6;
		bodyLight.downFunction = bodyLightDown;
		bodyLight.upFunction = bodyLightUp;
		var bodyMedium: ToggleBox = new ToggleBox("中甲", this.fontSize_small, iGlobal.Global.body_medium_toggle);
		this.addChild(bodyMedium);
		bodyMedium.x = this.lootStartX + this.lootGapX * 1;
		bodyMedium.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 4 + this.lootGapY * 6;
		bodyMedium.downFunction = bodyMediumDown;
		bodyMedium.upFunction = bodyMediumUp;
		var bodyHeavy: ToggleBox = new ToggleBox("重甲", this.fontSize_small, iGlobal.Global.body_heavy_toggle);
		this.addChild(bodyHeavy);
		bodyHeavy.x = this.lootStartX + this.lootGapX * 2;
		bodyHeavy.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 4 + this.lootGapY * 6;
		bodyHeavy.downFunction = bodyHeavyDown;
		bodyHeavy.upFunction = bodyHeavyUp;
	}


	private setFeet() {
		var feetLightDown: Function = null;
		var feetLightUp: Function = null;
		var feetMediumDown: Function = null;
		var feetMediumUp: Function = null;
		var feetHeavyDown: Function = null;
		var feetHeavyUp: Function = null;
		feetLightDown = function () {
			iGlobal.Global.feet_light_toggle = true;
		};
		feetLightUp = function () {
			iGlobal.Global.feet_light_toggle = false;
		};
		feetMediumDown = function () {
			iGlobal.Global.feet_medium_toggle = true;
		};
		feetMediumUp = function () {
			iGlobal.Global.feet_medium_toggle = false;
		};
		feetHeavyDown = function () {
			iGlobal.Global.feet_heavy_toggle = true;
		};
		feetHeavyUp = function () {
			iGlobal.Global.feet_heavy_toggle = false;
		};
		var text: StringCell = new StringCell("足部拾取", 150, 20);
		this.addChild(text);
		text.x = this.lootStartX + this.lootGapX * 0;
		text.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 5 + this.lootGapY * 6;
		var feetLight: ToggleBox = new ToggleBox("轻甲", this.fontSize_small, iGlobal.Global.feet_light_toggle);
		this.addChild(feetLight);
		feetLight.x = this.lootStartX + this.lootGapX * 0;
		feetLight.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 5 + this.lootGapY * 7;
		feetLight.downFunction = feetLightDown;
		feetLight.upFunction = feetLightUp;
		var feetMedium: ToggleBox = new ToggleBox("中甲", this.fontSize_small, iGlobal.Global.feet_medium_toggle);
		this.addChild(feetMedium);
		feetMedium.x = this.lootStartX + this.lootGapX * 1;
		feetMedium.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 5 + this.lootGapY * 7;
		feetMedium.downFunction = feetMediumDown;
		feetMedium.upFunction = feetMediumUp;
		var feetHeavy: ToggleBox = new ToggleBox("重甲", this.fontSize_small, iGlobal.Global.feet_heavy_toggle);
		this.addChild(feetHeavy);
		feetHeavy.x = this.lootStartX + this.lootGapX * 2;
		feetHeavy.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 5 + this.lootGapY * 7;
		feetHeavy.downFunction = feetHeavyDown;
		feetHeavy.upFunction = feetHeavyUp;
	}

	private setAccessory() {
		var ringDown: Function = null;
		var ringUp: Function = null;
		var necklaceDown: Function = null;
		var necklaceUp: Function = null;
		ringDown = function () {
			iGlobal.Global.ring_toggle = true;
		};
		ringUp = function () {
			iGlobal.Global.ring_toggle = false;
		};
		necklaceDown = function () {
			iGlobal.Global.necklace_toggle = true;
		};
		necklaceUp = function () {
			iGlobal.Global.necklace_toggle = false;
		};
		var text: StringCell = new StringCell("饰品拾取", 150, 20);
		this.addChild(text);
		text.x = this.lootStartX + this.lootGapX * 0;
		text.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 6 + this.lootGapY * 7;
		var ring: ToggleBox = new ToggleBox("戒指", this.fontSize_small, iGlobal.Global.ring_toggle);
		this.addChild(ring);
		ring.x = this.lootStartX + this.lootGapX * 0;
		ring.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 6 + this.lootGapY * 8;
		ring.downFunction = ringDown;
		ring.upFunction = ringUp;
		var necklace: ToggleBox = new ToggleBox("项链", this.fontSize_small, iGlobal.Global.necklace_toggle);
		this.addChild(necklace);
		necklace.x = this.lootStartX + this.lootGapX * 1;
		necklace.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 6 + this.lootGapY * 8;
		necklace.downFunction = necklaceDown;
		necklace.upFunction = necklaceUp;
	}

	private autoSell() {
		var autoSellDown: Function = null;
		var autoSellUp: Function = null;
		autoSellDown = function () {
			iGlobal.Global.autoSell_toggle = true;
		};
		autoSellUp = function () {
			iGlobal.Global.autoSell_toggle = false;
		};
		var autoSell: ToggleBox = new ToggleBox("背包满的是自动卖出价值最低的", this.fontSize_small, iGlobal.Global.autoSell_toggle);
		this.addChild(autoSell);
		autoSell.x = this.lootStartX + this.lootGapX * 0;
		autoSell.y = this.lootStartY + this.lootGapMidY * 1 + this.lootGapSmallY * 7 + this.lootGapY * 8 + 10;
		autoSell.downFunction = autoSellDown;
		autoSell.upFunction = autoSellUp;
	}


}