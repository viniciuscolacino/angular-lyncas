import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(DataService);
  });

  it('Deveria criar o Serviço', () => {
    expect(service).toBeTruthy();
  });

  it('Teste do getData', () => {
    expect(service.getData()).toBeTruthy();
  });

  it('Teste do getDriverInfo', () => {
    expect(service.getDriverInfo()).toBeTruthy();
  });

  it('Teste do getNeighborhoodInfo', () => {
    expect(service.getNeighborhoodInfo()).toBeTruthy();
  });
});
