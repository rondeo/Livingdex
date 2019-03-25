import { TestBed } from '@angular/core/testing';

import { GenerationsService } from './generations.service';

describe('GenerationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenerationsService = TestBed.get(GenerationsService);
    expect(service).toBeTruthy();
  });
});
