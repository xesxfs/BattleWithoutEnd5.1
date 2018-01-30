var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    /**基本属性 */
    var BasicStatus = (function () {
        function BasicStatus(hp, mp, str, dex, intelligence, will, luck, attMin, attMax, balance, crit, critMul, defence, protection, param15, protectionIgnore, protectionReduce, magicDamage) {
            if (attMin === void 0) { attMin = 0; }
            if (attMax === void 0) { attMax = 0; }
            if (balance === void 0) { balance = 0; }
            if (crit === void 0) { crit = 0; }
            if (critMul === void 0) { critMul = 0; }
            if (defence === void 0) { defence = 0; }
            if (protection === void 0) { protection = 0; }
            if (param15 === void 0) { param15 = 0; }
            if (protectionIgnore === void 0) { protectionIgnore = 0; }
            if (protectionReduce === void 0) { protectionReduce = 0; }
            if (magicDamage === void 0) { magicDamage = 0; }
            /*血*/
            this.hp = 0;
            /*蓝*/
            this.mp = 0;
            /*力量*/
            this.str = 0;
            /*敏捷*/
            this.dex = 0;
            /*智力*/
            this.intelligence = 0;
            /*意志*/
            this.will = 0;
            /*幸运*/
            this.luck = 0;
            /*平衡*/
            this.balance = 0;
            /*暴击*/
            this.crit = 0;
            /*暴击倍数*/
            this.crit_mul = 0;
            /*防御*/
            this.defence = 0;
            /*护甲*/
            this.protection = 0;
            this.spellChance = 0;
            this.manaConsumption = 0;
            /*无视护甲*/
            this.protectionIgnore = 0;
            this.protectionReduce = 0;
            /*魔法伤害*/
            this.magicDamage = 0;
            this.hp = hp;
            this.mp = mp;
            this.str = str;
            this.dex = dex;
            this.intelligence = intelligence;
            this.will = will;
            this.luck = luck;
            this.attack = new iData.iNumber.DamageNumber(attMin, attMax);
            this.balance = balance;
            this.crit = crit;
            this.crit_mul = critMul;
            this.defence = defence;
            this.protection = protection;
            this.spellChance = param15;
            this.protectionIgnore = protectionIgnore;
            this.protectionReduce = protectionReduce;
            this.magicDamage = magicDamage;
        }
        BasicStatus.prototype.clone = function () {
            return new iData.BasicStatus(this.hp, this.mp, this.str, this.dex, this.intelligence, this.will, this.luck, this.attack.min, this.attack.max, this.balance, this.crit, this.crit_mul, this.defence, this.protection, this.spellChance, this.protectionIgnore, this.protectionReduce);
        };
        return BasicStatus;
    }());
    iData.BasicStatus = BasicStatus;
    __reflect(BasicStatus.prototype, "iData.BasicStatus");
})(iData || (iData = {}));
