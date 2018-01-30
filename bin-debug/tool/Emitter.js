var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author chenwei
 *
 */
var Emitter = (function () {
    function Emitter() {
    }
    Emitter.emit = function (type, data) {
        var event = new egret.Event(type);
        event.data = data;
        this._dispatcher.dispatchEvent(event);
    };
    Emitter.dispatchEvent = function (type, data) {
        this.emit(type, data);
    };
    Emitter.addEventListener = function (type, listener, thisObject, useCapture, priority) {
        this._dispatcher.addEventListener(type, listener, thisObject, useCapture, priority);
    };
    Emitter.once = function (type, listener, thisObject, useCapture, priority) {
        this._dispatcher.once(type, listener, thisObject, useCapture, priority);
    };
    Emitter.on = function (type, listener, thisObject, useCapture, priority) {
        this.addEventListener(type, listener, thisObject, useCapture, priority);
    };
    Emitter.removeEventListener = function (type, listener, thisObject, useCapture) {
        this._dispatcher.removeEventListener(type, listener, thisObject, useCapture);
    };
    Emitter._dispatcher = new egret.EventDispatcher();
    return Emitter;
}());
__reflect(Emitter.prototype, "Emitter");
