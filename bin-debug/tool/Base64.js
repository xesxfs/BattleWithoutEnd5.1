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
    var Base64 = (function (_super) {
        __extends(Base64, _super);
        function Base64() {
            var _this = _super.call(this) || this;
            _this = _super.call(this) || this;
            return _this;
        }
        Base64.isWhitespace = function (param1) {
            switch (param1) {
                case " ":
                case "\t":
                case "\r":
                case "\n":
                case "\f":
                    return true;
                default:
                    return false;
            }
        };
        Base64.Encode = function (param1, param2) {
            if (param2 === void 0) { param2 = false; }
            Tool.Base64._linebreaks = param2;
            return Tool.Base64._encodeBytes(param1);
        };
        Base64.Decode = function (param1) {
            return Tool.Base64._decodeSring(param1);
        };
        Base64._buildB64Lookup = function () {
            var _loc1_ = new Object();
            var _loc2_ = 0;
            while (_loc2_ < Tool.Base64._b64Chars.length) {
                _loc1_[Tool.Base64._b64Chars[_loc2_]] = _loc2_;
                _loc2_++;
            }
            return _loc1_;
        };
        Base64._isBase64 = function (param1) {
            return Tool.Base64._b64Lookup[param1] != undefined;
        };
        Base64._encodeBytes = function (param1) {
            var _loc3_ = 0;
            var _loc5_ = null;
            var _loc2_ = "";
            var _loc4_ = 0;
            param1.position = 0;
            // while(param1.position < param1.length)
            // {
            // 	_loc3_ = flash.checkUint(param1.bytesAvailable >= 3?flash.tranint(3):flash.tranint(param1.bytesAvailable));
            // 	_loc5_ = new flash.ByteArray();
            // 	param1.readBytes(_loc5_,0,_loc3_);
            // 	_loc2_ = _loc2_ + tool.Base64._b64EncodeBuffer(_loc5_);
            // 	_loc4_ = flash.checkUint(_loc4_ + 4);
            // 	if(tool.Base64._linebreaks && _loc4_ % 76 == 0)
            // 	{
            // 		_loc2_ = _loc2_ + "\n";
            // 		_loc4_ = flash.checkUint(0);
            // 	}
            // }
            return _loc2_.toString();
        };
        Base64._b64EncodeBuffer = function (param1) {
            var _loc2_ = "";
            _loc2_ = _loc2_ + Tool.Base64._b64Chars[param1[0] >> 2];
            switch (param1.length) {
                case 1:
                    _loc2_ = _loc2_ + Tool.Base64._b64Chars[param1[0] << 4 & 48];
                    _loc2_ = _loc2_ + "==";
                    break;
                case 2:
                    _loc2_ = _loc2_ + Tool.Base64._b64Chars[param1[0] << 4 & 48 | param1[1] >> 4];
                    _loc2_ = _loc2_ + Tool.Base64._b64Chars[param1[1] << 2 & 60];
                    _loc2_ = _loc2_ + "=";
                    break;
                case 3:
                    _loc2_ = _loc2_ + Tool.Base64._b64Chars[param1[0] << 4 & 48 | param1[1] >> 4];
                    _loc2_ = _loc2_ + Tool.Base64._b64Chars[param1[1] << 2 & 60 | param1[2] >> 6];
                    _loc2_ = _loc2_ + Tool.Base64._b64Chars[param1[2] & 63];
                    break;
                default:
                    console.log("Base64 byteBuffer outOfRange");
            }
            return _loc2_.toString();
        };
        Base64._decodeSring = function (param1) {
            var _loc7_ = null;
            var _loc2_ = "" + param1;
            var _loc3_ = new egret.ByteArray();
            var _loc4_ = "";
            var _loc5_ = _loc2_.length;
            var _loc6_ = 0;
            while (_loc6_ < _loc5_) {
                _loc7_ = _loc2_.charAt(_loc6_);
                if (!Tool.Base64.isWhitespace(_loc7_) && (Tool.Base64._isBase64(_loc7_) || _loc7_ == "=")) {
                    _loc4_ = _loc4_ + _loc7_;
                    if (_loc4_.length == 4) {
                        _loc3_.writeBytes(Tool.Base64._b64DecodeBuffer(_loc4_));
                        _loc4_ = "";
                    }
                }
                _loc6_++;
            }
            _loc3_.position = 0;
            return _loc3_;
        };
        Base64._b64DecodeBuffer = function (param1) {
            var _loc2_ = new egret.ByteArray();
            // var _loc3_:number = flash.checkUint(tool.Base64._b64Lookup[param1.charAt(0)]);
            // var _loc4_:number = flash.checkUint(tool.Base64._b64Lookup[param1.charAt(1)]);
            // var _loc5_:number = flash.checkUint(tool.Base64._b64Lookup[param1.charAt(2)]);
            // var _loc6_:number = flash.checkUint(tool.Base64._b64Lookup[param1.charAt(3)]);
            // _loc2_.writeByte(_loc3_ << 2 | _loc4_ >> 4);
            // if(param1.charAt(2) != "=")
            // {
            // 	_loc2_.writeByte(_loc4_ << 4 | _loc5_ >> 2);
            // }
            // if(param1.charAt(3) != "=")
            // {
            // 	_loc2_.writeByte(_loc5_ << 6 | _loc6_);
            // }
            return _loc2_;
        };
        Base64._linebreaks = false;
        return Base64;
    }(egret.HashObject));
    Tool.Base64 = Base64;
    __reflect(Base64.prototype, "Tool.Base64");
})(Tool || (Tool = {}));
Tool.Base64._b64Chars = new Array("A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "/");
// tool.Base64._b64Lookup = tool.Base64._buildB64Lookup();
