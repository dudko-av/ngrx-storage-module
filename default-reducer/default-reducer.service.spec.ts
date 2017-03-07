/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DefaultReducerService } from './default-reducer.service';

describe('DefaultReducerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultReducerService]
    });
  });

  it('should ...', inject([DefaultReducerService], (service: DefaultReducerService) => {
    expect(service).toBeTruthy();
  }));
});
