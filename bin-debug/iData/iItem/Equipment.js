var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iItem;
    (function (iItem) {
        /**装备 */
        var Equipment = (function () {
            function Equipment(equipmentData, ratio, isBoos) {
                if (isBoos === void 0) { isBoos = false; }
                this.sortWeight = 0;
                this.level = 0;
                this.quality = 0;
                /**几率 */
                this.ratio = 0;
                this.isBoss = false;
                this.ratio = (ratio * 100 >> 0) / 100;
                if (this.ratio > 65) {
                    this.ratio = 65;
                }
                this.level = 0;
                this.levelStat = new Array();
                this.isBoss = isBoos;
                this.setData(equipmentData);
                this.generateBasicStat(equipmentData.stat, this.ratio);
                this.generateQuality(this.ratio);
            }
            /**加载装备信息 */
            Equipment.load = function (equiStr) {
                var equi = null;
                var i = 0;
                var qualityStatStr = null;
                var equiStrs = equiStr.split("#");
                while (i < iData.iItem.EquipmentList.list.length) {
                    if (iData.iItem.EquipmentList.list[i].name == equiStrs[0]) {
                        //这里
                        if (iData.iItem.EquipmentList.list[i] instanceof iData.iItem.WeaponData) {
                            //这里
                            var weaponData = iData.iItem.EquipmentList.list[i];
                            equi = new iData.iItem.Weapon(weaponData, parseInt(equiStrs[2]));
                        }
                        else {
                            equi = new iData.iItem.Equipment(iData.iItem.EquipmentList.list[i], parseInt(equiStrs[2]));
                        }
                        break;
                    }
                    i++;
                }
                equi.quality = parseInt(equiStrs[3]);
                equi.basicStat = new Array();
                var stats = (equiStrs[4]).split("%");
                i = 0;
                while (i < stats.length) {
                    if (stats[i] != "") {
                        equi.basicStat.push(iData.iItem.Stat.load(stats[i]));
                    }
                    i++;
                }
                equi.qualityStat = new Array();
                if (equi.quality > 0) {
                    qualityStatStr = (equiStrs[5]).split("%");
                    i = 0;
                    while (i < qualityStatStr.length) {
                        if (qualityStatStr[i] != "") {
                            equi.qualityStat.push(iData.iItem.Stat.load(qualityStatStr[i]));
                        }
                        i++;
                    }
                }
                equi.setLevel(parseInt(equiStrs[1]));
                return equi;
            };
            Equipment.prototype.setData = function (equipmentData) {
                this.position = equipmentData.position;
                this.type = equipmentData.type;
                this.name = equipmentData.name;
                this.realName = equipmentData.realName;
                this.sortWeight = equipmentData.sortWeight;
            };
            /**生成基本属性 */
            Equipment.prototype.generateBasicStat = function (rangeStat, ratio) {
                this.basicStat = new Array();
                var leng = rangeStat.length;
                var i = 0;
                while (i < leng) {
                    this.basicStat.push(iData.iItem.Stat.generate(rangeStat[i], ratio));
                    i++;
                }
                if (this.basicStat.length > 0) {
                    if (this.basicStat[0].name == iData.iItem.Stat.attackMin) {
                        if (this.basicStat[0].value > this.basicStat[1].value) {
                            this.basicStat[0] = new iData.iItem.Stat(iData.iItem.Stat.attackMin, this.basicStat[1].value);
                        }
                    }
                }
            };
            /**生成品质 */
            Equipment.prototype.generateQuality = function (ratio) {
                var qRate = 10 + ratio * 10;
                if (iGlobal.Player.basicStatus) {
                    qRate = qRate - iGlobal.Player.combatPower / 30;
                }
                if (qRate > 70) {
                    qRate = 70;
                }
                if (qRate < 20) {
                    qRate = 20;
                }
                this.quality = Tool.MyMath.balanceRandom(qRate) * 5.1;
                if (this.isBoss) {
                    this.quality = Tool.MyMath.balanceRandom(80) * 5.5;
                }
                this.quality = Math.round(this.quality);
                this.generateQualityStat(ratio);
            };
            /**生成品质属性 */
            Equipment.prototype.generateQualityStat = function (ratio) {
                var statIdx = 0;
                var stat1 = null;
                var value = 0;
                var stat2 = null;
                this.qualityStat = new Array();
                var i = 0;
                while (i < this.quality) {
                    statIdx = (iData.iItem.StatList.list.length - 1) * Math.random();
                    if (this.type == iData.iItem.EquipType.ACCESORY) {
                        statIdx = (iData.iItem.StatList.list.length - 2) * Math.random();
                    }
                    if (this instanceof iData.iItem.Weapon) {
                        statIdx = iData.iItem.StatList.list.length * Math.random();
                    }
                    stat1 = iData.iItem.StatList.list[statIdx >> 0];
                    value = stat1.value * Math.random() * Math.random() * ratio;
                    if (this.quality == 5) {
                        value = stat1.value * (Math.random() * Math.random() * 0.85 + 0.15) * ratio;
                    }
                    value++;
                    stat2 = new iData.iItem.Stat(stat1.name, value);
                    this.qualityStat.push(stat2);
                    i++;
                }
            };
            /**设置等级 */
            Equipment.prototype.setLevel = function (level) {
                // level = level;
                this.level = level;
                if (level < 0) {
                    this.level = 0;
                    return;
                }
                if (level > 15) {
                    this.level = 15;
                }
                this.generateLevelStat();
            };
            Equipment.prototype.levelup = function () {
                this.level++;
                this.generateLevelStat();
            };
            Equipment.prototype.canLevelup = function () {
                if (iGlobal.Player.gold > this.getMoney() && this.level < 15) {
                    return true;
                }
                return false;
            };
            /**生成等级属性 */
            Equipment.prototype.generateLevelStat = function () {
                var lvStats = null;
                var i = 0;
                this.levelStat = new Array();
                if (this.level == 0) {
                    return;
                }
                if (this.type != iData.iItem.EquipType.ACCESORY) {
                    if (this instanceof iData.iItem.Weapon) {
                        lvStats = iData.iItem.WeaponType[this.type.toUpperCase() + "_BASE"];
                    }
                    else {
                        lvStats = iData.iItem.EquipType[this.type.toUpperCase() + "_BASE"];
                    }
                    i = 0;
                    while (i < lvStats.length) {
                        if (this instanceof iData.iItem.Weapon) {
                            this.levelStat.push(new iData.iItem.Stat(lvStats[i].name, lvStats[i].value * Math.pow(1.5, this.level - 1) * (1 + 0.2 * this.quality)));
                        }
                        else {
                            this.levelStat.push(new iData.iItem.Stat(lvStats[i].name, lvStats[i].value * Math.pow(1.3, this.level - 1) * (1 + 0.2 * this.quality)));
                        }
                        i++;
                    }
                }
                else {
                    i = 0;
                    while (i < this.qualityStat.length) {
                        this.levelStat.push(new iData.iItem.Stat(this.qualityStat[i].name, this.qualityStat[i].value * Math.pow(1.2, this.level - 1) * (1 + 0.2 * this.quality) * 0.4));
                        i++;
                    }
                }
            };
            /**转换部位 */
            Equipment.prototype.getPostion = function () {
                switch (this.position) {
                    case iData.iItem.Equipment.HEAD:
                        return "头部";
                    case iData.iItem.Equipment.BODY:
                        return "身体";
                    case iData.iItem.Equipment.FEET:
                        return "脚部";
                    case iData.iItem.Equipment.NECKLACE:
                        return "项链";
                    case iData.iItem.Equipment.RING:
                        return "戒指";
                    case iData.iItem.Weapon.OFFHAND:
                        return "副手";
                    case iData.iItem.Weapon.ONEHAND:
                        return "单手";
                    case iData.iItem.Weapon.TWOHAND:
                        return "双手";
                    default:
                        return this.position;
                }
            };
            /**类型转换 */
            Equipment.prototype.getType = function () {
                switch (this.type) {
                    case iData.iItem.EquipType.ACCESORY:
                        return "饰品";
                    case iData.iItem.EquipType.HEAVY:
                        return "重甲";
                    case iData.iItem.EquipType.MEDIUM:
                        return "中甲";
                    case iData.iItem.EquipType.LIGHT:
                        return "轻甲";
                    case iData.iItem.WeaponType.AXE:
                        return "斧";
                    case iData.iItem.WeaponType.BOW:
                        return "弓";
                    case iData.iItem.WeaponType.CROSSBOW:
                        return "弩";
                    case iData.iItem.WeaponType.DAGGER:
                        return "匕首";
                    case iData.iItem.WeaponType.SCEPTRE:
                        return "权杖";
                    case iData.iItem.WeaponType.SHIELD:
                        return "盾牌";
                    case iData.iItem.WeaponType.STAFF:
                        return "法杖";
                    case iData.iItem.WeaponType.SWORD:
                        return "剑";
                    case iData.iItem.WeaponType.TOME:
                        return "书";
                    default:
                        return this.type;
                }
            };
            /**描述显示 */
            Equipment.prototype.getDescription = function () {
                var i = 0;
                var desc = "<p align=\'center\'>" + this.getNameHTML();
                if (this.level) {
                    desc = desc + (" +" + this.level);
                    if (this.level == 15) {
                        desc = desc + "(MAX)";
                    }
                }
                desc = desc + "</p>";
                desc = desc + ("<p align=\'center\'><font size=\'16\'>" + Tool.MyMath.FirstLetterToUpper(this.getPostion()) + "," + Tool.MyMath.FirstLetterToUpper(this.getType()));
                if (this instanceof iData.iItem.Weapon) {
                    //这里
                    var loc1 = this;
                    desc = desc + ("," + Tool.MyMath.FirstLetterToUpper(loc1.getCategory()));
                }
                desc = desc + "</font></p>";
                desc = desc + "<font size=\'20\'>";
                i = 0;
                while (i < this.basicStat.length) {
                    if (this.basicStat[i].name == iData.iItem.Stat.attackMin) {
                        desc = desc + ("  攻击 " + (this.basicStat[i].value >> 0) + "~" + (this.basicStat[i + 1].value >> 0) + "<br/>");
                        i++;
                    }
                    else {
                        desc = desc + ("  " + Tool.MyMath.FirstLetterToUpper(this.basicStat[i].statTranslate()) + " " + (this.basicStat[i].value >> 0) + "<br/>");
                    }
                    i++;
                }
                desc = desc + "<font color=\'#00AF64\'>";
                i = 0;
                while (i < this.qualityStat.length) {
                    desc = desc + ("  " + Tool.MyMath.FirstLetterToUpper(this.qualityStat[i].statTranslate()) + " +" + (this.qualityStat[i].value >> 0) + "<br/>");
                    i++;
                }
                desc = desc + "</font><font color=\'#4b5ed7\'>";
                i = 0;
                while (i < this.levelStat.length) {
                    desc = desc + ("  " + Tool.MyMath.FirstLetterToUpper(this.levelStat[i].statTranslate()) + " +" + (this.levelStat[i].value >> 0) + "<br/>");
                    i++;
                }
                desc = desc + "</font></font>";
                desc = desc + ("<p align=\'right\'>$ " + this.getMoney() + "</p>");
                return desc;
            };
            /***出售描述 */
            Equipment.prototype.getSellDesciption = function () {
                var i = 0;
                var sellDesc = "<p align=\'center\'>" + this.getNameHTML();
                if (this.level) {
                    sellDesc = sellDesc + (" +" + this.level);
                }
                sellDesc = sellDesc + "</p>";
                sellDesc = sellDesc + "<p align=\'center\' ><font color=\'#ff4040\'>FOR SALE</font></p>";
                sellDesc = sellDesc + ("<p align=\'center\'><font size=\'16\'>" + Tool.MyMath.FirstLetterToUpper(this.getPostion()) + "," + Tool.MyMath.FirstLetterToUpper(this.getType()));
                if (this instanceof iData.iItem.Weapon) {
                    sellDesc = sellDesc + ("," + Tool.MyMath.FirstLetterToUpper(this.getCategory()));
                }
                sellDesc = sellDesc + "</font></p>";
                sellDesc = sellDesc + "<font size=\'20\'>";
                i = 0;
                while (i < this.basicStat.length) {
                    if (this.basicStat[i].name == iData.iItem.Stat.attackMin) {
                        sellDesc = sellDesc + ("  攻击 " + (this.basicStat[i].value >> 0) + "~" + (this.basicStat[i + 1].value >> 0) + "<br/>");
                        i++;
                    }
                    else {
                        sellDesc = sellDesc + ("  " + Tool.MyMath.FirstLetterToUpper(this.basicStat[i].statTranslate()) + " " + (this.basicStat[i].value >> 0) + "<br/>");
                    }
                    i++;
                }
                sellDesc = sellDesc + "<font color=\'#00AF64\'>";
                i = 0;
                while (i < this.qualityStat.length) {
                    sellDesc = sellDesc + ("  " + Tool.MyMath.FirstLetterToUpper(this.qualityStat[i].statTranslate()) + " +" + (this.qualityStat[i].value >> 0) + "<br/>");
                    i++;
                }
                sellDesc = sellDesc + "</font><font color=\'#4b5ed7\'>";
                i = 0;
                while (i < this.levelStat.length) {
                    sellDesc = sellDesc + ("  " + Tool.MyMath.FirstLetterToUpper(this.levelStat[i].statTranslate()) + " +" + (this.levelStat[i].value >> 0) + "<br/>");
                    i++;
                }
                sellDesc = sellDesc + "</font></font>";
                sellDesc = sellDesc + ("<p align=\'right\'>$ " + this.getSellMoney() + "</p>");
                return sellDesc;
            };
            Equipment.prototype.getMoney = function () {
                return (this.ratio * 30 >> 0) * (this.level + 1);
            };
            Equipment.prototype.getSellMoney = function () {
                var money = this.getMoney() * 10 * (1 + this.quality * this.quality);
                return money;
            };
            Equipment.prototype.getNameHTML = function () {
                var color = null;
                switch (this.quality) {
                    case 1:
                        color = iData.iItem.Equipment.GREEN;
                        break;
                    case 2:
                        color = iData.iItem.Equipment.BLUE;
                        break;
                    case 3:
                        color = iData.iItem.Equipment.YELLOW;
                        break;
                    case 4:
                        color = iData.iItem.Equipment.ORANGE;
                        break;
                    case 5:
                        color = iData.iItem.Equipment.PURPLE;
                }
                return "<font color=\'" + color + "\'>" + Tool.MyMath.FirstLetterToUpper(this.realName) + "</font>";
            };
            /**根据品质取得颜色 */
            Equipment.prototype.getColor = function () {
                var color = null;
                switch (this.quality) {
                    case 1:
                        color = iData.iItem.Equipment.GREEN;
                        break;
                    case 2:
                        color = iData.iItem.Equipment.BLUE;
                        break;
                    case 3:
                        color = iData.iItem.Equipment.YELLOW;
                        break;
                    case 4:
                        color = iData.iItem.Equipment.ORANGE;
                        break;
                    case 5:
                        color = iData.iItem.Equipment.PURPLE;
                }
                return color;
            };
            Equipment.prototype.getColorInHex = function () {
                var colorHex = 0;
                switch (this.quality) {
                    case 0:
                        colorHex = iData.iItem.Equipment.GRAY_H;
                        break;
                    case 1:
                        colorHex = iData.iItem.Equipment.GREEN_H;
                        break;
                    case 2:
                        colorHex = iData.iItem.Equipment.BLUE_H;
                        break;
                    case 3:
                        colorHex = iData.iItem.Equipment.YELLOW_H;
                        break;
                    case 4:
                        colorHex = iData.iItem.Equipment.ORANGE_H;
                        break;
                    case 5:
                        colorHex = iData.iItem.Equipment.PURPLE_H;
                }
                return colorHex;
            };
            /**保存 */
            Equipment.prototype.save = function () {
                var i = 0;
                var saveStr = "";
                saveStr = saveStr + (this.name + "#" + this.level + "#" + this.ratio + "#" + this.quality);
                saveStr = saveStr + "#";
                i = 0;
                while (i < this.basicStat.length) {
                    saveStr = saveStr + (this.basicStat[i].save() + "%");
                    i++;
                }
                if (this.quality > 0) {
                    saveStr = saveStr + "#";
                    i = 0;
                    while (i < this.qualityStat.length) {
                        saveStr = saveStr + (this.qualityStat[i].save() + "%");
                        i++;
                    }
                }
                return saveStr;
            };
            return Equipment;
        }());
        iItem.Equipment = Equipment;
        __reflect(Equipment.prototype, "iData.iItem.Equipment");
    })(iItem = iData.iItem || (iData.iItem = {}));
})(iData || (iData = {}));
/***装备颜色值 */
iData.iItem.Equipment.HEAD = "head";
iData.iItem.Equipment.BODY = "body";
iData.iItem.Equipment.FEET = "feet";
iData.iItem.Equipment.NECKLACE = "necklace";
iData.iItem.Equipment.RING = "ring";
iData.iItem.Equipment.GREEN = "#4BB814";
iData.iItem.Equipment.BLUE = "#4a60d7";
iData.iItem.Equipment.YELLOW = "#a6a500";
iData.iItem.Equipment.ORANGE = "#ff7100";
iData.iItem.Equipment.PURPLE = "#9840be";
iData.iItem.Equipment.GREEN_H = 4962324;
iData.iItem.Equipment.BLUE_H = 4874455;
iData.iItem.Equipment.YELLOW_H = 10921216;
iData.iItem.Equipment.ORANGE_H = 16740608;
iData.iItem.Equipment.GRAY_H = 7631988;
iData.iItem.Equipment.PURPLE_H = 9978046;
