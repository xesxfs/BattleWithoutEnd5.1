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
var iData;
(function (iData) {
    var iMonster;
    (function (iMonster) {
        var MonsterData = (function (_super) {
            __extends(MonsterData, _super);
            function MonsterData(name, rname, hp, minAtt, maxAtt, defence, pro, crit, cirtm, blance, cp) {
                if (name === void 0) { name = "unknow"; }
                if (rname === void 0) { rname = ""; }
                if (hp === void 0) { hp = 0; }
                if (minAtt === void 0) { minAtt = 0; }
                if (maxAtt === void 0) { maxAtt = 0; }
                if (defence === void 0) { defence = 0; }
                if (pro === void 0) { pro = 0; }
                if (crit === void 0) { crit = 0; }
                if (cirtm === void 0) { cirtm = 0; }
                if (blance === void 0) { blance = 0; }
                if (cp === void 0) { cp = 0; }
                var _this = _super.call(this) || this;
                _this.hp = 0;
                _this.defence = 0;
                _this.protection = 0;
                _this.crit = 0;
                _this.crit_mul = 0;
                _this.balance = 0;
                _this.CP = 0;
                _this.name = name;
                _this.realName = rname;
                _this.hp = hp;
                _this.attack = new iData.iNumber.DamageNumber(minAtt, maxAtt);
                _this.defence = defence;
                _this.protection = pro;
                _this.crit = crit;
                _this.crit_mul = cirtm;
                _this.balance = blance;
                _this.CP = cp;
                return _this;
            }
            MonsterData.prototype.clone = function () {
                return new iData.iMonster.MonsterData(this.name, this.realName, this.hp, this.attack.min, this.attack.max, this.defence, this.protection, this.crit, this.crit_mul, this.balance, this.CP);
            };
            return MonsterData;
        }(egret.HashObject));
        iMonster.MonsterData = MonsterData;
        __reflect(MonsterData.prototype, "iData.iMonster.MonsterData");
    })(iMonster = iData.iMonster || (iData.iMonster = {}));
})(iData || (iData = {}));
