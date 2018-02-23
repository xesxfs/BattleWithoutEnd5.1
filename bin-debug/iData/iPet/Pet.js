var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iPet;
    (function (iPet) {
        var Pet = (function () {
            function Pet(petData, param2) {
                this._level = 0;
                this._exp = 0;
                this.startStat = iData.iPet.PetStats.generatePetStats(petData.type.startMin, petData.type.startRange, param2);
                this.startStat.balance = 30 + Math.random() * 60;
                this.startStat.cri = 10 + Math.random() * 30;
                this.startStat.criMul = 130 + Math.random() * 70;
                this.growStat = iData.iPet.PetStats.generatePetStats(petData.type.growMin, petData.type.growRange, param2);
                this.currentStat = new iData.iPet.PetStats(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                var i = 0;
                while (i < iData.iPet.PetStats.list.length) {
                    this.currentStat[iData.iPet.PetStats.list[i]] = this.startStat[iData.iPet.PetStats.list[i]];
                    i++;
                }
                this.generateSkill();
                this.level = 1;
                this._name = petData.name;
                this.type = petData.type.type;
                this.mc_name = petData.mc;
                this.exp = 0;
                this.realName = petData.realName;
            }
            Pet.load = function (petStr) {
                var pet = null;
                var i = 0;
                var strs = null;
                var strs2 = petStr.split("#");
                i = 0;
                while (i < iData.iPet.PetDataList.list.length) {
                    if (strs2[0] == iData.iPet.PetDataList.list[i].name) {
                        pet = new iData.iPet.Pet(iData.iPet.PetDataList.list[i], 1);
                        break;
                    }
                    i++;
                }
                pet.exp = strs2[2];
                pet.startStat = iData.iPet.PetStats.load(strs2[3]);
                pet.growStat = iData.iPet.PetStats.load(strs2[4]);
                pet.skillList = new Array();
                if (strs2.length > 5) {
                    strs = strs2[5].split("^");
                    i = 0;
                    while (i < strs.length) {
                        if (strs[i] != "") {
                            pet.skillList.push(iData.iPet.iPetSkill.PetSkill.load(strs[i]));
                        }
                        i++;
                    }
                }
                pet.setLevel(strs2[1]);
                return pet;
            };
            Pet.prototype.generateSkill = function () {
                var skillCount = 0;
                var idx = 0;
                this.skillList = new Array();
                var random = Math.random();
                if (random < 0.4) {
                    skillCount = 0;
                }
                else if (random < 0.6) {
                    skillCount = 1;
                }
                else if (random < 0.75) {
                    skillCount = 2;
                }
                else if (random < 0.9) {
                    skillCount = 3;
                }
                else {
                    skillCount = 4;
                }
                var length = iData.iPet.iPetSkill.PetSkillList.list.length;
                var i = 0;
                while (i < skillCount) {
                    do {
                        idx = Math.floor(Math.random() * length);
                    } while (!this.addSkill(iData.iPet.iPetSkill.PetSkillList.list[idx]));
                    i++;
                }
            };
            Pet.prototype.addSkill = function (petSkillData) {
                if (this.skillList.length >= 4) {
                    return false;
                }
                var i = 0;
                while (i < this.skillList.length) {
                    if (petSkillData.name == this.skillList[i].skillData.name) {
                        return false;
                    }
                    i++;
                }
                this.skillList.push(new iData.iPet.iPetSkill.PetSkill(petSkillData));
                return true;
            };
            Pet.prototype.getAttackSkill = function () {
                var skillList = new Array();
                var i = 0;
                while (i < this.skillList.length) {
                    if (this.skillList[i].skillData instanceof iData.iPet.iPetSkill.AttackPetSkillData) {
                        skillList.push(this.skillList[i]);
                    }
                    i++;
                }
                return skillList;
            };
            Pet.prototype.addExp = function (exp) {
                if (this.getLevelExp() < 0) {
                    return;
                }
                if (this.level - iGlobal.Player.lv > 5) {
                    return;
                }
                this.exp = this.exp + exp;
                MainScene.allInfoPanel.addText("你的宠物获得了<font color=\'#4a60d7\'>" + exp + "</font>经验.", iGlobal.Global.exp);
                if (this.exp > this.getLevelExp()) {
                    this.levelUp();
                }
            };
            Pet.prototype.levelUp = function () {
                var length = 0;
                var idx = 0;
                this.level++;
                this.exp = 0;
                var i = 0;
                while (i < iData.iPet.PetStats.list.length) {
                    this.currentStat[iData.iPet.PetStats.list[i]] = this.currentStat[iData.iPet.PetStats.list[i]] + this.growStat[iData.iPet.PetStats.list[i]];
                    i++;
                }
                MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>你的宠物升级了!你的宠物达到了Lv." + this.level + "!</font>");
                if (Math.random() * 100 < 1 - this.level * 0.01) {
                    length = iData.iPet.iPetSkill.PetSkillList.list.length;
                    idx = Math.floor(Math.random() * length);
                    if (this.addSkill(iData.iPet.iPetSkill.PetSkillList.list[idx])) {
                        MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>你的宠物学会了" + iData.iPet.iPetSkill.PetSkillList.list[idx].name + "!</font>");
                    }
                }
            };
            Pet.prototype.setLevel = function (level) {
                if (level < 1) {
                    level = 1;
                }
                if (level > 100) {
                    level = 100;
                }
                this.level = level;
                var i = 0;
                while (i < iData.iPet.PetStats.list.length) {
                    this.currentStat[iData.iPet.PetStats.list[i]] = this.startStat[iData.iPet.PetStats.list[i]] + this.growStat[iData.iPet.PetStats.list[i]] * (this.level - 1);
                    i++;
                }
            };
            Pet.prototype.getLevelExp = function () {
                if (this.level > 100) {
                    return -1;
                }
                return this.level * this.level * ((this.level + 1) * (this.level + 1) - 13 * (this.level + 1) + 82);
            };
            Object.defineProperty(Pet.prototype, "level", {
                get: function () {
                    return Tool.MyMath.decryptInt(this._level);
                },
                set: function (level) {
                    this._level = Tool.MyMath.encryptInt(level);
                    if (MainScene.petInfoPanel) {
                        MainScene.petInfoPanel.update();
                    }
                    if (MainScene.otherPanel) {
                        if (MainScene.otherPanel.equipWindow) {
                            MainScene.otherPanel.equipWindow.updatePetInfo();
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "exp", {
                get: function () {
                    return Tool.MyMath.decryptInt(this._exp);
                },
                set: function (exp) {
                    this._exp = Tool.MyMath.encryptInt(exp);
                    if (MainScene.petInfoPanel) {
                        MainScene.petInfoPanel.updateExp();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "hp", {
                /**宠物血量 */
                get: function () {
                    var _hp_ = this.currentStat.hp;
                    var _strong_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.strong);
                    if (_strong_) {
                        _hp_ = _hp_ + _strong_.getSetArray()[0] * this.level;
                    }
                    return _hp_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "mp", {
                /**宠物蓝量 */
                get: function () {
                    var _mp_ = this.currentStat.mp;
                    var _wis_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.wisdom);
                    if (_wis_) {
                        _mp_ = _mp_ + _wis_.getSetArray()[0] * this.level;
                    }
                    return _mp_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "attmin", {
                get: function () {
                    var _att_ = this.currentStat.attmin;
                    var _aggress_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.aggressive);
                    if (_aggress_) {
                        _att_ = _att_ + _aggress_.getSetArray()[0] * this.level;
                    }
                    return _att_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "attmax", {
                get: function () {
                    var _att_ = this.currentStat.attmax;
                    var _aggressive_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.aggressive);
                    if (_aggressive_) {
                        _att_ = _att_ + _aggressive_.getSetArray()[0] * this.level;
                    }
                    return _att_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "defence", {
                get: function () {
                    var _def_ = this.currentStat.def;
                    var _defensive_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.defensive);
                    if (_defensive_) {
                        _def_ = _def_ + _defensive_.getSetArray()[0] * this.level;
                    }
                    return _def_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "pro", {
                get: function () {
                    var _pro_ = this.currentStat.pro;
                    var _protective_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.protective);
                    if (_protective_) {
                        _pro_ = _pro_ + _protective_.getSetArray()[0] * this.level;
                    }
                    return _pro_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "balance", {
                get: function () {
                    var _balance_ = this.currentStat.balance;
                    if (_balance_ > 100) {
                        _balance_ = 100;
                    }
                    return _balance_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "cri", {
                get: function () {
                    var _cri_ = this.currentStat.cri;
                    var _slayer_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.slayer);
                    if (_slayer_) {
                        _cri_ = _cri_ + _slayer_.getSetArray()[0];
                    }
                    return _cri_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "crimul", {
                get: function () {
                    var _criMul_ = this.currentStat.criMul;
                    var _slayer_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.slayer);
                    if (_slayer_) {
                        _criMul_ = _criMul_ * _slayer_.getSetArray()[1];
                    }
                    return _criMul_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "magicatt", {
                get: function () {
                    var _magAtt_ = 100 + this.currentStat.magAtt;
                    var _wise_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.wise);
                    if (_wise_) {
                        _magAtt_ = _magAtt_ + _wise_.getSetArray()[0] * this.level;
                    }
                    return _magAtt_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "attack", {
                get: function () {
                    return this.attmin + (this.attmax - this.attmin) * Tool.MyMath.balanceRandom(this.balance);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "name", {
                get: function () {
                    return this._name;
                },
                enumerable: true,
                configurable: true
            });
            Pet.prototype.getSkill = function (skillData) {
                var i = 0;
                while (i < this.skillList.length) {
                    if (this.skillList[i].skillData.name == skillData.name) {
                        return this.skillList[i];
                    }
                    i++;
                }
                return null;
            };
            Pet.prototype.save = function () {
                var i = 0;
                var strs1 = "";
                strs1 = strs1 + (this.name + "#" + this.level + "#" + this.exp);
                strs1 = strs1 + ("#" + this.startStat.save());
                strs1 = strs1 + ("#" + this.growStat.save());
                if (this.skillList.length > 0) {
                    strs1 = strs1 + "#";
                    i = 0;
                    while (i < this.skillList.length) {
                        strs1 = strs1 + (this.skillList[i].save() + "^");
                        i++;
                    }
                }
                return strs1;
            };
            return Pet;
        }());
        iPet.Pet = Pet;
        __reflect(Pet.prototype, "iData.iPet.Pet");
    })(iPet = iData.iPet || (iData.iPet = {}));
})(iData || (iData = {}));
