class ItemWindow extends IWindow {

	private panel: ItemInnerPanel;
	private text: StringCell;
	private money: StringCell;
	private item_mc: egret.Sprite;
	private forgeButton: ForgeButton;
	private autoEnhance: boolean = false;
	private autoBox: ToggleBox;
	private textBag: egret.TextField;
	public constructor() {
		super();

		this.textBag = iGlobal.Global.getTextField(32, 7631988);
		var outterPanel: ItemOutterPanel = new ItemOutterPanel();
		this.addChild(outterPanel);
		outterPanel.x = 0;
		outterPanel.y = 40;
		outterPanel.setInner();
		this.panel = outterPanel.innerPanel as ItemInnerPanel;
		this.setForge();
		this.onItemChange();
		this.setBagText();
		this.item_mc.touchEnabled = false;
		this.item_mc.touchChildren = false;
		this.text.touchEnabled = false;
		this.text.touchChildren = false;
		Emitter.addEventListener(Tool.MyEvent.Change, this.onItemChange, this);
		Emitter.addEventListener(Tool.MyEvent.Update, this.updateBagText, this);

	}

	public removeCurrentItem() {
		this.onItemChange();
	}

	private checkIfinBag() {
		var length: number = iGlobal.Player.itemList.length;
		var index: number = 0;
		while (index < length) {
			if (this.panel.selectCell) {
				if (iGlobal.Player.itemList[index] == this.panel.selectCell.equip) {
					return;
				}
			}
			index++;
		}
		this.panel.selectCell = null;
	}

	private setAutoInfo() {
		var level: number = iGlobal.Player.getSkill(iData.iSkill.SkillDataList.BLACKSMITHING).level;
		if (level > 13) {
			this.autoBox.visible = true;
			this.autoBox.setText("自动+7");
		}
		else if (level > 9) {
			this.autoBox.visible = true;
			this.autoBox.setText("自动+5");
		}
		else if (level > 5) {
			this.autoBox.visible = true;
			this.autoBox.setText("自动+3");
		}
		else if (level > 1) {
			this.autoBox.visible = true;
			this.autoBox.setText("自动+1");
		}
		else {
			this.autoBox.visible = false;
		}
	}

	private onItemChange() {
		// console.log(e.currentTarget);
		var icon: egret.Bitmap = null;
		var length: number = 0;
		this.checkIfinBag();
		this.setAutoInfo();
		if (!this.panel.selectCell) {
			this.item_mc.visible = false;
			this.text.setText("");
			this.money.setText("");
			this.forgeButton.touchEnabled = false;
			this.forgeButton.touchChildren = false;
			return;
		}
		this.forgeButton.touchEnabled = true;
		this.forgeButton.touchChildren = true;
		var selectEquip: iData.iItem.Equipment = this.panel.selectCell.equip;
		if (selectEquip instanceof iData.iItem.Weapon) {
			icon = new egret.Bitmap(RES.getRes("mc_" + selectEquip.type));
		}
		else {
			icon = new egret.Bitmap(RES.getRes("mc_" + selectEquip.position + "_" + selectEquip.type));
		}
		if (this.item_mc.numChildren > 0) {
			length = (this.item_mc.numChildren);
			while (length > 0) {
				this.item_mc.removeChildAt(0);
				length--;
			}
		}
		this.item_mc.addChild(icon);
		icon.width = 50;
		icon.height = 50;
		this.item_mc.visible = true;
		this.text.setText(this.getSuccessRate() + "%");
		if (!this.panel.selectCell.equip.canLevelup()) {
			this.forgeButton.touchEnabled = false;
			this.forgeButton.touchChildren = false;
			this.money.setText("<font color=\'#ff4040\'>$" + this.getMoney() + "</font>");
		}
		else {
			this.money.setText("$" + this.getMoney());
		}
	}

