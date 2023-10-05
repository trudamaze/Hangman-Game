import { TestBed } from '@angular/core/testing';

import { UpdateContextService } from './update-context.service';

describe('UpdateContextService', () => {
  let service: UpdateContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
