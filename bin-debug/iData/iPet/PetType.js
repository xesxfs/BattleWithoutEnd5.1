var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iPet;
    (function (iPet) {
        var PetType = (function () {
            function PetType(param1, param2, param3, param4, param5) {
                this.type = param1;
                this.startMin = param2;
                this.startRange = param3;
                this.growMin = param4;
                this.growRange = param5;
            }
            return PetType;
        }());
        iPet.PetType = PetType;
        __reflect(PetType.prototype, "iData.iPet.PetType");
    })(iPet = iData.iPet || (iData.iPet = {}));
})(iData || (iData = {}));
iData.iPet.PetType.ATTACK = "attack";
iData.iPet.PetType.DEFENCE = "defence";
iData.iPet.PetType.MAGIC = "magic";
iData.iPet.PetType.BALANCE = "balance";
