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
        /**Boss类 */
        var Boss = (function (_super) {
            __extends(Boss, _super);
            function Boss(data) {
                var _this = _super.call(this, data) || this;
                /**boss血量*/
                _this.hpleft = 0;
                _this.hpleft = _this.hp;
                return _this;
            }
            Boss.prototype.generateTitle = function () {
                this.title = iData.iMonster.MonsterTitleList.REGION_BOSS;
                this.addTitleStat();
            };
            Object.defineProperty(Boss.prototype, "CP", {
                get: function () {
                    return this.data.CP * 2;
                },
                enumerable: true,
                configurable: true
            });
            Boss.prototype.dropItem = function () {
                var equipment = null;
                var equipmentData = iData.iItem.EquipmentList.list[(iData.iItem.EquipmentList.list.length * Math.random()) >> 0];
                if (equipmentData instanceof iData.iItem.WeaponData) {
                    equipment = new iData.iItem.Weapon(equipmentData, this.dropRate, true);
                }
                else {
                    equipment = new iData.iItem.Equipment(equipmentData, this.dropRate, true);
                }
                var itemToggle = false;
                if (!iGlobal.Global["item" + equipment.quality + "_toggle"]) {
                    itemToggle = true;
                }
                if (!itemToggle) {
                    if ((equipment instanceof iData.iItem.Weapon) || equipment.type == iData.iItem.EquipType.ACCESORY) {
                        if (!iGlobal.Global[equipment.name + "_toggle"]) {
                            itemToggle = true;
                        }
                    }
                    else if (!iGlobal.Global[equipment.position + "_" + equipment.type + "_toggle"]) {
                        itemToggle = true;
                    }
                }
                if (!itemToggle && iGlobal.Player.addItem(equipment)) {
                    if (MainScene.lootPanel) {
                        switch (equipment.quality) {
                            case 0:
                                MainScene.lootPanel.basic++;
                                break;
                            case 1:
                                MainScene.lootPanel.magic++;
                                break;
                            case 2:
                                MainScene.lootPanel.rare++;
                                break;
                            case 3:
                                MainScene.lootPanel.perfect++;
                                break;
                            case 4:
                                MainScene.lootPanel.epic++;
                                break;
                            case 5:
                                MainScene.lootPanel.legendary++;
                        }
                    }
                }
                else {
                    itemToggle = true;
                }
                if (itemToggle) {
                    iGlobal.Player.addMoney(equipment.getMoney());
                }
            };
            Boss.prototype.dropPet = function () {
                var statusRate = 0;
                var statusCount = 0;
                var dropRate = 20 * (1 + iGlobal.Player.luck / 200);
                if (dropRate > 40) {
                    dropRate = 40;
                }
                if (Math.random() * 100 < dropRate) {
                    statusRate = iGlobal.Player.luck / 500;
                    if (statusRate > 1) {
                        statusRate = 1;
                    }
                    statusCount = (1 + iGlobal.Global.map.mapData.modifier) * (1 + statusRate);
                    iGlobal.Player.addPet(new iData.iPet.Pet(iGlobal.Global.map.mapData.petList[iGlobal.Global.map.mapData.petList.length * Math.random() >> 0], statusCount));
                }
            };
            return Boss;
        }(iData.iMonster.Monster));
        iMonster.Boss = Boss;
        __reflect(Boss.prototype, "iData.iMonster.Boss");
    })(iMonster = iData.iMonster || (iData.iMonster = {}));
})(iData || (iData = {}));
