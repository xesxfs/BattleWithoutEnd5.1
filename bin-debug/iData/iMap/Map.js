var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iMap;
    (function (iMap) {
        var Map = (function () {
            function Map(mapData) {
                this.averageCp = 0;
                this.mapData = mapData;
                this.setAverageCp();
            }
            /**平均战力 */
            Map.prototype.setAverageCp = function () {
                var i = 0;
                var cp = 0;
                var length = this.mapData.monsterList.length;
                while (i < length) {
                    cp = cp + this.mapData.monsterList[i].CP;
                    i++;
                }
                this.averageCp = cp / length;
            };
            /**获得一个Boss */
            Map.prototype.getBoss = function () {
                //在当前地图，怪物列表随机一个怪物，生成本地图的Boss
                var boos = new iData.iMonster.Boss(this.mapData.monsterList[Math.random() * this.mapData.monsterList.length >> 0]);
                return boos;
            };
            return Map;
        }());
        iMap.Map = Map;
        __reflect(Map.prototype, "iData.iMap.Map");
    })(iMap = iData.iMap || (iData.iMap = {}));
})(iData || (iData = {}));
