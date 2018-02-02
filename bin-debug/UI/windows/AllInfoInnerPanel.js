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
var AllInfoInnerPanel = (function (_super) {
    __extends(AllInfoInnerPanel, _super);
    function AllInfoInnerPanel() {
        var _this = _super.call(this) || this;
        _this.gap = 22;
        _this.init();
        return _this;
    }
    AllInfoInnerPanel.prototype.init = function () {
        this.list = new Array();
        this.listSprite = new egret.Sprite();
        this.bg = new egret.Sprite();
        this.addChild(this.bg);
        this.addChild(this.listSprite);
    };
    AllInfoInnerPanel.prototype.addText = function (txt) {
        var cell = new StringCell(this.getTime() + txt, 385, this.gap);
        if (this.list.length > 100) {
            this.listSprite.removeChild(this.list.shift());
        }
        this.list.push(cell);
        this.listSprite.addChild(cell);
        this.tidy();
    };
    AllInfoInnerPanel.prototype.tidy = function () {
        var length = (this.list.length);
        var i = (0);
        while (i < this.list.length) {
            this.list[i].y = i * this.gap;
            this.list[i].x = 10;
            i++;
        }
        if (this.listSprite.height > this.height && this.list.length < 100) {
            // this.y = this.y - 20;
            this.scrollV += this.gap;
        }
        this.drawBg();
        this.contentH = this.listSprite.height;
    };
    AllInfoInnerPanel.prototype.getTime = function () {
        var time = new Date();
        var format = "[" + time.getMinutes() + ":" + time.getSeconds() + "]";
        return format;
    };
    AllInfoInnerPanel.prototype.drawBg = function () {
        this.bg.graphics.clear();
        this.bg.graphics.beginFill(16777215, 0);
        this.bg.graphics.drawRect(0, 0, 400, this.height);
        this.bg.graphics.endFill();
    };
    return AllInfoInnerPanel;
}(InnerPanel));
__reflect(AllInfoInnerPanel.prototype, "AllInfoInnerPanel");
