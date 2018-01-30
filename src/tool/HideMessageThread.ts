module Tool {
	export class HideMessageThread extends egret.HashObject {
		// public FILTER_BLUR:flash.BlurFilter;
		// public POINT_ZERO:egret.Point;
		// private message:egret.DisplayObject;
		// private wrapper:flash.Bitmap;
		// private parent:egret.DisplayObjectContainer;
		// private film:flash.BitmapData;
		// private particles:Array<tool.HideMessageParticle>;
		// private gap:number = 1;
		// private ignoreColor:number = 0;
		// private behaveFunction:Function;
		// private out:boolean = false;

		public constructor(param1:egret.DisplayObject,param2:number,param3:number,param4:Function = null)
		{
			super();
		
			// this.FILTER_BLUR = new flash.BlurFilter(4,4,flash.BitmapFilterQuality.LOW);
			// this.POINT_ZERO = new egret.Point();
			// this.message = param1;
			// this.parent = param1.parent;
			// this.particles = new Array<tool.HideMessageParticle>();
			// this.gap = flash.checkInt(param2);
			// this.ignoreColor = flash.checkUint(param3);
			// this.behaveFunction = param4;
		}

		public run()
		{
		// 	var _loc1_:egret.Stage = <any>null;
		// 	var _loc2_:number = flash.checkUint(0);
		// 	var _loc3_:number = <any>NaN;
		// 	var _loc4_:number = <any>NaN;
		// 	var _loc5_:number = <any>NaN;
		// 	var _loc6_:number = <any>NaN;
		// 	var _loc7_:number = flash.checkUint(0);
		// 	var _loc8_:number = flash.checkUint(0);
		// 	var _loc9_:any = null;
		// 	_loc1_ = this.message.stage;
		// 	_loc9_ = (<flash.Bitmap>(this.message)).bitmapData;
		// 	_loc3_ = (<flash.Bitmap>(this.message)).bitmapData.width;
		// 	_loc4_ = _loc9_.height;
		// 	_loc5_ = this.message.x;
		// 	_loc6_ = this.message.y;
		// 	_loc7_ = flash.checkUint(0);
		// 	while(_loc7_ < _loc3_)
		// 	{
		// 		_loc8_ = flash.checkUint(0);
		// 		while(_loc8_ < _loc4_)
		// 		{
		// 			_loc2_ = flash.checkUint(_loc9_.getPixel32(_loc7_,_loc8_));
		// 			if(_loc2_)
		// 			{
		// 				if(_loc2_ != this.ignoreColor)
		// 				{
		// 					this.particles.push(new tool.HideMessageParticle(_loc5_ + _loc7_,_loc6_ + _loc8_,_loc2_));
		// 				}
		// 			}
		// 			_loc8_ = flash.checkUint(_loc8_ + this.gap);
		// 		}
		// 		_loc7_ = flash.checkUint(_loc7_ + this.gap);
		// 	}
		// 	_loc9_.dispose();
		// 	this.film = new flash.BitmapData(_loc1_.stageWidth,_loc1_.stageHeight,true,0);
		// 	this.wrapper = new flash.Bitmap(this.film);
		// 	this.wrapper = new flash.Bitmap(this.film);
		// 	this.parent.addChild(this.wrapper);
		// 	this.parent.removeChild(this.message);
		// 	this.parent.addEventListener(egret.Event.ENTER_FRAME,flash.bind(this.step,this),null);
		// }

		// private step(param1:egret.Event = null)
		// {
		// 	var _loc2_:number = flash.checkUint(0);
		// 	var _loc3_:number = flash.checkUint(0);
		// 	var _loc4_:egret.Stage = <any>null;
		// 	var _loc5_:tool.HideMessageParticle = <any>null;
		// 	this.film["lock"]();
		// 	this.film["applyFilter"](this.film,this.film.rect,this.POINT_ZERO,this.FILTER_BLUR);
		// 	var _loc6_:number = flash.checkInt(1);
		// 	_loc3_ = flash.checkUint(this.particles.length);
		// 	_loc2_ = flash.checkUint(0);
		// 	while(_loc2_ < _loc3_)
		// 	{
		// 		_loc5_ = this.particles[_loc2_];
		// 		_loc5_.update();
		// 		this.film["setPixel32"](_loc5_.x,_loc5_.y,_loc5_.color);
		// 		if(<any>!this.film.rect.contains(_loc5_.x,_loc5_.y))
		// 		{
		// 			this.particles.splice(_loc2_,1);
		// 			_loc2_--;
		// 			_loc3_ = flash.checkUint(this.particles.length);
		// 		}
		// 		_loc2_ = flash.checkUint(_loc2_ + _loc6_);
		// 	}
		// 	this.film["unlock"]();
		// 	if(_loc3_ > 20)
		// 	{
		// 		if(_loc3_ < 50)
		// 		{
		// 			if(<any>!this.out)
		// 			{
		// 				console.log("run");
		// 				tool.Effect.fadeOut(this.wrapper,30,this.behaveFunction);
		// 				this.out = true;
		// 			}
		// 		}
		// 	}
		// 	else
		// 	{
		// 		this.parent.removeEventListener(egret.Event.ENTER_FRAME,flash.bind(this.step,this),null);
		// 		this.finalize();
		// 	}
		}

		public finalize()
		{
			// this.parent.removeChild(this.wrapper);
			// this.film.dispose();
			// this.parent = null;
			// this.wrapper = null;
			// this.message = null;
		}

	}
}

