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
var MapPanel = (function (_super) {
    __extends(MapPanel, _super);
    function MapPanel() {
        var _this = _super.call(this) || this;
        var _self_ = _this;
        var backDown = null;
        var cell = null;
        backDown = function () {
            _self_.parent.removeChild(_self_);
            this["setBefore"]();
        };
        _this.bg = new BasicCell(800, 600);
        _this.addChild(_this.bg);
        var m = new egret.Bitmap(RES.getRes("map_mc"));
        _this.addChild(m);
        var buttonGroup = new ButtonGroup();
        var length = (iData.iMap.MapList.list.length);
        var i = (0);
        while (i < length) {
            cell = new MapCell(iData.iMap.MapList.list[i]);
            _this.addChild(cell);
            buttonGroup.addButton(cell);
            if (iData.iMap.MapList.list[i].name == iGlobal.Global.map.mapData.name) {
                cell.setAfter();
                // cell.onMouseDown(null);
            }
            i++;
        }
        var backButton = new FlickerButton("返回", 100, 50);
        _this.addChild(backButton);
        backButton.x = 0;
        backButton.y = 0;
        backButton.downFunction = backDown;
        return _this;
    }
    return MapPanel;
}(egret.Sprite));
__reflect(MapPanel.prototype, "MapPanel");
