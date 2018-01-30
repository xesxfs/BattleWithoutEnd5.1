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
var Tool;
(function (Tool) {
    var HideMessageParticle = (function (_super) {
        __extends(HideMessageParticle, _super);
        function HideMessageParticle(param1, param2, param3) {
            var _this = _super.call(this) || this;
            _this.x = 0;
            _this.y = 0;
            _this.ax = 0;
            _this.ay = 0;
            _this.vx = 0;
            _this.vy = 0;
            _this.color = 0;
            _this = _super.call(this) || this;
            var _loc4_ = 0;
            var _loc5_ = 0;
            _loc4_ = Math.random() * 5;
            _loc5_ = Math.random() * Math.PI * 2;
            _this.ax = Math.cos(_loc5_) * _loc4_;
            _this.ay = Math.sin(_loc5_) * _loc4_;
            _this.x = param1;
            _this.y = param2;
            _this.color = param3;
            _this.vx = 0;
            _this.vy = 0;
            return _this;
        }
        HideMessageParticle.prototype.update = function () {
            this.vx = this.vx + this.ax;
            this.vy = this.vy + this.ay;
            this.x = this.x + this.vx;
            this.y = this.y + this.vy;
        };
        return HideMessageParticle;
    }(egret.HashObject));
    Tool.HideMessageParticle = HideMessageParticle;
    __reflect(HideMessageParticle.prototype, "Tool.HideMessageParticle");
})(Tool || (Tool = {}));
