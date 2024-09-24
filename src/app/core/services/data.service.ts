import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { map, Observable, shareReplay } from 'rxjs';
import { Driver } from '../models/driver';
import { Order, OrderStatusEnum } from '../models/order';
import { Neighborhood } from '../models/neighborhood';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor() { }

  #url: string = environment.api
  #http = inject(HttpClient);
  neighborhoodDefaultImage = 'assets/img/neighborhood.jpg';

  getData(): Observable<Array<Order>> {
    return this.#http.get<Array<Order>>(`${this.#url}/data`);
  }

  getDriverInfo(): Observable<Driver[]> {
    let driverInfo: Driver[] = [];

    return this.#http.get<Order[]>(`${this.#url}/data`)
      .pipe(
        shareReplay(),
        map((data) => {
          data.forEach((item: Order) => {
            if (!driverInfo.find((driver) => driver.name === item.motorista.nome)) {
              let delivered = data.filter((driver: Order) => driver.motorista.nome === item.motorista.nome && driver.status_entrega === OrderStatusEnum.Delivered);
              let unsuccessful = data.filter((driver: Order) => driver.motorista.nome === item.motorista.nome && driver.status_entrega === OrderStatusEnum.Unsuccessful);
              let pending = data.filter((driver: Order) => driver.motorista.nome === item.motorista.nome && driver.status_entrega === OrderStatusEnum.Pending);
              let total = data.filter((driver: Order) => driver.motorista.nome === item.motorista.nome);

              const newDriver: Driver = {
                name: item.motorista.nome,
                image: item.motorista.image,
                delivered: delivered.length,
                pending: pending.length,
                unsuccessful: unsuccessful.length,
                total: total.length
              }
              driverInfo.push(newDriver);
            }
          });

          return driverInfo.sort((a, b) => { return a.name.localeCompare(b.name) });
        }
        )
      )
  }

  getNeighborhoodInfo(): Observable<Neighborhood[]> {
    let neighborhoodInfo: Neighborhood[] = [];

    return this.#http.get<Order[]>(`${this.#url}/data`)
      .pipe(
        shareReplay(),
        map((data) => {
          data.forEach((item: Order) => {
            if (!neighborhoodInfo.find((neighborhood) => neighborhood.name === item.cliente_destino.bairro)) {
              let delivered = data.filter((neighborhood: Order) => neighborhood.cliente_destino.bairro === item.cliente_destino.bairro && neighborhood.status_entrega === OrderStatusEnum.Delivered);
              let unsuccessful = data.filter((neighborhood: Order) => neighborhood.cliente_destino.bairro === item.cliente_destino.bairro && neighborhood.status_entrega === OrderStatusEnum.Unsuccessful);
              let pending = data.filter((neighborhood: Order) => neighborhood.cliente_destino.bairro === item.cliente_destino.bairro && neighborhood.status_entrega === OrderStatusEnum.Unsuccessful);
              let total = data.filter((neighborhood: Order) => neighborhood.cliente_destino.bairro === item.cliente_destino.bairro);

              const newNeighborhood: Neighborhood = {
                name: item.cliente_destino.bairro,
                image: this.neighborhoodDefaultImage,
                delivered: delivered.length,
                pending: pending.length,
                unsuccessful: unsuccessful.length,
                total: total.length
              }
              neighborhoodInfo.push(newNeighborhood);
            }
          });

          return neighborhoodInfo.sort((a, b) => { return a.name.localeCompare(b.name) });
        }
        )
      )
  }
}
