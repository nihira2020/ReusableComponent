import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';

describe('MasterService', () => {
  let service: MasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have access',()=>{
expect(service.HaveAccess('admin')).toEqual(true);
  });

  it('Get the admin status',()=>{
expect(service.GetCurrentRole('adminuser')).toContain('admin')
  });


});
