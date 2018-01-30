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
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        return _super.call(this) || this;
    }
    App.prototype.startUp = function () {
        this.registAllScene();
        App.SceneManager.runScene(SceneConst.BeginScene);
    };
    App.prototype.registAllScene = function () {
        var secen = App.SceneManager;
        secen.register(SceneConst.BeginScene, BeginScene);
        secen.register(SceneConst.SaveScene, SaveScene);
        secen.register(SceneConst.RaceScene, RaceScene);
        secen.register(SceneConst.MainScene, MainScene);
    };
    App.runScene = function (sceneId) {
        return App.SceneManager.runScene(sceneId);
    };
    Object.defineProperty(App, "LayerManager", {
        get: function () {
            return LayerManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(App, "SceneManager", {
        get: function () {
            return SceneManager.getInstance();
        },
        enumerable: true,
        configurable: true
    });
    return App;
}(SingleClass));
__reflect(App.prototype, "App");
