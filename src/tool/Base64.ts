module Tool {
	export class Base64 extends egret.HashObject {
		public static _b64Chars:Array<any>;
		public static _b64Lookup:any;
		public static _linebreaks:boolean = false;

		public constructor()
		{
			super();
			super();
		}

		public static isWhitespace(param1:string):boolean
		{
			switch(param1)
			{
			case " " :
			case "\t" :
			case "\r" :
			case "\n" :
			case "\f" :
				return true;
			default :
				return false;
			}
		}

		public static Encode(param1:egret.ByteArray,param2:boolean = false):string
		{
			Tool.Base64._linebreaks = param2;
			return Tool.Base64._encodeBytes(param1);
		}

		public static Decode(param1:string):egret.ByteArray
		{
			return Tool.Base64._decodeSring(param1);
		}

		private static _buildB64Lookup():any
		{
			var _loc1_:any = new Object();
			var _loc2_:number = <any>0;
			while(_loc2_ < Tool.Base64._b64Chars.length)
			{
				_loc1_[Tool.Base64._b64Chars[_loc2_]] = _loc2_;
				_loc2_++;
			}
			return _loc1_;
		}

		private static _isBase64(param1:string):boolean
		{
			return Tool.Base64._b64Lookup[param1] != undefined;
		}

		private static _encodeBytes(param1:egret.ByteArray):string
		{
			var _loc3_:number = 0;
			var _loc5_:egret.ByteArray = null;
			var _loc2_:any = "";
			var _loc4_:number = 0;
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
		}

		private static _b64EncodeBuffer(param1:egret.ByteArray):string
		{
			var _loc2_:any = <any>"";
			_loc2_ = _loc2_ + Tool.Base64._b64Chars[param1[0] >> 2];
			switch(param1.length)
			{
			case 1 :
				_loc2_ = _loc2_ + Tool.Base64._b64Chars[param1[0] << 4 & 48];
				_loc2_ = _loc2_ + "==";
				break;
			case 2 :
				_loc2_ = _loc2_ + Tool.Base64._b64Chars[param1[0] << 4 & 48 | param1[1] >> 4];
				_loc2_ = _loc2_ + Tool.Base64._b64Chars[param1[1] << 2 & 60];
				_loc2_ = _loc2_ + "=";
				break;
			case 3 :
				_loc2_ = _loc2_ + Tool.Base64._b64Chars[param1[0] << 4 & 48 | param1[1] >> 4];
				_loc2_ = _loc2_ + Tool.Base64._b64Chars[param1[1] << 2 & 60 | param1[2] >> 6];
				_loc2_ = _loc2_ + Tool.Base64._b64Chars[param1[2] & 63];
				break;
			default :
				console.log("Base64 byteBuffer outOfRange");
			}
			return _loc2_.toString();
		}

		private static _decodeSring(param1:string):egret.ByteArray
		{
			var _loc7_:string = <any>null;
			var _loc2_:string = "" + param1;
			var _loc3_:egret.ByteArray = new egret.ByteArray();
			var _loc4_:string = "";
			var _loc5_:number = _loc2_.length;
			var _loc6_:number = 0;
			while(_loc6_ < _loc5_)
			{
				_loc7_ = _loc2_.charAt(_loc6_);
				if(<any>!Tool.Base64.isWhitespace(_loc7_) && (Tool.Base64._isBase64(_loc7_) || _loc7_ == "="))
				{
					_loc4_ = _loc4_ + _loc7_;
					if(_loc4_.length == 4)
					{
						_loc3_.writeBytes(Tool.Base64._b64DecodeBuffer(_loc4_));
						_loc4_ = "";
					}
				}
				_loc6_++;
			}
			_loc3_.position = 0;
			return _loc3_;
		}

		private static _b64DecodeBuffer(param1:string):egret.ByteArray
		{
			var _loc2_:egret.ByteArray = new egret.ByteArray();
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
		}

	}
}

Tool.Base64._b64Chars = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","+","/");
// tool.Base64._b64Lookup = tool.Base64._buildB64Lookup();
