import { TestBed, inject } from '@angular/core/testing';
import { FxapiService } from './fxapi.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: Fxapi', () => {

beforeEach(() => {
TestBed.configureTestingModule({
            imports:   [HttpClientTestingModule],
            providers: [FxapiService]
});
});

it('FX Service working', inject([FxapiService], (service: FxapiService) => {
expect(service).toBeTruthy();
}));


it('Fx Service get method working', inject([FxapiService], (service: FxapiService) => {
expect(service.getFxData()).toBeTruthy();
}));



});




