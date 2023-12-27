import { TestBed } from '@angular/core/testing';

import { MovieApiServiseService } from './movie-api-servise.service';

describe('MovieApiServiseService', () => {
  let service: MovieApiServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieApiServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
