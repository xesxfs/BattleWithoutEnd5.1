class RaceScene extends BaseScene {

	protected childrenCreated(): void {
		// this.selectRaceBtn.addEventListener("touchTap", () => {
		// 	App.runScene(SceneConst.MainScene);
		// }, this);

	}

	/**添加到场景中*/
	protected onEnable() {
		// iGlobal.Player.burn(this.chosenAge,this.chosenRace);
	}

	/**从场景中移除*/
	protected onRemove() {

	}


	public background: egret.Sprite;
	public human: RaceButton;
	public elf: RaceButton;
	public giant: RaceButton;
	public dwarf: RaceButton;
	public undeath: RaceButton;
	private agePanel: egret.Sprite;
	private infoPanel: egret.Sprite;
	private ageText: egret.TextField;
	private initialText: egret.TextField;
	private ageGrowText: egret.TextField;
	private chosenRace: iData.Race;
	private chosenAge: number = 10;
	private px: number = 50;
	private py: number = 150;
	private pg: number = 100;

	public constructor() {
		super();
		this.background = new egret.Sprite();
		this.human = new RaceButton("before_human", "after_human", iData.RaceList.HUMAN);
		this.elf = new RaceButton("before_elf", "after_elf", iData.RaceList.ELF);
		this.giant = new RaceButton("before_giant", "after_giant", iData.RaceList.GIANT);
		this.dwarf = new RaceButton("before_dwarf", "after_dwarf", iData.RaceList.DWARF);
		this.undeath = new RaceButton("before_undeath", "after_undeath", iData.RaceList.UNDEATH);
		this.background.graphics.beginFill(16777215, 1);
		this.background.graphics.drawRect(0, 0, 800, 600);
		this.background.graphics.endFill();
		this.addChild(this.background);
		// var _loc1_: egret.MovieClip = <any>new caption_mc();
		// this.addChild(_loc1_);
		// _loc1_.x = 150;
		// _loc1_.y = -30;
		this.setRaceButtons();
		this.setAgeButtons();
		this.setInfoPanel();
	}

	private setRaceButtons() {
		var _self__: any = this;
		var aa: Function = null;
		aa = function () {
			if (_self__.agePanel.visible == false) {
				_self__.agePanel.visible = true;
				Tool.Effect.fadeIn(_self__.agePanel, 10);
			}
			_self__.chosenRace = this["race"];
			_self__.updataInfo();
		};
		this.addChild(this.human);
		this.human.x = this.px;
		this.human.y = this.py;
		this.human.downFunction = aa;
		this.addChild(this.elf);
		this.elf.x = this.px + this.pg;
		this.elf.y = this.py;
		this.elf.downFunction = aa;
		this.addChild(this.giant);
		this.giant.x = this.px + this.pg * 2;
		this.giant.y = this.py;
		this.giant.downFunction = aa;
		this.addChild(this.undeath);
		this.undeath.x = this.px + this.pg * 3;
		this.undeath.y = this.py;
		this.undeath.downFunction = aa;
		this.addChild(this.dwarf);
		this.dwarf.x = this.px + this.pg * 4;
		this.dwarf.y = this.py;
		this.dwarf.downFunction = aa;
		var buttonGroup: ButtonGroup = new ButtonGroup();
		buttonGroup.addButton(this.human);
		buttonGroup.addButton(this.elf);
		buttonGroup.addButton(this.giant);
		buttonGroup.addButton(this.dwarf);
		buttonGroup.addButton(this.undeath);
	}

	private setAgeButtons() {
		var _self__: any = this;
		var p: PeopleModel = null;
		this.agePanel = new egret.Sprite();
		this.addChild(this.agePanel);
		this.agePanel.y = 350;
		this.agePanel.x = 80;
		var buttonGroup2: ButtonGroup = new ButtonGroup();
		var i: number = (0);
		while (i < 8) {
			var aa: Function = function () {
				if (_self__.infoPanel.visible == false) {
					_self__.infoPanel.visible = true;
					Tool.Effect.fadeIn(_self__.infoPanel, 10);
				}
				_self__.chosenAge = (this["age"]);
				_self__.updataInfo();
			};
			p = new PeopleModel(10 + i);
			this.agePanel.addChild(p);
			p.y = 0;
			p.x = i * 50;
			buttonGroup2.addButton(p);
			p.downFunction = aa;
			i++;
		}
		this.agePanel.visible = false;
	}

	private setInfoPanel() {
		var _self__: any = this;
		var _this_: any = undefined;
		var okDown: Function = <any>null;
		okDown = function () {
			var addMain: Function = <any>null;
			addMain = function (): any {
				var _loc1_: MainScene = <any>null;
				if (iGlobal.Global.sound_toggle) {
					// iGlobal.Global.soundOut();
				}
				if (iGlobal.Global.mainScene) {
					// iGlobal.Global.mainScene.visible = true;
					// Tool.Effect.fadeIn(iGlobal.Global.mainScene);
					App.runScene(SceneConst.MainScene)
				}
				else {
					// _loc1_ = new MainScene();
					// iGlobal.Global.mainScene = _loc1_;
					// iGlobal.Global.stage.addChild(_loc1_);
					// Tool.Effect.fadeIn(_loc1_);
					App.runScene(SceneConst.MainScene)
				}
			};
			// Tool.Effect.explodeOut(_this_, 2, 4294967295, addMain);
			iGlobal.Player.burn(_self__.chosenAge, _self__.chosenRace);
			if (iGlobal.Global.sound_toggle) {
				// iGlobal.Global.playSound();
			}
			if (iGlobal.Global.mainScene) {
				// iGlobal.Global.mainScene.visible = false;
				App.runScene(SceneConst.MainScene)
			}
			addMain();
		};
		this.infoPanel = new egret.Sprite();
		this.addChild(this.infoPanel);
		this.infoPanel.x = 80;
		this.infoPanel.y = 320;
		this.ageText = iGlobal.Global.getTextField();
		this.ageText.text = "年龄:10";
		this.infoPanel.addChild(this.ageText);
		this.initialText = iGlobal.Global.getTextField();
		this.initialText.text = "初始属性:";
		this.initialText.width = 420;
		this.infoPanel.addChild(this.initialText);
		this.initialText.y = 170;
		this.ageGrowText = iGlobal.Global.getTextField();
		this.ageGrowText.text = "年龄成长:";
		this.ageGrowText.width = 400;
		this.infoPanel.addChild(this.ageGrowText);
		this.ageGrowText.y = 220;
		var mention: egret.TextField = iGlobal.Global.getTextField(16);
		mention.width = 300;
		mention.text = "(升级时增长属性是当前年龄增长的1/4)";
		this.infoPanel.addChild(mention);
		mention.x = 100;
		mention.y = 260;
		var okButton: FlickerButton = new FlickerButton("确定", 250, 50);
		this.infoPanel.addChild(okButton);
		okButton.x = 100;
		okButton.y = 300;
		okButton.downFunction = okDown;
		_this_ = this;
		this.infoPanel.visible = false;
	}

	private updataInfo() {
		this.ageText.text = "年龄:" + this.chosenAge;
		var _loc1_: iData.BasicStatus = this.chosenRace.caculateStat(this.chosenAge);
		this.initialText.text = "初始属性:   力量 " + _loc1_.str + " 敏捷 " + _loc1_.dex + " 智力 " + _loc1_.intelligence + " 意志 " + _loc1_.will + " 幸运 " + _loc1_.luck;
		_loc1_ = this.chosenRace.ageupList[this.chosenAge - 10];
		this.ageGrowText.text = "年龄增长:   力量+" + _loc1_.str + " 敏捷+" + _loc1_.dex + " 智力+" + _loc1_.intelligence + " 意志+" + _loc1_.will + " 幸运+" + _loc1_.luck;
	}

}