var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var App = (function () {
    function App() {
    }
    App.getInstance = function () {
        if (App.instance == null) {
            App.instance = new App();
        }
        return App.instance;
    };
    App.prototype.startUp = function () {
        console.log("++++++++++++++++++++++++startUp");
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
}());
__reflect(App.prototype, "App");
