var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var iData;
(function (iData) {
    var iPlayer;
    (function (iPlayer) {
        var Title = (function () {
            function Title(name, realName, description, statMulList, maxFix, countFix, behaveFunction) {
                if (maxFix === void 0) { maxFix = 0; }
                if (countFix === void 0) { countFix = 0; }
                if (behaveFunction === void 0) { behaveFunction = null; }
                this.maxFix = 0;
                this.countFix = 0;
                this.max = 0;
                this.count = 0;
                this.isGot = false;
                this.name = name;
                this.realName = realName;
                this.description = description;
                this.statMulList = statMulList;
                this.maxFix = maxFix;
                this.countFix = countFix;
                this.behaveFunction = behaveFunction;
            }
            Title.prototype.setGot = function () {
                if (!this.isGot) {
                    this.isGot = true;
                    if (MainScene.allInfoPanel) {
                        MainScene.allInfoPanel.addText("<font color=\'" + iData.iItem.Equipment.ORANGE + "\'>You get Title &lt;" + this.name + "&gt; </font>");
                    }
                    if (this.behaveFunction) {
                        this.behaveFunction();
                    }
                    if (MainScene.otherPanel) {
                        if (MainScene.otherPanel.titleWindow) {
                            MainScene.otherPanel.titleWindow.update();
                        }
                    }
                }
            };
            Title.prototype.updateInfo = function (max, count) {
                if (max === void 0) { max = 0; }
                if (count === void 0) { count = 0; }
                if (max > this.max) {
                    this.max = max;
                }
                if (count < 0) {
                    this.count = 0;
                }
                else {
                    this.count = this.count + count;
                }
                if (this.isGot) {
                    return;
                }
                if (this.count >= this.countFix && this.max >= this.maxFix) {
                    this.setGot();
                }
            };
            Title.prototype.getDescription = function () {
                var desc = "";
                desc = desc + ("<p align=\'center\'>" + this.description + "</p>");
                desc = desc + "--------------<br/>";
                if (this.maxFix != 0) {
                    desc = desc + ("记录:" + this.max + "<br/>");
                    desc = desc + "--------------<br/>";
                }
                if (this.countFix != 0) {
                    desc = desc + ("记录:" + this.count + "<br/>");
                    desc = desc + "--------------<br/>";
                }
                var length = this.statMulList.length;
                var i = 0;
                while (i < length) {
                    if (this.statMulList[i].add > 0) {
                        desc = desc + ("<font size=\'20\' color=\'" + iData.iItem.Equipment.GREEN + "\'>  " + Tool.MyMath.FirstLetterToUpper(this.statMulList[i].statTranslate()) + " +" + this.statMulList[i].add + "</font><br/>");
                    }
                    else if (this.statMulList[i].add < 0) {
                        desc = desc + ("<font size=\'20\' color=\'#ff4040\'>  " + Tool.MyMath.FirstLetterToUpper(this.statMulList[i].statTranslate()) + " " + this.statMulList[i].add + "</font><br/>");
                    }
                    if (this.statMulList[i].mul > 1) {
                        desc = desc + ("<font size=\'20\' color=\'" + iData.iItem.Equipment.GREEN + "\'>  " + Tool.MyMath.FirstLetterToUpper(this.statMulList[i].statTranslate()) + " x" + this.statMulList[i].mul + "</font><br/>");
                    }
                    else if (this.statMulList[i].mul < 1) {
                        desc = desc + ("<font size=\'20\' color=\'#ff4040\'>  " + Tool.MyMath.FirstLetterToUpper(this.statMulList[i].statTranslate()) + " x" + this.statMulList[i].mul + "</font><br/>");
                    }
                    i++;
                }
                return desc;
            };
            Title.prototype.save = function () {
                var save = "";
                save = save + (this.max + "#" + this.count + "#");
                if (this.isGot) {
                    save = save + "1";
                }
                else {
                    save = save + "0";
                }
                return save;
            };
            Title.prototype.load = function (loadStr) {
                var arr = loadStr.split("#");
                this.max = parseInt(arr[0]);
                this.count = parseInt(arr[1]);
                if (parseInt(arr[2]) == 0) {
                    this.isGot = false;
                }
                else {
                    this.isGot = true;
                }
            };
            return Title;
        }());
        iPlayer.Title = Title;
        __reflect(Title.prototype, "iData.iPlayer.Title");
    })(iPlayer = iData.iPlayer || (iData.iPlayer = {}));
})(iData || (iData = {}));
