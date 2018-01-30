class EquipmentCell extends AdvancedCell {
	public equip: iData.iItem.Equipment;
	protected filter_mc: egret.Sprite;
	protected be_mc: egret.Bitmap;
	protected af_mc: egret.Bitmap;
	protected equipedInfoWindow: ItemInfoWindow;

	public constructor(equip: iData.iItem.Equipment) {
		super(200, 50);
		this.equip = equip;
		this.touchEnabled = true;
		this.init();
	}

	private init() {
		this.filter_mc = new egret.Sprite();
		this.filter_mc.graphics.beginFill(16777215);
		this.filter_mc.graphics.drawCircle(15, 15, 14);
		this.filter_mc.graphics.endFill();
		this.before.addChild(this.filter_mc);
		this.filter_mc.x = 10;
		this.filter_mc.y = 10;
		if (this.equip instanceof iData.iItem.Weapon) {
			this.be_mc=(new egret.Bitmap(RES.getRes("mc_" + this.equip.type)));
		}
		else {
			this.be_mc=(new egret.Bitmap(RES.getRes("mc_" + this.equip.position + "_" + this.equip.type)));
		}
		this.before.addChild(this.be_mc);
		this.be_mc.width = 30;
		this.be_mc.height = 30;
		this.be_mc.x = 10;
		this.be_mc.y = 10;
		if ((this.equip instanceof iData.iItem.Weapon)) {
			this.af_mc=(new egret.Bitmap(RES.getRes("mc_" + this.equip.type)));
		}
		else {
			this.af_mc=(new egret.Bitmap(RES.getRes("mc_" + this.equip.position + "_" + this.equip.type)));
		}
		this.after.addChild(this.af_mc);
		this.af_mc.width = 30;
		this.af_mc.height = 30;
		this.af_mc.x = 10;
		this.af_mc.y = 10;
		// this.af_mc["transform"].colorTransform = new flash.ColorTransform(1,1,1,1,255,255,255,0);
		this.text = iGlobal.Global.getTextField(24);
		this.text.width = 110;
		this.text.textFlow = iGlobal.Global.htmlParse.parse(this.equip.getNameHTML());
		if (this.equip.level) {
			this.text.textFlow = iGlobal.Global.htmlParse.parse(this.text.text + (" +" + this.equip.level));
		}
		this.addChild(this.text);
		this.text.x = 50;
		this.text.y = 10;
		this.setEquipButton();
		this.setMoneyButton();
		this.setFilter();
		this.infoWindow = new ItemInfoWindow(this.equip.getDescription());
	}

	public update() {
		this.removeInfoWindow();
		this.infoWindow = new ItemInfoWindow(this.equip.getDescription());
		this.text.textFlow = iGlobal.Global.htmlParse.parse(this.equip.getNameHTML());
		if (this.equip.level) {
			this.text.textFlow = iGlobal.Global.htmlParse.parse(this.text.text + (" +" + this.equip.level));
		}
		this.html = this.equip.getNameHTML() + " +" + this.equip.level;
		if (this.buttonDown) {
			this.addInfoWindow();
		}
		this.setFilter();
	}

	private setFilter() {
		if (this.equip.level >= 7) {
			this.filter_mc.filters = [new egret.GlowFilter(16711680, 0.66, this.equip.level + 3, this.equip.level + 3)];
			this.af_mc.filters = [new egret.GlowFilter(5066061, 0.66, 13, 13)];
			this.text.filters = [new egret.GlowFilter(16777215, 0.66, 5, 5)];
		}
	}

	protected setEquipButton() {
		var _self__: any = this;
		var equipDown: Function = null;
		equipDown = function () {
			iGlobal.Player.removeItem(_self__.equip);
			iGlobal.Player.equip(_self__.equip);
			Emitter.dispatchEvent(Tool.MyEvent.Update);
		};
		var equipButton: EquipButton = new EquipButton("equip");
		this.addChild(equipButton);
		equipButton.x = 150;
		equipButton.y = 15;
		equipButton.downFunction = equipDown;
	}

	protected setMoneyButton() {
		var _self__: any = this;
		var moneyDown: Function = null;
		moneyDown = function () {
			iGlobal.Player.removeItem(_self__.equip);
			iGlobal.Player.addMoney(_self__.equip.getMoney());
			Emitter.dispatchEvent(Tool.MyEvent.Update);
		};
		var moneyButton: EquipButton = new EquipButton("money");
		this.addChild(moneyButton);
		moneyButton.x = 172;
		moneyButton.y = 15;
		moneyButton.downFunction = moneyDown;
	}

	protected addInfoWindow() {
		var pos: string = null;
		var point: egret.Point = null;
		super.addInfoWindow();
		if ((this.equip instanceof iData.iItem.Weapon)) {
			switch (this.equip.position) {
				case iData.iItem.Weapon.ONEHAND:
					pos = "leftHand";
					break;
				case iData.iItem.Weapon.OFFHAND:
					pos = "rightHand";
					break;
				case iData.iItem.Weapon.TWOHAND:
					pos = "leftHand";
			}
		}
		else {
			pos = this.equip.position;
		}
		if (iGlobal.Player[pos]) {
			this.equipedInfoWindow = new ItemInfoWindow(iGlobal.Player[pos].getDescription());
			this.addChild(this.equipedInfoWindow);
			this.equipedInfoWindow.x = -270;
			this.equipedInfoWindow.y = 0;
			point = this.localToGlobal(0, 0);
			if (point.y + this.equipedInfoWindow.height > iGlobal.Global.stage.stageHeight) {
				point = this.globalToLocal(0, iGlobal.Global.stage.stageHeight - this.equipedInfoWindow.height);
				this.equipedInfoWindow.y = point.y;
			}
		}
	}

	protected removeInfoWindow() {
		super.removeInfoWindow();
		if (this.equipedInfoWindow) {
			this.removeChild(this.equipedInfoWindow);
			this.equipedInfoWindow = null;
		}
	}
}