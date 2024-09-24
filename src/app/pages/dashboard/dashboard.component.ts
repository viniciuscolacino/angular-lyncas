import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { DataService } from '@services/data.service';
import { AsyncPipe, JsonPipe, CommonModule } from '@angular/common';
import { Driver } from 'app/core/models/driver';
import { OrderStatusEnum } from 'app/core/models/order';
import { Neighborhood } from 'app/core/models/neighborhood';
import { MatTabsModule } from '@angular/material/tabs';
import { DriverComponent } from '@components/driver/driver.component';
import { NeighborhoodComponent } from '@components/neighborhood/neighborhood.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe,
    MatTabsModule,
    CommonModule,
    DriverComponent,
    NeighborhoodComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export default class DashboardComponent implements OnInit, OnDestroy {
  #dataService = inject(DataService);
  drivers$ = signal<Array<Driver>>([]);
  neighborhoods$ = signal<Array<Neighborhood>>([]);
  status = OrderStatusEnum;
  private destroy$ = new Subject<void>();

  public getData(): void {
    this.#dataService.getDriverInfo()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (next) => {
          this.drivers$.set(next);
        },
        error: () => {
          console.log('not found');
        }
      });

    this.#dataService.getNeighborhoodInfo()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (next) => {
          this.neighborhoods$.set(next);
        },
        error: () => {
          console.log('not found');
        }
      });
  }

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
