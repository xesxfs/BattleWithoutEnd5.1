module iGlobal {
	export class Global {

		public static stage: egret.Stage;
		public static stringInfoWindow: StringInfoWindow;
		public static itemInfoWindow: ItemInfoWindow;
		public static map: iData.iMap.Map;
		public static mainScene: MainScene;
		public static shopPanel: ShopPanel;
		public static helpPanel: HelpPanel;
		public static specialShopPanel: SpecialShopPanel;
		public static RED: number;
		public static BLUE: number;
		public static YELLOW: number;
		public static GREEN: number;
		public static battle: string;
		/***战况 */
		public static battle_toggle: boolean;
		public static battleIntro: string;
		/***战果 */
		public static battleIntro_toggle: boolean;
		public static money: string;
		public static money_toggle: boolean;
		public static exp: string;
		public static exp_toggle: boolean;
		public static item: string;
		public static item_toggle: boolean;
		public static other: string;
		public static other_toggle: boolean;
		public static item0: string;
		public static item1: string;
		public static item2: string;
		public static item3: string;
		public static item4: string;
		public static item5: string;
		public static item0_toggle: boolean;
		public static item1_toggle: boolean;
		public static item2_toggle: boolean;
		public static item3_toggle: boolean;
		public static item4_toggle: boolean;
		public static item5_toggle: boolean;
		public static sword: string;
		public static axe: string;
		public static bow: string;
		public static crossbow: string;
		public static sceptre: string;
		public static staff: string;
		public static tome: string;
		public static shield: string;
		public static dagger: string;
		public static suit: string;
		public static jerkin: string;
		public static breastplate: string;
		public static fur_hat: string;
		public static felt_hat: string;
		public static helm: string;
		public static shoes: string;
		public static boots: string;
		public static greaves: string;
		public static necklace: string;
		public static ring: string;
		public static sword_toggle: boolean;
		public static axe_toggle: boolean;
		public static bow_toggle: boolean;
		public static crossbow_toggle: boolean;
		public static sceptre_toggle: boolean;
		public static staff_toggle: boolean;
		public static tome_toggle: boolean;
		public static shield_toggle: boolean;
		public static dagger_toggle: boolean;
		public static body_light_toggle: boolean;
		public static body_medium_toggle: boolean;
		public static body_heavy_toggle: boolean;
		public static head_light_toggle: boolean;
		public static head_medium_toggle: boolean;
		public static head_heavy_toggle: boolean;
		public static feet_light_toggle: boolean;
		public static feet_medium_toggle: boolean;
		public static feet_heavy_toggle: boolean;
		public static necklace_toggle: boolean;
		public static ring_toggle: boolean;
		public static autoSell_toggle: boolean;
		public static sound: egret.Sound;
		public static soundChannel: egret.SoundChannel;
		public static sound_toggle: boolean;
		public static htmlParse: egret.HtmlTextParser = new egret.HtmlTextParser();

		public constructor() {

		}

		public static init(stage: egret.Stage) {
			iGlobal.Global.stage = stage;
			iGlobal.Global.stringInfoWindow = new StringInfoWindow();
			App.LayerManager.msgLayer.addChild(iGlobal.Global.stringInfoWindow);
			iGlobal.Global.itemInfoWindow = new ItemInfoWindow("");
			App.LayerManager.msgLayer.addChild(iGlobal.Global.itemInfoWindow);
			iGlobal.Global.itemInfoWindow.visible = false;
			//flash.Font["registerFont"](font_nesb);
		}

		public static getTextField(size: number = 16, color: number = 0x000000): egret.TextField {
			// var _loc3_:flash.TextFormat = new flash.TextFormat("RTWS YueGothic Trial Regular",param1,param2);
			var textField: egret.TextField = new egret.TextField();
			textField.textAlign = egret.HorizontalAlign.CENTER;
			textField.textAlign = egret.VerticalAlign.MIDDLE;
			textField.size = size;
			textField.textColor = color;
			// _loc4_.embedFonts = true;
			// _loc4_.defaultTextFormat = _loc3_;
			// _loc4_["selectable"] = false;
			textField.multiline = false;
			textField.wordWrap = true;
			return textField;
		}

		public static setStringInfoWindow(param1: string) {
			iGlobal.Global.stringInfoWindow.setText(param1);
			iGlobal.Global.stringInfoWindow.visible = true;
			if (iGlobal.Global.stringInfoWindow.parent) {
				iGlobal.Global.stringInfoWindow.parent.addChildAt(iGlobal.Global.stringInfoWindow, iGlobal.Global.stringInfoWindow.parent.numChildren - 1);
			}
		}

		public static hideInfoWindow() {
			iGlobal.Global.stringInfoWindow.visible = false;
		}

		public static setItemInfoWindow(param1: string) {
			iGlobal.Global.itemInfoWindow.TEXT = param1;
			iGlobal.Global.itemInfoWindow.visible = true;
			if (iGlobal.Global.itemInfoWindow.parent) {
				iGlobal.Global.itemInfoWindow.parent.addChildAt(iGlobal.Global.itemInfoWindow, iGlobal.Global.itemInfoWindow.parent.numChildren - 1);
			}
		}

		public static hideItemInfoWindow(): any {
			iGlobal.Global.itemInfoWindow.visible = false;
		}

		public static playSound(): any {
			iGlobal.Global.soundChannel = iGlobal.Global.sound.play();
		}

		public static soundOut(): any {
			var timer: egret.Timer = null;
			var n: number = 0;
			if (iGlobal.Global.soundChannel) {
				var onTimer: Function = <any>function (event: egret.Event): any {
					iGlobal.Global.soundChannel.volume = (1 - 0.05 * n);
					n++;
				};
				timer = new egret.Timer(100, 21);
				timer.addEventListener(egret.TimerEvent.TIMER, onTimer, null);
				n = 0;
				timer.start();
			}
		}

	}
}

