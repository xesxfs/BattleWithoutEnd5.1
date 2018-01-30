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
var ColorTransform = (function (_super) {
    __extends(ColorTransform, _super);
    function ColorTransform(r, g, b, a) {
        if (r === void 0) { r = 1; }
        if (g === void 0) { g = 1; }
        if (b === void 0) { b = 1; }
        if (a === void 0) { a = 1; }
        var _this = _super.call(this) || this;
        _this.matrixs = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 2, 0, 0,
            0, 0, 0, 1, 0
        ];
        _this.matrixs[0] = r;
        _this.matrixs[6] = g;
        _this.matrixs[12] = b;
        _this.matrixs[18] = 0;
        _this.matrix = _this.matrixs;
        return _this;
    }
    return ColorTransform;
}(egret.ColorMatrixFilter));
__reflect(ColorTransform.prototype, "ColorTransform");
