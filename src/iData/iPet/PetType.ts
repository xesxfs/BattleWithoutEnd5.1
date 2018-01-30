module iData {
	export module iPet {
		export class PetType {
			public static ATTACK: string;
			public static DEFENCE: string;
			public static MAGIC: string;
			public static BALANCE: string;
			public type: string;
			public startMin: iData.iPet.PetStats;
			public startRange: iData.iPet.PetStats;
			public growMin: iData.iPet.PetStats;
			public growRange: iData.iPet.PetStats;

			public constructor(param1: string, param2: iData.iPet.PetStats, param3: iData.iPet.PetStats, param4: iData.iPet.PetStats, param5: iData.iPet.PetStats) {

				this.type = param1;
				this.startMin = param2;
				this.startRange = param3;
				this.growMin = param4;
				this.growRange = param5;
			}

		}
	}
}

iData.iPet.PetType.ATTACK = "attack";
iData.iPet.PetType.DEFENCE = "defence";
iData.iPet.PetType.MAGIC = "magic";
iData.iPet.PetType.BALANCE = "balance";
