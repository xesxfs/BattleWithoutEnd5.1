var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iMonster;
    (function (iMonster) {
        var MonsterTitle = (function () {
            function MonsterTitle(name, statMul, xpMul, goldMul, dropMul) {
                this.xpMul = 0;
                this.goldMul = 0;
                this.dropMul = 0;
                this.name = name;
                this.statMulList = statMul;
                this.xpMul = xpMul;
                this.goldMul = goldMul;
                this.dropMul = dropMul;
            }
            Object.defineProperty(MonsterTitle.prototype, "description", {
                get: function () {
                    var desc = "";
                    var length = this.statMulList.length;
                    var i = 0;
                    while (i < length) {
                        if (this.statMulList[i].add > 0) {
                            desc = desc + ("<font size=\'20\' color=\'" + iData.iItem.Equipment.GREEN + "\'>  " + Tool.MyMath.FirstLetterToUpper(this.statMulList[i].statTranslate()) + " +" + this.statMulList[i].add + "</font><br/>");
                        }
                        else if (this.statMulList[i].add < 0) {
                            desc = desc + ("<font size=\'20\' color=\'#ff4040\'>  " + Tool.MyMath.FirstLetterToUpper(this.statMulList[i].statTranslate()) + " " + this.statMulList[i].add + "</font><br/>");
                        }
                        if (this.statMulList[i].mul > 1) {
                            desc = desc + ("<font size=\'20\' color=\'" + iData.iItem.Equipment.GREEN + "\'>  " + Tool.MyMath.FirstLetterToUpper(this.statMulList[i].statTranslate()) + " x" + this.statMulList[i].mul + "</font><br/>");
                        }
                        else if (this.statMulList[i].mul < 1) {
                            desc = desc + ("<font size=\'20\' color=\'#ff4040\'>  " + Tool.MyMath.FirstLetterToUpper(this.statMulList[i].statTranslate()) + " x" + this.statMulList[i].mul + "</font><br/>");
                        }
                        i++;
                    }
                    if (desc == "") {
                        desc = "???";
                    }
                    return desc;
                },
                enumerable: true,
                configurable: true
            });
            return MonsterTitle;
        }());
        iMonster.MonsterTitle = MonsterTitle;
        __reflect(MonsterTitle.prototype, "iData.iMonster.MonsterTitle");
    })(iMonster = iData.iMonster || (iData.iMonster = {}));
})(iData || (iData = {}));
