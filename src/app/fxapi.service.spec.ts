/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FxapiService } from './fxapi.service';

describe('Service: Fxapi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FxapiService]
    });
  });

  it('should ...', inject([FxapiService], (service: FxapiService) => {
    expect(service).toBeTruthy();
  }));
});
