import { Fxdata } from './fxdata';

export class Makefxlist {


getFxresult( rates: any ): Fxdata[]
{
    let fxResult:  Fxdata[] = []

    let arrayValues:any[]  = Object.values(rates)
    let arrayKeys          = Object.keys(rates)

         for (let i = 0; i < arrayKeys.length; i++)
          {
            let pair = new Fxdata(arrayKeys[i], arrayValues[i] as number)
            fxResult.push(pair)
          }

    return fxResult;

}

}
