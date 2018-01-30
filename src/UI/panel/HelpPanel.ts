class HelpPanel extends BasicCell {
	public constructor() {
		super(550, 600);
		this.graphics.lineStyle(2, 7631988);
		this.graphics.drawRect(0, 0, 550, 600);
		this.init();
	}

	private init() {
		var _self_ = this;
		var hideDown: Function = null;
		hideDown = function () {
			_self_.visible = false;
		};
		var title: StringCell = new StringCell("帮助", 200, 36);
		this.addChild(title);
		title.x = 230;
		title.y = 10;
		var hide: FlickerButton = new FlickerButton("退出", 100, 48);
		this.addChild(hide);
		hide.x = 420;
		hide.y = 5;
		hide.downFunction = hideDown;
		
		var text = iGlobal.Global.getTextField(20);
		text.width = 500;
		text.x = 25;
		text.y = 50;
		text.multiline = true;
		this.addChild(text);
		var info: string = "<font size=\'16\'>你们好，这里主要用来放置一下帮助和版本信息<br/>";
		info = info + "战斗力：显示值表示的是没有任何装备的情况下的基础战斗力，所以装备不影响<br/>";
		info = info + "技能：主动技能，需要你装备后，才会在战斗中使用。当某些技能等级达到1后，会学会新的进阶技能<br/>";
		info = info + "装备:<br/>";
		info = info + ("\t-装备共有6种品质. 基础, <font color=\'" + iData.iItem.Equipment.GREEN + "\'>精品</font>,<font color=\'" + iData.iItem.Equipment.BLUE + "\'>稀有</font>,<font color=\'" + iData.iItem.Equipment.YELLOW + "\'>完美</font>,<font color=\'" + iData.iItem.Equipment.ORANGE + "\'>史诗</font>, 和 <font color=\'" + iData.iItem.Equipment.PURPLE + "\'>传奇</font>.<br/>");
		info = info + ("\t-区域boss有很大概率掉落 <font color=\'" + iData.iItem.Equipment.PURPLE + "\'>传奇</font>装备. 普通的怪兽也有，但概率非常之小.<br/>");
		info = info + "\t-装备的价值，受到你的战斗力和怪兽的战斗力比值的影响，差距越大，装备越好的可能性越大，幸运和地图等级也影响装备的价值.<br/>";
		info = info + "怪兽:<br/>";
		info = info + "\t-某些怪兽有称号，这使得他们变强大，当然掉落也会变好.<br/>";
		info = info + "\t-没个地图都有一个区域boss，区域boss在每次战斗结束后，将会维持当前的血量到下次战斗，打败区域boss后有概率获得宠物.<br/>";
		info = info + "宠物:<br/>";
		info = info + "\t-宠物通过击败区域boss获得.<br/>";
		info = info + "\t-打败一个区域boss不能保证你一定会获得宠物，幸运也影响掉落.<br/>";
		info = info + "\t-每个宠物都有不同的初始属性和不同的成长值，但总体来说，越高地图掉落的宠物越好.<br/>";
		info = info + "\t-如果宠物在战斗中死亡，将不会获得任何经验.<br/>";
		info = info + "\t-宠物如果超过人物5级，将不会获得经验.<br/>";
		info = info + "\t-宠物最多能有4个技能，升级时有一定概率领悟技能.<br/></font>";
		text.textFlow = iGlobal.Global.htmlParse.parser(info);
	}
}