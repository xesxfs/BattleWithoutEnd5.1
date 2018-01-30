module Tool {
	export class HideMessageParticle extends egret.HashObject {
		public x:number = 0;
		public y:number = 0;
		public ax:number = 0;
		public ay:number = 0;
		public vx:number = 0;
		public vy:number = 0;
		public color:number = 0;

		public constructor(param1:number,param2:number,param3:number)
		{
			super();
			super();
			var _loc4_:number =0;
			var _loc5_:number = 0;
			_loc4_ = Math.random() * 5;
			_loc5_ = Math.random() * Math.PI * 2;
			this.ax = Math.cos(_loc5_) * _loc4_;
			this.ay = Math.sin(_loc5_) * _loc4_;
			this.x = param1;
			this.y = param2;
			this.color = param3;
			this.vx = 0;
			this.vy = 0;
		}

		public update()
		{
			this.vx = this.vx + this.ax;
			this.vy = this.vy + this.ay;
			this.x = this.x + this.vx;
			this.y = this.y + this.vy;
		}

	}
}