	private setBagText() {
		var _self__ = this;
		var valueDown: Function = null;
		var typeDown: Function = null;
		valueDown = function () {

			function itemSort(param1: iData.iItem.Equipment, param2: iData.iItem.Equipment): number {
				if (param1.getMoney() < param2.getMoney()) {
					return 1;
				}
				if (param1.getMoney() > param2.getMoney()) {
					return -1;
				}
				return 0;
			};
			iGlobal.Player.itemList.sort(itemSort);
			_self__.panel.update();
			_self__.updateBagText();
		};
		typeDown = function () {
			function itemSort(a: iData.iItem.Equipment, b: iData.iItem.Equipment): number {
				if (a.sortWeight < b.sortWeight) {
					return -1;
				}
				if (a.sortWeight > b.sortWeight) {
					return 1;
				}
				return 0;
			};
			iGlobal.Player.itemList.sort(itemSort);
			_self__.panel.update();
			_self__.updateBagText();
		};
		var bag: egret.Sprite = new BasicCell(200, 40);
		this.addChild(bag);
		bag.x = 0;
		bag.y = 0;
		this.textBag.width = 200;
		this.textBag.textFlow = iGlobal.Global.htmlParse.parser("<p align=\'center\'>" + iGlobal.Player.itemList.length + "/" + iGlobal.Player.BAGMAX + "</p>");
		this.textBag.textAlign = egret.HorizontalAlign.CENTER;
		bag.addChild(this.textBag);
		var value: StringInfoButton = new StringInfoButton("价值", "按价值排列");
		bag.addChild(value);
		value.x = 5;
		value.y = 0;
		value.downFunction = valueDown;
		var type: StringInfoButton = new StringInfoButton("类型", "按类型排列");
		bag.addChild(type);
		type.x = 160;
		type.y = 0;
		type.downFunction = typeDown;
	}

	public updateBagText(param1: egret.Event = null) {
		this.textBag.textFlow = iGlobal.Global.htmlParse.parser("<p align=\'center\'>" + iGlobal.Player.itemList.length + "/" + iGlobal.Player.BAGMAX + "</p>");
	}


