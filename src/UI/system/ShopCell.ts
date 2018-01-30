class ShopCell extends EquipmentCell {
	public moneyButton: EquipButton;
	private m_text: string;

	public constructor(param1: iData.iItem.Equipment) {
		super(param1);
		this.downFunction = this.setBefore;
		this.updateMoneyButton();
	}

	protected setEquipButton() {
	}

	public updateMoneyButton() {
		if (iGlobal.Player.gold > this.equip.getSellMoney()) {
			this.moneyButton.touchChildren = true;
			this.moneyButton.touchEnabled = true;
			this.m_text = "";
		}
		else {
			this.moneyButton.touchChildren = false;
			this.moneyButton.touchEnabled = false;
			this.m_text = "<font color=\'#ff4040\'>Can\'t afford</font>";
		}
	}

	protected setMoneyButton() {
		var _self__: any = this;
		var _this_: any = undefined;
		var moneyDown: Function = <any>null;
		moneyDown = function () {
			if (iGlobal.Player.addItem(_self__.equip)) {
				iGlobal.Player.loseMoney(_self__.equip.getSellMoney());
				if (_this_.parent) {
					_this_.parent.removeChild(_this_);
				}
			}
			this.setBefore();
		};
		this.moneyButton = new EquipButton("money");
		this.addChild(this.moneyButton);
		this.moneyButton.x = 172;
		this.moneyButton.y = 15;
		this.moneyButton.downFunction = moneyDown;
		_this_ = this;
	}

	protected addInfoWindow(): any {
		var _loc3_: string = <any>null;
		this.infoWindow = new ItemInfoWindow(this.equip.getSellDesciption() + this.m_text);
		this.addChild(this.infoWindow);
		this.infoWindow.x = 205;
		var _loc1_: number = (0);
		var _loc2_: egret.Point = this.localToGlobal(0, 0);
		if (_loc2_.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight) {
			_loc2_ = this.globalToLocal(0, iGlobal.Global.stage.stageHeight - this.infoWindow.height);
			_loc1_ = (_loc2_.y);
		}
		this.infoWindow.y = _loc1_;
		if ((this.equip instanceof iData.iItem.Weapon)) {
			switch (this.equip.position) {
				case iData.iItem.Weapon.ONEHAND:
					_loc3_ = "leftHand";
					break;
				case iData.iItem.Weapon.OFFHAND:
					_loc3_ = "rightHand";
					break;
				case iData.iItem.Weapon.TWOHAND:
					_loc3_ = "leftHand";
			}
		}
		else {
			_loc3_ = this.equip.position;
		}
		if (iGlobal.Player[_loc3_]) {
			this.equipedInfoWindow = new ItemInfoWindow(iGlobal.Player[_loc3_].getDescription());
			this.addChild(this.equipedInfoWindow);
			this.equipedInfoWindow.x = 340;
			this.equipedInfoWindow.y = _loc1_;
		}
	}

}