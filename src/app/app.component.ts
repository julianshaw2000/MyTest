import {Component, OnInit} from '@angular/core';

import { FxapiService } from './fxapi.service';
import { Fxdata } from './fxdata';
import { Makefxlist } from './makefxlist';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
})

export class AppComponent  implements OnInit {

  title = 'test'

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

     this.fxapiService.getFxData().subscribe(
       data => {

         let makefxlist  = new Makefxlist()
         this.dataSource = makefxlist.getFxresult(data.rates)

        }

    )

}

}
