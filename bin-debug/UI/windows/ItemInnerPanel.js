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
var ItemInnerPanel = (function (_super) {
    __extends(ItemInnerPanel, _super);
    function ItemInnerPanel() {
        var _this = _super.call(this) || this;
        _this.Gap = 65;
        _this.text = iGlobal.Global.getTextField(32, 16777215);
        var topSp = new egret.Sprite();
        topSp.graphics.beginFill(0, 0);
        topSp.graphics.drawRect(0, 0, 20, 20);
        topSp.graphics.endFill();
        _this.addChild(topSp);
        _this.text.width = 200;
        _this.addChild(_this.text);
        _this.update();
        Emitter.addEventListener(Tool.MyEvent.Update, _this.onUpdate, _this);
        return _this;
    }
    ItemInnerPanel.prototype.setSelectedCell = function (cell) {
        var _self__ = this;
        this.selectCell = cell;
        Emitter.dispatchEvent(Tool.MyEvent.Change);
    };
    ItemInnerPanel.prototype.update = function () {
        if (MainScene.otherPanel) {
            if (MainScene.otherPanel.itemWindow) {
                MainScene.otherPanel.itemWindow.removeCurrentItem();
            }
        }
        this.updateList();
    };
    ItemInnerPanel.prototype.updateList = function () {
        var _self__ = this;
        var cell = null;
        if (this.listSprite) {
            this.removeChild(this.listSprite);
        }
        this.listSprite = new egret.Sprite();
        this.addChild(this.listSprite);
        this.listSpriteArray = new Array();
        this.buttonGroup = new ButtonGroup();
        var length = iGlobal.Player.itemList.length;
        var i = (0);
        while (i < length) {
            var onDown = function () {
                _self__.setSelectedCell(this);
                if (MainScene.otherPanel) {
                    if (MainScene.otherPanel.itemWindow) {
                        MainScene.otherPanel.itemWindow.removeCurrentItem();
                    }
                }
            };
            cell = new EquipmentCell(iGlobal.Player.itemList[i]);
            this.listSprite.addChild(cell);
            cell.y = i * this.Gap;
            this.buttonGroup.addButton(cell);
            this.listSpriteArray.push(cell);
            cell.downFunction = onDown;
            i++;
        }
        this.contentH = (length + 1) * this.Gap;
    };
    ItemInnerPanel.prototype.updateText = function () {
        this.text.textFlow = iGlobal.Global.htmlParse.parse("<p align=\'center\'>" + iGlobal.Player.itemList.length + "/" + iGlobal.Player.BAGMAX + "</p>");
        this.text.y = iGlobal.Player.itemList.length * this.Gap;
    };
    ItemInnerPanel.prototype.addOneCell = function () {
        var _self__ = this;
        var onDown = null;
        onDown = function () {
            _self__.setSelectedCell(this);
        };
        var cell = new EquipmentCell(iGlobal.Player.itemList[iGlobal.Player.itemList.length - 1]);
        this.listSprite.addChild(cell);
        cell.y = (iGlobal.Player.itemList.length - 1) * this.Gap;
        this.buttonGroup.addButton(cell);
        cell.downFunction = onDown;
        this.contentH = (iGlobal.Player.itemList.length + 1) * this.Gap;
    };
    ItemInnerPanel.prototype.onUpdate = function (e) {
        this.update();
    };
    return ItemInnerPanel;
}(InnerPanel));
__reflect(ItemInnerPanel.prototype, "ItemInnerPanel");
