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
var SaveScene = (function (_super) {
    __extends(SaveScene, _super);
    function SaveScene() {
        var _this = _super.call(this) || this;
        _this.Gap = 130;
        _this.startX = 10;
        _this.startY = 50;
        _this.drawSave(1);
        _this.drawSave(2);
        _this.drawSave(3);
        _this.drawSave(4);
        return _this;
    }
    SaveScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    /**添加到场景中*/
    SaveScene.prototype.onEnable = function () {
        // 	this.raceBtn.addEventListener("touchTap", () => {
        // 		App.runScene(SceneConst.RaceScene);
        // 	}, this);
        // 	this.mainBtn.addEventListener("touchTap", () => {
        // 		iGlobal.Player.load();
        // 		App.runScene(SceneConst.MainScene);
        // 	}, this);
    };
    /**从场景中移除*/
    SaveScene.prototype.onRemove = function () {
        // var colorMatrix = [
        // 	0.3, 0.6, 0, 0, 0,
        // 	0.3, 0.6, 0, 0, 0,
        // 	0.3, 0.6, 0, 0, 0,
        // 	0, 0, 0, 1, 0
        // ];
        // let colorFliter = new egret.ColorMatrixFilter(colorMatrix);
        // colorFliter.matrix
    };
    SaveScene.prototype.drawManualButton = function () {
        var _self_ = undefined;
        var manualDown = null;
        manualDown = function () {
            // var file: flash.net.FileReference = <any>null;
            var selected = null;
            var on_loaded = null;
            selected = function (param1) {
                // file["load"]();
                // file["addEventListener"](egret.Event.COMPLETE, on_loaded);
            };
            on_loaded = function (param1) {
                var next = null;
                var e = param1;
                next = function () {
                    // var _loc1_ = new MainScene();
                    // iGlobal.Global.mainScene = _loc1_;
                    // iGlobal.Global.stage.addChild(_loc1_);
                    // Tool.Effect.fadeIn(_loc1_);
                };
                iGlobal.Player.manualLoad(e.target["data"]);
                Tool.Effect.fadeOut(_self_, 10, next);
            };
            // file = new FileReference();
            // file["browse"]();
            // file["addEventListener"](flash.Event.SELECT, selected);
            // this["setBefore"]();
        };
        var manualLoad = new FlickerButton("Manual Load", 100, 50, 20);
        this.addChild(manualLoad);
        manualLoad.x = 680;
        manualLoad.y = -5;
        manualLoad.downFunction = manualDown;
        _self_ = this;
    };
    SaveScene.prototype.drawSave = function (param1) {
        param1 = (param1);
        var solt = egret.localStorage.getItem("slot" + param1);
        var soltObj = JSON.parse(solt);
        if (soltObj && soltObj["userName"]) {
            this.sharedObject = soltObj;
            this.drawOld(param1);
        }
        else {
            this.drawNew(param1);
            egret.localStorage.removeItem("slot" + param1);
        }
    };
    SaveScene.prototype.drawNew = function (param1) {
        param1 = (param1);
        var text = null;
        var start = null;
        var onIn = null;
        var _this_ = undefined;
        var down = null;
        var num = (param1);
        onIn = function (param1) {
            var _loc2_ = param1.target;
            if (_loc2_.text != "") {
                start.visible = true;
            }
            else {
                start.visible = false;
            }
        };
        down = function () {
            if (!SaveScene.slot) {
                var next = function () {
                    // var _loc1_: RaceScene = new RaceScene();
                    // iGlobal.Global.stage.addChild(_loc1_);
                    // Tool.Effect.fadeIn(_loc1_);
                    App.runScene(SceneConst.RaceScene);
                };
                SaveScene.slot = "slot" + num;
                iGlobal.Player.playerName = text.text;
                Tool.Effect.fadeOut(_this_, 10, next);
                // _this_.parent.removeChild(_this_);
            }
        };
        var sp = new egret.Sprite();
        sp.graphics.lineStyle(2, 7631988, 1);
        sp.graphics.drawRect(0, 0, 600, 100);
        this.addChild(sp);
        sp.x = this.startX;
        sp.y = this.startY + (num - 1) * this.Gap;
        sp["num"] = num;
        var name = new StringCell("角色", 150, 32);
        sp.addChild(name);
        name.x = 20;
        name.y = 10;
        text = iGlobal.Global.getTextField();
        text["selectable"] = true;
        text.type = egret.TextFieldType.INPUT;
        text.border = true;
        text.borderColor = (7631988);
        sp.addChild(text);
        text.x = 100;
        text.y = 10;
        start = new FlickerButton("新建", 100, 50);
        sp.addChild(start);
        start.x = 480;
        start.y = 5;
        start.visible = false;
        text.addEventListener(egret.Event.CHANGE, onIn, null);
        start.downFunction = down;
        _this_ = this;
    };
    SaveScene.prototype.drawOld = function (param1) {
        param1 = (param1);
        var _self__ = this;
        var sp = null;
        var _this_ = undefined;
        var down = null;
        var se = null;
        var deDown = null;
        var deleDown = null;
        var num = (param1);
        down = function () {
            if (!SaveScene.slot) {
                var next = function () {
                    // var _loc1_: iPanel.iScene.MainScene = new iPanel.iScene.MainScene();
                    // iGlobal.Global.mainScene = _loc1_;
                    // iGlobal.Global.stage.addChild(_loc1_);
                    // tool.Effect.fadeIn(_loc1_);
                    App.runScene(SceneConst.MainScene);
                };
                SaveScene.slot = "slot" + num;
                iGlobal.Player.load();
                Tool.Effect.fadeOut(_this_, 10, next);
            }
            this["setBefore"]();
        };
        deDown = function () {
            _this_.addChild(se);
            se.x = 250;
            se.y = 150;
            this["setBefore"]();
        };
        deleDown = function () {
            egret.localStorage.removeItem("slot" + num);
            _this_.removeChild(sp);
            _this_.drawSave(num);
            _this_.removeChild(se);
        };
        sp = new egret.Sprite();
        sp.graphics.lineStyle(2, 7631988, 1);
        sp.graphics.drawRect(0, 0, 600, 100);
        this.addChild(sp);
        sp.x = this.startX;
        sp.y = this.startY + (num - 1) * this.Gap;
        sp["num"] = num;
        var name = new StringCell("角色", 150, 32);
        sp.addChild(name);
        name.x = 20;
        name.y = 10;
        var text = new StringCell(this.sharedObject["userName"], 300, 32);
        sp.addChild(text);
        text.x = 100;
        text.y = 10;
        var time = new StringCell(this.sharedObject["time"], 200, 32);
        sp.addChild(time);
        time.x = 200;
        time.y = 50;
        var load = new FlickerButton("读取", 100, 40);
        sp.addChild(load);
        load.x = 480;
        load.y = 5;
        load.downFunction = down;
        _this_ = this;
        var dele = new FlickerButton("删除", 50, 20, 16);
        sp.addChild(dele);
        dele.x = 540;
        dele.y = 65;
        dele.downFunction = deDown;
        se = new ComfirmScene("确定删除?", deleDown);
        _this_ = this;
    };
    return SaveScene;
}(BaseScene));
__reflect(SaveScene.prototype, "SaveScene");
