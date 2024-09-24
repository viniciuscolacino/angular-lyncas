import { AfterViewInit, Component, inject, OnDestroy, OnInit, signal, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Order, OrderStatusEnum } from 'app/core/models/order';
import { DataService } from '@services/data.service';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Driver } from 'app/core/models/driver';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.scss',
})

export default class DeliveryComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  #fb = inject(FormBuilder);

  #dataService = inject(DataService);
  displayedColumns: string[] = ['documento', 'motorista', 'remetente', 'destinatario', 'status_entrega'];
  dataSource = new MatTableDataSource<Order>([]);
  originalDataSource = new MatTableDataSource<Order>([]);
  status = OrderStatusEnum;
  drivers$ = signal<Array<Driver>>([]);
  private destroy$ = new Subject<void>();

  public profileForm = this.#fb.group({
    driver: [''],
    status: [''],
  })


  private initForm(): void {
    this.profileForm.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.filterData();
      })
  }

  public filterData() {
    this.dataSource.data = this.originalDataSource.data;

    if (this.profileForm.get('driver')?.value)
      this.dataSource.data = this.dataSource.data.filter((item: Order) => item.motorista.nome === this.profileForm.get('driver')?.value);

    if (this.profileForm.get('status')?.value)
      this.dataSource.data = this.dataSource.data.filter((item: Order) => item.status_entrega === this.profileForm.get('status')?.value);
  }

  public getData(): void {
    this.#dataService.getData()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (next) => {
          this.dataSource.data = [...next];
          this.originalDataSource.data = [...next];
        },
        error: () => {
          console.log('not found');
        }
      });

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
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getData();
    this.initForm();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