	private setForge() {
		var _self__ = this;
		var autoDown: Function = null;
		var autoUp: Function = null;
		var soundsDown: Function = null;
		var soundsUp: Function = null;
		var onDown: Function = null;
		autoDown = function () {
			_self__.autoEnhance = true;
		};
		autoUp = function () {
			_self__.autoEnhance = false;
		};
		soundsDown = function () {
			iGlobal.Global.sound_toggle = true;
		};
		soundsUp = function () {
			iGlobal.Global.sound_toggle = false;
		};

		onDown = function () {
			if (!_self__.panel.selectCell) {
				return;
			}
			var curLv: number = 0;
			var level: number = iGlobal.Player.getSkill(iData.iSkill.SkillDataList.BLACKSMITHING).level;
			if (level > 13) {
				curLv = 7;
			}
			else if (level > 9) {
				curLv = 5;
			}
			else if (level > 5) {
				curLv = (3);
			}
			else if (level > 1) {
				curLv = (1);
			}
			if (_self__.autoBox && _self__.panel.selectCell.equip.level < curLv) {
				while (_self__.panel.selectCell.equip.level < curLv) {
					if (!_self__.panel.selectCell) {
						break;
					}
					if (iGlobal.Player.gold < _self__.getMoney()) {
						break;
					}
					forging();
				}
			}
			else {
				forging();
			}
			// 	this["setBefore"]();
			iGlobal.Player.save();
		};

		var forging: Function = function () {

			var lv: number = (0);
			var rate: number = (0);
			// var _loc4_: flash.Sound = <any>null;
			if (!_self__.panel.selectCell) {
				return;
			}
			iGlobal.Player.loseMoney(_self__.getMoney());
			var bsucces: boolean = false;
			if (Math.random() * 100 < _self__.getSuccessRate()) {
				_self__.panel.selectCell.equip.levelup();
				iData.iPlayer.TitleList.updateTitleInfo("forge", _self__.panel.selectCell.equip.level);
				iData.iPlayer.TitleList.updateTitleInfo("fail", 0, -1);
				// if (iGlobal.Global.kongregate) {
				// 	iGlobal.Global.kongregate.stats.submit("Forge", _self__.panel.selectCell.equip.level);
				// }
			}
			else {
				lv = (iGlobal.Player.getSkill(iData.iSkill.SkillDataList.BLACKSMITHING).level);
				rate = (50);
				if (lv > 13) {
					if (Math.random() * 100 >= rate) {
						if (_self__.panel.selectCell.equip.level < 7) {
							_self__.panel.selectCell.equip.setLevel(0);
						}
						else {
							bsucces = true;
						}
					}
				}
				else if (lv > 9) {
					if (Math.random() * 100 < rate) {
						_self__.panel.selectCell.equip.setLevel(_self__.panel.selectCell.equip.level - 1);
					}
					else if (_self__.panel.selectCell.equip.level < 5) {
						_self__.panel.selectCell.equip.setLevel(0);
					}
					else {
						bsucces = true;
					}
				}
				else if (lv > 5) {
					if (Math.random() * 100 < rate) {
						_self__.panel.selectCell.equip.setLevel(0);
					}
					else if (_self__.panel.selectCell.equip.level < 3) {
						_self__.panel.selectCell.equip.setLevel(0);
					}
					else {
						bsucces = true;
					}
				}
				else if (lv > 1) {
					if (_self__.panel.selectCell.equip.level < 1) {
						_self__.panel.selectCell.equip.setLevel(0);
					}
					else {
						bsucces = true;
					}
				}
				else {
					bsucces = true;
				}
				iData.iPlayer.TitleList.updateTitleInfo("fail", 0, 1);
			}
			if (!bsucces) {
				_self__.panel.selectCell.update();
				_self__.onItemChange();
				MainScene.allInfoPanel.addText("你获得了" + _self__.panel.selectCell.equip.getNameHTML() + "<font color=\'" + _self__.panel.selectCell.equip.getColor + _self__.panel.selectCell.equip + "\'>+" + _self__.panel.selectCell.equip.level + "!");
			}
			else {
				if (_self__.panel.selectCell.equip.level > 8 || _self__.panel.selectCell.equip.quality >= 4) {
					if (iGlobal.Global.sound_toggle) {
						// _loc4_ = new yell_sound();
						// _loc4_.play();
					}
				}
				iGlobal.Player.removeItem(_self__.panel.selectCell.equip);
				MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>强化</font>" + _self__.panel.selectCell.equip.getNameHTML() + "<font color=\'" + _self__.panel.selectCell.equip.getColor + _self__.panel.selectCell.equip + "\'>+" + _self__.panel.selectCell.equip.level + 1 + " <font color=\'#ff4040\'>失败. 物品消!</font>");
				_self__.panel.selectCell = null;
				_self__.panel.update();
				_self__.onItemChange();
				_self__.updateBagText();
			}
		}
		var c: BasicCell = new BasicCell(200, 135);
		this.addChild(c);
		c.x = 0;
		c.y = 405;
		this.autoBox = new ToggleBox("自动+7", 16, false);
		c.addChild(this.autoBox);
		this.autoBox.x = 70;
		this.autoBox.y = 100;
		this.autoEnhance = false;
		this.setAutoInfo();
		this.autoBox.downFunction = autoDown;
		this.autoBox.upFunction = autoUp;
		var soundsBox = new ToggleBox("音效", 16);
		c.addChild(soundsBox);
		soundsBox.x = 70;
		soundsBox.y = 80;
		soundsBox.downFunction = soundsDown;
		soundsBox.upFunction = soundsUp;
		this.forgeButton = new ForgeButton();
		c.addChild(this.forgeButton);
		this.forgeButton.x = 140;
		this.forgeButton.y = 75;
		this.forgeButton.downFunction = onDown;
		var s_text: StringCell = new StringCell("成功率", 130, 24);
		c.addChild(s_text);
		s_text.x = 10;
		s_text.y = 35;
		this.text = new StringCell("", 100, 24);
		c.addChild(this.text);
		this.text.x = 100;
		this.text.y = 35;
		var m_text: StringCell = new StringCell("费用", 130, 24);
		c.addChild(m_text);
		m_text.x = 10;
		m_text.y = 5;
		this.money = new StringCell("", 100, 24);
		c.addChild(this.money);
		this.money.x = 60;
		this.money.y = 5;
		this.item_mc = new egret.Sprite();
		c.addChild(this.item_mc);
		this.item_mc.x = 10;
		this.item_mc.y = 75;
	}


	public addOneItem() {
		this.panel.addOneCell();
		this.updateBagText();
	}


	private getSuccessRate(): number {
		var level: number = (this.panel.selectCell.equip.level + 1);
		var rate: number = iGlobal.Player.luck / 20 + Math.pow(Math.E, -level / 5) * 100 + iGlobal.Player.getSkill(iData.iSkill.SkillDataList.BLACKSMITHING).level;
		rate = (rate * 100 >> 0) / 100;
		if (rate > 100 - level * 3) {
			rate = 100 - level * 3;
		}
		return rate;
	}

	private getMoney(): number {
		var money: number = (this.panel.selectCell.equip.getMoney() * Math.pow(1.2, this.panel.selectCell.equip.level + 1));
		return money;
	}

}