var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var Race = (function () {
        function Race(name, initial, ageupList) {
            this.name = name;
            this.initial = initial;
            this.ageupList = ageupList;
        }
        /*通过年龄计算属性值*/
        Race.prototype.caculateStat = function (age) {
            var stat = this.initial.clone();
            var value = age - 25;
            if (age > 25) {
                age = 25;
            }
            var baseAge = 10;
            while (baseAge < age) {
                stat.hp = stat.hp + (this.ageupList[baseAge - 10].hp + 1);
                stat.mp = stat.mp + (this.ageupList[baseAge - 10].mp + 1);
                stat.str = stat.str + this.ageupList[baseAge - 10].str;
                stat.dex = stat.dex + this.ageupList[baseAge - 10].dex;
                stat.will = stat.will + this.ageupList[baseAge - 10].will;
                stat.intelligence = stat.intelligence + this.ageupList[baseAge - 10].intelligence;
                stat.luck = stat.luck + this.ageupList[baseAge - 10].luck;
                baseAge++;
            }
            /*25岁后只加hp和mp*/
            if (age == 25) {
                stat.hp = stat.hp + value;
                stat.mp = stat.mp + value;
            }
            return stat;
        };
        return Race;
    }());
    iData.Race = Race;
    __reflect(Race.prototype, "iData.Race");
})(iData || (iData = {}));