iGlobal.Global.map = new iData.iMap.Map(iData.iMap.MapList.list[0]);
iGlobal.Global.RED = 16728128;
iGlobal.Global.BLUE = 4874455;
iGlobal.Global.YELLOW = 16754240;
iGlobal.Global.GREEN = 8056380;
iGlobal.Global.battle = "battle";
iGlobal.Global.battle_toggle = true;
iGlobal.Global.battleIntro = "battleIntro";
iGlobal.Global.battleIntro_toggle = true;
iGlobal.Global.money = "money";
iGlobal.Global.money_toggle = true;
iGlobal.Global.exp = "exp";
iGlobal.Global.exp_toggle = true;
iGlobal.Global.item = "item";
iGlobal.Global.item_toggle = true;
iGlobal.Global.other = "other";
iGlobal.Global.other_toggle = true;
iGlobal.Global.item0 = "item0";
iGlobal.Global.item1 = "item1";
iGlobal.Global.item2 = "item2";
iGlobal.Global.item3 = "item3";
iGlobal.Global.item4 = "item4";
iGlobal.Global.item5 = "item5";
iGlobal.Global.item0_toggle = true;
iGlobal.Global.item1_toggle = true;
iGlobal.Global.item2_toggle = true;
iGlobal.Global.item3_toggle = true;
iGlobal.Global.item4_toggle = true;
iGlobal.Global.item5_toggle = true;
iGlobal.Global.sword = "sword";
iGlobal.Global.axe = "axe";
iGlobal.Global.bow = "bow";
iGlobal.Global.crossbow = "crossbow";
iGlobal.Global.sceptre = "sceptre";
iGlobal.Global.staff = "staff";
iGlobal.Global.tome = "tome";
iGlobal.Global.shield = "shield";
iGlobal.Global.dagger = "dagger";
iGlobal.Global.suit = "suit";
iGlobal.Global.jerkin = "jerkin";
iGlobal.Global.breastplate = "breastplate";
iGlobal.Global.fur_hat = "fur_hat";
iGlobal.Global.felt_hat = "felt_hat";
iGlobal.Global.helm = "helm";
iGlobal.Global.shoes = "Shoes";
iGlobal.Global.boots = "Boots";
iGlobal.Global.greaves = "Greaves";
iGlobal.Global.necklace = "necklace";
iGlobal.Global.ring = "ring";
iGlobal.Global.sword_toggle = true;
iGlobal.Global.axe_toggle = true;
iGlobal.Global.bow_toggle = true;
iGlobal.Global.crossbow_toggle = true;
iGlobal.Global.sceptre_toggle = true;
iGlobal.Global.staff_toggle = true;
iGlobal.Global.tome_toggle = true;
iGlobal.Global.shield_toggle = true;
iGlobal.Global.dagger_toggle = true;
iGlobal.Global.body_light_toggle = true;
iGlobal.Global.body_medium_toggle = true;
iGlobal.Global.body_heavy_toggle = true;
iGlobal.Global.head_light_toggle = true;
iGlobal.Global.head_medium_toggle = true;
iGlobal.Global.head_heavy_toggle = true;
iGlobal.Global.feet_light_toggle = true;
iGlobal.Global.feet_medium_toggle = true;
iGlobal.Global.feet_heavy_toggle = true;
iGlobal.Global.necklace_toggle = true;
iGlobal.Global.ring_toggle = true;
iGlobal.Global.autoSell_toggle = true;
// iGlobal.Global.sound = new blow_sound();
iGlobal.Global.sound_toggle = true;
