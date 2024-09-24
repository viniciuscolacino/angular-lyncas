import { ComponentFixture, TestBed } from '@angular/core/testing';
import DashboardComponent from './dashboard.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent, BrowserAnimationsModule],
      providers: [
        HttpClient,
        HttpHandler,
        provideAnimations
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
