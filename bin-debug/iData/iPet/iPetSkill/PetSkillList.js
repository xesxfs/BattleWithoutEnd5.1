var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iPet;
    (function (iPet) {
        var iPetSkill;
        (function (iPetSkill) {
            var PetSkillList = (function () {
                function PetSkillList() {
                }
                PetSkillList.des_counterattack = function (petSkill) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(petSkill);
                    var _loc3_ = "当受伤时," + _loc2_[0] + "%的机会反击,反击伤害为宠物正常伤害的" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[1]) + "%";
                    return _loc3_;
                };
                PetSkillList.des_injury_resile = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "当受伤时," + _loc2_[0] + "%的机会反震,反震伤害为所受伤害的" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[1]) + "%";
                    return _loc3_;
                };
                PetSkillList.des_dodge = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "%几率回避伤害";
                    return _loc3_;
                };
                PetSkillList.des_taunt = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "吸引怪兽注意力,强制他攻击自己,降低所受伤害的" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "%";
                    return _loc3_;
                };
                PetSkillList.des_aggressive = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "增加宠物的攻击力 " + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "*等级";
                    return _loc3_;
                };
                PetSkillList.des_defensive = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "增加宠物防御力 " + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "*等级";
                    return _loc3_;
                };
                PetSkillList.des_protective = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "增加宠物护甲 " + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "*等级";
                    return _loc3_;
                };
                PetSkillList.des_strong = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "增加宠物Hp " + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "*等级";
                    return _loc3_;
                };
                PetSkillList.des_wisdom = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "增加宠物Mp " + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "*等级";
                    return _loc3_;
                };
                PetSkillList.des_wise = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "增加宠物魔法攻击 " + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "*等级";
                    return _loc3_;
                };
                PetSkillList.des_slayer = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "增加宠物暴击率 " + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "%, 暴击倍数*2";
                    return _loc3_;
                };
                PetSkillList.des_life_drain = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "当宠物造成物理伤害,回复宠物生命. 回复造成伤害的" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "%";
                    return _loc3_;
                };
                PetSkillList.des_good_or_evil = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "当造成物理伤害," + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "%机会造成两倍伤害," + iData.iPet.iPetSkill.PetSkillList.yellowText(100 - _loc2_[0] + "") + "%机会为敌方回复生命";
                    return _loc3_;
                };
                PetSkillList.des_ice_spear = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "消耗" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[3]) + "魔法, 造成" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "+" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[1]) + "*等级的伤害.<br/> 附加效果: 冰冻(使敌方" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[2]) + "回合无法行动";
                    if (param1.level) {
                        _loc3_ = _loc3_ + ("," + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[4]) + "%几率冰冻" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[5]) + "回合");
                    }
                    _loc3_ = _loc3_ + ")";
                    return _loc3_;
                };
                PetSkillList.behave_ice_spear = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    if (MainScene.battle.petMp < _loc2_[3]) {
                        return false;
                    }
                    MainScene.battle.petMp = MainScene.battle.petMp - _loc2_[3];
                    var _loc3_ = iData.iPet.iPetSkill.PetSkillList.getCritMul();
                    var _loc4_ = (_loc2_[0] + _loc2_[1] * iData.iPet.iPetSkill.PetSkillList.pet.level) * iData.iPet.iPetSkill.PetSkillList.pet.magicatt / 100 * iData.iPet.iPetSkill.PetSkillList.monsterPro;
                    if (_loc4_ < 1) {
                        _loc4_ = 1;
                    }
                    MainScene.battle.monsterHp = MainScene.battle.monsterHp - _loc4_;
                    if (_loc2_.length > 5) {
                        if (Math.random() < 0.1) {
                            iData.iPet.iPetSkill.PetSkillList.monster.addBuff(new iData.iSkill.iBuff.BuffFrozen(_loc2_[5]));
                        }
                    }
                    else {
                        iData.iPet.iPetSkill.PetSkillList.monster.addBuff(new iData.iSkill.iBuff.BuffFrozen(_loc2_[2]));
                    }
                    iData.iPet.iPetSkill.PetSkillList.traceAttackInfo(param1.getRealName(), _loc4_, _loc3_);
                    return true;
                };
                PetSkillList.des_fireball = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "消耗" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[2]) + "魔法, 造成" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "+" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[1]) + "*等级的伤害.<br/> 附加效果: 灼伤(造成敌人" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[3]) + "*等级的伤害每回合,可叠加)";
                    return _loc3_;
                };
                PetSkillList.behave_fireball = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    if (MainScene.battle.petMp < _loc2_[2]) {
                        return false;
                    }
                    MainScene.battle.petMp = MainScene.battle.petMp - _loc2_[2];
                    var _loc3_ = iData.iPet.iPetSkill.PetSkillList.getCritMul();
                    var _loc4_ = (_loc2_[0] + _loc2_[1] * iData.iPet.iPetSkill.PetSkillList.pet.level) * iData.iPet.iPetSkill.PetSkillList.pet.magicatt / 100 * iData.iPet.iPetSkill.PetSkillList.monsterPro;
                    if (_loc4_ < 1) {
                        _loc4_ = 1;
                    }
                    MainScene.battle.monsterHp = MainScene.battle.monsterHp - _loc4_;
                    iData.iPet.iPetSkill.PetSkillList.monster.addBuff(new iData.iSkill.iBuff.BuffBurn(_loc2_[3] * iData.iPet.iPetSkill.PetSkillList.pet.level * iData.iPet.iPetSkill.PetSkillList.pet.magicatt / 100));
                    iData.iPet.iPetSkill.PetSkillList.traceAttackInfo(param1.getRealName(), _loc4_, _loc3_);
                    return true;
                };
                PetSkillList.des_thunder = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "消耗" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[4]) + "魔法, 造成" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "+" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[1]) + "*等级的伤害.<br/> 附加效果: 破甲(减少敌方" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[2]) + "+" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[3]) + "*等级的护甲,可叠加)";
                    return _loc3_;
                };
                PetSkillList.behave_thunder = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    if (MainScene.battle.petMp < _loc2_[4]) {
                        return false;
                    }
                    MainScene.battle.petMp = MainScene.battle.petMp - _loc2_[4];
                    var _loc3_ = iData.iPet.iPetSkill.PetSkillList.getCritMul();
                    var _loc4_ = (_loc2_[0] + _loc2_[1] * iData.iPet.iPetSkill.PetSkillList.pet.level) * iData.iPet.iPetSkill.PetSkillList.pet.magicatt / 100 * iData.iPet.iPetSkill.PetSkillList.monsterPro;
                    if (_loc4_ < 1) {
                        _loc4_ = 1;
                    }
                    MainScene.battle.monsterHp = MainScene.battle.monsterHp - _loc4_;
                    iData.iPet.iPetSkill.PetSkillList.monster.addBuff(new iData.iSkill.iBuff.BuffCorrosion(_loc2_[2] + _loc2_[3] * iData.iPet.iPetSkill.PetSkillList.pet.level));
                    iData.iPet.iPetSkill.PetSkillList.traceAttackInfo(param1.getRealName(), _loc4_, _loc3_);
                    return true;
                };
                PetSkillList.des_doubleHit = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "当普通攻击时,有" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "%的机会再次攻击";
                    return _loc3_;
                };
                PetSkillList.des_meditation = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "每回合,回复自身和玩家" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "*等级的Mp";
                    return _loc3_;
                };
                PetSkillList.des_heal = function (param1) {
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.getSetArray(param1);
                    var _loc3_ = "每回合,回复自身和玩家" + iData.iPet.iPetSkill.PetSkillList.yellowText(_loc2_[0]) + "*等级的Hp";
                    return _loc3_;
                };
                PetSkillList.getSetArray = function (param1) {
                    var setArray = null;
                    if (param1.level) {
                        setArray = param1.skillData.setList[1];
                    }
                    else {
                        setArray = param1.skillData.setList[0];
                    }
                    return setArray;
                };
                PetSkillList.yellowText = function (param1) {
                    return "<font color=\'#ff7100\'>" + param1 + "</font>";
                };
                PetSkillList.traceAttackInfo = function (param1, param2, param3) {
                    param2 = param2;
                    if (param3 > 1) {
                        MainScene.allInfoPanel.addText("你的宠物使用了<font color=\'#ff4040\'>" + param1 + "</font>,对" + iData.iPet.iPetSkill.PetSkillList.monster.nameHtml + "造成了<font color=\'#ff4040\' size=\'20\'> " + param2 + "!</font>伤害.", iGlobal.Global.battle);
                    }
                    else {
                        MainScene.allInfoPanel.addText("你的宠物使用了<font color=\'#ff4040\'>" + param1 + "</font>,对" + iData.iPet.iPetSkill.PetSkillList.monster.nameHtml + "造成了<font color=\'#ff4040\'> " + param2 + "</font>伤害.", iGlobal.Global.battle);
                    }
                };
                Object.defineProperty(PetSkillList, "pet", {
                    get: function () {
                        return MainScene.battle.pet;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PetSkillList, "monster", {
                    get: function () {
                        return MainScene.battle.monster;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PetSkillList, "CR", {
                    get: function () {
                        return MainScene.battle.CR;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(PetSkillList, "monsterPro", {
                    get: function () {
                        return 1 - iData.iPet.iPetSkill.PetSkillList.caculateProtection(iData.iPet.iPetSkill.PetSkillList.monster.protection);
                    },
                    enumerable: true,
                    configurable: true
                });
                PetSkillList.caculateProtection = function (param1) {
                    if (param1 >= 0) {
                        return 0.06 * param1 / (1 + 0.06 * param1);
                    }
                    if (param1 < -1000) {
                        return -1;
                    }
                    return -(1 - Math.pow(0.94, -param1));
                };
                PetSkillList.getCritMul = function (param1) {
                    if (param1 === void 0) { param1 = 0; }
                    var _loc2_ = iData.iPet.iPetSkill.PetSkillList.pet.cri - iData.iPet.iPetSkill.PetSkillList.monster.protection * 2;
                    if (_loc2_ < 0 && param1 > 0) {
                        _loc2_ = param1;
                    }
                    else {
                        _loc2_ = _loc2_ + param1;
                    }
                    if (_loc2_ > iData.iPet.iPetSkill.PetSkillList.CR) {
                        _loc2_ = iData.iPet.iPetSkill.PetSkillList.CR;
                    }
                    var _loc3_ = 1;
                    if (Math.random() * 100 < _loc2_) {
                        _loc3_ = iData.iPet.iPetSkill.PetSkillList.pet.crimul / 100;
                    }
                    return _loc3_;
                };
                return PetSkillList;
            }());
            iPetSkill.PetSkillList = PetSkillList;
            __reflect(PetSkillList.prototype, "iData.iPet.iPetSkill.PetSkillList");
        })(iPetSkill = iPet.iPetSkill || (iPet.iPetSkill = {}));
    })(iPet = iData.iPet || (iData.iPet = {}));
})(iData || (iData = {}));
//这里-这里
iData.iPet.iPetSkill.PetSkillList.counterattack = new iData.iPet.iPetSkill.DefencePetSkillData("Counterattack", "反击", [[30, 50], [30, 100]], null, iData.iPet.iPetSkill.PetSkillList.des_counterattack);
iData.iPet.iPetSkill.PetSkillList.injury_resile = new iData.iPet.iPetSkill.DefencePetSkillData("Injury Resile", "反震", [[30, 25], [30, 50]], null, iData.iPet.iPetSkill.PetSkillList.des_injury_resile);
iData.iPet.iPetSkill.PetSkillList.dodge = new iData.iPet.iPetSkill.DefencePetSkillData("Dodge", "闪避", [[15], [20]], null, iData.iPet.iPetSkill.PetSkillList.des_dodge);
iData.iPet.iPetSkill.PetSkillList.taunt = new iData.iPet.iPetSkill.DefencePetSkillData("Taunt", "嘲讽", [[10], [20]], null, iData.iPet.iPetSkill.PetSkillList.des_taunt);
iData.iPet.iPetSkill.PetSkillList.aggressive = new iData.iPet.iPetSkill.PassivePetSkillData("Aggressive", "血性", [[5], [7.5]], null, iData.iPet.iPetSkill.PetSkillList.des_aggressive);
iData.iPet.iPetSkill.PetSkillList.defensive = new iData.iPet.iPetSkill.PassivePetSkillData("Defensive", "硬化", [[5], [7.5]], null, iData.iPet.iPetSkill.PetSkillList.des_defensive);
iData.iPet.iPetSkill.PetSkillList.protective = new iData.iPet.iPetSkill.PassivePetSkillData("Protective", "守护", [[2], [2.5]], null, iData.iPet.iPetSkill.PetSkillList.des_protective);
iData.iPet.iPetSkill.PetSkillList.strong = new iData.iPet.iPetSkill.PassivePetSkillData("Strong", "强力", [[10], [15]], null, iData.iPet.iPetSkill.PetSkillList.des_strong);
iData.iPet.iPetSkill.PetSkillList.wisdom = new iData.iPet.iPetSkill.PassivePetSkillData("Wisdom", "智慧", [[5], [7.5]], null, iData.iPet.iPetSkill.PetSkillList.des_wisdom);
iData.iPet.iPetSkill.PetSkillList.wise = new iData.iPet.iPetSkill.PassivePetSkillData("Wise", "聪颖", [[1], [1.5]], null, iData.iPet.iPetSkill.PetSkillList.des_wise);
iData.iPet.iPetSkill.PetSkillList.slayer = new iData.iPet.iPetSkill.PassivePetSkillData("Slayer", "必杀", [[10, 2], [20, 2]], null, iData.iPet.iPetSkill.PetSkillList.des_slayer);
iData.iPet.iPetSkill.PetSkillList.life_drain = new iData.iPet.iPetSkill.PassivePetSkillData("Life Drain", "吸血", [[20], [30]], null, iData.iPet.iPetSkill.PetSkillList.des_life_drain);
iData.iPet.iPetSkill.PetSkillList.good_or_evil = new iData.iPet.iPetSkill.PassivePetSkillData("Good or Evil", "善恶有报", [[50], [60]], null, iData.iPet.iPetSkill.PetSkillList.des_good_or_evil);
iData.iPet.iPetSkill.PetSkillList.meditation = new iData.iPet.iPetSkill.PassivePetSkillData("Meditation", "冥思", [[0.15, 10], [0.25, 15]], null, iData.iPet.iPetSkill.PetSkillList.des_meditation);
iData.iPet.iPetSkill.PetSkillList.heal = new iData.iPet.iPetSkill.PassivePetSkillData("Heal", "治愈", [[0.3, 10], [0.5, 15]], null, iData.iPet.iPetSkill.PetSkillList.des_heal);
iData.iPet.iPetSkill.PetSkillList.double_hit = new iData.iPet.iPetSkill.PassivePetSkillData("Double hit", "连击", [[45], [55]], null, iData.iPet.iPetSkill.PetSkillList.des_doubleHit);
iData.iPet.iPetSkill.PetSkillList.ice_spear = new iData.iPet.iPetSkill.AttackPetSkillData("Ice Spear", "冰刃", [[5, 1.5, 1, 25], [7, 2, 1, 35, 10, 2]], iData.iPet.iPetSkill.PetSkillList.behave_ice_spear, iData.iPet.iPetSkill.PetSkillList.des_ice_spear);
iData.iPet.iPetSkill.PetSkillList.fireball = new iData.iPet.iPetSkill.AttackPetSkillData("Fireball", "火球", [[7, 2, 30, 1], [10, 2.5, 40, 1.25]], iData.iPet.iPetSkill.PetSkillList.behave_fireball, iData.iPet.iPetSkill.PetSkillList.des_fireball);
iData.iPet.iPetSkill.PetSkillList.thunder = new iData.iPet.iPetSkill.AttackPetSkillData("Thunder", "雷击", [[10, 2.5, 0.025, 1, 35], [13, 3, 0.03, 1.25, 45]], iData.iPet.iPetSkill.PetSkillList.behave_thunder, iData.iPet.iPetSkill.PetSkillList.des_thunder);
iData.iPet.iPetSkill.PetSkillList.list = [iData.iPet.iPetSkill.PetSkillList.counterattack, iData.iPet.iPetSkill.PetSkillList.injury_resile, iData.iPet.iPetSkill.PetSkillList.dodge, iData.iPet.iPetSkill.PetSkillList.taunt, iData.iPet.iPetSkill.PetSkillList.aggressive, iData.iPet.iPetSkill.PetSkillList.defensive, iData.iPet.iPetSkill.PetSkillList.strong, iData.iPet.iPetSkill.PetSkillList.wisdom, iData.iPet.iPetSkill.PetSkillList.wise, iData.iPet.iPetSkill.PetSkillList.slayer, iData.iPet.iPetSkill.PetSkillList.life_drain, iData.iPet.iPetSkill.PetSkillList.good_or_evil, iData.iPet.iPetSkill.PetSkillList.ice_spear, iData.iPet.iPetSkill.PetSkillList.fireball, iData.iPet.iPetSkill.PetSkillList.thunder, iData.iPet.iPetSkill.PetSkillList.double_hit, iData.iPet.iPetSkill.PetSkillList.meditation, iData.iPet.iPetSkill.PetSkillList.heal];
