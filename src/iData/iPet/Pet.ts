module iData {
	export module iPet {
		export class Pet {
			public type: string;
			public mc_name: string;
			public realName: string;
			private _name: string;
			private _level: number = 0;
			private _exp: number = 0;
			public startStat: iData.iPet.PetStats;
			public growStat: iData.iPet.PetStats;
			public currentStat: iData.iPet.PetStats;
			public skillList: Array<iData.iPet.iPetSkill.PetSkill>;

			public constructor(petData: iData.iPet.PetData, param2: number) {

				this.startStat = iData.iPet.PetStats.generatePetStats(petData.type.startMin, petData.type.startRange, param2);
				this.startStat.balance = 30 + Math.random() * 60;
				this.startStat.cri = 10 + Math.random() * 30;
				this.startStat.criMul = 130 + Math.random() * 70;
				this.growStat = iData.iPet.PetStats.generatePetStats(petData.type.growMin, petData.type.growRange, param2);
				this.currentStat = new iData.iPet.PetStats(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				var i: number = 0;
				while (i < iData.iPet.PetStats.list.length) {
					this.currentStat[iData.iPet.PetStats.list[i]] = this.startStat[iData.iPet.PetStats.list[i]];
					i++;
				}
				this.generateSkill();
				this.level = 1;
				this._name = petData.name;
				this.type = petData.type.type;
				this.mc_name = petData.mc;
				this.exp = 0;
				this.realName = petData.realName;
			}

			public static load(petStr: string): iData.iPet.Pet {
				var _loc3_: iData.iPet.Pet = null;
				var _loc4_: number = 0;
				var _loc5_: Array<any> = null;
				var _loc2_: Array<any> = petStr.split("#");
				_loc4_ = 0;
				while (_loc4_ < iData.iPet.PetDataList.list.length) {
					if (_loc2_[0] == iData.iPet.PetDataList.list[_loc4_].name) {
						_loc3_ = new iData.iPet.Pet(iData.iPet.PetDataList.list[_loc4_], 1);
						break;
					}
					_loc4_++;
				}
				_loc3_.exp = _loc2_[2];
				_loc3_.startStat = iData.iPet.PetStats.load(_loc2_[3]);
				_loc3_.growStat = iData.iPet.PetStats.load(_loc2_[4]);
				_loc3_.skillList = new Array<iData.iPet.iPetSkill.PetSkill>();
				if (_loc2_.length > 5) {
					_loc5_ = (<string>_loc2_[5]).split("^");
					_loc4_ = 0;
					while (_loc4_ < _loc5_.length) {
						if (_loc5_[_loc4_] != "") {
							_loc3_.skillList.push(iData.iPet.iPetSkill.PetSkill.load(_loc5_[_loc4_]));
						}
						_loc4_++;
					}
				}
				_loc3_.setLevel(_loc2_[1]);
				return _loc3_;
			}

			private generateSkill(): any {
				var _loc1_: number = 0;
				var _loc5_: number = 0;
				this.skillList = new Array<iData.iPet.iPetSkill.PetSkill>();
				var _loc2_: number = Math.random();
				if (_loc2_ < 0.4) {
					_loc1_ = 0;
				}
				else if (_loc2_ < 0.6) {
					_loc1_ = 1;
				}
				else if (_loc2_ < 0.75) {
					_loc1_ = 2;
				}
				else if (_loc2_ < 0.9) {
					_loc1_ = 3;
				}
				else {
					_loc1_ = 4;
				}
				var _loc3_: number = iData.iPet.iPetSkill.PetSkillList.list.length;
				var _loc4_: number = 0;
				while (_loc4_ < _loc1_) {
					do {
						_loc5_ = Math.random() * _loc3_;
					}
					while (<any>!this.addSkill(iData.iPet.iPetSkill.PetSkillList.list[_loc5_]))
					_loc4_++;
				}
			}

			private addSkill(petSkillData: iData.iPet.iPetSkill.PetSkillData): boolean {
				if (this.skillList.length >= 4) {
					return false;
				}
				var _loc2_: number = 0;
				while (_loc2_ < this.skillList.length) {
					if (petSkillData.name == this.skillList[_loc2_].skillData.name) {
						return false;
					}
					_loc2_++;
				}
				this.skillList.push(new iData.iPet.iPetSkill.PetSkill(petSkillData));
				return true;
			}

			public getAttackSkill(): Array<iData.iPet.iPetSkill.PetSkill> {
				var _loc1_: Array<iData.iPet.iPetSkill.PetSkill> = new Array<iData.iPet.iPetSkill.PetSkill>();
				var _loc2_: number = 0;
				while (_loc2_ < this.skillList.length) {
					//这里
					if (this.skillList[_loc2_].skillData instanceof iData.iPet.iPetSkill.AttackPetSkillData) {
						_loc1_.push(this.skillList[_loc2_]);
					}
					_loc2_++;
				}
				return _loc1_;
			}

			public addExp(exp: number): any {
				exp = exp;
				if (this.getLevelExp() < 0) {
					return;
				}
				if (this.level - iGlobal.Player.lv > 5) {
					return;
				}
				this.exp = this.exp + exp;
				MainScene.allInfoPanel.addText("你的宠物获得了<font color=\'#4a60d7\'>" + exp + "</font>经验.", iGlobal.Global.exp);
				if (this.exp > this.getLevelExp()) {
					this.levelUp();
				}
			}

			private levelUp(): any {
				var _loc2_: number = 0;
				var _loc3_: number = 0;
				this.level++;
				this.exp = 0;
				var _loc1_: number = 0;
				while (_loc1_ < iData.iPet.PetStats.list.length) {
					this.currentStat[iData.iPet.PetStats.list[_loc1_]] = this.currentStat[iData.iPet.PetStats.list[_loc1_]] + this.growStat[iData.iPet.PetStats.list[_loc1_]];
					_loc1_++;
				}
				MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>你的宠物升级了!你的宠物达到了Lv." + this.level + "!</font>");
				if (Math.random() * 100 < 1 - this.level * 0.01) {
					_loc2_ = iData.iPet.iPetSkill.PetSkillList.list.length;
					_loc3_ = Math.random() * _loc2_;
					if (this.addSkill(iData.iPet.iPetSkill.PetSkillList.list[_loc3_])) {
						MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>你的宠物学会了" + iData.iPet.iPetSkill.PetSkillList.list[_loc3_].name + "!</font>");
					}
				}
			}

			public setLevel(level: number): any {
				level = level;
				if (level < 1) {
					level = 1;
				}
				if (level > 100) {
					level = 100;
				}
				this.level = level;
				var _loc2_: number = 0;
				while (_loc2_ < iData.iPet.PetStats.list.length) {
					this.currentStat[iData.iPet.PetStats.list[_loc2_]] = this.startStat[iData.iPet.PetStats.list[_loc2_]] + this.growStat[iData.iPet.PetStats.list[_loc2_]] * (this.level - 1);
					_loc2_++;
				}
			}

			public getLevelExp(): number {
				if (this.level > 100) {
					return -1;
				}
				return this.level * this.level * ((this.level + 1) * (this.level + 1) - 13 * (this.level + 1) + 82);
			}

			public set level(level: number) {
				level = level;
				this._level = Tool.MyMath.encryptInt(level);
				if (MainScene.petInfoPanel) {
					MainScene.petInfoPanel.update();
				}
				// if (MainScene.otherPanel) {
				// 	if (MainScene.otherPanel.equipWindow) {
				// 		MainScene.otherPanel.equipWindow.updatePetInfo();
				// 	}
				// }
			}

			public get level(): number {
				return Tool.MyMath.decryptInt(this._level);
			}

			public set exp(param1: number) {
				param1 = param1;
				this._exp = Tool.MyMath.encryptInt(param1);
				if (MainScene.petInfoPanel) {
					MainScene.petInfoPanel.updateExp();
				}
			}

			public get exp(): number {
				return Tool.MyMath.decryptInt(this._exp);
			}

			/**宠物血量 */
			public get hp(): number {
				var _loc1_: number = this.currentStat.hp;
				var _loc2_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.strong);
				if (_loc2_) {
					_loc1_ = _loc1_ + _loc2_.getSetArray()[0] * this.level;
				}
				return _loc1_;
			}

			/**宠物蓝量 */
			public get mp(): number {
				var _loc1_: number = this.currentStat.mp;
				var _loc2_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.wisdom);
				if (_loc2_) {
					_loc1_ = _loc1_ + _loc2_.getSetArray()[0] * this.level;
				}
				return _loc1_;
			}

			public get attmin(): number {
				var _loc1_: number = this.currentStat.attmin;
				var _loc2_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.aggressive);
				if (_loc2_) {
					_loc1_ = _loc1_ + _loc2_.getSetArray()[0] * this.level;
				}
				return _loc1_;
			}

			public get attmax(): number {
				var _loc1_: number = this.currentStat.attmax;
				var _loc2_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.aggressive);
				if (_loc2_) {
					_loc1_ = _loc1_ + _loc2_.getSetArray()[0] * this.level;
				}
				return _loc1_;
			}

			public get defence(): number {
				var _loc1_: number = this.currentStat.def;
				var _loc2_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.defensive);
				if (_loc2_) {
					_loc1_ = _loc1_ + _loc2_.getSetArray()[0] * this.level;
				}
				return _loc1_;
			}

			public get pro(): number {
				var _loc1_: number = this.currentStat.pro;
				var _loc2_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.protective);
				if (_loc2_) {
					_loc1_ = _loc1_ + _loc2_.getSetArray()[0] * this.level;
				}
				return _loc1_;
			}

			public get balance(): number {
				var _loc1_: number = this.currentStat.balance;
				if (_loc1_ > 100) {
					_loc1_ = 100;
				}
				return _loc1_;
			}

			public get cri(): number {
				var _loc1_: number = this.currentStat.cri;
				var _loc2_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.slayer);
				if (_loc2_) {
					_loc1_ = _loc1_ + _loc2_.getSetArray()[0];
				}
				return _loc1_;
			}

			public get crimul(): number {
				var _loc1_: number = this.currentStat.criMul;
				var _loc2_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.slayer);
				if (_loc2_) {
					_loc1_ = _loc1_ * _loc2_.getSetArray()[1];
				}
				return _loc1_;
			}

			public get magicatt(): number {
				var _loc1_: number = 100 + this.currentStat.magAtt;
				var _loc2_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.wise);
				if (_loc2_) {
					_loc1_ = _loc1_ + _loc2_.getSetArray()[0] * this.level;
				}
				return _loc1_;
			}

			public get attack(): number {
				return this.attmin + (this.attmax - this.attmin) * Tool.MyMath.balanceRandom(this.balance);
			}

			public get name(): any {
				return this._name;
			}

			public getSkill(param1: iData.iPet.iPetSkill.PetSkillData): iData.iPet.iPetSkill.PetSkill {
				var _loc2_: number = 0;
				while (_loc2_ < this.skillList.length) {
					if (this.skillList[_loc2_].skillData.name == param1.name) {
						return this.skillList[_loc2_];
					}
					_loc2_++;
				}
				return null;
			}

			public save(): string {
				var _loc2_: number = 0;
				var _loc1_: any = <any>"";
				_loc1_ = _loc1_ + (this.name + "#" + this.level + "#" + this.exp);
				_loc1_ = _loc1_ + ("#" + this.startStat.save());
				_loc1_ = _loc1_ + ("#" + this.growStat.save());
				if (this.skillList.length > 0) {
					_loc1_ = _loc1_ + "#";
					_loc2_ = 0;
					while (_loc2_ < this.skillList.length) {
						_loc1_ = _loc1_ + (this.skillList[_loc2_].save() + "^");
						_loc2_++;
					}
				}
				return _loc1_;
			}

		}
	}
}

