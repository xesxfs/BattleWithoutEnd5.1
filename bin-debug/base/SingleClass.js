var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SingleClass = (function () {
    function SingleClass() {
    }
    /**
     * 获取一个单例
     */
    SingleClass.getInstance = function () {
        var Class = this;
        if (Class.instance == null) {
            Class.instance = new Class();
        }
        return Class.instance;
    };
    return SingleClass;
}());
__reflect(SingleClass.prototype, "SingleClass");
