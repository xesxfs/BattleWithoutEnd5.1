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
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "MainSceneSkin";
        return _this;
    }
    MainScene.prototype.childrenCreated = function () {
        this.init();
    };
    MainScene.prototype.init = function () {
        iGlobal.Global.init(this.stage);
        this.setPlayerInfo();
        this.setMonsterInfo();
        this.setPetInfo();
        this.setBattleSkillPanel();
        this.setAllInfoPanel();
        this.setLootPanel();
        this.setBattle();
        this.setOther();
        iGlobal.Global.shopPanel = new ShopPanel();
        iGlobal.Global.helpPanel = new HelpPanel();
        iGlobal.Global.specialShopPanel = new SpecialShopPanel();
    };
    MainScene.prototype.setBattle = function () {
        MainScene.battle = new iData.Battle();
        MainScene.battle.init();
    };
    MainScene.prototype.setPlayerInfo = function () {
        MainScene.playerInfoPanel = new PlayerInfoPanel();
        this.addChildAt(MainScene.playerInfoPanel, 0);
        MainScene.playerInfoPanel.x = 10;
        MainScene.playerInfoPanel.y = 10;
    };
    MainScene.prototype.setMonsterInfo = function () {
        MainScene.monsterInfoPanel = new MonsterInfoPanel();
        this.addChildAt(MainScene.monsterInfoPanel, 0);
        MainScene.monsterInfoPanel.x = 10;
        MainScene.monsterInfoPanel.y = 265;
    };
    MainScene.prototype.setPetInfo = function () {
        MainScene.petInfoPanel = new PetInfoPanel();
        this.addChildAt(MainScene.petInfoPanel, 0);
        MainScene.petInfoPanel.x = 330;
        MainScene.petInfoPanel.y = 265;
    };
    MainScene.prototype.setOther = function () {
        MainScene.otherPanel = new OtherPanel();
        this.addChild(MainScene.otherPanel);
        MainScene.otherPanel.x = this.stage.stageWidth;
        MainScene.otherPanel.y = (this.stage.height - MainScene.otherPanel.height) >> 1;
    };
    MainScene.prototype.setBattleSkillPanel = function () {
        MainScene.battleSkillPanel = new BattleSkillPanel();
        this.addChildAt(MainScene.battleSkillPanel, 0);
        MainScene.battleSkillPanel.x = 415;
        MainScene.battleSkillPanel.y = 410;
    };
    MainScene.prototype.setAllInfoPanel = function () {
        MainScene.allInfoPanel = new AllInfoPanel();
        this.addChildAt(MainScene.allInfoPanel, 0);
        MainScene.allInfoPanel.x = 10;
        MainScene.allInfoPanel.y = 410;
    };
    MainScene.prototype.setLootPanel = function () {
        MainScene.lootPanel = new LootPanel();
        this.addChildAt(MainScene.lootPanel, 0);
        MainScene.lootPanel.x = 415;
        MainScene.lootPanel.y = 720;
    };
    /**添加到场景中*/
    MainScene.prototype.onEnable = function () {
    };
    /**从场景中移除*/
    MainScene.prototype.onRemove = function () {
    };
    return MainScene;
}(BaseScene));
__reflect(MainScene.prototype, "MainScene");
