import { Fxdata } from './fxdata';

export class Makefxlist {


getFxresult( rates: any ): Fxdata[]
{
    let fxResult:  Fxdata[] = []


          for (let [key, value] of Object.entries(rates)) {

                      let pair = new Fxdata(key, value as number)
                      fxResult.push(pair)
          }


    return fxResult;

}

}
