class App {
	public constructor() {

	}

	private static instance: App
	public static getInstance(): App {
	
		if (App.instance == null) {
			App.instance = new App();
		}
		return App.instance;
	}

	public startUp(): void {
		console.log("++++++++++++++++++++++++startUp");
		this.registAllScene();
		App.SceneManager.runScene(SceneConst.BeginScene);
	}

	private registAllScene() {
		let secen = App.SceneManager;
		secen.register(SceneConst.BeginScene, BeginScene);
		secen.register(SceneConst.SaveScene, SaveScene);
		secen.register(SceneConst.RaceScene, RaceScene);
		secen.register(SceneConst.MainScene, MainScene);
	}

	public static runScene(sceneId: number): BaseScene {
		return App.SceneManager.runScene(sceneId);
	}

	public static get LayerManager(): LayerManager {
		return LayerManager.getInstance();
	}

	public static get SceneManager(): SceneManager {
		return SceneManager.getInstance();
	}
}