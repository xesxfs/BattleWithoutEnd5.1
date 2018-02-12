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
var OtherPanel = (function (_super) {
    __extends(OtherPanel, _super);
    function OtherPanel() {
        var _this = _super.call(this) || this;
        _this.memuSize = 80;
        _this.gap = 5;
        var _self__ = _this;
        _this.array = [];
        var buttonGroup = new ButtonGroup();
        var buttonGroup1 = new ButtonGroup();
        var list = ["item", "equip", "pet", "skill", "title", "system", "info"];
        var list2 = ["背包", "装备", "宠物", "技能", "称号", "设置", "其他"];
        var i = (0);
        var cell = null;
        var left = null;
        var leftDown = null;
        var right = null;
        var rightDown = null;
        var onEnterFrame = null;
        var b;
        leftDown = function () {
            right.visible = true;
            left.visible = false;
            b = _self__.stage.stageWidth - 300;
            _self__.addEventListener(egret.Event.ENTER_FRAME, onEnterFrame, _self__);
        };
        rightDown = function () {
            left.visible = true;
            right.visible = false;
            b = _self__.stage.stageWidth;
            _self__.addEventListener(egret.Event.ENTER_FRAME, onEnterFrame, _self__);
        };
        onEnterFrame = function (e) {
            _self__.x = _self__.x + (b - _self__.x) * 0.5;
            if (Math.abs(_self__.x - b) < 1) {
                _self__.x = b;
                _self__.removeEventListener(egret.Event.ENTER_FRAME, onEnterFrame, _self__);
            }
        };
        while (i < list.length) {
            cell = new MenuButton("before_" + list[i], "after_" + list[i], list2[i]);
            cell.y = (i + 1) * _this.memuSize + _this.gap;
            cell.x = -_this.memuSize;
            _this.addChild(cell);
            buttonGroup.addButton(cell);
            _this.array.push(cell);
            i++;
        }
        left = new MenuButton("after_arrow_left", "before_arrow_left", "向左");
        _this.addChild(left);
        left.x = -_this.memuSize;
        left.downFunction = leftDown;
        right = new MenuButton("after_arrow_right", "before_arrow_right", "向右");
        _this.addChild(right);
        right.x = -_this.memuSize;
        right.visible = false;
        right.downFunction = rightDown;
        buttonGroup.addButton(left);
        buttonGroup.addButton(right);
        _this.init();
        _this.setFunction();
        return _this;
    }
    OtherPanel.prototype.init = function () {
        this.itemWindow = new ItemWindow();
        this.equipWindow = new EquipWindow();
        this.petWindow = new PetWindow();
        this.skillWindow = new SkillWindow();
        this.titleWindow = new TitleWindow();
        this.systemWindow = new SystemWindow();
        this.otherWindow = new OtherWindow();
        this.setFunction();
        var bg = new BasicCell(300, 800);
        this.addChildAt(bg, 0);
    };
    OtherPanel.prototype.setFunction = function () {
        var _self__ = this;
        var addWindow0 = null;
        var addWindow1 = null;
        var addWindow2 = null;
        var addWindow3 = null;
        var addWindow4 = null;
        var addWindow5 = null;
        var addWindow6 = null;
        addWindow0 = function () {
            removeWindow();
            _self__.window = _self__.itemWindow;
            addWindow();
        };
        addWindow1 = function () {
            removeWindow();
            _self__.window = _self__.equipWindow;
            addWindow();
        };
        addWindow2 = function () {
            removeWindow();
            _self__.window = _self__.petWindow;
            addWindow();
        };
        addWindow3 = function () {
            removeWindow();
            _self__.window = _self__.skillWindow;
            addWindow();
        };
        addWindow4 = function () {
            removeWindow();
            _self__.window = _self__.titleWindow;
            addWindow();
        };
        addWindow5 = function () {
            removeWindow();
            _self__.window = _self__.systemWindow;
            addWindow();
        };
        addWindow6 = function () {
            removeWindow();
            _self__.window = _self__.otherWindow;
            addWindow();
        };
        var removeWindow = function () {
            if (_self__.window) {
                _self__.removeChild(_self__.window);
            }
        };
        var addWindow = function () {
            _self__.addChild(_self__.window);
            _self__.window.y = 40;
        };
        this.array[0].downFunction = addWindow0;
        this.array[1].downFunction = addWindow1;
        this.array[2].downFunction = addWindow2;
        this.array[3].downFunction = addWindow3;
        this.array[4].downFunction = addWindow4;
        this.array[5].downFunction = addWindow5;
        this.array[6].downFunction = addWindow6;
    };
    return OtherPanel;
}(egret.Sprite));
__reflect(OtherPanel.prototype, "OtherPanel");
