import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { FuturumaService } from './futuruma.service';

describe('FuturumaService', () => {
  let service: FuturumaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(FuturumaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
