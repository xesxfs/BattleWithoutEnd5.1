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
var BeginScene = (function (_super) {
    __extends(BeginScene, _super);
    function BeginScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "BeginSceneSkin";
        return _this;
    }
    BeginScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    /**添加到场景中*/
    BeginScene.prototype.onEnable = function () {
        this.beginBtn.addEventListener("touchTap", function () {
            App.SceneManager.runScene(SceneConst.SaveScene);
        }, this);
        var down = null;
        var onMouseDown = null;
        down = function () {
            var next = null;
            // next = function () {
            // Tool.Effect.fadeIn(_loc1_);				
            App.SceneManager.runScene(SceneConst.SaveScene);
            // };
        };
        var begin = new FlickerButton("开始游戏", 200, 80, 40);
        this.addChild(begin);
        begin.x = (this.stage.width) / 2;
        begin.y = 350;
        begin.downFunction = down;
    };
    /**从场景中移除*/
    BeginScene.prototype.onRemove = function () {
    };
    return BeginScene;
}(BaseScene));
__reflect(BeginScene.prototype, "BeginScene");
