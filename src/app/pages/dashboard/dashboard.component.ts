import { Component, inject, OnInit, signal } from '@angular/core';
import { DataService } from '@services/data.service';
import { AsyncPipe, JsonPipe, CommonModule } from '@angular/common';
import { Driver } from 'app/core/models/driver';
import { OrderStatusEnum } from 'app/core/models/order';
import { Neighborhood } from 'app/core/models/neighborhood';
import { MatTabsModule } from '@angular/material/tabs';
import { DriverComponent } from '@components/driver/driver.component';
import { NeighborhoodComponent } from '@components/neighborhood/neighborhood.component';

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

export default class DashboardComponent implements OnInit {
  #dataService = inject(DataService);
  drivers$ = signal<Array<Driver>>([]);
  neighborhoods$ = signal<Array<Neighborhood>>([]);
  status = OrderStatusEnum;


  public getData(): void {
    this.#dataService.getDriverInfo().subscribe({
      next: (next) => {
        this.drivers$.set(next);
      },
      error: () => {
        console.log('not found');
      }
    });

    this.#dataService.getNeighborhoodInfo().subscribe({
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
}
