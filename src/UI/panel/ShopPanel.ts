class ShopPanel extends BasicCell {
	private gap: number = 50;
	private startX1: number = 50;
	private startY1: number = 110;
	private startX2: number = 250;
	private itemPanel: egret.Sprite;
	private time: StringCell;
	private gold: StringCell;
	public constructor() {
		super(550, 500);
		this.graphics.lineStyle(2, 7631988);
		this.graphics.drawRect(0, 0, 550, 500);
		this.init();
	}

	private init() {
		var _self_: any = undefined;
		var hideDown: Function = null;
		hideDown = function (): any {
			_self_.visible = false;
			this["setBefore"]();
		};
		this.time = new StringCell("1200", 100, 32);
		this.addChild(this.time);
		this.time.x = 450;
		this.time.y = 460;
		this.gold = new StringCell("金钱", 200, 32);
		this.addChild(this.gold);
		this.gold.x = 30;
		this.gold.y = 460;
		var title: StringCell = new StringCell("商店", 300, 54);
		this.addChild(title);
		title.x = 200;
		title.y = 10;
		var equip_text: StringCell = new StringCell("出售", 100, 32);
		this.addChild(equip_text);
		equip_text.x = 100;
		equip_text.y = 70;
		var gamble_text: StringCell = new StringCell("赌博", 100, 32);
		this.addChild(gamble_text);
		gamble_text.x = 350;
		gamble_text.y = 70;
		this.itemPanel = new egret.Sprite();
		this.addChild(this.itemPanel);
		this.itemPanel.x = this.startX1;
		this.itemPanel.y = this.startY1;
		this.updateTime();
		var hide: FlickerButton = new FlickerButton("退出", 100, 48);
		this.addChild(hide);
		hide.x = 420;
		hide.y = 10;
		hide.downFunction = hideDown;
		_self_ = this;
		this.updateShop();
	}

	public updateTime() {
		var t1: number = (iGlobal.Player.caculate % 600);
		t1 = (600 - t1);
		var t2: number = (t1 / 120);
		var t3: number = ((t1 - t2 * 120) / 2);
		this.time.setText(t2 + ":" + t3);
		this.gold.setText("金钱: " + iGlobal.Player.gold);
	}

	public updateMoneyButton() {
		var cell;
		var i: number = (0);
		while (i < this.itemPanel.numChildren) {
			cell = this.itemPanel.getChildAt(i);
			if ((cell instanceof GambleCell)) {
				((cell as GambleCell)).updateMoneyButton();
			}
			else {
				((cell as ShopCell)).updateMoneyButton();
			}
			i++;
		}
	}

	public updateShop() {
		var length: number = (0);
		var randData: number = 0;
		var eData: iData.iItem.EquipmentData = null;
		var equiment: iData.iItem.Equipment = null;
		var shopCell: ShopCell = null;
		var gCell: GambleCell = null;
		length = (this.itemPanel.numChildren - 1);
		while (length >= 0) {
			this.itemPanel.removeChildAt(length);
			length--;
		}
		length = (0);
		while (length < 7) {
			randData = Math.random() * 3 * (1 + iGlobal.Player.luck / 400) * (1 + iGlobal.Player.combatPower / 1000);
			eData = iData.iItem.EquipmentList.list[iData.iItem.EquipmentList.list.length * Math.random() >> 0];
			if ((eData instanceof iData.iItem.WeaponData)) {
				equiment = new iData.iItem.Weapon(eData, randData);
			}
			else {
				equiment = new iData.iItem.Equipment(eData, randData);
			}
			shopCell = new ShopCell(equiment);
			this.itemPanel.addChild(shopCell);
			shopCell.x = 0;
			shopCell.y = length * this.gap;
			length++;
		}
		length = (0);
		while (length < 7) {
			randData = Math.random() * 6 * (1 + iGlobal.Player.luck / 200) * (1 + iGlobal.Player.combatPower / 700);
			eData = iData.iItem.EquipmentList.list[iData.iItem.EquipmentList.list.length * Math.random() >> 0];
			if ((eData instanceof iData.iItem.WeaponData)) {
				equiment = new iData.iItem.Weapon(eData, randData);
			}
			else {
				equiment = new iData.iItem.Equipment(eData, randData);
			}
			gCell = new GambleCell(equiment);
			this.itemPanel.addChild(gCell);
			gCell.x = this.startX2;
			gCell.y = length * this.gap;
			length++;
		}
	}


}