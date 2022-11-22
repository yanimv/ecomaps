import { TestBed } from '@angular/core/testing';

import { ListarecicladorasService } from './listarecicladoras.service';

describe('ListarecicladorasService', () => {
  let service: ListarecicladorasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarecicladorasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
