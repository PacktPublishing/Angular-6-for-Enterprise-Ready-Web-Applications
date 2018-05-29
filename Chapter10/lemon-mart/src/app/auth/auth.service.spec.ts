import { TestBed, inject } from '@angular/core/testing'

import { AuthService } from './auth.service'
import { HttpClientTestingModule } from '@angular/common/http/testing'
import { UiService } from '../common/ui.service'

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService, UiService],
    })
  })

  it(
    'should be created',
    inject([AuthService], (service: AuthService) => {
      expect(service).toBeTruthy()
    })
  )
})
