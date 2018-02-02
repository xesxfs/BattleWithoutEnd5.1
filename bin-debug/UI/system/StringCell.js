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
var StringCell = (function (_super) {
    __extends(StringCell, _super);
    function StringCell(text, width, size) {
        if (width === void 0) { width = 100; }
        if (size === void 0) { size = 22; }
        var _this = _super.call(this, 0, 0) || this;
        _this.size = 0;
        _this.w = 0;
        _this.size = size;
        _this.w = width;
        _this.textField = iGlobal.Global.getTextField(size);
        _this.addChild(_this.textField);
        _this.setText(text);
        _this.touchChildren = false;
        _this.touchEnabled = false;
        return _this;
    }
    StringCell.prototype.setText = function (text) {
        // var size: number = 0;
        this.graphics.clear();
        // if (this.contains(this.textField)) {
        // 	this.removeChild(this.textField);
        // }
        // this.textField = iGlobal.Global.getTextField(this.size);
        // this.addChild(this.textField);
        // this.textField.width = this.w + 100;
        this.textField.textFlow = iGlobal.Global.htmlParse.parser(text);
        // this.textField.width = this.textField.textWidth + 6;
        // if (this.textField.width > this.w) {
        // 	this.removeChild(this.textField);
        // 	size = 1;
        // 	while (size < this.size) {
        // 		this.textField = iGlobal.Global.getTextField(this.size - size);
        // 		this.textField.width = this.w + 100;
        // 		this.textField.textFlow = iGlobal.Global.htmlParse.parser(text);
        // 		this.textField.width = this.textField.textWidth + 6;
        // 		if (this.textField.width < this.w) {
        // 			break;
        // 		}
        // 		size++;
        // 	}
        // 	this.addChild(this.textField);
        // }
    };
    return StringCell;
}(BasicCell));
__reflect(StringCell.prototype, "StringCell");
