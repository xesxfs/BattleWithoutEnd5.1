module Tool {
	export class MyMath extends egret.HashObject {

		public constructor() {
			super();

		}

		/**平衡随机 */
		public static balanceRandom(brandom: number): number {
			var _loc9_: number = 0;
			var _loc11_: number = 0;
			var _loc2_: number = brandom;
			if (brandom < 50) {
				_loc2_ = Math.round(100 - brandom);
			}
			var _loc3_: number = (3 * _loc2_ - 100) / (100 - _loc2_);
			var _loc4_: Array<any> = new Array();
			var _loc5_: Array<any> = new Array();
			var _loc6_: number = 100;
			var _loc7_: number = 1;
			var _loc8_: number = _loc7_ / _loc6_;
			_loc9_ = 0;
			while (_loc9_ < _loc6_) {
				_loc11_ = _loc8_ * _loc9_;
				_loc4_[_loc9_] = (1 - _loc11_) * Math.pow(_loc11_, _loc3_);
				if (_loc9_ == 0) {
					_loc5_[_loc9_] = _loc4_[_loc9_];
				}
				else {
					_loc5_[_loc9_] = _loc5_[_loc9_ - 1] + _loc4_[_loc9_];
				}
				_loc9_++;
			}

			var _loc10_: number = Math.random() * _loc5_[_loc6_ - 1];
			_loc9_ = 0;
			while (_loc9_ < _loc6_) {
				if (_loc10_ < _loc5_[_loc9_]) {
					if (brandom < 50) {
						return 1 - _loc8_ * _loc9_;
					}
					return _loc8_ * _loc9_;
				}
				_loc9_++;
			}
		}

		public static DrawSector(param1: egret.Shape, param2: number = 200, param3: number = 200, param4: number = 100, param5: number = 27, param6: number = 270, param7: number = 16711680) {
			// var _loc11_:any = undefined;
			// var _loc12_:any = undefined;
			// var _loc13_:any = undefined;
			// var _loc14_:any = undefined;
			// var _loc15_:any = undefined;
			// param1.graphics.beginFill(param7);
			// param1.graphics.lineStyle(0,16711680);
			// param1.graphics.moveTo(param2,param3);
			// param5 = Math.abs(param5) > 360?flash.trannumber(360):flash.trannumber(param5);
			// var _loc8_:number = Math.ceil(Math.abs(param5) / 45);
			// var _loc9_:number = param5 / _loc8_;
			// _loc9_ = _loc9_ * Math.PI / 180;
			// param6 = param6 * Math.PI / 180;
			// param1.graphics.lineTo(param2 + param4 * Math.cos(param6),param3 + param4 * Math.sin(param6));
			// var _loc10_:any = 1;
			// while(_loc10_ <= _loc8_)
			// {
			// 	param6 = param6 + _loc9_;
			// 	_loc11_ = param6 - _loc9_ / 2;
			// 	_loc12_ = param2 + param4 / Math.cos(_loc9_ / 2) * Math.cos(_loc11_);
			// 	_loc13_ = param3 + param4 / Math.cos(_loc9_ / 2) * Math.sin(_loc11_);
			// 	_loc14_ = param2 + param4 * Math.cos(param6);
			// 	_loc15_ = param3 + param4 * Math.sin(param6);
			// 	param1.graphics.curveTo(_loc12_,_loc13_,_loc14_,_loc15_);
			// 	_loc10_++;
			// }
			// if(param5 != 360)
			// {
			// 	param1.graphics.lineTo(param2,param3);
			// }
			// param1.graphics.endFill();
		}

		public static FirstLetterToUpper(str: string): string {
			var strs: Array<string> = str.split("");
			strs[0] = strs[0].toUpperCase();
			return strs.join("");
		}

		public static StringFormChange(param1: string, param2: string, param3: string): string {
			var _loc4_: Array<any> = param1.split(param2);
			return _loc4_.join(param3);
		}

		public static cast(param1: string): string {
			var _loc2_: egret.ByteArray = new egret.ByteArray();
			// _loc2_.writeMultiByte(param1 + "@","");
			// var _loc3_:string = "";
			// var _loc4_:number = 0;
			// while(_loc4_ < _loc2_.length)
			// {
			// 	_loc3_ = _loc3_ + (_loc2_[_loc4_].toString(16) + " ");
			// 	_loc4_++;
			// }
			// return _loc3_;
			return
		}

		public static encryptNum(param1: number): number {
			return param1 / 2 + 1;
		}

		public static decryptNum(param1: number): number {
			return (param1 - 1) * 2;
		}

		public static encryptInt(param1: number): number {

			return param1 + 5;
		}

		public static decryptInt(param1: number): number {

			return param1 - 5;
		}

	}
}

