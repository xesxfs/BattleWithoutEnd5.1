var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iGlobal;
(function (iGlobal) {
    var Player = (function () {
        function Player() {
        }
        Player.burn = function (age, race) {
            iGlobal.Player.age = age;
            iGlobal.Player.race = race;
            iGlobal.Player.lv = 1;
            iGlobal.Player.caculateInitStat();
            if (!iGlobal.Player.leftHand) {
                iGlobal.Player.equip(new iData.iItem.Weapon(iData.iItem.EquipmentList.list[1], 1));
            }
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.COMBAT_MASTERY);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.SMASH);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.CRITICAL_HIT);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.COUNTERATTACK);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.DEFENCE);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.MAGIC_MASTERY);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.FIREBOLT);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.ICEBOLT);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.LIGHTNINGBOLT);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.BLACKSMITHING);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.RANGE_MASTERY);
            iGlobal.Player.addSkill(iData.iSkill.SkillDataList.MIRAGE_MISSILE);
            iData.iPlayer.TitleList.updateTitleInfo("begin");
            iGlobal.Player.updateAllInfo();
            iGlobal.Player.save();
        };
        /***计算初始状态 */
        Player.caculateInitStat = function () {
            iGlobal.Player.basicStatus = iGlobal.Player.race.caculateStat(iGlobal.Player.age);
        };
        Player.caculateLevelStat = function () {
        };
        Player.ageup = function () {
            iGlobal.Player.caculate = 0;
            if (iGlobal.Player.age < 25) {
                iGlobal.Player.basicStatus.hp = iGlobal.Player.basicStatus.hp + (iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].hp + 1);
                iGlobal.Player.basicStatus.mp = iGlobal.Player.basicStatus.mp + (iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].mp + 1);
                iGlobal.Player.basicStatus.str = iGlobal.Player.basicStatus.str + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].str;
                iGlobal.Player.basicStatus.dex = iGlobal.Player.basicStatus.dex + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].dex;
                iGlobal.Player.basicStatus.will = iGlobal.Player.basicStatus.will + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].will;
                iGlobal.Player.basicStatus.intelligence = iGlobal.Player.basicStatus.intelligence + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].intelligence;
                iGlobal.Player.basicStatus.luck = iGlobal.Player.basicStatus.luck + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].luck;
            }
            else {
                iGlobal.Player.basicStatus.hp = iGlobal.Player.basicStatus.hp + 1;
                iGlobal.Player.basicStatus.mp = iGlobal.Player.basicStatus.mp + 1;
            }
            iGlobal.Player.age++;
            /***19~25增加1ap,25以后不增加,18以内直接增加差值**/
            var addAp = 18 - iGlobal.Player.age;
            if (addAp < 1 && iGlobal.Player.age <= 25) {
                addAp = 1;
            }
            if (addAp > 0) {
                iGlobal.Player.addAp(addAp);
            }
            iGlobal.Player.updateInfoWindow();
            MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>你长大了! 你现在" + iGlobal.Player.age + "岁了!</font>");
            iData.iPlayer.TitleList.updateTitleInfo("age", iGlobal.Player.age);
            MainScene.otherPanel.otherWindow.updateBirth();
        };
        Object.defineProperty(Player, "combatPower", {
            /***战斗力 */
            get: function () {
                var hp = iGlobal.Player.basicStatus.hp + iGlobal.Player.skillStatus.hp;
                var mp = iGlobal.Player.basicStatus.mp + iGlobal.Player.skillStatus.mp;
                var str = iGlobal.Player.basicStatus.str + iGlobal.Player.skillStatus.str;
                var inteligence = iGlobal.Player.basicStatus.intelligence + iGlobal.Player.skillStatus.intelligence;
                var dex = iGlobal.Player.basicStatus.dex + iGlobal.Player.skillStatus.dex;
                var will = iGlobal.Player.basicStatus.will + iGlobal.Player.skillStatus.will;
                var luck = iGlobal.Player.basicStatus.luck + iGlobal.Player.skillStatus.luck;
                var cp = hp + 0.5 * mp + str + 0.2 * inteligence + 0.1 * dex + 0.5 * will + 0.1 * luck + iGlobal.Player.apCost;
                return cp;
            },
            enumerable: true,
            configurable: true
        });
        Player.addItem = function (equipmentData) {
            if (iGlobal.Player.itemList.length >= iGlobal.Player.BAGMAX) {
                MainScene.allInfoPanel.addText("背包满了!", iGlobal.Global.item);
                return false;
            }
            iGlobal.Player.itemList.push(equipmentData);
            if (MainScene.allInfoPanel) {
                MainScene.allInfoPanel.addText("你获得了" + equipmentData.getNameHTML() + "!", iGlobal.Global.item);
            }
            if (MainScene.otherPanel) {
                if (MainScene.otherPanel.itemWindow) {
                    MainScene.otherPanel.itemWindow.addOneItem();
                }
            }
            return true;
        };
        Player.addPet = function (pet) {
            if (iGlobal.Player.petList.length >= iGlobal.Player.PETMAX) {
                MainScene.allInfoPanel.addText("宠物栏满了!", iGlobal.Global.item);
                return false;
            }
            iGlobal.Player.petList.push(pet);
            if (MainScene.allInfoPanel) {
                MainScene.allInfoPanel.addText("你获得了" + pet.name + "!", iGlobal.Global.item);
            }
            if (MainScene.otherPanel) {
                MainScene.otherPanel.petWindow.update();
            }
            return true;
        };
        Player.removeItem = function (equipment) {
            var length = iGlobal.Player.itemList.length;
            var index = 0;
            while (index < length) {
                if (iGlobal.Player.itemList[index] == equipment) {
                    iGlobal.Player.itemList.splice(index, 1);
                    return true;
                }
                index++;
            }
            return false;
        };
        Player.addSkill = function (sillData) {
            var length = iGlobal.Player.skillList.length;
            var i = 0;
            while (i < length) {
                if (iGlobal.Player.skillList[i].skillData.name == sillData.name) {
                    return;
                }
                i++;
            }
            if (sillData instanceof iData.iSkill.PassiveSkillData) {
                iGlobal.Player.skillList.push(new iData.iSkill.PassiveSkill(sillData));
            }
            else {
                iGlobal.Player.skillList.push(new iData.iSkill.ActiveSkill(sillData));
            }
            if (MainScene.allInfoPanel) {
                MainScene.allInfoPanel.addText("你获得了技能<font color=\'#ff4040\'>" + sillData.name + "</font>");
            }
        };
        Player.getSkill = function (skillData) {
            var length = iGlobal.Player.skillList.length;
            var i = 0;
            while (i < length) {
                if (iGlobal.Player.skillList[i].skillData.name == skillData.name) {
                    return iGlobal.Player.skillList[i];
                }
                i++;
            }
            return null;
        };
        Player.isSkillEquiped = function (skill) {
            var length = iGlobal.Player.equipSkillList.length;
            var i = 0;
            while (i < length) {
                if (iGlobal.Player.equipSkillList[i] == skill) {
                    return true;
                }
                i++;
            }
            return false;
        };
        Player.equipSkill = function (skill) {
            if (iGlobal.Player.isSkillEquiped(skill)) {
                return false;
            }
            var length = iGlobal.Player.skillList.length;
            var i = 0;
            while (i < length) {
                if (iGlobal.Player.skillList[i] == skill) {
                    iGlobal.Player.equipSkillList.push(skill);
                    iGlobal.Player.updateBattleSkillWindow();
                    return true;
                }
                i++;
            }
            return false;
        };
        Player.unequipSkill = function (skill) {
            var length = iGlobal.Player.equipSkillList.length;
            var i = 0;
            while (i < length) {
                if (iGlobal.Player.equipSkillList[i] == skill) {
                    iGlobal.Player.equipSkillList.splice(i, 1);
                    iGlobal.Player.updateBattleSkillWindow();
                    return true;
                }
                i++;
            }
            return false;
        };
        Object.defineProperty(Player, "attackSkillList", {
            /**人物当前攻击技能列表 */
            get: function () {
                var categoryName = null;
                var skillList = new Array();
                var length = iGlobal.Player.equipSkillList.length;
                if (iGlobal.Player.leftHand) {
                    categoryName = iGlobal.Player.leftHand.category;
                }
                else {
                    categoryName = iData.iItem.WeaponCategory.MELEE;
                }
                var i = 0;
                while (i < length) {
                    if (iGlobal.Player.equipSkillList[i].skillData.type == iData.iSkill.SkillType.ATTACK) {
                        if (iGlobal.Player.equipSkillList[i].skillData.category == iData.iSkill.SkillCategory.ALL || iGlobal.Player.equipSkillList[i].skillData.category == iData.iSkill.SkillCategory.MAGIC || iGlobal.Player.equipSkillList[i].skillData.category == categoryName) {
                            skillList.push(iGlobal.Player.equipSkillList[i]);
                        }
                    }
                    i++;
                }
                return skillList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "defenceSkillList", {
            /***防御技能 */
            get: function () {
                var categoryName = null;
                var list = new Array();
                var length = iGlobal.Player.equipSkillList.length;
                if (iGlobal.Player.leftHand) {
                    categoryName = iGlobal.Player.leftHand.category;
                }
                else {
                    categoryName = iData.iItem.WeaponCategory.MELEE;
                }
                var i = 0;
                while (i < length) {
                    if (iGlobal.Player.equipSkillList[i].skillData.type == iData.iSkill.SkillType.DEFENCE) {
                        if (iGlobal.Player.equipSkillList[i].skillData.category == iData.iSkill.SkillCategory.ALL || iGlobal.Player.equipSkillList[i].skillData.category == iData.iSkill.SkillCategory.MAGIC || iGlobal.Player.equipSkillList[i].skillData.category == categoryName) {
                            list.push(iGlobal.Player.equipSkillList[i]);
                        }
                    }
                    i++;
                }
                return list;
            },
            enumerable: true,
            configurable: true
        });
        /**装备 */
        Player.equip = function (equipment) {
            if (equipment instanceof iData.iItem.Weapon) {
                switch (equipment.position) {
                    case iData.iItem.Weapon.ONEHAND:
                        iGlobal.Player.unequip("leftHand");
                        iGlobal.Player.leftHand = equipment;
                        iGlobal.Player.updateSkillInfo();
                        break;
                    case iData.iItem.Weapon.OFFHAND:
                        iGlobal.Player.unequip("rightHand");
                        if (iGlobal.Player.leftHand && iGlobal.Player.leftHand.position == iData.iItem.Weapon.TWOHAND) {
                            iGlobal.Player.unequip("leftHand");
                        }
                        iGlobal.Player.rightHand = equipment;
                        break;
                    case iData.iItem.Weapon.TWOHAND:
                        iGlobal.Player.unequip("leftHand");
                        iGlobal.Player.unequip("rightHand");
                        iGlobal.Player.leftHand = equipment;
                        iGlobal.Player.updateSkillInfo();
                }
            }
            else {
                if (iGlobal.Player[equipment.position]) {
                    iGlobal.Player.unequip(equipment.position);
                }
                iGlobal.Player[equipment.position] = equipment;
            }
            iGlobal.Player.updateEquipInfo();
            iGlobal.Player.updateBattleSkillWindow();
        };
        /***卸下 */
        Player.unequip = function (position) {
            if (iGlobal.Player[position]) {
                iGlobal.Player.addItem(iGlobal.Player[position]);
                iGlobal.Player[position] = null;
                iGlobal.Player.updateEquipInfo();
                iGlobal.Player.updateSkillInfo();
            }
            iGlobal.Player.updateBattleSkillWindow();
        };
        Player.addTitle = function (title) {
            iGlobal.Player.titleList.push(title);
        };
        Player.setTitle = function (title) {
            if (iGlobal.Player.title == title) {
                iGlobal.Player.title = null;
            }
            else {
                iGlobal.Player.title = title;
            }
            iGlobal.Player.updateInfoWindow();
        };
        Player.setPet = function (pet) {
            if (iGlobal.Player.pet == pet) {
                iGlobal.Player.pet = null;
            }
            else {
                if (iGlobal.Player.pet) {
                    iGlobal.Player.addPet(iGlobal.Player.pet);
                }
                iGlobal.Player.pet = pet;
            }
            iGlobal.Player.updatePetInfoWindow();
            iGlobal.Player.updateEquipWindow();
        };
        Player.removePet = function (pet) {
            var length = iGlobal.Player.petList.length;
            var i = 0;
            while (i < length) {
                if (iGlobal.Player.petList[i] == pet) {
                    iGlobal.Player.petList.splice(i, 1);
                    return true;
                }
                i++;
            }
            return false;
        };
        Player.addAp = function (nAp) {
            iGlobal.Player.ap = iGlobal.Player.ap + nAp;
            iGlobal.Player.updateInfoWindow();
            iGlobal.Player.updateSkillPanel();
            if (nAp > 0) {
                MainScene.allInfoPanel.addText("<font color=\'#FF4040\'>你获得了" + nAp + " ap!</font>");
            }
            else {
                iGlobal.Player.apCost = iGlobal.Player.apCost - nAp;
            }
        };
        Player.loseMoney = function (nMoney) {
            iGlobal.Player.gold = iGlobal.Player.gold - nMoney;
            MainScene.allInfoPanel.addText("你<font color=\'#FF4040\'>失去了" + "$" + nMoney + "</font>.", iGlobal.Global.money);
            iGlobal.Player.updateInfoWindow();
            if (MainScene.lootPanel) {
                MainScene.lootPanel.money = MainScene.lootPanel.money - nMoney;
            }
            if (iGlobal.Global.shopPanel) {
                iGlobal.Global.shopPanel.updateMoneyButton();
            }
            if (iGlobal.Global.specialShopPanel) {
                iGlobal.Global.specialShopPanel.update();
            }
        };
        Player.addMoney = function (nMoney) {
            if (iGlobal.Player.gold <= 1000000000) {
                iGlobal.Player.gold = iGlobal.Player.gold + nMoney;
                MainScene.allInfoPanel.addText("你获得了<font color=\'#FFA640\'>" + "$" + nMoney + "</font>.", iGlobal.Global.money);
                iGlobal.Player.updateInfoWindow();
                if (MainScene.lootPanel) {
                    MainScene.lootPanel.money = MainScene.lootPanel.money + nMoney;
                }
            }
            if (iGlobal.Global.shopPanel) {
                iGlobal.Global.shopPanel.updateMoneyButton();
            }
            if (iGlobal.Global.specialShopPanel) {
                iGlobal.Global.specialShopPanel.update();
            }
            // if (iGlobal.Global.kongregate) {
            // 	iGlobal.Global.kongregate.stats.submit("Money", iGlobal.Player.gold);
            // }
        };
        Player.loseExp = function () {
            var lose = iGlobal.Player.xp / 100;
            MainScene.allInfoPanel.addText("你<font color=\'#ff4040\'>失去了" + lose + "</font>经验.", iGlobal.Global.exp);
            iGlobal.Player.xp = iGlobal.Player.xp - lose;
            iGlobal.Player.updateXpBar();
            if (MainScene.lootPanel) {
                MainScene.lootPanel.exp = MainScene.lootPanel.exp - lose;
            }
        };
        Player.addExp = function (exp) {
            if (iGlobal.Player.getLevelExp() < 0) {
                return;
            }
            iGlobal.Player.xp = iGlobal.Player.xp + exp;
            MainScene.allInfoPanel.addText("你获得了<font color=\'#4a60d7\'>" + exp + "</font>经验.", iGlobal.Global.exp);
            if (iGlobal.Player.xp > iGlobal.Player.getLevelExp()) {
                iGlobal.Player.levelUp();
            }
            iGlobal.Player.updateXpBar();
            if (MainScene.lootPanel) {
                MainScene.lootPanel.exp = MainScene.lootPanel.exp + exp;
            }
        };
        Player.levelUp = function () {
            iGlobal.Player.lv++;
            if (iGlobal.Player.age < 25) {
                iGlobal.Player.basicStatus.hp = iGlobal.Player.basicStatus.hp + (iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].hp / 4 + 1);
                iGlobal.Player.basicStatus.mp = iGlobal.Player.basicStatus.mp + (iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].mp / 4 + 1);
                iGlobal.Player.basicStatus.str = iGlobal.Player.basicStatus.str + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].str / 4;
                iGlobal.Player.basicStatus.dex = iGlobal.Player.basicStatus.dex + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].dex / 4;
                iGlobal.Player.basicStatus.will = iGlobal.Player.basicStatus.will + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].will / 4;
                iGlobal.Player.basicStatus.intelligence = iGlobal.Player.basicStatus.intelligence + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].intelligence / 4;
                iGlobal.Player.basicStatus.luck = iGlobal.Player.basicStatus.luck + iGlobal.Player.race.ageupList[iGlobal.Player.age - 10].luck / 4;
            }
            else {
                iGlobal.Player.basicStatus.hp = iGlobal.Player.basicStatus.hp + 1;
                iGlobal.Player.basicStatus.mp = iGlobal.Player.basicStatus.mp + 1;
            }
            iGlobal.Player.addAp(1);
            iGlobal.Player.xp = 0;
            // if (MainScene.xpBar) {
            // 	MainScene.xpBar.Value = 0;
            // 	MainScene.xpBar.Max = iGlobal.Player.getLevelExp();
            // }
            iGlobal.Player.updateInfoWindow();
            iGlobal.Player.updateXpBar();
            MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>升级了! 你现在是 Lv." + iGlobal.Player.lv + "!</font>");
            if (iGlobal.Player.age == 10) {
                iData.iPlayer.TitleList.updateTitleInfo("age10", iGlobal.Player.lv);
            }
            /**上传数据*/
            // if (iGlobal.Global.kongregate) {
            // 	iGlobal.Global.kongregate.stats.submit("CP", iGlobal.Player.combatPower);
            // 	iGlobal.Global.kongregate.stats.submit("STR", iGlobal.Player.str);
            // 	iGlobal.Global.kongregate.stats.submit("DEX", iGlobal.Player.dex);
            // 	iGlobal.Global.kongregate.stats.submit("INT", iGlobal.Player.intelligence);
            // 	iGlobal.Global.kongregate.stats.submit("WILL", iGlobal.Player.will);
            // 	iGlobal.Global.kongregate.stats.submit("LUCK", iGlobal.Player.luck);
            // }
        };
        Player.getLevelExp = function () {
            if (iGlobal.Player.lv >= 200) {
                return -1;
            }
            return iGlobal.Player.lv * iGlobal.Player.lv * ((iGlobal.Player.lv + 1) * (iGlobal.Player.lv + 1) - 13 * (iGlobal.Player.lv + 1) + 82);
        };
        Object.defineProperty(Player, "attack", {
            get: function () {
                var attact = 0;
                if (iGlobal.Player.attMin > iGlobal.Player.attMax) {
                    attact = iGlobal.Player.attMax + (iGlobal.Player.attMin - iGlobal.Player.attMax) * Tool.MyMath.balanceRandom(iGlobal.Player.balance);
                }
                else {
                    attact = iGlobal.Player.attMin + (iGlobal.Player.attMax - iGlobal.Player.attMin) * Tool.MyMath.balanceRandom(iGlobal.Player.balance);
                }
                return Math.round(attact);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "attMin", {
            get: function () {
                var category = null;
                var min = iGlobal.Player.basicStatus.attack.min + iGlobal.Player.skillStatus.attack.min + iGlobal.Player.equipStatus.attack.min + iGlobal.Player.str / 3;
                if (iGlobal.Player.leftHand) {
                    category = iGlobal.Player.leftHand.category;
                }
                else {
                    category = iData.iItem.WeaponCategory.MELEE;
                }
                if (category == iData.iItem.WeaponCategory.RANGED) {
                    min = min + iGlobal.Player.dex / 3;
                }
                min = iGlobal.Player.formula_title_stat(min, iData.iItem.Stat.ATTACK);
                return Math.round(min);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "attMax", {
            get: function () {
                var category = null;
                var max = iGlobal.Player.basicStatus.attack.max + iGlobal.Player.skillStatus.attack.max + iGlobal.Player.equipStatus.attack.max + iGlobal.Player.str / 2.5;
                if (iGlobal.Player.leftHand) {
                    category = iGlobal.Player.leftHand.category;
                }
                else {
                    category = iData.iItem.WeaponCategory.MELEE;
                }
                if (category == iData.iItem.WeaponCategory.RANGED) {
                    max = max + iGlobal.Player.dex / 2.5;
                }
                max = iGlobal.Player.formula_title_stat(max, iData.iItem.Stat.ATTACK);
                return Math.round(max);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "hp", {
            /**当前人物血量 */
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.hp), iData.iItem.Stat.hp);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "mp", {
            /**当前人物蓝量 */
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.mp), iData.iItem.Stat.mp);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "str", {
            /***力量 */
            get: function () {
                var str = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.str), iData.iItem.Stat.str);
                iData.iPlayer.TitleList.updateTitleInfo(iData.iItem.Stat.str, str);
                return str;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "dex", {
            /**敏捷 */
            get: function () {
                var dex = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.dex), iData.iItem.Stat.dex);
                iData.iPlayer.TitleList.updateTitleInfo(iData.iItem.Stat.dex, dex);
                return Math.round(dex);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "intelligence", {
            /***智力 */
            get: function () {
                var intelligence = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.intelligence), iData.iItem.Stat.intelligence);
                iData.iPlayer.TitleList.updateTitleInfo(iData.iItem.Stat.intelligence, intelligence);
                return Math.round(intelligence);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "will", {
            /***意志 */
            get: function () {
                var will = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.will), iData.iItem.Stat.will);
                iData.iPlayer.TitleList.updateTitleInfo(iData.iItem.Stat.will, will);
                return Math.round(will);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "luck", {
            /***幸运 */
            get: function () {
                var luck = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.luck), iData.iItem.Stat.luck);
                iData.iPlayer.TitleList.updateTitleInfo(iData.iItem.Stat.luck, luck);
                return Math.round(luck);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "defence", {
            /***防御 */
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.defence), iData.iItem.Stat.defence);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "protection", {
            /***护甲 */
            get: function () {
                return Math.round(iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.protection), iData.iItem.Stat.protection));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "balance", {
            /***平衡 */
            get: function () {
                var balance = iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.balance) + (iGlobal.Player.dex - 10) / 4, iData.iItem.Stat.balance);
                if (balance > 100) {
                    balance = 100;
                }
                return Math.round(balance);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "crit", {
            /***暴击 */
            get: function () {
                return Math.round(iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.crit) + iGlobal.Player.will / 5 + iGlobal.Player.luck / 5, iData.iItem.Stat.crit));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "crit_mul", {
            /***暴击率 */
            get: function () {
                return Math.round(iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.crit_mul) + 100, iData.iItem.Stat.crit_mul));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "spellChance", {
            /**法术释放几率 */
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.spellChance) + iGlobal.Player.intelligence / 20, iData.iItem.Stat.spellChance);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "protectionIgnore", {
            /**无视护甲 */
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.protectionIgnore), iData.iItem.Stat.protectionIgnore);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "protectionReduce", {
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.protectionReduce), iData.iItem.Stat.protectionReduce);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "magicDamage", {
            /***魔法伤害 */
            get: function () {
                return iGlobal.Player.formula_title_stat(iGlobal.Player.formula_StatAddUp(iData.iItem.Stat.magicDamage) + iGlobal.Player.intelligence / 20, iData.iItem.Stat.magicDamage);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "magicBalance", {
            /***魔法平衡 */
            get: function () {
                var balance = (iGlobal.Player.intelligence - 10) / 4 + 30;
                if (balance > 99) {
                    balance = 99;
                }
                return balance;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "basicStr", {
            get: function () {
                return iGlobal.Player.formula_BasicStatAddUp(iData.iItem.Stat.str);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "basicDex", {
            get: function () {
                return iGlobal.Player.formula_BasicStatAddUp(iData.iItem.Stat.dex);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "basicInt", {
            get: function () {
                return iGlobal.Player.formula_BasicStatAddUp(iData.iItem.Stat.intelligence);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "basicWill", {
            get: function () {
                return iGlobal.Player.formula_BasicStatAddUp(iData.iItem.Stat.will);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Player, "basicLuck", {
            get: function () {
                return iGlobal.Player.formula_BasicStatAddUp(iData.iItem.Stat.luck);
            },
            enumerable: true,
            configurable: true
        });
        /**叠加 */
        Player.formula_statAdd = function (b1, b2, n) {
            return b1[n] + b2[n];
        };
        Player.formula_StatAddUp = function (stat) {
            return iGlobal.Player.basicStatus[stat] + iGlobal.Player.skillStatus[stat] + iGlobal.Player.equipStatus[stat];
        };
        /***称号属性 */
        Player.formula_title_stat = function (value, name) {
            var length = 0;
            var i = 0;
            if (iGlobal.Player.title) {
                length = iGlobal.Player.title.statMulList.length;
                i = 0;
                while (i < length) {
                    if (iGlobal.Player.title.statMulList[i].name == name) {
                        value = value * iGlobal.Player.title.statMulList[i].mul;
                        value = value + iGlobal.Player.title.statMulList[i].add;
                        return value;
                    }
                    i++;
                }
            }
            return value;
        };
        Player.formula_BasicStatAddUp = function (name) {
            return iGlobal.Player.basicStatus[name] + iGlobal.Player.skillStatus[name];
        };
        Player.updateInfoWindow = function () {
            if (MainScene.playerInfoPanel) {
                MainScene.playerInfoPanel.update();
            }
        };
        Player.updatePetInfoWindow = function () {
            if (MainScene.petInfoPanel) {
                MainScene.petInfoPanel.update();
            }
        };
        Player.updateAllInfo = function () {
            iGlobal.Player.updateSkillInfo();
            iGlobal.Player.updateEquipInfo();
        };
        Player.updateSkillInfo = function () {
            var skillData = null;
            var lv = 0;
            var i = 0;
            iGlobal.Player.skillStatus = new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0);
            var length = iGlobal.Player.skillList.length;
            var si = 0;
            while (si < length) {
                skillData = iGlobal.Player.skillList[si].skillData;
                lv = iGlobal.Player.skillList[si].level;
                i = 0;
                while (i < skillData.statList[lv].length) {
                    iGlobal.Player.skillStatus[skillData.statList[lv][i].name] = iGlobal.Player.skillStatus[skillData.statList[lv][i].name] + skillData.statList[lv][i].value;
                    i++;
                }
                if (skillData.effectList && iGlobal.Player.leftHand) {
                    if (iGlobal.Player.leftHand.category == skillData.category) {
                        i = 0;
                        while (i < skillData.effectList[lv].length) {
                            if (skillData.effectList[lv][i].name == iData.iItem.Stat.attackMin) {
                                iGlobal.Player.skillStatus.attack.min = iGlobal.Player.skillStatus.attack.min + skillData.effectList[lv][i].value;
                            }
                            else if (skillData.effectList[lv][i].name == iData.iItem.Stat.attackMax) {
                                iGlobal.Player.skillStatus.attack.max = iGlobal.Player.skillStatus.attack.max + skillData.effectList[lv][i].value;
                            }
                            else {
                                iGlobal.Player.skillStatus[skillData.effectList[lv][i].name] = iGlobal.Player.skillStatus[skillData.effectList[lv][i].name] + skillData.effectList[lv][i].value;
                            }
                            i++;
                        }
                    }
                }
                si++;
            }
            iGlobal.Player.updateInfoWindow();
        };
        Player.updateEquipInfo = function () {
            var blength = 0;
            var stat = null;
            var j = 0;
            iGlobal.Player.equipStatus = new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0);
            var positions = ["leftHand", "rightHand", "feet", "head", "necklace", "ring", "body"];
            var i = 0;
            while (i < positions.length) {
                if (iGlobal.Player[positions[i]]) {
                    blength = iGlobal.Player[positions[i]].basicStat.length;
                    stat = iGlobal.Player[positions[i]].basicStat;
                    j = 0;
                    while (j < blength) {
                        if (stat[j].name == iData.iItem.Stat.attackMin) {
                            iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + stat[j].value;
                        }
                        else if (stat[j].name == iData.iItem.Stat.attackMax) {
                            iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + stat[j].value;
                        }
                        else if (stat[j].name == iData.iItem.Stat.ATTACK) {
                            iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + stat[j].value;
                            iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + stat[j].value;
                        }
                        else {
                            iGlobal.Player.equipStatus[stat[j].name] = iGlobal.Player.equipStatus[stat[j].name] + stat[j].value;
                        }
                        j++;
                    }
                    blength = iGlobal.Player[positions[i]].qualityStat.length;
                    stat = iGlobal.Player[positions[i]].qualityStat;
                    j = 0;
                    while (j < blength) {
                        if (stat[j].name == iData.iItem.Stat.attackMin) {
                            iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + stat[j].value;
                        }
                        else if (stat[j].name == iData.iItem.Stat.attackMax) {
                            iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + stat[j].value;
                        }
                        else if (stat[j].name == iData.iItem.Stat.ATTACK) {
                            iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + stat[j].value;
                            iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + stat[j].value;
                        }
                        else {
                            iGlobal.Player.equipStatus[stat[j].name] = iGlobal.Player.equipStatus[stat[j].name] + stat[j].value;
                        }
                        j++;
                    }
                    blength = iGlobal.Player[positions[i]].levelStat.length;
                    stat = iGlobal.Player[positions[i]].levelStat;
                    j = 0;
                    while (j < blength) {
                        if (stat[j].name == iData.iItem.Stat.attackMin) {
                            iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + stat[j].value;
                        }
                        else if (stat[j].name == iData.iItem.Stat.attackMax) {
                            iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + stat[j].value;
                        }
                        else if (stat[j].name == iData.iItem.Stat.ATTACK) {
                            iGlobal.Player.equipStatus.attack.min = iGlobal.Player.equipStatus.attack.min + stat[j].value;
                            iGlobal.Player.equipStatus.attack.max = iGlobal.Player.equipStatus.attack.max + stat[j].value;
                        }
                        else {
                            iGlobal.Player.equipStatus[stat[j].name] = iGlobal.Player.equipStatus[stat[j].name] + stat[j].value;
                        }
                        j++;
                    }
                }
                i++;
            }
            iGlobal.Player.updateInfoWindow();
            iGlobal.Player.updateEquipWindow();
        };
        Player.updateEquipWindow = function () {
            if (MainScene.otherPanel && MainScene.otherPanel.equipWindow) {
                MainScene.otherPanel.equipWindow.update();
            }
        };
        Player.updateBattleSkillWindow = function () {
            if (MainScene.battleSkillPanel) {
                MainScene.battleSkillPanel.update();
            }
        };
        Player.updateXpBar = function () {
            if (MainScene.playerInfoPanel) {
                MainScene.playerInfoPanel.upDateExp();
            }
        };
        Player.updateSkillPanel = function () {
            if (MainScene.otherPanel && MainScene.otherPanel.skillWindow) {
                MainScene.otherPanel.skillWindow.onUpdate();
            }
        };
        //手动保存
        Player.manuallySave = function () {
            var _loc4_ = 0;
            var _loc1_ = iGlobal.Player.playerName + "<>" + SaveScene.slot + "<>";
            var _loc2_ = "";
            _loc2_ = _loc2_ + "@BASIC:";
            var _loc3_ = ["lv", "age", "ap", "xp", "gold", "apCost", "caculate", "BAGMAX", "PETMAX"];
            _loc4_ = 0;
            while (_loc4_ < _loc3_.length) {
                _loc2_ = _loc2_ + (_loc3_[_loc4_] + "," + iGlobal.Player[_loc3_[_loc4_]] + ",");
                _loc4_++;
            }
            _loc2_ = _loc2_ + "@RACE:";
            _loc2_ = _loc2_ + iGlobal.Player.race.name;
            _loc3_ = ["head", "body", "feet", "necklace", "ring", "leftHand", "rightHand"];
            _loc2_ = _loc2_ + "@EQUIP:";
            _loc4_ = 0;
            while (_loc4_ < _loc3_.length) {
                if (iGlobal.Player[_loc3_[_loc4_]]) {
                    _loc2_ = _loc2_ + (_loc3_[_loc4_] + "," + iGlobal.Player[_loc3_[_loc4_]].save() + ",");
                }
                _loc4_++;
            }
            _loc2_ = _loc2_ + "@ITEM:";
            _loc4_ = 0;
            while (_loc4_ < iGlobal.Player.itemList.length) {
                _loc2_ = _loc2_ + (iGlobal.Player.itemList[_loc4_].save() + ",");
                _loc4_++;
            }
            _loc2_ = _loc2_ + "@SKILL:";
            _loc4_ = 0;
            while (_loc4_ < iGlobal.Player.skillList.length) {
                _loc2_ = _loc2_ + (iGlobal.Player.skillList[_loc4_].save() + ",");
                _loc4_++;
            }
            _loc2_ = _loc2_ + "@TITLE:";
            _loc4_ = 0;
            while (_loc4_ < iData.iPlayer.TitleList.list.length) {
                _loc2_ = _loc2_ + (iData.iPlayer.TitleList.list[_loc4_].save() + ",");
                _loc4_++;
            }
            _loc2_ = _loc2_ + "@OTHER:";
            _loc3_ = ["hp", "mp", "luck", "intelligence", "str", "dex", "will"];
            _loc4_ = 0;
            while (_loc4_ < _loc3_.length) {
                _loc2_ = _loc2_ + (_loc3_[_loc4_] + "," + iGlobal.Player.basicStatus[_loc3_[_loc4_]] + ",");
                _loc4_++;
            }
            _loc2_ = _loc2_ + "@GLOBAL:";
            _loc3_ = ["battle", "battleIntro", "money", "exp", "item", "item0", "item1", "item2", "item3", "item4", "sword", "axe", "bow", "crossbow", "sceptre", "staff", "dagger", "tome", "shield", "head_light", "head_medium", "head_heavy", "body_light", "body_medium", "body_heavy", "feet_light", "feet_medium", "feet_heavy", "ring", "necklace"];
            _loc2_ = _loc2_ + "toggle,";
            _loc4_ = 0;
            while (_loc4_ < _loc3_.length) {
                _loc2_ = _loc2_ + (_loc3_[_loc4_] + "#" + iGlobal.Global[_loc3_[_loc4_] + "_toggle"] + "#");
                _loc4_++;
            }
            _loc2_ = _loc2_ + "@SELECTION:";
            _loc2_ = _loc2_ + ("map," + iGlobal.Global.map.mapData.name + "#");
            if (iGlobal.Player.title) {
                _loc2_ = _loc2_ + ("title," + iGlobal.Player.title.name);
            }
            _loc2_ = _loc2_ + "@PET:";
            _loc4_ = 0;
            while (_loc4_ < iGlobal.Player.petList.length) {
                _loc2_ = _loc2_ + (iGlobal.Player.petList[_loc4_].save() + ",");
                _loc4_++;
            }
            _loc2_ = _loc2_ + "@EQUIPEDPET:";
            if (iGlobal.Player.pet) {
                _loc2_ = _loc2_ + iGlobal.Player.pet.save();
            }
            // var _loc5_:egret.ByteArray = new egret.ByteArray();
            // _loc5_.writeUTFBytes(_loc2_);
            // _loc5_.compress();
            // _loc1_ = _loc1_ + tool.Base64.Encode(_loc5_);
            // var _loc6_:flash.net.FileReference = <any>new FileReference();
            // _loc6_["save"](_loc1_,iPanel.iScene.SaveScene.slot);
            egret.localStorage.setItem(SaveScene.slot, _loc2_);
        };
        //手动读取
        Player.manualLoad = function (param1) {
            var _loc7_ = null;
            var _loc8_ = null;
            var _loc9_ = null;
            var _loc10_ = null;
            var _loc11_ = null;
            var _loc12_ = null;
            var _loc13_ = null;
            var _loc14_ = null;
            var _loc15_ = null;
            var _loc16_ = null;
            var _loc17_ = 0;
            var _loc18_ = null;
            var _loc19_ = null;
            var _loc20_ = 0;
            var _loc2_ = param1.split("<>");
            iGlobal.Player.playerName = _loc2_[0];
            SaveScene.slot = _loc2_[1];
            var _loc3_ = _loc2_[2];
            // var _loc3_: egret.ByteArray = tool.Base64.Decode(_loc2_[2]);
            // _loc3_.uncompress();
            var _loc4_ = _loc3_.toString();
            var _loc5_ = _loc4_.split("@");
            var _loc6_ = 0;
            while (_loc6_ < _loc5_.length) {
                _loc7_ = _loc5_[_loc6_].split(":");
                switch (_loc7_[0]) {
                    case "BASIC":
                        _loc8_ = _loc7_[1].split(",");
                        _loc17_ = (0);
                        while (_loc17_ < _loc8_.length) {
                            if (_loc8_[_loc17_] != "") {
                                iGlobal.Player[_loc8_[_loc17_]] = _loc8_[_loc17_ + 1];
                            }
                            _loc17_ = (_loc17_ + 2);
                        }
                        break;
                    case "RACE":
                        _loc17_ = (0);
                        while (_loc17_ < iData.RaceList.list.length) {
                            if (_loc7_[1] == "undeath") {
                                iGlobal.Player.race = iData.RaceList.UNDEATH;
                                break;
                            }
                            if (_loc7_[1] == iData.RaceList.list[_loc17_].name) {
                                iGlobal.Player.race = iData.RaceList.list[_loc17_];
                                break;
                            }
                            _loc17_++;
                        }
                        break;
                    case "EQUIP":
                        _loc9_ = _loc7_[1].split(",");
                        _loc17_ = (0);
                        while (_loc17_ < _loc9_.length) {
                            if (_loc9_[_loc17_] != "") {
                                iGlobal.Player[_loc9_[_loc17_]] = iData.iItem.Equipment.load(_loc9_[_loc17_ + 1]);
                            }
                            _loc17_ = (_loc17_ + 2);
                        }
                        break;
                    case "ITEM":
                        _loc10_ = _loc7_[1].split(",");
                        _loc17_ = (0);
                        while (_loc17_ < _loc10_.length) {
                            if (_loc10_[_loc17_] != "") {
                                iGlobal.Player.itemList.push(iData.iItem.Equipment.load(_loc10_[_loc17_]));
                            }
                            _loc17_++;
                        }
                        break;
                    case "SKILL":
                        _loc11_ = _loc7_[1].split(",");
                        _loc17_ = (0);
                        while (_loc17_ < _loc11_.length) {
                            if (_loc11_[_loc17_] != "") {
                                iGlobal.Player.skillList.push(iData.iSkill.Skill.load(_loc11_[_loc17_]));
                            }
                            _loc17_++;
                        }
                        break;
                    case "TITLE":
                        _loc12_ = _loc7_[1].split(",");
                        _loc17_ = (0);
                        while (_loc17_ < iData.iPlayer.TitleList.list.length) {
                            iData.iPlayer.TitleList.list[_loc17_].load(_loc12_[_loc17_]);
                            _loc17_++;
                        }
                        break;
                    case "OTHER":
                        _loc13_ = _loc7_[1].split(",");
                        iGlobal.Player.basicStatus = new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0);
                        _loc17_ = (0);
                        while (_loc17_ < _loc13_.length) {
                            if (_loc13_[_loc17_] != "") {
                                iGlobal.Player.basicStatus[_loc13_[_loc17_]] = _loc13_[_loc17_ + 1];
                            }
                            _loc17_ = (_loc17_ + 2);
                        }
                        break;
                    case "GLOBAL":
                        _loc14_ = _loc7_[1].split(",");
                        switch (_loc14_[0]) {
                            case "toggle":
                                _loc18_ = _loc14_[1].split("#");
                                _loc17_ = (0);
                                while (_loc17_ < _loc18_.length) {
                                    if (_loc18_[_loc17_] != "") {
                                        if (_loc18_[_loc17_ + 1] == "true") {
                                            iGlobal.Global[_loc18_[_loc17_] + "_toggle"] = true;
                                        }
                                        else {
                                            iGlobal.Global[_loc18_[_loc17_] + "_toggle"] = false;
                                        }
                                    }
                                    _loc17_ = (_loc17_ + 2);
                                }
                        }
                        break;
                    case "SELECTION":
                        _loc15_ = _loc7_[1].split("#");
                        _loc17_ = (0);
                        while (_loc17_ < _loc15_.length) {
                            _loc19_ = _loc15_[_loc17_].split(",");
                            switch (_loc19_[0]) {
                                case "map":
                                    _loc20_ = (0);
                                    while (_loc20_ < iData.iMap.MapList.list.length) {
                                        if (_loc19_[1] == iData.iMap.MapList.list[_loc20_].name) {
                                            iGlobal.Global.map = new iData.iMap.Map(iData.iMap.MapList.list[_loc20_]);
                                        }
                                        _loc20_++;
                                    }
                                    break;
                                case "title":
                                    _loc20_ = (0);
                                    while (_loc20_ < iData.iPlayer.TitleList.list.length) {
                                        if (_loc19_[1] == iData.iPlayer.TitleList.list[_loc20_].name) {
                                            iGlobal.Player.title = iData.iPlayer.TitleList.list[_loc20_];
                                        }
                                        _loc20_++;
                                    }
                            }
                            _loc17_++;
                        }
                        break;
                    case "PET":
                        _loc16_ = _loc7_[1].split(",");
                        _loc17_ = (0);
                        while (_loc17_ < _loc16_.length) {
                            if (_loc16_[_loc17_] != "") {
                                iGlobal.Player.petList.push(iData.iPet.Pet.load(_loc16_[_loc17_]));
                            }
                            _loc17_++;
                        }
                        break;
                    case "EQUIPEDPET":
                        if (_loc7_[1] != "") {
                            iGlobal.Player.pet = iData.iPet.Pet.load(_loc7_[1]);
                        }
                }
                _loc6_++;
            }
            if (!iGlobal.Player.basicStatus) {
                iGlobal.Player.caculateInitStat();
            }
            iGlobal.Player.updateAllInfo();
            iGlobal.Player.updateXpBar();
        };
        //自动保存
        Player.save = function () {
            var _loc6_ = (0);
            var _loc11_ = egret.localStorage.getItem(SaveScene.slot);
            var _loc1_ = JSON.parse(_loc11_);
            if (!_loc1_)
                _loc1_ = new Object();
            _loc1_["userName"] = iGlobal.Player.playerName;
            var _loc2_ = new Date();
            var _loc3_ = "[" + (_loc2_.getMonth() + 1) + "/" + _loc2_.getDate() + "/" + _loc2_.getHours() + ":" + _loc2_.getMinutes() + "]";
            _loc1_["time"] = _loc3_;
            var _loc4_ = "";
            _loc4_ = _loc4_ + "@BASIC:";
            var _loc5_ = ["lv", "age", "ap", "xp", "gold", "apCost", "caculate", "BAGMAX", "PETMAX"];
            _loc6_ = (0);
            while (_loc6_ < _loc5_.length) {
                _loc4_ = _loc4_ + (_loc5_[_loc6_] + "," + iGlobal.Player[_loc5_[_loc6_]] + ",");
                _loc6_++;
            }
            _loc4_ = _loc4_ + "@RACE:";
            _loc4_ = _loc4_ + iGlobal.Player.race.name;
            _loc5_ = ["head", "body", "feet", "necklace", "ring", "leftHand", "rightHand"];
            _loc4_ = _loc4_ + "@EQUIP:";
            _loc6_ = (0);
            while (_loc6_ < _loc5_.length) {
                if (iGlobal.Player[_loc5_[_loc6_]]) {
                    _loc4_ = _loc4_ + (_loc5_[_loc6_] + "," + (iGlobal.Player[_loc5_[_loc6_]]).save() + ",");
                }
                _loc6_++;
            }
            _loc4_ = _loc4_ + "@ITEM:";
            _loc6_ = (0);
            while (_loc6_ < iGlobal.Player.itemList.length) {
                _loc4_ = _loc4_ + (iGlobal.Player.itemList[_loc6_].save() + ",");
                _loc6_++;
            }
            _loc4_ = _loc4_ + "@SKILL:";
            _loc6_ = (0);
            while (_loc6_ < iGlobal.Player.skillList.length) {
                _loc4_ = _loc4_ + (iGlobal.Player.skillList[_loc6_].save() + ",");
                _loc6_++;
            }
            _loc4_ = _loc4_ + "@TITLE:";
            _loc6_ = (0);
            while (_loc6_ < iData.iPlayer.TitleList.list.length) {
                _loc4_ = _loc4_ + (iData.iPlayer.TitleList.list[_loc6_].save() + ",");
                _loc6_++;
            }
            _loc4_ = _loc4_ + "@OTHER:";
            _loc5_ = ["hp", "mp", "luck", "intelligence", "str", "dex", "will"];
            _loc6_ = (0);
            while (_loc6_ < _loc5_.length) {
                _loc4_ = _loc4_ + (_loc5_[_loc6_] + "," + iGlobal.Player.basicStatus[_loc5_[_loc6_]] + ",");
                _loc6_++;
            }
            _loc4_ = _loc4_ + "@GLOBAL:";
            _loc5_ = ["battle", "battleIntro", "money", "exp", "item", "item0", "item1", "item2", "item3", "item4", "sword", "axe", "bow", "crossbow", "sceptre", "staff", "dagger", "tome", "shield", "head_light", "head_medium", "head_heavy", "body_light", "body_medium", "body_heavy", "feet_light", "feet_medium", "feet_heavy", "ring", "necklace", "sound"];
            _loc4_ = _loc4_ + "toggle,";
            _loc6_ = (0);
            while (_loc6_ < _loc5_.length) {
                _loc4_ = _loc4_ + (_loc5_[_loc6_] + "#" + iGlobal.Global[_loc5_[_loc6_] + "_toggle"] + "#");
                _loc6_++;
            }
            _loc4_ = _loc4_ + "@SELECTION:";
            _loc4_ = _loc4_ + ("map," + iGlobal.Global.map.mapData.name + "#");
            if (iGlobal.Player.title) {
                _loc4_ = _loc4_ + ("title," + iGlobal.Player.title.name);
            }
            _loc4_ = _loc4_ + "@PET:";
            _loc6_ = (0);
            while (_loc6_ < iGlobal.Player.petList.length) {
                _loc4_ = _loc4_ + (iGlobal.Player.petList[_loc6_].save() + ",");
                _loc6_++;
            }
            _loc4_ = _loc4_ + "@EQUIPEDPET:";
            if (iGlobal.Player.pet) {
                _loc4_ = _loc4_ + iGlobal.Player.pet.save();
            }
            // var _loc7_: egret.ByteArray = new egret.ByteArray();
            // _loc7_.writeUTFBytes(_loc4_);
            // _loc7_.compress();
            // _loc1_["info"] = Tool.Base64.Encode(_loc4_);
            _loc1_["info"] = _loc4_;
            // _loc1_.flush();
            egret.localStorage.setItem(SaveScene.slot, JSON.stringify(_loc1_));
        };
        //自动读取
        Player.load = function () {
            var _loc6_ = null;
            var _loc7_ = null;
            var _loc8_ = null;
            var _loc9_ = null;
            var _loc10_ = null;
            var _loc11_ = null;
            var _loc12_ = null;
            var _loc13_ = null;
            var _loc14_ = null;
            var _loc15_ = null;
            var _loc16_ = 0;
            var _loc17_ = null;
            var _loc18_ = null;
            var _loc19_ = 0;
            var _loc1_ = egret.localStorage.getItem(SaveScene.slot);
            _loc1_ = JSON.parse(_loc1_);
            iGlobal.Player.playerName = _loc1_["userName"];
            var _loc2_ = _loc1_["info"];
            // 	_loc2_.uncompress();
            var _loc3_ = _loc2_.toString();
            var _loc4_ = _loc3_.split("@");
            var _loc5_ = 0;
            while (_loc5_ < _loc4_.length) {
                _loc6_ = _loc4_[_loc5_].split(":");
                switch (_loc6_[0]) {
                    case "BASIC":
                        _loc7_ = _loc6_[1].split(",");
                        _loc16_ = 0;
                        while (_loc16_ < _loc7_.length) {
                            if (_loc7_[_loc16_] != "") {
                                iGlobal.Player[_loc7_[_loc16_]] = parseInt(_loc7_[_loc16_ + 1]);
                            }
                            _loc16_ = _loc16_ + 2;
                        }
                        break;
                    case "RACE":
                        _loc16_ = 0;
                        while (_loc16_ < iData.RaceList.list.length) {
                            if (_loc6_[1] == "undeath") {
                                iGlobal.Player.race = iData.RaceList.UNDEATH;
                                break;
                            }
                            if (_loc6_[1] == iData.RaceList.list[_loc16_].name) {
                                iGlobal.Player.race = iData.RaceList.list[_loc16_];
                                break;
                            }
                            _loc16_++;
                        }
                        break;
                    case "EQUIP":
                        _loc8_ = _loc6_[1].split(",");
                        _loc16_ = 0;
                        while (_loc16_ < _loc8_.length) {
                            if (_loc8_[_loc16_] != "") {
                                iGlobal.Player[_loc8_[_loc16_]] = iData.iItem.Equipment.load(_loc8_[_loc16_ + 1]);
                            }
                            _loc16_ = _loc16_ + 2;
                        }
                        break;
                    case "ITEM":
                        _loc9_ = _loc6_[1].split(",");
                        _loc16_ = 0;
                        while (_loc16_ < _loc9_.length) {
                            if (_loc9_[_loc16_] != "") {
                                iGlobal.Player.itemList.push(iData.iItem.Equipment.load(_loc9_[_loc16_]));
                            }
                            _loc16_++;
                        }
                        break;
                    case "SKILL":
                        _loc10_ = _loc6_[1].split(",");
                        _loc16_ = 0;
                        while (_loc16_ < _loc10_.length) {
                            if (_loc10_[_loc16_] != "") {
                                iGlobal.Player.skillList.push(iData.iSkill.Skill.load(_loc10_[_loc16_]));
                            }
                            _loc16_++;
                        }
                        break;
                    case "TITLE":
                        _loc11_ = _loc6_[1].split(",");
                        _loc16_ = 0;
                        while (_loc16_ < iData.iPlayer.TitleList.list.length) {
                            iData.iPlayer.TitleList.list[_loc16_].load(_loc11_[_loc16_]);
                            _loc16_++;
                        }
                        break;
                    case "OTHER":
                        _loc12_ = _loc6_[1].split(",");
                        iGlobal.Player.basicStatus = new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0);
                        _loc16_ = 0;
                        while (_loc16_ < _loc12_.length) {
                            if (_loc12_[_loc16_] != "") {
                                iGlobal.Player.basicStatus[_loc12_[_loc16_]] = parseInt(_loc12_[_loc16_ + 1]);
                            }
                            _loc16_ = _loc16_ + 2;
                        }
                        break;
                    case "GLOBAL":
                        _loc13_ = _loc6_[1].split(",");
                        switch (_loc13_[0]) {
                            case "toggle":
                                _loc17_ = _loc13_[1].split("#");
                                _loc16_ = 0;
                                while (_loc16_ < _loc17_.length) {
                                    if (_loc17_[_loc16_] != "") {
                                        if (_loc17_[_loc16_ + 1] == "true") {
                                            iGlobal.Global[_loc17_[_loc16_] + "_toggle"] = true;
                                        }
                                        else {
                                            iGlobal.Global[_loc17_[_loc16_] + "_toggle"] = false;
                                        }
                                    }
                                    _loc16_ = _loc16_ + 2;
                                }
                        }
                        break;
                    case "SELECTION":
                        _loc14_ = _loc6_[1].split("#");
                        _loc16_ = 0;
                        while (_loc16_ < _loc14_.length) {
                            _loc18_ = _loc14_[_loc16_].split(",");
                            switch (_loc18_[0]) {
                                case "map":
                                    _loc19_ = 0;
                                    while (_loc19_ < iData.iMap.MapList.list.length) {
                                        if (_loc18_[1] == iData.iMap.MapList.list[_loc19_].name) {
                                            iGlobal.Global.map = new iData.iMap.Map(iData.iMap.MapList.list[_loc19_]);
                                        }
                                        _loc19_++;
                                    }
                                    break;
                                case "title":
                                    _loc19_ = 0;
                                    while (_loc19_ < iData.iPlayer.TitleList.list.length) {
                                        if (_loc18_[1] == iData.iPlayer.TitleList.list[_loc19_].name) {
                                            iGlobal.Player.title = iData.iPlayer.TitleList.list[_loc19_];
                                        }
                                        _loc19_++;
                                    }
                            }
                            _loc16_++;
                        }
                        break;
                    case "PET":
                        _loc15_ = _loc6_[1].split(",");
                        _loc16_ = 0;
                        while (_loc16_ < _loc15_.length) {
                            if (_loc15_[_loc16_] != "") {
                                iGlobal.Player.petList.push(iData.iPet.Pet.load(_loc15_[_loc16_]));
                            }
                            _loc16_++;
                        }
                        break;
                    case "EQUIPEDPET":
                        if (_loc6_[1] != "") {
                            iGlobal.Player.pet = iData.iPet.Pet.load(_loc6_[1]);
                        }
                }
                _loc5_++;
            }
            if (!iGlobal.Player.basicStatus) {
                iGlobal.Player.caculateInitStat();
            }
            iGlobal.Player.updateAllInfo();
            iGlobal.Player.updateXpBar();
        };
        Player.lv = 0;
        Player.age = 0;
        Player.ap = 0;
        Player.gold = 0;
        Player.xp = 0;
        /***ap 消耗 */
        Player.apCost = 0;
        Player.storeLv = 0;
        return Player;
    }());
    iGlobal.Player = Player;
    __reflect(Player.prototype, "iGlobal.Player");
})(iGlobal || (iGlobal = {}));
iGlobal.Player.BAGMAX = 50;
iGlobal.Player.PETMAX = 10;
iGlobal.Player.caculate = 0;
iGlobal.Player.playerName = "sowhat";
iGlobal.Player.skillStatus = new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0);
iGlobal.Player.equipStatus = new iData.BasicStatus(0, 0, 0, 0, 0, 0, 0);
iGlobal.Player.skillList = new Array();
iGlobal.Player.equipSkillList = new Array();
iGlobal.Player.itemList = new Array();
iGlobal.Player.titleList = new Array();
iGlobal.Player.petList = new Array();
