var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iMap;
    (function (iMap) {
        /**地图数据 */
        var MapData = (function () {
            function MapData(x, y, name, rName, modifier, monsterList, petList) {
                /**横坐标 */
                this.x = 0;
                /**纵坐标 */
                this.y = 0;
                /**调节参数 */
                this.modifier = 0;
                this.name = name;
                this.realName = rName;
                this.x = x;
                this.y = y;
                this.monsterList = monsterList;
                this.modifier = modifier;
                this.petList = petList;
            }
            return MapData;
        }());
        iMap.MapData = MapData;
        __reflect(MapData.prototype, "iData.iMap.MapData");
    })(iMap = iData.iMap || (iData.iMap = {}));
})(iData || (iData = {}));
