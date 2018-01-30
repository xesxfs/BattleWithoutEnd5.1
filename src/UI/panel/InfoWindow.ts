class InfoWindow extends BasicCell {
	public constructor(width: number, height: number) {
		super(width, height);
		this.touchEnabled = false;
		this.touchChildren = false;
	}
	public draw(width: number, height: number) {
		this.graphics.lineStyle(1, 13487565, 0.8);
		super.draw(width, height);
		this.filters = [new egret.GlowFilter(5066061, 0.66, 13, 13)];
	}
}