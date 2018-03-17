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
var SkillWindow = (function (_super) {
    __extends(SkillWindow, _super);
    function SkillWindow() {
        var _this = _super.call(this) || this;
        var _self__ = _this;
        var passive = null;
        var combatDown = null;
        var magicDown = null;
        var passiveDown = null;
        combatDown = function () {
            removePanel();
            _self__.panel = _self__.combatPanel;
            _self__.addChild(_self__.panel);
            _self__.panel.y = 55;
        };
        magicDown = function () {
            removePanel();
            _self__.panel = _self__.magicPanel;
            _self__.addChild(_self__.panel);
            _self__.panel.y = 55;
        };
        passiveDown = function () {
            removePanel();
            _self__.panel = _self__.passivePanel;
            _self__.addChild(_self__.panel);
            _self__.panel.y = 55;
        };
        var removePanel = function () {
            if (_self__.panel) {
                _self__.removeChild(_self__.panel);
            }
        };
        var buttonSprite = new egret.Sprite();
        _this.addChild(buttonSprite);
        var combat = new StringButton("战斗", iGlobal.Global.RED);
        combat.x = 20;
        buttonSprite.addChild(combat);
        var magic = new StringButton("魔法", iGlobal.Global.BLUE);
        buttonSprite.addChild(magic);
        magic.x = 130 + combat.x;
        passive = new StringButton("被动", iGlobal.Global.YELLOW);
        buttonSprite.addChild(passive);
        passive.x = 130 * 2 + combat.x;
        var buttonGroup = new ButtonGroup();
        buttonGroup.addButton(combat);
        buttonGroup.addButton(magic);
        buttonGroup.addButton(passive);
        _this.combatPanel = new CombatOutterPanel();
        _this.magicPanel = new MagicOutterPanel();
        _this.passivePanel = new PassiveOutterPanel();
        Emitter.addEventListener(Tool.MyEvent.Update, _this.onUpdate, _this);
        combat.downFunction = combatDown;
        magic.downFunction = magicDown;
        passive.downFunction = passiveDown;
        return _this;
    }
    SkillWindow.prototype.onUpdate = function (e) {
        if (e === void 0) { e = null; }
        (this.combatPanel.innerPanel).update();
        (this.magicPanel.innerPanel).update();
        (this.passivePanel.innerPanel).update();
        iGlobal.Player.updateSkillInfo();
    };
    return SkillWindow;
}(IWindow));
__reflect(SkillWindow.prototype, "SkillWindow");
