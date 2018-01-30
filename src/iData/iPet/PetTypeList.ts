module iData {
	export module iPet {
		export class PetTypeList {
			public static attack: iData.iPet.PetType;
			public static defence: iData.iPet.PetType;
			public static magic: iData.iPet.PetType;
			public static balance: iData.iPet.PetType;

			public constructor() {

			}

		}
	}
}

iData.iPet.PetTypeList.attack = new iData.iPet.PetType(iData.iPet.PetType.ATTACK, new iData.iPet.PetStats(50, 30, 20, 30, 0, 0, 10, 10, 130, 0), new iData.iPet.PetStats(20, 10, 5, 10, 1, 1, 80, 30, 200, 1), new iData.iPet.PetStats(10, 5, 3, 6, 1, 0, 0, 1, 0, 0), new iData.iPet.PetStats(1, 0.5, 1, 2, 0.6, 0.2, 0, 0.3, 0, 0.1));
iData.iPet.PetTypeList.defence = new iData.iPet.PetType(iData.iPet.PetType.DEFENCE, new iData.iPet.PetStats(100, 30, 10, 15, 5, 5, 10, 10, 130, 0), new iData.iPet.PetStats(40, 10, 2, 4, 3, 3, 80, 30, 200, 1), new iData.iPet.PetStats(20, 5, 1, 3, 2, 0.5, 0, 1, 0, 0), new iData.iPet.PetStats(3, 0.5, 0.2, 0.4, 1.2, 0.3, 0, 0.3, 0, 0.1));
iData.iPet.PetTypeList.magic = new iData.iPet.PetType(iData.iPet.PetType.MAGIC, new iData.iPet.PetStats(50, 100, 10, 15, 0, 0, 10, 10, 130, 5), new iData.iPet.PetStats(20, 20, 2, 4, 1, 1, 80, 30, 200, 3), new iData.iPet.PetStats(10, 10, 1, 2, 1, 0, 0, 1, 0, 1), new iData.iPet.PetStats(1, 2, 0.2, 0.4, 0.6, 0.2, 0, 0.3, 0, 0.5));
iData.iPet.PetTypeList.balance = new iData.iPet.PetType(iData.iPet.PetType.BALANCE, new iData.iPet.PetStats(70, 35, 15, 20, 1, 1, 20, 20, 130, 1), new iData.iPet.PetStats(24, 11, 3, 6, 1.2, 1.2, 80, 40, 200, 1.2), new iData.iPet.PetStats(12, 6, 1.5, 2.5, 1, 0.15, 0.05, 1.1, 0.05, 0.2), new iData.iPet.PetStats(1.25, 1, 0.25, 0.5, 0.5, 0.2, 0.25, 0.3, 0.1, 0.1));
