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
var Tool;
(function (Tool) {
    var MyEvent = (function (_super) {
        __extends(MyEvent, _super);
        function MyEvent(even) {
            return _super.call(this, even) || this;
        }
        return MyEvent;
    }(egret.Event));
    Tool.MyEvent = MyEvent;
    __reflect(MyEvent.prototype, "Tool.MyEvent");
})(Tool || (Tool = {}));
Tool.MyEvent.Change = "change";
Tool.MyEvent.Update = "myupdate";
Tool.MyEvent.MyScroll = "myScroll";
// flash.extendsClass("tool.MyEvent","egret.Event")
