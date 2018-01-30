module iData {
	export module iSkill {
		export module iBuff {
			export class Buff extends egret.HashObject {
				public name: string;
				public count: number = 0;

				public constructor(count: number) {
					super();
				}

				public run() {
				}

				public combine(buff: iData.iSkill.iBuff.Buff) {
				}

				public isOver(): boolean {
					if (this.count <= 0) {
						return true;
					}
					return false;
				}

			}
		}
	}
}

