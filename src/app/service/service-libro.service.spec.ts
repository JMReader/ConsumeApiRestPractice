import { TestBed } from '@angular/core/testing';

import { ServiceLibroService } from './service-libro.service';

describe('ServiceLibroService', () => {
  let service: ServiceLibroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceLibroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
