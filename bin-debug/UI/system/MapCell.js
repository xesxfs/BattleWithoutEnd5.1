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
var MapCell = (function (_super) {
    __extends(MapCell, _super);
    function MapCell(data) {
        var _this = _super.call(this) || this;
        _this.infoWindow = iGlobal.Global.itemInfoWindow;
        _this.map = new iData.iMap.Map(data);
        _this.before.addChild(new egret.Bitmap(RES.getRes("map_icon")));
        _this.after.addChild(new egret.Bitmap(RES.getRes("map_icon")));
        // this.after.transform.colorTransform = new ColorTransform(0, 0, 0, 1, 227, 178, 10);
        _this.x = data.x;
        _this.y = data.y;
        _this.setText();
        _this.downFunction = _this.down;
        _this.addEventListener("touchBegin", _this.onMouseMove, _this);
        return _this;
    }
    MapCell.prototype.onMouseMove = function (e) {
        var p = this.localToGlobal(e.localX + 15, e.localY + 15);
        this.infoWindow.x = p.x;
        this.infoWindow.y = p.y;
        if (p.x + 135 > this.stage.stageWidth) {
            this.infoWindow.x = this.infoWindow.x - 135;
        }
        if (p.y + this.infoWindow.height > this.stage.stageHeight) {
            this.infoWindow.y = this.infoWindow.y - this.infoWindow.height;
        }
    };
    MapCell.prototype.onMouseOver = function (e) {
        _super.prototype.onMouseOver.call(this, e);
        iGlobal.Global.setItemInfoWindow(this.text);
    };
    MapCell.prototype.onMouseOut = function (e) {
        _super.prototype.onMouseOut.call(this, e);
        iGlobal.Global.hideItemInfoWindow();
    };
    MapCell.prototype.setBefore = function () {
        _super.prototype.setBefore.call(this);
    };
    MapCell.prototype.setAfter = function () {
        _super.prototype.setAfter.call(this);
    };
    MapCell.prototype.setText = function () {
        this.text = "<p align=\'center\'>" + this.map.mapData.realName + "</p>";
        this.text = this.text + ("<p align=\'center\'>平均战斗力: " + (this.map.averageCp >> 0) + "</p>");
    };
    MapCell.prototype.down = function () {
        iGlobal.Global.map = this.map;
        if (MainScene.lootPanel) {
            MainScene.lootPanel.reset();
        }
        if (MainScene.battle) {
            MainScene.battle.boss = null;
            MainScene.battle.init();
        }
        if (MainScene.otherPanel) {
            MainScene.otherPanel.otherWindow.mapPanel.visible = false;
        }
    };
    return MapCell;
}(ButtonCell));
__reflect(MapCell.prototype, "MapCell");
