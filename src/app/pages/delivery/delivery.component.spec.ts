import { ComponentFixture, TestBed } from '@angular/core/testing';
import DeliveryComponent from './delivery.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DeliveryComponent', () => {
  let component: DeliveryComponent;
  let fixture: ComponentFixture<DeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryComponent, BrowserAnimationsModule],
      providers: [
        HttpClient,
        HttpHandler,
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deveria criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deve possuir a tag H1', (() => {
    const fixture = TestBed.createComponent(DeliveryComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Delivery');
  }));
});
