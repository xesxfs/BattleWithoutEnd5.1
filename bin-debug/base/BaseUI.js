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
var BaseUI = (function (_super) {
    __extends(BaseUI, _super);
    function BaseUI() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onEnable, _this);
        _this.addEventListener(egret.Event.REMOVED_FROM_STAGE, _this.onRemove, _this);
        return _this;
    }
    /**组件创建完毕*/
    BaseUI.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    /**添加到场景中*/
    BaseUI.prototype.onEnable = function () {
    };
    /**从场景中移除*/
    BaseUI.prototype.onRemove = function () {
    };
    /**设置居中对齐*/
    BaseUI.prototype.setCenter = function () {
        this.horizontalCenter = 0;
        this.verticalCenter = 0;
    };
    /**设置底部对齐*/
    BaseUI.prototype.setBottom = function () {
        this.bottom = 0;
    };
    /**移除*/
    BaseUI.prototype.remove = function () {
        this.parent && this.parent.removeChild(this);
    };
    return BaseUI;
}(eui.Component));
__reflect(BaseUI.prototype, "BaseUI");
