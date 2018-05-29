import { HttpClientTestingModule } from '@angular/common/http/testing'
import { inject, TestBed } from '@angular/core/testing'

import { AuthService } from '../../auth/auth.service'
import { AuthServiceFake } from '../../auth/auth.service.fake'
import { UserService } from './user.service'

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: AuthService, useClass: AuthServiceFake }
      ],
      imports: [HttpClientTestingModule],
    })
  })

  it(
    'should be created',
    inject([UserService], (service: UserService) => {
      expect(service).toBeTruthy()
    })
  )
})
