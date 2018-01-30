var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iMonster;
    (function (iMonster) {
        var Monster = (function () {
            function Monster(monsterData) {
                this.RED = "#ff4040";
                this.BLUE = "#4a60d7";
                this.YELLOW = "#FFA640";
                this.GREEN = "#4BB814";
                this.BROWN = "#bf7130";
                this.PURPLE = "#BC38d3";
                this.PINK = "#EE6b9c";
                this.data = monsterData.clone();
                this.buffList = new Array();
                this.generateTitle();
            }
            Monster.prototype.generateTitle = function () {
                if (Math.random() > 0.8) {
                    this.title = iData.iMonster.MonsterTitleList.list[iData.iMonster.MonsterTitleList.list.length * Math.random() >> 0];
                    this.addTitleStat();
                }
            };
            /**增加称号单位属性 */
            Monster.prototype.addTitleStat = function () {
                var statMul = null;
                var length = this.title.statMulList.length;
                var i = 0;
                while (i < length) {
                    statMul = this.title.statMulList[i];
                    if (statMul.name == iData.iItem.Stat.attackMin) {
                        this.data.attack = new iData.iNumber.DamageNumber(this.data.attack.min * statMul.mul + statMul.add, this.data.attack.max);
                    }
                    else if (statMul.name == iData.iItem.Stat.attackMax) {
                        this.data.attack = new iData.iNumber.DamageNumber(this.data.attack.min, this.data.attack.max * statMul.mul + statMul.add);
                    }
                    else if (statMul.name == iData.iItem.Stat.ATTACK) {
                        this.data.attack = new iData.iNumber.DamageNumber(this.data.attack.min * statMul.mul + statMul.add, this.data.attack.max * statMul.mul + statMul.add);
                    }
                    else {
                        this.data[statMul.name] = this.data[statMul.name] * statMul.mul;
                        this.data[statMul.name] = this.data[statMul.name] + statMul.add;
                    }
                    i++;
                }
            };
            Monster.prototype.addBuff = function (buff) {
                var buf = this.isContainBuff(buff.name);
                if (buf == null) {
                    this.buffList.push(buff);
                }
                else {
                    buf.combine(buff);
                }
                MainScene.monsterInfoPanel.updateBuff();
            };
            Monster.prototype.runBuff = function () {
                var length = this.buffList.length;
                var i = 0;
                while (i < length) {
                    this.buffList[i].run();
                    i++;
                }
                this.removeBuff();
            };
            Monster.prototype.removeBuff = function () {
                var length = this.buffList.length;
                var i = 0;
                while (i < length) {
                    if (this.buffList[i].isOver()) {
                        this.buffList.splice(i, 1);
                        MainScene.monsterInfoPanel.updateBuff();
                        return;
                    }
                    i++;
                }
            };
            Monster.prototype.isContainBuff = function (bName) {
                var length = this.buffList.length;
                var i = 0;
                while (i < length) {
                    if (this.buffList[i].name == bName) {
                        return this.buffList[i];
                    }
                    i++;
                }
                return null;
            };
            Object.defineProperty(Monster.prototype, "CP", {
                get: function () {
                    return this.data.CP;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "money", {
                get: function () {
                    var clacMoney = (this.CP / iGlobal.Player.combatPower + iGlobal.Global.map.mapData.modifier) * this.CP / 10 * (1 + iGlobal.Player.luck / 300);
                    if (this.title) {
                        clacMoney = clacMoney * this.title.goldMul;
                    }
                    return Math.round(clacMoney);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "exp", {
                get: function () {
                    var clacExp = (this.CP / iGlobal.Player.combatPower + iGlobal.Global.map.mapData.modifier) * this.CP * (1 + iGlobal.Player.luck / 300);
                    if (this.title) {
                        clacExp = clacExp * this.title.xpMul;
                    }
                    return Math.round(clacExp);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "dropRate", {
                get: function () {
                    var rate = (this.CP / iGlobal.Player.combatPower + iGlobal.Global.map.mapData.modifier) * (1 + iGlobal.Player.luck / 300);
                    if (this.title) {
                        rate = rate * this.title.dropMul;
                    }
                    return rate;
                },
                enumerable: true,
                configurable: true
            });
            Monster.prototype.dropItem = function () {
                var eData = null;
                var equi = null;
                var toggle = false;
                if (Math.random() * 10 < 20 * this.dropRate) {
                    eData = iData.iItem.EquipmentList.list[iData.iItem.EquipmentList.list.length * Math.random() >> 0];
                    if (eData instanceof iData.iItem.WeaponData) {
                        var loc1 = eData;
                        equi = new iData.iItem.Weapon(loc1, this.dropRate);
                    }
                    else {
                        equi = new iData.iItem.Equipment(eData, this.dropRate);
                    }
                    toggle = false;
                    if (!iGlobal.Global["item" + equi.quality + "_toggle"]) {
                        toggle = true;
                    }
                    if (!toggle) {
                        if ((equi instanceof iData.iItem.Weapon) || equi.type == iData.iItem.EquipType.ACCESORY) {
                            if (!iGlobal.Global[equi.name + "_toggle"]) {
                                toggle = true;
                            }
                        }
                        else if (!iGlobal.Global[equi.position + "_" + equi.type + "_toggle"]) {
                            toggle = true;
                        }
                    }
                    if (!toggle && iGlobal.Player.addItem(equi)) {
                        if (MainScene.lootPanel) {
                            switch (equi.quality) {
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
                        toggle = true;
                    }
                    if (toggle) {
                        iGlobal.Player.addMoney(equi.getMoney());
                    }
                }
            };
            Monster.prototype.dropPet = function () {
            };
            Object.defineProperty(Monster.prototype, "nameHtml", {
                get: function () {
                    var color = null;
                    var title = null;
                    var cp = this.CP / iGlobal.Player.combatPower;
                    if (cp < 0.8) {
                        color = this.PINK;
                        title = "WEAKEST";
                    }
                    else if (cp < 1) {
                        color = this.PURPLE;
                        title = "WEAK";
                    }
                    else if (cp < 1.4) {
                        color = this.BROWN;
                        title = "NORMAL";
                    }
                    else if (cp < 2) {
                        color = this.GREEN;
                        title = "STRONG";
                    }
                    else if (cp < 3) {
                        color = this.YELLOW;
                        title = "AWFUL";
                    }
                    else {
                        color = this.RED;
                        title = "BOSS";
                    }
                    return "<font color=\'" + color + "\'>" + this.data.realName + "</font>";
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "attack", {
                get: function () {
                    return this.data.attack.min + (this.data.attack.max - this.data.attack.min) * Tool.MyMath.balanceRandom(this.balance);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "hp", {
                get: function () {
                    return this.data.hp;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "balance", {
                get: function () {
                    if (this.data.balance > 100) {
                        this.data.balance = 100;
                    }
                    if (this.data.balance < 0) {
                        this.data.balance = 0;
                    }
                    return this.data.balance;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "crit", {
                get: function () {
                    return this.data.crit;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "crit_mul", {
                get: function () {
                    return this.data.crit_mul;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "defence", {
                get: function () {
                    return this.data.defence;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Monster.prototype, "protection", {
                get: function () {
                    var pro = this.data.protection;
                    var buff = this.isContainBuff("corrosion");
                    if (buff != null) {
                        pro = pro - buff.count;
                    }
                    return pro;
                },
                enumerable: true,
                configurable: true
            });
            return Monster;
        }());
        iMonster.Monster = Monster;
        __reflect(Monster.prototype, "iData.iMonster.Monster");
    })(iMonster = iData.iMonster || (iData.iMonster = {}));
})(iData || (iData = {}));
