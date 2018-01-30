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
                var _loc3_ = null;
                var _loc4_ = 0;
                var _loc5_ = null;
                var _loc2_ = petStr.split("#");
                _loc4_ = 0;
                while (_loc4_ < iData.iPet.PetDataList.list.length) {
                    if (_loc2_[0] == iData.iPet.PetDataList.list[_loc4_].name) {
                        _loc3_ = new iData.iPet.Pet(iData.iPet.PetDataList.list[_loc4_], 1);
                        break;
                    }
                    _loc4_++;
                }
                _loc3_.exp = _loc2_[2];
                _loc3_.startStat = iData.iPet.PetStats.load(_loc2_[3]);
                _loc3_.growStat = iData.iPet.PetStats.load(_loc2_[4]);
                _loc3_.skillList = new Array();
                if (_loc2_.length > 5) {
                    _loc5_ = _loc2_[5].split("^");
                    _loc4_ = 0;
                    while (_loc4_ < _loc5_.length) {
                        if (_loc5_[_loc4_] != "") {
                            _loc3_.skillList.push(iData.iPet.iPetSkill.PetSkill.load(_loc5_[_loc4_]));
                        }
                        _loc4_++;
                    }
                }
                _loc3_.setLevel(_loc2_[1]);
                return _loc3_;
            };
            Pet.prototype.generateSkill = function () {
                var _loc1_ = 0;
                var _loc5_ = 0;
                this.skillList = new Array();
                var _loc2_ = Math.random();
                if (_loc2_ < 0.4) {
                    _loc1_ = 0;
                }
                else if (_loc2_ < 0.6) {
                    _loc1_ = 1;
                }
                else if (_loc2_ < 0.75) {
                    _loc1_ = 2;
                }
                else if (_loc2_ < 0.9) {
                    _loc1_ = 3;
                }
                else {
                    _loc1_ = 4;
                }
                var _loc3_ = iData.iPet.iPetSkill.PetSkillList.list.length;
                var _loc4_ = 0;
                while (_loc4_ < _loc1_) {
                    do {
                        _loc5_ = Math.random() * _loc3_;
                    } while (!this.addSkill(iData.iPet.iPetSkill.PetSkillList.list[_loc5_]));
                    _loc4_++;
                }
            };
            Pet.prototype.addSkill = function (petSkillData) {
                if (this.skillList.length >= 4) {
                    return false;
                }
                var _loc2_ = 0;
                while (_loc2_ < this.skillList.length) {
                    if (petSkillData.name == this.skillList[_loc2_].skillData.name) {
                        return false;
                    }
                    _loc2_++;
                }
                this.skillList.push(new iData.iPet.iPetSkill.PetSkill(petSkillData));
                return true;
            };
            Pet.prototype.getAttackSkill = function () {
                var _loc1_ = new Array();
                var _loc2_ = 0;
                while (_loc2_ < this.skillList.length) {
                    //这里
                    if (this.skillList[_loc2_].skillData instanceof iData.iPet.iPetSkill.AttackPetSkillData) {
                        _loc1_.push(this.skillList[_loc2_]);
                    }
                    _loc2_++;
                }
                return _loc1_;
            };
            Pet.prototype.addExp = function (exp) {
                exp = exp;
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
                var _loc2_ = 0;
                var _loc3_ = 0;
                this.level++;
                this.exp = 0;
                var _loc1_ = 0;
                while (_loc1_ < iData.iPet.PetStats.list.length) {
                    this.currentStat[iData.iPet.PetStats.list[_loc1_]] = this.currentStat[iData.iPet.PetStats.list[_loc1_]] + this.growStat[iData.iPet.PetStats.list[_loc1_]];
                    _loc1_++;
                }
                MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>你的宠物升级了!你的宠物达到了Lv." + this.level + "!</font>");
                if (Math.random() * 100 < 1 - this.level * 0.01) {
                    _loc2_ = iData.iPet.iPetSkill.PetSkillList.list.length;
                    _loc3_ = Math.random() * _loc2_;
                    if (this.addSkill(iData.iPet.iPetSkill.PetSkillList.list[_loc3_])) {
                        MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>你的宠物学会了" + iData.iPet.iPetSkill.PetSkillList.list[_loc3_].name + "!</font>");
                    }
                }
            };
            Pet.prototype.setLevel = function (level) {
                level = level;
                if (level < 1) {
                    level = 1;
                }
                if (level > 100) {
                    level = 100;
                }
                this.level = level;
                var _loc2_ = 0;
                while (_loc2_ < iData.iPet.PetStats.list.length) {
                    this.currentStat[iData.iPet.PetStats.list[_loc2_]] = this.startStat[iData.iPet.PetStats.list[_loc2_]] + this.growStat[iData.iPet.PetStats.list[_loc2_]] * (this.level - 1);
                    _loc2_++;
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
                    level = level;
                    this._level = Tool.MyMath.encryptInt(level);
                    if (MainScene.petInfoPanel) {
                        MainScene.petInfoPanel.update();
                    }
                    // if (MainScene.otherPanel) {
                    // 	if (MainScene.otherPanel.equipWindow) {
                    // 		MainScene.otherPanel.equipWindow.updatePetInfo();
                    // 	}
                    // }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "exp", {
                get: function () {
                    return Tool.MyMath.decryptInt(this._exp);
                },
                set: function (param1) {
                    param1 = param1;
                    this._exp = Tool.MyMath.encryptInt(param1);
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
                    var _loc1_ = this.currentStat.hp;
                    var _loc2_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.strong);
                    if (_loc2_) {
                        _loc1_ = _loc1_ + _loc2_.getSetArray()[0] * this.level;
                    }
                    return _loc1_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "mp", {
                /**宠物蓝量 */
                get: function () {
                    var _loc1_ = this.currentStat.mp;
                    var _loc2_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.wisdom);
                    if (_loc2_) {
                        _loc1_ = _loc1_ + _loc2_.getSetArray()[0] * this.level;
                    }
                    return _loc1_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "attmin", {
                get: function () {
                    var _loc1_ = this.currentStat.attmin;
                    var _loc2_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.aggressive);
                    if (_loc2_) {
                        _loc1_ = _loc1_ + _loc2_.getSetArray()[0] * this.level;
                    }
                    return _loc1_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "attmax", {
                get: function () {
                    var _loc1_ = this.currentStat.attmax;
                    var _loc2_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.aggressive);
                    if (_loc2_) {
                        _loc1_ = _loc1_ + _loc2_.getSetArray()[0] * this.level;
                    }
                    return _loc1_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "defence", {
                get: function () {
                    var _loc1_ = this.currentStat.def;
                    var _loc2_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.defensive);
                    if (_loc2_) {
                        _loc1_ = _loc1_ + _loc2_.getSetArray()[0] * this.level;
                    }
                    return _loc1_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "pro", {
                get: function () {
                    var _loc1_ = this.currentStat.pro;
                    var _loc2_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.protective);
                    if (_loc2_) {
                        _loc1_ = _loc1_ + _loc2_.getSetArray()[0] * this.level;
                    }
                    return _loc1_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "balance", {
                get: function () {
                    var _loc1_ = this.currentStat.balance;
                    if (_loc1_ > 100) {
                        _loc1_ = 100;
                    }
                    return _loc1_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "cri", {
                get: function () {
                    var _loc1_ = this.currentStat.cri;
                    var _loc2_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.slayer);
                    if (_loc2_) {
                        _loc1_ = _loc1_ + _loc2_.getSetArray()[0];
                    }
                    return _loc1_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "crimul", {
                get: function () {
                    var _loc1_ = this.currentStat.criMul;
                    var _loc2_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.slayer);
                    if (_loc2_) {
                        _loc1_ = _loc1_ * _loc2_.getSetArray()[1];
                    }
                    return _loc1_;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Pet.prototype, "magicatt", {
                get: function () {
                    var _loc1_ = 100 + this.currentStat.magAtt;
                    var _loc2_ = this.getSkill(iData.iPet.iPetSkill.PetSkillList.wise);
                    if (_loc2_) {
                        _loc1_ = _loc1_ + _loc2_.getSetArray()[0] * this.level;
                    }
                    return _loc1_;
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
            Pet.prototype.getSkill = function (param1) {
                var _loc2_ = 0;
                while (_loc2_ < this.skillList.length) {
                    if (this.skillList[_loc2_].skillData.name == param1.name) {
                        return this.skillList[_loc2_];
                    }
                    _loc2_++;
                }
                return null;
            };
            Pet.prototype.save = function () {
                var _loc2_ = 0;
                var _loc1_ = "";
                _loc1_ = _loc1_ + (this.name + "#" + this.level + "#" + this.exp);
                _loc1_ = _loc1_ + ("#" + this.startStat.save());
                _loc1_ = _loc1_ + ("#" + this.growStat.save());
                if (this.skillList.length > 0) {
                    _loc1_ = _loc1_ + "#";
                    _loc2_ = 0;
                    while (_loc2_ < this.skillList.length) {
                        _loc1_ = _loc1_ + (this.skillList[_loc2_].save() + "^");
                        _loc2_++;
                    }
                }
                return _loc1_;
            };
            return Pet;
        }());
        iPet.Pet = Pet;
        __reflect(Pet.prototype, "iData.iPet.Pet");
    })(iPet = iData.iPet || (iData.iPet = {}));
})(iData || (iData = {}));
