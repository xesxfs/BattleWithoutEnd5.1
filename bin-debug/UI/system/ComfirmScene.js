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
var ComfirmScene = (function (_super) {
    __extends(ComfirmScene, _super);
    function ComfirmScene(param1, param2) {
        var _this = _super.call(this, 300, 200) || this;
        var _self_ = undefined;
        var noDown = null;
        var str = param1;
        var behaveFunction = param2;
        noDown = function () {
            _self_.parent.removeChild(_self_);
            this["setBefore"]();
        };
        _this.graphics.lineStyle(2, 7631988);
        _this.graphics.drawRect(0, 0, 300, 200);
        _this.text = new StringCell(str, 250, 32);
        _this.addChild(_this.text);
        _this.text.x = 150 - _this.text.width / 2;
        _this.text.y = 50 - _this.text.height / 2;
        var ok = new FlickerButton("SURE", 100, 50);
        _this.addChild(ok);
        ok.x = 30;
        ok.y = 120;
        ok.downFunction = behaveFunction;
        var no = new FlickerButton("CANCEL", 100, 50);
        _this.addChild(no);
        no.x = 170;
        no.y = 120;
        no.downFunction = noDown;
        _self_ = _this;
        return _this;
    }
    return ComfirmScene;
}(BasicCell));
__reflect(ComfirmScene.prototype, "ComfirmScene");
