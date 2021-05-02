import {Component, OnInit} from '@angular/core';

import { FxapiService } from './fxapi.service';
import { Fxdata } from './fxdata';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})

export class AppComponent  implements OnInit {

  displayedColumns: string[] = [ 'currency', 'rate'];

  dataSource: Fxdata[] = []

  constructor(
    private fxapiService: FxapiService
  ) { }



  ngOnInit(): void {

       this.getFxData()

  }

  getFxData()
  {

    let fxResult:  Fxdata[] = []


    this.fxapiService.getFxData().subscribe(
       data => {

         let arrayValues  = Object.values(data.rates)
         let arrayKeys    = Object.keys(data.rates)

         for (let i = 0; i < arrayKeys.length; i++) {

            let pair = new Fxdata(arrayKeys[i], arrayValues[i] as number)

            fxResult.push(pair)
        }

        this.dataSource   = fxResult

        }

    )



}


}
