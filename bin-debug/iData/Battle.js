var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var Battle = (function () {
        function Battle() {
            this.turn = 1;
            this.playerHp = 0;
            this.playerMp = 0;
            this.monsterHp = 0;
            this.petHp = 0;
            this.petMp = 0;
            this.CR = 50;
            this.timer = new egret.Timer(500);
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.run, this);
            this.timer.start();
        }
        /**
         * 生成遇见的怪物
         */
        Battle.prototype.init = function () {
            var monster;
            if (!this.boss) {
                this.boss = iGlobal.Global.map.getBoss();
            }
            /**5%的概率生产一个Boss */
            if (Math.random() < 0.05) {
                this.monster = this.boss;
                this.monsterHp = this.boss.hpleft;
            }
            else {
                /**随机一个普通怪物 */
                monster = new iData.iMonster.Monster(iGlobal.Global.map.mapData.monsterList[Math.random() * iGlobal.Global.map.mapData.monsterList.length >> 0]);
                this.monster = monster;
                this.monsterHp = this.monster.hp;
            }
            this.playerHp = iGlobal.Player.hp;
            this.playerMp = iGlobal.Player.mp;
            this.pet = iGlobal.Player.pet;
            if (this.pet) {
                this.petHp = iGlobal.Player.pet.hp;
                this.petMp = iGlobal.Player.pet.mp;
            }
            //更新界面
            MainScene.monsterInfoPanel.update();
            MainScene.petInfoPanel.update();
            if (this.monster.title) {
                MainScene.allInfoPanel.addText("你遇到了" + this.monster.nameHtml + " " + this.monster.title.name + "!", iGlobal.Global.battleIntro);
            }
            else {
                MainScene.allInfoPanel.addText("你遇到了" + this.monster.nameHtml + "!", iGlobal.Global.battleIntro);
            }
            this.turn = 1;
            if (MainScene.lootPanel) {
                MainScene.lootPanel.update();
            }
        };
        Battle.prototype.changeTurn = function () {
            this.turn = this.turn * -1;
            if (this.checkDead()) {
                this.turn = 1;
            }
        };
        /**
         * 检查是否死忙
         * @returns boolean
         */
        Battle.prototype.checkDead = function () {
            if (this.playerHp <= 0) {
                if (this.monster instanceof iData.iMonster.Boss) {
                    this.boss.hpleft = this.monsterHp;
                }
                this.playerDie();
                this.init();
                return true;
            }
            if (this.petHp <= 0) {
                this.pet = null;
            }
            if (this.monsterHp <= 0) {
                if (this.monster instanceof iData.iMonster.Boss) {
                    this.boss = null;
                }
                this.giveTrophy();
                this.init();
                return true;
            }
            return false;
        };
        Battle.prototype.playerDie = function () {
            MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>你被击败了!</font>", iGlobal.Global.battleIntro);
        };
        Battle.prototype.giveTrophy = function () {
            MainScene.allInfoPanel.addText(this.monster.nameHtml + "<font color=\'#21c4af\'>被击败了!</font>", iGlobal.Global.battleIntro);
            iGlobal.Player.addExp(this.monster.exp);
            iGlobal.Player.addMoney(this.monster.money);
            this.monster.dropItem();
            this.monster.dropPet();
            if (this.monster.CP / iGlobal.Player.combatPower > 3) {
                iData.iPlayer.TitleList.updateTitleInfo("kill", 0, 1);
            }
            if (this.pet) {
                this.pet.addExp(this.monster.exp);
            }
        };
        /**500毫秒运行 */
        Battle.prototype.run = function (param1) {
            if (param1 === void 0) { param1 = null; }
            if (this.monster) {
                this.fight();
            }
            iGlobal.Player.caculate++;
            if (iGlobal.Player.caculate > 2400) {
                iGlobal.Player.ageup();
            }
            if (iGlobal.Player.caculate % 60 == 0) {
                iGlobal.Player.save();
            }
            if (iGlobal.Global.shopPanel) {
                iGlobal.Global.shopPanel.updateTime();
                if (iGlobal.Player.caculate % 600 == 0) {
                    iGlobal.Global.shopPanel.updateShop();
                }
            }
        };
        /**进行回合 */
        Battle.prototype.fight = function () {
            if (this.turn > 0) {
                this.playerTurn();
                this.petTurn();
            }
            else {
                this.monsterTurn();
            }
            MainScene.playerInfoPanel.upDateHpAndMp();
            MainScene.monsterInfoPanel.updateHp();
            MainScene.petInfoPanel.updateHp();
            this.changeTurn();
        };
        /**人物回合 */
        Battle.prototype.playerTurn = function () {
            /**技能释放概率 */
            var spellChance = 0;
            /***使用的技能 */
            var activeSkill = null;
            /**是否使用过技能 */
            var isUsedSkill = false;
            var attackSkillLength = iGlobal.Player.attackSkillList.length;
            if (attackSkillLength > 0) {
                spellChance = iGlobal.Player.spellChance + 20 + attackSkillLength * 5;
                if (spellChance > 95) {
                    spellChance = 95;
                }
                /***技能攻击 */
                if (Math.random() * 100 < spellChance) {
                    activeSkill = iGlobal.Player.attackSkillList[Math.random() * attackSkillLength >> 0];
                    var activeSkillData = activeSkill.skillData;
                    if (activeSkillData.behaveFunction(activeSkill)) {
                        isUsedSkill = true;
                    }
                }
            }
            if (!isUsedSkill) {
                this.playerAttack();
            }
        };
        /**宠物回合 */
        Battle.prototype.petTurn = function () {
            var skillIndex = 0;
            var petSkill = null;
            if (!this.pet || this.petHp <= 0) {
                return;
            }
            var isUsedSkill = false;
            var petSkills = this.pet.getAttackSkill();
            if (petSkills.length > 0) {
                if (Math.random() * 100 < 50) {
                    skillIndex = Math.random() * petSkills.length >> 0;
                    if (petSkills[skillIndex].skillData.behaveFunction(petSkills[skillIndex])) {
                        isUsedSkill = true;
                    }
                }
            }
            if (!isUsedSkill) {
                petSkill = this.pet.getSkill(iData.iPet.iPetSkill.PetSkillList.double_hit);
                if (petSkill) {
                    this.petAttack();
                    if (Math.random() * 100 < petSkill.getSetArray()[0]) {
                        this.petAttack();
                    }
                }
                else {
                    this.petAttack();
                }
            }
            this.petEndTurn();
        };
        Battle.prototype.petEndTurn = function () {
            var petSkill = this.pet.getSkill(iData.iPet.iPetSkill.PetSkillList.meditation);
            if (petSkill) {
                this.playerMp = this.playerMp + petSkill.getSetArray()[0] * this.pet.level;
                if (this.playerMp > iGlobal.Player.mp) {
                    this.playerMp = iGlobal.Player.mp;
                }
                this.petMp = this.petMp + petSkill.getSetArray()[0] * this.pet.level;
                if (this.petMp > this.pet.mp) {
                    this.petMp = this.pet.mp;
                }
                MainScene.allInfoPanel.addText("你的宠物恢复了你和他自身的<font color=\'#4a60d7\' size=\'16\'>" + (petSkill.getSetArray()[0] * this.pet.level >> 0) + "</font>Mp", iGlobal.Global.battle);
            }
            petSkill = this.pet.getSkill(iData.iPet.iPetSkill.PetSkillList.heal);
            if (petSkill) {
                this.playerHp = this.playerHp + petSkill.getSetArray()[0] * this.pet.level;
                if (this.playerHp > iGlobal.Player.hp) {
                    this.playerHp = iGlobal.Player.hp;
                }
                this.petHp = this.petHp + petSkill.getSetArray()[0] * this.pet.level;
                if (this.petHp > this.pet.hp) {
                    this.petHp = this.pet.hp;
                }
                MainScene.allInfoPanel.addText("你的宠物恢复了你和他自身的<font color=\'#7AEE3C\' size=\'16\'>" + (petSkill.getSetArray()[0] * this.pet.level >> 0) + "</font>Hp", iGlobal.Global.battle);
            }
        };
        /**怪物回合 */
        Battle.prototype.monsterTurn = function () {
            var petSkill;
            this.monster.runBuff();
            var buff = this.monster.isContainBuff("frozen");
            if (buff == null && this.monsterHp > 0) {
                if (this.pet) {
                    petSkill = this.pet.getSkill(iData.iPet.iPetSkill.PetSkillList.taunt);
                    if (petSkill) {
                        this.monsterAttackPet();
                    }
                    else if (Math.random() < 0.5) {
                        this.monsterAttackPlayer();
                    }
                    else {
                        this.monsterAttackPet();
                    }
                }
                else {
                    this.monsterAttackPlayer();
                }
            }
        };
        Battle.prototype.monsterAttackPlayer = function () {
            var spellChance = 0;
            var activeSkill = null;
            var isUsedSkill = false;
            var skillLeng = iGlobal.Player.defenceSkillList.length;
            if (skillLeng > 0) {
                spellChance = iGlobal.Player.spellChance + skillLeng * 20;
                if (spellChance > 95) {
                    spellChance = 95;
                }
                if (Math.random() * 100 < spellChance) {
                    activeSkill = iGlobal.Player.defenceSkillList[Math.random() * skillLeng >> 0];
                    //这里
                    var loc4 = activeSkill.skillData;
                    if (loc4.behaveFunction(activeSkill)) {
                        isUsedSkill = true;
                    }
                }
            }
            if (!isUsedSkill) {
                this.monsterAttack();
            }
        };
        Battle.prototype.monsterAttackPet = function () {
            var criRatio = 0;
            var critMul = 1;
            var damger = 0;
            criRatio = this.monster.crit - this.pet.pro * 2;
            if (criRatio > this.CR) {
                criRatio = this.CR;
            }
            if (Math.random() * 100 < criRatio) {
                critMul = this.monster.crit_mul / 100;
            }
            damger = (this.monster.attack * critMul - this.pet.defence) * (1 - this.caculateProtection(this.pet.pro));
            damger = Math.round(damger);
            if (damger < 1) {
                damger = 1;
            }
            var petSkill = this.pet.getSkill(iData.iPet.iPetSkill.PetSkillList.dodge);
            if (petSkill) {
                if (Math.random() * 100 < petSkill.getSetArray()[0]) {
                    MainScene.allInfoPanel.addText("你的宠物回避了" + this.monster.nameHtml + "的攻击!", iGlobal.Global.battle);
                    return;
                }
            }
            this.petHp = this.petHp - damger;
            if (critMul > 1) {
                MainScene.allInfoPanel.addText(this.monster.nameHtml + "对你的宠物造成了<font color=\'#ff4040\' size=\'20\'>" + damger + "!</font>伤害", iGlobal.Global.battle);
            }
            else {
                MainScene.allInfoPanel.addText(this.monster.nameHtml + "对你的宠物造成了<font color=\'#ff4040\'>" + damger + "</font>伤害", iGlobal.Global.battle);
            }
            petSkill = this.pet.getSkill(iData.iPet.iPetSkill.PetSkillList.injury_resile);
            if (petSkill) {
                if (Math.random() * 100 < petSkill.getSetArray()[0]) {
                    this.monsterHp = this.monsterHp - damger * petSkill.getSetArray()[1] / 100;
                    MainScene.allInfoPanel.addText("你的宠物反弹了<font color=\'#ff4040\'>" + damger + "</font>伤害给" + this.monster.nameHtml, iGlobal.Global.battle);
                }
            }
            petSkill = this.pet.getSkill(iData.iPet.iPetSkill.PetSkillList.counterattack);
            if (petSkill) {
                if (Math.random() * 100 < petSkill.getSetArray()[0]) {
                    criRatio = this.pet.cri - this.monster.protection * 2;
                    if (criRatio > this.CR) {
                        criRatio = this.CR;
                    }
                    critMul = 1;
                    if (Math.random() * 100 < criRatio) {
                        critMul = this.pet.crimul / 100;
                    }
                    damger = (this.pet.attack * critMul - this.monster.defence) * (1 - this.caculateProtection(this.monster.protection));
                    damger = damger * (petSkill.getSetArray()[1] / 100);
                    if (damger < 1) {
                        damger = 1;
                    }
                    this.monsterHp = this.monsterHp - damger;
                    MainScene.allInfoPanel.addText("你的宠物成功反击了<font color=\'#ff4040\'>" + damger + "</font>伤害给" + this.monster.nameHtml, iGlobal.Global.battle);
                }
            }
        };
        Battle.prototype.caculateProtection = function (nProtect) {
            if (nProtect >= 0) {
                return 0.06 * nProtect / (1 + 0.06 * nProtect);
            }
            if (nProtect < -100) {
                return -1;
            }
            return -(1 - Math.pow(0.94, -nProtect));
        };
        Battle.prototype.petAttack = function () {
            var criRatio = this.pet.cri - this.monster.protection * 2;
            if (criRatio > this.CR) {
                criRatio = this.CR;
            }
            var criMul = 1;
            if (Math.random() * 100 < criRatio) {
                criMul = this.pet.crimul / 100;
            }
            var damger = (this.pet.attack * criMul - this.monster.defence) * (1 - this.caculateProtection(this.monster.protection));
            damger = Math.round(damger);
            if (damger < 1) {
                damger = 1;
            }
            var petSkill = this.pet.getSkill(iData.iPet.iPetSkill.PetSkillList.good_or_evil);
            if (petSkill) {
                if (Math.random() * 100 < petSkill.getSetArray()[0]) {
                    criMul = criMul * 2;
                }
                else {
                    this.monsterHp = this.monsterHp + damger;
                    if (this.monsterHp > this.monster.hp) {
                        this.monsterHp = this.monster.hp;
                    }
                    MainScene.allInfoPanel.addText("你的宠物给" + this.monster.nameHtml + "回复了<font color=\'#7AEE3C\' size=\'16\'>" + damger + "</font> hp", iGlobal.Global.battle);
                    return;
                }
            }
            this.monsterHp = this.monsterHp - damger;
            if (criMul > 1) {
                MainScene.allInfoPanel.addText("你的宠物对" + this.monster.nameHtml + "造成了<font color=\'#ff4040\' size=\'20\'>" + damger + "!</font> 伤害", iGlobal.Global.battle);
            }
            else {
                MainScene.allInfoPanel.addText("你的宠物对" + this.monster.nameHtml + "造成了<font color=\'#ff4040\'>" + damger + "</font> 伤害" + this.monster.nameHtml, iGlobal.Global.battle);
            }
            petSkill = this.pet.getSkill(iData.iPet.iPetSkill.PetSkillList.life_drain);
            if (petSkill) {
                this.petHp = this.petHp + damger * petSkill.getSetArray()[0] / 100;
                MainScene.allInfoPanel.addText("你的宠物恢复了<font color=\'#7AEE3C\' size=\'16\'>" + damger + "</font> hp", iGlobal.Global.battle);
            }
        };
        Battle.prototype.monsterAttack = function () {
            var criRatio = this.monster.crit - iGlobal.Player.protection * 2;
            if (criRatio > this.CR) {
                criRatio = this.CR;
            }
            var criMul = 1;
            if (Math.random() * 100 < criRatio) {
                criMul = this.monster.crit_mul / 100;
            }
            var damger = (this.monster.attack * criMul - iGlobal.Player.defence) * (1 - this.caculateProtection(iGlobal.Player.protection));
            damger = Math.round(damger);
            if (damger < 1) {
                damger = 1;
            }
            this.playerHp = this.playerHp - damger;
            if (criMul > 1) {
                MainScene.allInfoPanel.addText(this.monster.nameHtml + "对你造成了<font color=\'#ff4040\' size=\'20\'>" + damger + "!</font>伤害", iGlobal.Global.battle);
            }
            else {
                MainScene.allInfoPanel.addText(this.monster.nameHtml + "对你造成了<font color=\'#ff4040\'>" + damger + "</font>伤害", iGlobal.Global.battle);
            }
            iData.iPlayer.TitleList.updateTitleInfo("endure", damger);
        };
        Battle.prototype.playerAttack = function () {
            var criRatio = iGlobal.Player.crit - (this.monster.protection - iGlobal.Player.protectionReduce) * 2;
            if (criRatio > this.CR) {
                criRatio = this.CR;
            }
            var criMul = 1;
            if (Math.random() * 100 < criRatio) {
                criMul = iGlobal.Player.crit_mul / 100;
            }
            var damger = (iGlobal.Player.attack * criMul - this.monster.defence) * (1 - this.caculateProtection(this.monster.protection - iGlobal.Player.protectionReduce - iGlobal.Player.protectionIgnore));
            damger = Math.round(damger);
            if (damger < 1) {
                damger = 1;
            }
            this.monsterHp = this.monsterHp - damger;
            if (criMul > 1) {
                MainScene.allInfoPanel.addText("你对" + this.monster.nameHtml + "造成了<font color=\'#ff4040\' size=\'20\'>" + damger + "!</font>伤害" + this.monster.nameHtml, iGlobal.Global.battle);
                iData.iPlayer.TitleList.updateTitleInfo("crit", 0, 1);
            }
            else {
                MainScene.allInfoPanel.addText("你对" + this.monster.nameHtml + "造成了<font color=\'#ff4040\'>" + damger + "</font>伤害", iGlobal.Global.battle);
                iData.iPlayer.TitleList.updateTitleInfo("crit", 0, -1);
            }
            iData.iPlayer.TitleList.updateTitleInfo("damage", damger, damger);
        };
        return Battle;
    }());
    iData.Battle = Battle;
    __reflect(Battle.prototype, "iData.Battle");
})(iData || (iData = {}));
