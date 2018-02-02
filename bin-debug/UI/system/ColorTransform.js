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
    function ColorTransform() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColorTransform.transform = function (r, g, b, a) {
        if (r === void 0) { r = 1; }
        if (g === void 0) { g = 1; }
        if (b === void 0) { b = 1; }
        if (a === void 0) { a = 1; }
        var matrixs = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 2, 0, 0,
            0, 0, 0, 1, 0
        ];
        matrixs[0] = r;
        matrixs[6] = g;
        matrixs[12] = b;
        matrixs[18] = a;
        return new egret.ColorMatrixFilter(matrixs);
    };
    return ColorTransform;
}(egret.ColorMatrixFilter));
__reflect(ColorTransform.prototype, "ColorTransform");
