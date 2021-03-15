import { TestBed } from '@angular/core/testing';

import { GitrepoService } from './gitrepo.service';

describe('GitrepoService', () => {
  let service: GitrepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GitrepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
