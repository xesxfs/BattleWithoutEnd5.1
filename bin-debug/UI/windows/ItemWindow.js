var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ItemWindow = (function (_super) {
    __extends(ItemWindow, _super);
    function ItemWindow() {
        var _this = _super.call(this) || this;
        _this.autoEnhance = false;
        _this.textBag = iGlobal.Global.getTextField(32, 7631988);
        _this.outterPanel = new ItemOutterPanel();
        _this.addChild(_this.outterPanel);
        _this.outterPanel.x = 0;
        _this.outterPanel.y = 40;
        _this.panel = _this.outterPanel.innerPanel;
        _this.setForge();
        _this.onItemChange();
        _this.setBagText();
        _this.item_mc.touchEnabled = false;
        _this.item_mc.touchChildren = false;
        _this.text.touchEnabled = false;
        _this.text.touchChildren = false;
        Emitter.addEventListener(Tool.MyEvent.Change, _this.onItemChange, _this);
        Emitter.addEventListener(Tool.MyEvent.Update, _this.updateBagText, _this);
        return _this;
    }
    ItemWindow.prototype.removeCurrentItem = function () {
        this.onItemChange();
    };
    ItemWindow.prototype.checkIfinBag = function () {
        var length = iGlobal.Player.itemList.length;
        var index = 0;
        while (index < length) {
            if (this.panel.selectCell) {
                if (iGlobal.Player.itemList[index] == this.panel.selectCell.equip) {
                    return;
                }
            }
            index++;
        }
        this.panel.selectCell = null;
    };
    ItemWindow.prototype.setAutoInfo = function () {
        var level = iGlobal.Player.getSkill(iData.iSkill.SkillDataList.BLACKSMITHING).level;
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
    };
    ItemWindow.prototype.onItemChange = function () {
        // console.log(e.currentTarget);
        var icon = null;
        var length = 0;
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
        var selectEquip = this.panel.selectCell.equip;
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
    };
    ItemWindow.prototype.setBagText = function () {
        var _self__ = this;
        var valueDown = null;
        var typeDown = null;
        valueDown = function () {
            function itemSort(param1, param2) {
                if (param1.getMoney() < param2.getMoney()) {
                    return 1;
                }
                if (param1.getMoney() > param2.getMoney()) {
                    return -1;
                }
                return 0;
            }
            ;
            iGlobal.Player.itemList.sort(itemSort);
            _self__.panel.update();
            _self__.updateBagText();
        };
        typeDown = function () {
            function itemSort(a, b) {
                if (a.sortWeight < b.sortWeight) {
                    return -1;
                }
                if (a.sortWeight > b.sortWeight) {
                    return 1;
                }
                return 0;
            }
            ;
            iGlobal.Player.itemList.sort(itemSort);
            _self__.panel.update();
            _self__.updateBagText();
        };
        var bag = new BasicCell(400, 40);
        this.addChild(bag);
        bag.x = 0;
        bag.y = 0;
        this.textBag.width = 200;
        this.textBag.textFlow = iGlobal.Global.htmlParse.parser("<p align=\'center\'>" + iGlobal.Player.itemList.length + "/" + iGlobal.Player.BAGMAX + "</p>");
        this.textBag.textAlign = egret.HorizontalAlign.CENTER;
        this.textBag.x = (bag.width - this.textBag.width) >> 1;
        this.textBag.y = 10;
        bag.addChild(this.textBag);
        var value = new StringInfoButton("价值", "按价值排列");
        bag.addChild(value);
        value.x = 20;
        value.y = 10;
        value.downFunction = valueDown;
        var type = new StringInfoButton("类型", "按类型排列");
        bag.addChild(type);
        type.x = bag.width - type.width - value.x;
        type.y = 10;
        type.downFunction = typeDown;
    };
    ItemWindow.prototype.updateBagText = function (param1) {
        if (param1 === void 0) { param1 = null; }
        this.textBag.textFlow = iGlobal.Global.htmlParse.parser("<p align=\'center\'>" + iGlobal.Player.itemList.length + "/" + iGlobal.Player.BAGMAX + "</p>");
    };
    ItemWindow.prototype.setForge = function () {
        var _self__ = this;
        var autoDown = null;
        var autoUp = null;
        var soundsDown = null;
        var soundsUp = null;
        var onDown = null;
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
            var curLv = 0;
            var level = iGlobal.Player.getSkill(iData.iSkill.SkillDataList.BLACKSMITHING).level;
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
        var forging = function () {
            var lv = (0);
            var rate = (0);
            // var _loc4_: flash.Sound = <any>null;
            if (!_self__.panel.selectCell) {
                return;
            }
            iGlobal.Player.loseMoney(_self__.getMoney());
            var bsucces = false;
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
        };
        var c = new BasicCell(this.width, 200);
        this.addChild(c);
        c.x = 0;
        c.y = this.outterPanel.y + this.outterPanel.height + 20;
        this.autoBox = new ToggleBox("自动+7", 24, false);
        c.addChild(this.autoBox);
        this.autoBox.x = 70;
        this.autoBox.y = 130;
        this.autoEnhance = false;
        this.setAutoInfo();
        this.autoBox.downFunction = autoDown;
        this.autoBox.upFunction = autoUp;
        var soundsBox = new ToggleBox("音效", 24);
        c.addChild(soundsBox);
        soundsBox.x = 70;
        soundsBox.y = 90;
        soundsBox.downFunction = soundsDown;
        soundsBox.upFunction = soundsUp;
        this.forgeButton = new ForgeButton();
        c.addChild(this.forgeButton);
        this.forgeButton.x = 180;
        this.forgeButton.y = 75;
        this.forgeButton.downFunction = onDown;
        var s_text = new StringCell("成功率", 130, 24);
        c.addChild(s_text);
        s_text.x = 10;
        s_text.y = 45;
        this.text = new StringCell("", 100, 24);
        c.addChild(this.text);
        this.text.x = 100;
        this.text.y = 45;
        var m_text = new StringCell("费用", 130, 24);
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
        this.item_mc.y = 85;
    };
    ItemWindow.prototype.addOneItem = function () {
        this.panel.addOneCell();
        this.updateBagText();
    };
    ItemWindow.prototype.getSuccessRate = function () {
        var level = (this.panel.selectCell.equip.level + 1);
        var rate = iGlobal.Player.luck / 20 + Math.pow(Math.E, -level / 5) * 100 + iGlobal.Player.getSkill(iData.iSkill.SkillDataList.BLACKSMITHING).level;
        rate = (rate * 100 >> 0) / 100;
        if (rate > 100 - level * 3) {
            rate = 100 - level * 3;
        }
        rate = 100;
        return rate;
    };
    ItemWindow.prototype.getMoney = function () {
        var money = (this.panel.selectCell.equip.getMoney() * Math.pow(1.2, this.panel.selectCell.equip.level + 1));
        money = 0;
        return money;
    };
    return ItemWindow;
}(IWindow));
__reflect(ItemWindow.prototype, "ItemWindow");
