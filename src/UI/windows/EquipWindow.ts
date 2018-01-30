class EquipWindow extends IWindow {


	private SC: number = 0.4;
	private SY: number = 100;
	private head: EquipCell;
	private feet: EquipCell;
	private body: EquipCell;
	private necklace: EquipCell;
	private ring: EquipCell;
	private leftHand: EquipCell;
	private rightHand: EquipCell;
	private pet: PetIconCell;
	private bg2: egret.Sprite;
	private spList: Array<any>;
	private petSp: egret.Sprite;
	private petSkillSp: egret.Sprite;

	private _name: StringCell;
	private attack: StringCell;
	private hp: StringCell;
	private mp: StringCell;
	private balance: StringCell;
	private cri: StringCell;
	private cri_mul: StringCell;
	private magatt: StringCell;
	private def: StringCell;
	private pro: StringCell;

	public constructor() {
		super();
		var bgs: egret.Sprite = new BasicCell(200, 540);
		this.addChild(bgs);
		var p1: egret.Bitmap = new egret.Bitmap(RES.getRes("people_use1"));
		this.addChild(p1);
		p1.scaleX = this.SC;
		p1.scaleY = this.SC;
		p1.y = this.SY;
		this.bg2 = new egret.Sprite();
		this.addChild(this.bg2);
		this.bg2.addChild(new egret.Bitmap(RES.getRes("people_use2")));
		this.bg2.scaleX = this.SC;
		this.bg2.scaleY = this.SC;
		this.bg2.y = this.SY;
		this.spList = new Array();
		this.update();
	}

	public update() {
		var _self__ = this;
		var i: number = (0);
		i = (this.spList.length);
		while (i > 0) {
			this.bg2.removeChild(this.spList.pop());
			i--;
		}
		var list: Array<any> = ["head", "feet", "body", "necklace", "ring", "leftHand", "rightHand"];
		i = (0);
		while (i < list.length) {
			var equipDown: Function = function () {
				this["setBefore"]();
				if (this["equip"]) {
					if (iGlobal.Player.addItem(this["equip"])) {
						iGlobal.Player[this["position"]] = null;
						_self__.update();
						iGlobal.Player.updateAllInfo();
						iGlobal.Player.updateBattleSkillWindow();
					}
				}
			};
			this[list[i]] = new EquipCell(iGlobal.Player[list[i]], list[i]);
			this.bg2.addChild(this[list[i]]);
			this.spList.push(this[list[i]]);
			((this[list[i]] as EquipCell)).downFunction = equipDown;
			i++;
		}
		this.pet = new PetIconCell(iGlobal.Player.pet);
		this.bg2.addChild(this.pet);
		this.spList.push(this.pet);
		this.pet.x = 60;
		this.pet.y = 620;
		this.head.x = 210;
		this.head.y = -50;
		this.feet.x = 210;
		this.feet.y = 480;
		this.body.x = 390;
		this.body.y = 300;
		this.necklace.x = 380;
		this.necklace.y = 100;
		this.ring.x = 10;
		this.ring.y = 120;
		this.leftHand.x = 5;
		this.leftHand.y = 230;
		this.rightHand.x = 415;
		this.rightHand.y = 220;
		this.setPetInfo();
	}


	private setPetInfo() {
		if (this.petSp) {
			if (this.contains(this.petSp)) {
				this.removeChild(this.petSp);
			}
		}
		if (this.petSkillSp) {
			if (this.contains(this.petSkillSp)) {
				this.removeChild(this.petSkillSp);
			}
		}
		var _loc1_: number = (20);
		var _loc2_: number = (380);
		var _loc3_: number = (35);
		var _loc4_: number = (100);
		var _loc5_: number = (20);
		this.petSp = new egret.Sprite();
		this.petSp.x = _loc1_;
		this.petSp.y = _loc2_;
		this.addChild(this.petSp);
		var _loc6_: Array<any> = new Array();
		var _loc7_: StringCell = new StringCell("宠物", 100, 16);
		_loc6_.push(_loc7_);
		this._name = new StringCell("Fox", 150);
		_loc6_.push(this._name);
		_loc6_.push(new StringCell("Hp"));
		_loc6_.push(this.hp = new StringCell("100"));
		_loc6_.push(new StringCell("Mp"));
		_loc6_.push(this.mp = new StringCell("100"));
		_loc6_.push(new StringCell("攻击"));
		_loc6_.push(this.attack = new StringCell("20~30", 65));
		_loc6_.push(new StringCell("平衡"));
		_loc6_.push(this.balance = new StringCell("50"));
		_loc6_.push(new StringCell("暴击"));
		_loc6_.push(this.cri = new StringCell("50"));
		_loc6_.push(new StringCell("暴倍"));
		_loc6_.push(this.cri_mul = new StringCell("200%"));
		_loc6_.push(new StringCell("防御"));
		_loc6_.push(this.def = new StringCell("10"));
		_loc6_.push(new StringCell("护甲"));
		_loc6_.push(this.pro = new StringCell("10"));
		_loc6_.push(new StringCell("魔攻"));
		_loc6_.push(this.magatt = new StringCell("100%"));
		var length: number = (_loc6_.length);
		var i: number = (0);
		while (i < length) {
			this.petSp.addChild(_loc6_[i]);
			_loc6_[i].x = _loc3_ * (i % 2) + _loc4_ * (i / 10 >> 0);
			_loc6_[i].y = _loc5_ + _loc5_ * (i % 10 / 2 >> 0);
			i++;
		}
		this.petSkillSp = new egret.Sprite();
		this.petSkillSp.x = 10;
		this.petSkillSp.y = 500;
		this.addChild(this.petSkillSp);
		this.updatePetInfo();
	}


	public updatePetInfo() {
		var i: number = (0);
		var pCell: PetSkillCell = null;
		if (!iGlobal.Player.pet) {
			this.petSp.visible = false;
			this.petSkillSp.visible = false;
			return;
		}
		this.petSp.visible = true;
		this.petSkillSp.visible = true;
		this._name.setText(iGlobal.Player.pet.realName);
		this.hp.setText(iGlobal.Player.pet.hp + "");
		this.mp.setText(iGlobal.Player.pet.mp + "");
		this.attack.setText(iGlobal.Player.pet.attmin + "~" + iGlobal.Player.pet.attmax + "");
		this.balance.setText(iGlobal.Player.pet.balance + "");
		this.cri.setText(iGlobal.Player.pet.cri + "");
		this.def.setText(iGlobal.Player.pet.defence + "");
		this.pro.setText(iGlobal.Player.pet.pro + "");
		this.magatt.setText(iGlobal.Player.pet.magicatt + "%");
		this.cri_mul.setText(iGlobal.Player.pet.crimul + "%");
		i = (this.petSkillSp.numChildren - 1);
		while (i >= 0) {
			this.petSkillSp.removeChildAt(i);
			i--;
		}
		i = (0);
		while (i < iGlobal.Player.pet.skillList.length) {
			pCell = new PetSkillCell(iGlobal.Player.pet.skillList[i]);
			this.petSkillSp.addChild(pCell);
			pCell.x = i * 30 + 2 + i * 10;
			i++;
		}
	}

}