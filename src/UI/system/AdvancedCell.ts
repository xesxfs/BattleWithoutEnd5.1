class AdvancedCell extends ButtonCell {

	public infoWindow: InfoWindow;
	public text: egret.TextField;
	public html: string;

	public constructor(w: number, h: number) {
		super();
		// param1 = flash.checkInt(param1);
		// param2 = flash.checkInt(param2);
		this.before.graphics.lineStyle(1, 13487565, 0.8);
		this.before.graphics.beginFill(16777215, 0.95);
		this.before.graphics.drawRect(0, 0, w, h);
		this.before.graphics.endFill();
		
		this.after.graphics.lineStyle(1, 13487565, 0.8);
		this.after.graphics.beginFill(14922250, 0.95);
		this.after.graphics.drawRect(0, 0, w, h);
		this.after.graphics.endFill();
	}

	public setAfter() {
		super.setAfter();
		// this.filters = [new flash.GlowFilter(5066061,0.66,13,13)];
		// if(this.parent)
		// {
		// 	this.parent.addChildAt(this,this.parent.numChildren - 1);
		// }
		this.addInfoWindow();
		// this.text["transform"].colorTransform = new flash.ColorTransform(0,0,0,1,255,255,255,0);
	}

	public setBefore() {
		super.setBefore();
		this.filters = [];
		this.removeInfoWindow();
		// this.text["transform"].colorTransform = new flash.ColorTransform();
	}

	protected addInfoWindow() {
		this.addChild(this.infoWindow);
		this.infoWindow.x = -135;
		this.infoWindow.y = 0;
		var _loc1_: egret.Point = this.localToGlobal(0, 0);
		if (_loc1_.y + this.infoWindow.height > iGlobal.Global.stage.stageHeight) {
			_loc1_ = this.globalToLocal(0, iGlobal.Global.stage.stageHeight - this.infoWindow.height);
			this.infoWindow.y = _loc1_.y;
		}
	}

	protected removeInfoWindow() {
		if (this.contains(this.infoWindow)) {
			this.removeChild(this.infoWindow);
		}
	}
}