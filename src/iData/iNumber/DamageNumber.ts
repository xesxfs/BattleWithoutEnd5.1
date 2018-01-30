module iData {
	export module iNumber {
		export class DamageNumber extends iData.iNumber.RangeNumber {

			public constructor(min:number,max:number)
			{
				super(min,max);
			}

			public getByBalance(param1:number):number
			{
				// param1 = param1;
				return 1;
			}

		}
	}
}
