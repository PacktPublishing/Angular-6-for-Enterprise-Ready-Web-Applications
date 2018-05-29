import { TestBed, inject } from '@angular/core/testing'
import { AuthGuard } from './auth-guard.service'
import { commonTestingProviders, commonTestingModules } from '../common/common.testing'

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders.concat(AuthGuard),
    })
  })

  it(
    'should be created',
    inject([AuthGuard], (service: AuthGuard) => {
      expect(service).toBeTruthy()
    })
  )
})
