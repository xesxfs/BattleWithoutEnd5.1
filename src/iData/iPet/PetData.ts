module iData {
	export module iPet {
		export class PetData {
			public name: string;
			public realName: string;
			public type: iData.iPet.PetType;
			public mc: string;

			public constructor(name: string, rname: string, type: iData.iPet.PetType, mc: string) {

				this.name = name;
				this.realName = rname;
				this.type = type;
				this.mc = mc;
			}

		}
	}
}

