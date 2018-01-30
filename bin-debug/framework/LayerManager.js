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
var LayerManager = (function (_super) {
    __extends(LayerManager, _super);
    function LayerManager() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    LayerManager.prototype.init = function () {
        this.rootLayer = new eui.UILayer();
        this.rootLayer.percentWidth = 100;
        this.rootLayer.percentHeight = 100;
        this.rootLayer.touchEnabled = false;
        egret.MainContext.instance.stage.addChild(this.rootLayer);
        this.sceneLayer = new eui.UILayer();
        this.sceneLayer.touchEnabled = false;
        this.rootLayer.addChild(this.sceneLayer);
        this.popLayer = new eui.UILayer();
        this.popLayer.touchEnabled = false;
        this.rootLayer.addChild(this.popLayer);
        this.msgLayer = new eui.UILayer();
        this.msgLayer.touchEnabled = false;
        this.rootLayer.addChild(this.msgLayer);
    };
    return LayerManager;
}(SingleClass));
__reflect(LayerManager.prototype, "LayerManager");
