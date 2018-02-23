var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iPet;
    (function (iPet) {
        var PetStats = (function () {
            function PetStats(hp, mp, attmin, attmax, def, pro, balance, cri, criMul, magAtt) {
                this._hp = 0;
                this._mp = 0;
                this._attmin = 0;
                this._attmax = 0;
                this._def = 0;
                this._pro = 0;
                this._balance = 0;
                this._cri = 0;
                this._criMul = 0;
                this._magAtt = 0;
                this.hp = hp;
                this.mp = mp;
                this.attmin = attmin;
                this.attmax = attmax;
                this.def = def;
                this.pro = pro;
                this.balance = balance;
                this.cri = cri;
                this.criMul = criMul;
                this.magAtt = magAtt;
            }
            PetStats.generatePetStats = function (param1, param2, param3) {
                var stats = new iData.iPet.PetStats(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                var i = 0;
                while (i < iData.iPet.PetStats.list.length) {
                    stats[iData.iPet.PetStats.list[i]] = iData.iPet.PetStats.formula(param1[iData.iPet.PetStats.list[i]], param2[iData.iPet.PetStats.list[i]], param3);
                    i++;
                }
                return stats;
            };
            PetStats.formula = function (param1, param2, param3) {
                return param1 + param2 * param3 * Math.random();
            };
            PetStats.load = function (param1) {
                var _loc2_ = param1.split("%");
                var _loc3_ = new iData.iPet.PetStats(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                var _loc4_ = 0;
                while (_loc4_ < iData.iPet.PetStats.list.length) {
                    _loc3_[iData.iPet.PetStats.list[_loc4_]] = _loc2_[_loc4_];
                    _loc4_++;
                }
                return _loc3_;
            };
            Object.defineProperty(PetStats.prototype, "hp", {
                get: function () {
                    return this.decryptNum(this._hp);
                },
                set: function (param1) {
                    this._hp = this.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "mp", {
                get: function () {
                    return this.decryptNum(this._mp);
                },
                set: function (param1) {
                    this._mp = this.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "attmin", {
                get: function () {
                    return this.decryptNum(this._attmin);
                },
                set: function (param1) {
                    this._attmin = this.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "attmax", {
                get: function () {
                    return this.decryptNum(this._attmax);
                },
                set: function (param1) {
                    this._attmax = this.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "def", {
                get: function () {
                    return this.decryptNum(this._def);
                },
                set: function (param1) {
                    this._def = this.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "pro", {
                get: function () {
                    return this.decryptNum(this._pro);
                },
                set: function (param1) {
                    this._pro = this.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "balance", {
                get: function () {
                    return this.decryptNum(this._balance);
                },
                set: function (param1) {
                    this._balance = this.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "cri", {
                get: function () {
                    return this.decryptNum(this._cri);
                },
                set: function (param1) {
                    this._cri = this.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "criMul", {
                get: function () {
                    return this.decryptNum(this._criMul);
                },
                set: function (param1) {
                    this._criMul = this.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PetStats.prototype, "magAtt", {
                get: function () {
                    return this.decryptNum(this._magAtt);
                },
                set: function (param1) {
                    this._magAtt = this.encryptNum(param1);
                },
                enumerable: true,
                configurable: true
            });
            PetStats.prototype.save = function () {
                var _loc1_ = "";
                var _loc2_ = 0;
                while (_loc2_ < iData.iPet.PetStats.list.length) {
                    _loc1_ = _loc1_ + (this[iData.iPet.PetStats.list[_loc2_]] + "%");
                    _loc2_++;
                }
                return _loc1_;
            };
            PetStats.prototype.encryptNum = function (param1) {
                return param1 / 2 + 1;
            };
            PetStats.prototype.decryptNum = function (param1) {
                return (param1 - 1) * 2;
            };
            return PetStats;
        }());
        iPet.PetStats = PetStats;
        __reflect(PetStats.prototype, "iData.iPet.PetStats");
    })(iPet = iData.iPet || (iData.iPet = {}));
})(iData || (iData = {}));
iData.iPet.PetStats.list = ["hp", "mp", "attmin", "attmax", "def", "pro", "balance", "cri", "criMul", "magAtt"];
