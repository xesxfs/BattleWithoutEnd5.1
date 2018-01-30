class ForgeButton extends ButtonCell {
	private R: number = 50;
	public constructor() {
		super();
		this.touchEnabled = true;
		let bitmapData = RES.getRes("mc_forge");
		let bf = new egret.Bitmap(bitmapData);
		let af = new egret.Bitmap(bitmapData);

		this.before.addChild(bf);
		this.after.addChild(af);
		bf.height = this.R;
		bf.width = this.R;
		af.height = this.R;
		af.width = this.R;

	}
}