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
var SceneManager = (function (_super) {
    __extends(SceneManager, _super);
    function SceneManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //场景类定义列表
        _this.sceneClassList = {};
        //场景实例列表
        _this.sceneList = {};
        return _this;
    }
    /**
     * 注册场景
     * @sceneID 场景ID
     * @sceneClass 场景类定义
     */
    SceneManager.prototype.register = function (sceneID, sceneClass) {
        this.sceneClassList[sceneID] = sceneClass;
    };
    /**
     * 运行场景
     * @sceneID 场景ID
     * @return 返回当前场景
     */
    SceneManager.prototype.runScene = function (sceneID) {
        if (this.curScene) {
            App.LayerManager.sceneLayer.removeChild(this.curScene);
        }
        //获取运行场景，若不存在，则新建
        var nextScene = this.sceneList[sceneID];
        if (nextScene == null) {
            var clz = this.sceneClassList[sceneID];
            if (clz != null) {
                nextScene = new clz();
                this.sceneList[sceneID] = nextScene;
            }
            else {
                console.error("当前场景不存在:", sceneID);
                return null;
            }
        }
        //设置当前场景
        this.curScene = nextScene;
        //显示场景
        App.LayerManager.sceneLayer.addChild(this.curScene);
        return this.curScene;
    };
    /**
     * 获取场景
     * @sceneID 场景ID
     * @return 返回场景
     */
    SceneManager.prototype.getScene = function (sceneID) {
        return this.sceneList[sceneID];
    };
    /**
     *
     * @param sceneID
     * @param scene
     */
    SceneManager.prototype.setScene = function (sceneID, scene) {
        this.sceneList[sceneID] = scene;
    };
    /**
     * 获取当前场景
     */
    SceneManager.prototype.getCurScene = function () {
        return this.curScene;
    };
    return SceneManager;
}(SingleClass));
__reflect(SceneManager.prototype, "SceneManager");
