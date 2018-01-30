class BeginScene extends BaseScene {
	public constructor() {
		super();
		this.skinName = "BeginSceneSkin";
	}

	protected childrenCreated(): void {
		super.childrenCreated();
	}
	private beginBtn: eui.Button;

	/**添加到场景中*/
	protected onEnable() {
		this.beginBtn.addEventListener("touchTap", () => {
			App.SceneManager.runScene(SceneConst.SaveScene);
		}, this);
		var down: Function = null;
		var onMouseDown: Function = null;
		down = function () {
			var next: Function = null;
			// next = function () {
			// Tool.Effect.fadeIn(_loc1_);				
			App.SceneManager.runScene(SceneConst.SaveScene);
			// };
		}

		var begin: FlickerButton = new FlickerButton("开始游戏", 200, 80, 40);
		this.addChild(begin);
		begin.x = (this.stage.width) / 2;
		begin.y = 350;
		begin.downFunction = down;
	}

	/**从场景中移除*/
	protected onRemove() {

	}

}