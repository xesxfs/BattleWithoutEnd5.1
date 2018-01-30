module iData {
	export module iSkill {
		export module iBuff {
			export class BuffCorrosion extends iData.iSkill.iBuff.Buff {

				public constructor(count: number) {
					super(count);
					this.name = "corrosion";
					this.count = count;
				}

				public run() {
				}

				public combine(buff: iData.iSkill.iBuff.Buff) {
					this.count = this.count + buff.count;
				}

			}
		}
	}
}

