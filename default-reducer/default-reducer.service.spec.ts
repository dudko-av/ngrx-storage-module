/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DefaultReducer } from './default-reducer.service';

describe('DefaultReducerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DefaultReducer]
    });
  });

  it('should ...', inject([DefaultReducer], (service: DefaultReducer) => {
    expect(service).toBeTruthy();
  }));
});
