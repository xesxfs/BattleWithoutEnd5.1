var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iPet;
    (function (iPet) {
        var PetData = (function () {
            function PetData(name, rname, type, mc) {
                this.name = name;
                this.realName = rname;
                this.type = type;
                this.mc = mc;
            }
            return PetData;
        }());
        iPet.PetData = PetData;
        __reflect(PetData.prototype, "iData.iPet.PetData");
    })(iPet = iData.iPet || (iData.iPet = {}));
})(iData || (iData = {}));
