var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ButtonGroup = (function () {
    function ButtonGroup() {
        this.buttonList = new Array();
    }
    ButtonGroup.prototype.addButton = function (cell) {
        var length = this.buttonList.length;
        var idx = 0;
        while (idx < length) {
            if (this.buttonList[idx] == cell) {
                return false;
            }
            idx++;
        }
        this.buttonList.push(cell);
        cell.buttonGroup = this;
        return true;
    };
    ButtonGroup.prototype.setDown = function (cell) {
        var length = this.buttonList.length;
        var idx = 0;
        while (idx < length) {
            if (this.buttonList[idx] == cell) {
                cell.setDown();
            }
            else {
                this.buttonList[idx].setBefore();
            }
            idx++;
        }
    };
    return ButtonGroup;
}());
__reflect(ButtonGroup.prototype, "ButtonGroup");
