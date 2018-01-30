module iData {
	export module iPet {
		export class PetStats {
			public static list: Array<any>;
			private _hp: number = 0;
			private _mp: number = 0;
			private _attmin: number = 0;
			private _attmax: number = 0;
			private _def: number = 0;
			private _pro: number = 0;
			private _balance: number = 0;
			private _cri: number = 0;
			private _criMul: number = 0;
			private _magAtt: number = 0;

			public constructor(param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number) {

				this.hp = param1;
				this.mp = param2;
				this.attmin = param3;
				this.attmax = param4;
				this.def = param5;
				this.pro = param6;
				this.balance = param7;
				this.cri = param8;
				this.criMul = param9;
				this.magAtt = param10;
			}

			public static generatePetStats(param1: iData.iPet.PetStats, param2: iData.iPet.PetStats, param3: number): iData.iPet.PetStats {
				var _loc4_: iData.iPet.PetStats = new iData.iPet.PetStats(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				var _loc5_: number = 0;
				while (_loc5_ < iData.iPet.PetStats.list.length) {
					_loc4_[iData.iPet.PetStats.list[_loc5_]] = iData.iPet.PetStats.formula(param1[iData.iPet.PetStats.list[_loc5_]], param2[iData.iPet.PetStats.list[_loc5_]], param3);
					_loc5_++;
				}
				return _loc4_;
			}

			private static formula(param1: number, param2: number, param3: number): number {
				return param1 + param2 * param3 * Math.random();
			}

			public static load(param1: string): iData.iPet.PetStats {
				var _loc2_: Array<any> = param1.split("%");
				var _loc3_: iData.iPet.PetStats = new iData.iPet.PetStats(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
				var _loc4_: number = 0;
				while (_loc4_ < iData.iPet.PetStats.list.length) {
					_loc3_[iData.iPet.PetStats.list[_loc4_]] = _loc2_[_loc4_];
					_loc4_++;
				}
				return _loc3_;
			}

			public get hp(): number {
				return this.decryptNum(this._hp);
			}

			public set hp(param1: number) {
				this._hp = this.encryptNum(param1);
			}

			public get mp(): number {
				return this.decryptNum(this._mp);
			}

			public set mp(param1: number) {
				this._mp = this.encryptNum(param1);
			}

			public get attmin(): number {
				return this.decryptNum(this._attmin);
			}

			public set attmin(param1: number) {
				this._attmin = this.encryptNum(param1);
			}

			public get attmax(): number {
				return this.decryptNum(this._attmax);
			}

			public set attmax(param1: number) {
				this._attmax = this.encryptNum(param1);
			}

			public get def(): number {
				return this.decryptNum(this._def);
			}

			public set def(param1: number) {
				this._def = this.encryptNum(param1);
			}

			public get pro(): number {
				return this.decryptNum(this._pro);
			}

			public set pro(param1: number) {
				this._pro = this.encryptNum(param1);
			}

			public get balance(): number {
				return this.decryptNum(this._balance);
			}

			public set balance(param1: number) {
				this._balance = this.encryptNum(param1);
			}

			public get cri(): number {
				return this.decryptNum(this._cri);
			}

			public set cri(param1: number) {
				this._cri = this.encryptNum(param1);
			}

			public get criMul(): number {
				return this.decryptNum(this._criMul);
			}

			public set criMul(param1: number) {
				this._criMul = this.encryptNum(param1);
			}

			public get magAtt(): number {
				return this.decryptNum(this._magAtt);
			}

			public set magAtt(param1: number) {
				this._magAtt =this.encryptNum(param1);
			}

			public save(): string {
				var _loc1_: string = "";
				var _loc2_: number = 0;
				while (_loc2_ < iData.iPet.PetStats.list.length) {
					_loc1_ = _loc1_ + (this[iData.iPet.PetStats.list[_loc2_]] + "%");
					_loc2_++;
				}
				return _loc1_;
			}

		public  encryptNum(param1:number):number
		{
			return param1 / 2 + 1;
		}

		public  decryptNum(param1:number):number
		{
			return (param1 - 1) * 2;
		}

		}
	}
}

iData.iPet.PetStats.list = ["hp", "mp", "attmin", "attmax", "def", "pro", "balance", "cri", "criMul", "magAtt"];
