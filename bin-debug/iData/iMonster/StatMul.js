var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iMonster;
    (function (iMonster) {
        var StatMul = (function () {
            function StatMul(name, mul, add) {
                if (add === void 0) { add = 0; }
                this.mul = 0;
                this.add = 0;
                this.name = name;
                this.mul = mul;
                this.add = add;
            }
            StatMul.prototype.statTranslate = function () {
                switch (this.name) {
                    case iData.iItem.Stat.intelligence:
                        return "智力";
                    case iData.iItem.Stat.attackMin:
                        return "最小攻击";
                    case iData.iItem.Stat.attackMax:
                        return "最大攻击";
                    case iData.iItem.Stat.ATTACK:
                        return "攻击";
                    case iData.iItem.Stat.crit_mul:
                        return "暴击倍数";
                    case iData.iItem.Stat.spellChance:
                        return "释放概率";
                    case iData.iItem.Stat.protectionIgnore:
                        return "无视护甲";
                    case iData.iItem.Stat.protectionReduce:
                        return "降低护甲";
                    case iData.iItem.Stat.magicDamage:
                        return "魔法伤害";
                    case iData.iItem.Stat.str:
                        return "力量";
                    case iData.iItem.Stat.dex:
                        return "敏捷";
                    case iData.iItem.Stat.will:
                        return "意志";
                    case iData.iItem.Stat.luck:
                        return "幸运";
                    case iData.iItem.Stat.balance:
                        return "平衡";
                    case iData.iItem.Stat.crit:
                        return "暴击";
                    case iData.iItem.Stat.defence:
                        return "防御";
                    case iData.iItem.Stat.protection:
                        return "护甲";
                    default:
                        return this.name;
                }
            };
            return StatMul;
        }());
        iMonster.StatMul = StatMul;
        __reflect(StatMul.prototype, "iData.iMonster.StatMul");
    })(iMonster = iData.iMonster || (iData.iMonster = {}));
})(iData || (iData = {}));
