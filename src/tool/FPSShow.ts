module Tool {
	export class FPSShow extends egret.Sprite {
		private txt:egret.TextField;
		private count:number = 0;

		public constructor()
		{
			super();
			this.init();
		}

		private init():any
		{
			var _self__:any = this;
			// this.txt = new flash.TextField();
			// this.txt.textColor = flash.checkUint(16711680);
			// _self__.addChild(this.txt);
			// var _loc1_:egret.Timer = new egret.Timer(1000);
			// _loc1_.addEventListener(egret.TimerEvent.TIMER,flash.bind(this.timerHandler,this),null);
			// this.addEventListener(egret.Event.ENTER_FRAME,flash.bind(this.onEnterFrame,this),null);
			// _loc1_.start();
			this.touchChildren = false;
			this.touchEnabled = false;
		}

		private timerHandler(param1:egret.TimerEvent)
		{
			this.txt.text = "FPS:" + this.count;
			// this.count = flash.checkInt(0);
		}

		private onEnterFrame(param1:egret.Event)
		{
			this.count++;
		}

	}
}

// flash.extendsClass("tool.FPSShow","egret.Sprite")
