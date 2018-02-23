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
				var pet: iData.iPet.Pet = null;
				var i: number = 0;
				var strs: Array<any> = null;
				var strs2: Array<any> = petStr.split("#");
				i = 0;
				while (i < iData.iPet.PetDataList.list.length) {
					if (strs2[0] == iData.iPet.PetDataList.list[i].name) {
						pet = new iData.iPet.Pet(iData.iPet.PetDataList.list[i], 1);
						break;
					}
					i++;
				}
				pet.exp = strs2[2];
				pet.startStat = iData.iPet.PetStats.load(strs2[3]);
				pet.growStat = iData.iPet.PetStats.load(strs2[4]);
				pet.skillList = new Array<iData.iPet.iPetSkill.PetSkill>();
				if (strs2.length > 5) {
					strs = (<string>strs2[5]).split("^");
					i = 0;
					while (i < strs.length) {
						if (strs[i] != "") {
							pet.skillList.push(iData.iPet.iPetSkill.PetSkill.load(strs[i]));
						}
						i++;
					}
				}
				pet.setLevel(strs2[1]);
				return pet;
			}

			private generateSkill() {
				var skillCount: number = 0;
				var idx: number = 0;
				this.skillList = new Array<iData.iPet.iPetSkill.PetSkill>();
				var random: number = Math.random();
				if (random < 0.4) {
					skillCount = 0;
				}
				else if (random < 0.6) {
					skillCount = 1;
				}
				else if (random < 0.75) {
					skillCount = 2;
				}
				else if (random < 0.9) {
					skillCount = 3;
				}
				else {
					skillCount = 4;
				}
				var length: number = iData.iPet.iPetSkill.PetSkillList.list.length;
				var i: number = 0;
				while (i < skillCount) {
					do {
						idx = Math.floor(Math.random() * length);
					}
					while (!this.addSkill(iData.iPet.iPetSkill.PetSkillList.list[idx]))
					i++;
				}
			}

			private addSkill(petSkillData: iData.iPet.iPetSkill.PetSkillData): boolean {
				if (this.skillList.length >= 4) {
					return false;
				}
				var i: number = 0;
				while (i < this.skillList.length) {
					if (petSkillData.name == this.skillList[i].skillData.name) {
						return false;
					}
					i++;
				}
				this.skillList.push(new iData.iPet.iPetSkill.PetSkill(petSkillData));
				return true;
			}

			public getAttackSkill(): Array<iData.iPet.iPetSkill.PetSkill> {
				var skillList: Array<iData.iPet.iPetSkill.PetSkill> = new Array<iData.iPet.iPetSkill.PetSkill>();
				var i: number = 0;
				while (i < this.skillList.length) {
					if (this.skillList[i].skillData instanceof iData.iPet.iPetSkill.AttackPetSkillData) {
						skillList.push(this.skillList[i]);
					}
					i++;
				}
				return skillList;
			}

			public addExp(exp: number) {
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

			private levelUp() {
				var length: number = 0;
				var idx: number = 0;
				this.level++;
				this.exp = 0;
				var i: number = 0;
				while (i < iData.iPet.PetStats.list.length) {
					this.currentStat[iData.iPet.PetStats.list[i]] = this.currentStat[iData.iPet.PetStats.list[i]] + this.growStat[iData.iPet.PetStats.list[i]];
					i++;
				}
				MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>你的宠物升级了!你的宠物达到了Lv." + this.level + "!</font>");
				if (Math.random() * 100 < 1 - this.level * 0.01) {
					length = iData.iPet.iPetSkill.PetSkillList.list.length;
					idx = Math.floor(Math.random() * length);
					if (this.addSkill(iData.iPet.iPetSkill.PetSkillList.list[idx])) {
						MainScene.allInfoPanel.addText("<font color=\'#ff4040\'>你的宠物学会了" + iData.iPet.iPetSkill.PetSkillList.list[idx].name + "!</font>");
					}
				}
			}

			public setLevel(level: number) {
				if (level < 1) {
					level = 1;
				}
				if (level > 100) {
					level = 100;
				}
				this.level = level;
				var i: number = 0;
				while (i < iData.iPet.PetStats.list.length) {
					this.currentStat[iData.iPet.PetStats.list[i]] = this.startStat[iData.iPet.PetStats.list[i]] + this.growStat[iData.iPet.PetStats.list[i]] * (this.level - 1);
					i++;
				}
			}

			public getLevelExp(): number {
				if (this.level > 100) {
					return -1;
				}
				return this.level * this.level * ((this.level + 1) * (this.level + 1) - 13 * (this.level + 1) + 82);
			}

			public set level(level: number) {
				this._level = Tool.MyMath.encryptInt(level);
				if (MainScene.petInfoPanel) {
					MainScene.petInfoPanel.update();
				}
				if (MainScene.otherPanel) {
					if (MainScene.otherPanel.equipWindow) {
						MainScene.otherPanel.equipWindow.updatePetInfo();
					}
				}
			}

			public get level(): number {
				return Tool.MyMath.decryptInt(this._level);
			}

			public set exp(exp: number) {
				this._exp = Tool.MyMath.encryptInt(exp);
				if (MainScene.petInfoPanel) {
					MainScene.petInfoPanel.updateExp();
				}
			}

			public get exp(): number {
				return Tool.MyMath.decryptInt(this._exp);
			}

			/**宠物血量 */
			public get hp(): number {
				var _hp_: number = this.currentStat.hp;
				var _strong_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.strong);
				if (_strong_) {
					_hp_ = _hp_ + _strong_.getSetArray()[0] * this.level;
				}
				return _hp_;
			}

			/**宠物蓝量 */
			public get mp(): number {
				var _mp_: number = this.currentStat.mp;
				var _wis_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.wisdom);
				if (_wis_) {
					_mp_ = _mp_ + _wis_.getSetArray()[0] * this.level;
				}
				return _mp_;
			}

			public get attmin(): number {
				var _att_: number = this.currentStat.attmin;
				var _aggress_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.aggressive);
				if (_aggress_) {
					_att_ = _att_ + _aggress_.getSetArray()[0] * this.level;
				}
				return _att_;
			}

			public get attmax(): number {
				var _att_: number = this.currentStat.attmax;
				var _aggressive_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.aggressive);
				if (_aggressive_) {
					_att_ = _att_ + _aggressive_.getSetArray()[0] * this.level;
				}
				return _att_;
			}

			public get defence(): number {
				var _def_: number = this.currentStat.def;
				var _defensive_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.defensive);
				if (_defensive_) {
					_def_ = _def_ + _defensive_.getSetArray()[0] * this.level;
				}
				return _def_;
			}

			public get pro(): number {
				var _pro_: number = this.currentStat.pro;
				var _protective_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.protective);
				if (_protective_) {
					_pro_ = _pro_ + _protective_.getSetArray()[0] * this.level;
				}
				return _pro_;
			}

			public get balance(): number {
				var _balance_: number = this.currentStat.balance;
				if (_balance_ > 100) {
					_balance_ = 100;
				}
				return _balance_;
			}

			public get cri(): number {
				var _cri_: number = this.currentStat.cri;
				var _slayer_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.slayer);
				if (_slayer_) {
					_cri_ = _cri_ + _slayer_.getSetArray()[0];
				}
				return _cri_;
			}

			public get crimul(): number {
				var _criMul_: number = this.currentStat.criMul;
				var _slayer_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.slayer);
				if (_slayer_) {
					_criMul_ = _criMul_ * _slayer_.getSetArray()[1];
				}
				return _criMul_;
			}

			public get magicatt(): number {
				var _magAtt_: number = 100 + this.currentStat.magAtt;
				var _wise_: iData.iPet.iPetSkill.PetSkill = this.getSkill(iData.iPet.iPetSkill.PetSkillList.wise);
				if (_wise_) {
					_magAtt_ = _magAtt_ + _wise_.getSetArray()[0] * this.level;
				}
				return _magAtt_;
			}

			public get attack(): number {
				return this.attmin + (this.attmax - this.attmin) * Tool.MyMath.balanceRandom(this.balance);
			}

			public get name() {
				return this._name;
			}

			public getSkill(skillData: iData.iPet.iPetSkill.PetSkillData): iData.iPet.iPetSkill.PetSkill {
				var i: number = 0;
				while (i < this.skillList.length) {
					if (this.skillList[i].skillData.name == skillData.name) {
						return this.skillList[i];
					}
					i++;
				}
				return null;
			}

			public save(): string {
				var i: number = 0;
				var strs1: any = <any>"";
				strs1 = strs1 + (this.name + "#" + this.level + "#" + this.exp);
				strs1 = strs1 + ("#" + this.startStat.save());
				strs1 = strs1 + ("#" + this.growStat.save());
				if (this.skillList.length > 0) {
					strs1 = strs1 + "#";
					i = 0;
					while (i < this.skillList.length) {
						strs1 = strs1 + (this.skillList[i].save() + "^");
						i++;
					}
				}
				return strs1;
			}

		}
	}
}

