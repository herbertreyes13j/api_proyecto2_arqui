import { TestBed } from '@angular/core/testing';

import { MandoService } from './mando.service';

describe('MandoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MandoService = TestBed.get(MandoService);
    expect(service).toBeTruthy();
  });
});
