module Tool {
	export class Effect extends egret.HashObject {

		public constructor() {
			super();
		}

		public static fadeIn(param1: egret.Sprite, param2: number = 10): any {
			var enter: Function = <any>null;
			var sprite: egret.Sprite = param1;
			var count: number = param2;
			enter = function (param1: egret.Event) {
				sprite.alpha = sprite.alpha + 1 / count;
				if (sprite.alpha >= 1) {
					sprite.removeEventListener(egret.Event.ENTER_FRAME, enter, null);
				}
			};
			sprite.alpha = 0;
			sprite.addEventListener(egret.Event.ENTER_FRAME, enter, null);
		}

		public static fadeOut(param1: egret.DisplayObject, param2: number = 10, param3: Function = null): any {
			var enter: Function = <any>null;
			var object: egret.DisplayObject = param1;
			var count: number = param2;
			var behaveFunction: Function = param3;
			enter = function (param1: egret.Event) {
				object.alpha = object.alpha - 1 / count;
				if (object.alpha <= 0) {
					object.removeEventListener(egret.Event.ENTER_FRAME, enter, null);
					if (object) {
						// if(flash.As3is(object,egret.Sprite))
						// {
						// 	(flash.As3As(object,egret.Sprite)).touchEnabled = true;
						// 	(flash.As3As(object,egret.Sprite)).touchChildren = true;
						// }
					}
					if (behaveFunction) {
						behaveFunction();
					}
				}
			};
			// if(flash.As3is(object,egret.Sprite))
			// {
			// 	(flash.As3As(object,egret.Sprite)).touchEnabled = false;
			// 	(flash.As3As(object,egret.Sprite)).touchChildren = false;
			// }
			object.addEventListener(egret.Event.ENTER_FRAME, enter, null);
		}

		public static explodeOut(param1: egret.DisplayObject, param2: number, param3: number, param4: Function = null): any {
			// var _loc5_:flash.BitmapData = new flash.BitmapData(param1.width,param1.height,true,0);
			// var _loc6_:number = flash.getBounds(param1,param1).x;
			// var _loc7_:number = flash.getBounds(param1,param1).y;
			// _loc5_.draw2(param1,new egret.Matrix(1,0,0,1,-_loc6_,-_loc7_));
			// var _loc8_:flash.Bitmap = new flash.Bitmap(_loc5_);
			// param1.parent.addChild(_loc8_);
			// param1.parent.removeChild(param1);
			// _loc8_.x = _loc6_;
			// _loc8_.y = _loc7_;
			// new tool.HideMessageThread(_loc8_,param2,param3,param4).run();
		}

		public static gradientIn(dis: egret.DisplayObjectContainer, count: number = 30): any {
			var fillType: string = null;
			var colors: Array<any> = null;
			var alphas: Array<any> = null;
			var ratios: Array<any> = null;
			var matr: egret.Matrix = null;
			var spreadMethod: string = null;
			var cover: egret.Sprite = null;
			var times: number = (0);
			var onEnterFrame: Function = null;
			var object = dis;
			var count: number = (count);
			onEnterFrame = function (e: egret.Event) {
				var _loc2_: number = 1200 / count;
				cover.graphics.clear();
				matr.createGradientBox(50 + times * _loc2_, 50 + times * _loc2_, 0, -25 - times * _loc2_ / 2, -25 - times * _loc2_ / 2);
				ratios = [0 + 255 / count * times, 255];
				// cover.graphics["beginGradientFill"](fillType,colors,alphas,ratios,matr,spreadMethod);
				cover.graphics.drawCircle(0, 0, 100 + times * _loc2_);
				times++;
				if (times > count) {
					object.removeEventListener(egret.Event.ENTER_FRAME, onEnterFrame, null);
					object.cacheAsBitmap = false;
					object.mask = null;
					object.removeChild(cover);
					cover = null;
				}
			};

			var rect: egret.Rectangle = object.getTransformedBounds(object);
			// fillType = flash.GradientType.RADIAL;
			colors = [16711680, 255];
			alphas = [100, 0];
			ratios = [0, 255];
			matr = new egret.Matrix();
			matr.createGradientBox(50, 50, 0, -25, -25);
			// spreadMethod = flash.SpreadMethod.PAD;
			cover = new egret.Sprite();
			// cover.graphics["beginGradientFill"](fillType,colors,alphas,ratios,matr,spreadMethod);
			cover.graphics.drawCircle(0, 0, 100);
			object.addChild(cover);
			cover.cacheAsBitmap = true;
			object.cacheAsBitmap = true;
			object.mask = cover;
			cover.x = object.stage.stageWidth / 2;
			cover.y = object.stage.stageHeight / 2;
			times = (1);
			object.addEventListener(egret.Event.ENTER_FRAME, onEnterFrame, null);
		}

		public static gradientInOutsideFirst(param1: egret.Sprite, param2: number, param3: number, param4: number, param5: number) {
			// param2 = flash.checkInt(param2);
			// param3 = flash.checkInt(param3);
			// param4 = flash.checkInt(param4);
			// param5 = flash.checkInt(param5);
			// var fillType:string = <any>null;
			// var colors:Array<any> = <any>null;
			// var alphas:Array<any> = <any>null;
			// var ratios:Array<any> = <any>null;
			// var matr:egret.Matrix = <any>null;
			// var spreadMethod:string = <any>null;
			// var cover:egret.Sprite = <any>null;
			// var times:number = flash.checkInt(0);
			// var onEnterFrame:Function = <any>null;
			// var object:egret.Sprite = param1;
			// var count:number = flash.checkInt(param2);
			// var size:number = flash.checkInt(param3);
			// var px:number = flash.checkInt(param4);
			// var py:number = flash.checkInt(param5);
			// onEnterFrame = function (param1:egret.Event)
			// {
			// 	var _loc2_:number = size / count;
			// 	cover.graphics.clear();
			// 	matr.createGradientBox(size,size,0,-size / 2,-size / 2);
			// 	ratios = [255 - 255 / count * times,255 - 255 / count * times / 5 * 4];
			// 	cover.graphics["beginGradientFill"](fillType,colors,alphas,ratios,matr,spreadMethod);
			// 	cover.graphics.drawCircle(0,0,size);
			// 	times++;
			// 	if(times > count)
			// 	{
			// 		object.removeEventListener(egret.Event.ENTER_FRAME,onEnterFrame,null);
			// 		object.cacheAsBitmap = false;
			// 		object.mask = null;
			// 		object.removeChild(cover);
			// 		cover = null;
			// 	}
			// };
			// if(object.mask)
			// {
			// 	return ;
			// }
			// var rect:egret.Rectangle = flash.getBounds(object,object);
			// fillType = flash.GradientType.RADIAL;
			// colors = [16711680,255];
			// alphas = [0,100];
			// ratios = [255,255];
			// matr = new egret.Matrix();
			// matr.createGradientBox(size,size,0,-size / 2,-size / 2);
			// spreadMethod = flash.SpreadMethod.PAD;
			// cover = new egret.Sprite();
			// cover.graphics["beginGradientFill"](fillType,colors,alphas,ratios,matr,spreadMethod);
			// cover.graphics.drawCircle(0,0,size);
			// object.addChild(cover);
			// cover.cacheAsBitmap = true;
			// object.cacheAsBitmap = true;
			// object.mask = cover;
			// cover.x = px;
			// cover.y = py;
			// times = flash.checkInt(1);
			// object.addEventListener(egret.Event.ENTER_FRAME,onEnterFrame,null);
		}

	}
}

