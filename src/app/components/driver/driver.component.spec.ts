import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DriverComponent } from './driver.component';
import { provideRouter } from '@angular/router';

describe('DriverComponent', () => {
  let component: DriverComponent;
  let fixture: ComponentFixture<DriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DriverComponent],
      providers: [provideRouter([])],
    })
      .compileComponents();

    fixture = TestBed.createComponent(DriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deveria criar o componente', () => {
    expect(component).toBeTruthy();
  });



});
