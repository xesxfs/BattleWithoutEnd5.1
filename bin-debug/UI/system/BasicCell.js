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
var BasicCell = (function (_super) {
    __extends(BasicCell, _super);
    function BasicCell(width, height) {
        var _this = _super.call(this) || this;
        width = Math.round(width);
        height = Math.round(height);
        _this.draw(width, height);
        return _this;
    }
    BasicCell.prototype.draw = function (width, height) {
        width = Math.round(width);
        height = Math.round(height);
        this.graphics.lineStyle(1, 13487565, 0.8);
        this.graphics.beginFill(0xFFFFFF, 1);
        this.graphics.drawRect(0, 0, width, height);
        this.graphics.endFill();
    };
    return BasicCell;
}(egret.Sprite));
__reflect(BasicCell.prototype, "BasicCell");
