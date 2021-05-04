import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By} from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
            imports: [HttpClientTestingModule],
    }).compileComponents();
    }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('span'));
    htmlElement = debugElement.nativeElement;
  })

  it('should show my name on screen. Screen properly rendered ', () =>
  {
      expect(htmlElement.textContent).toEqual('Developed by Julian Shaw')
  })



});
