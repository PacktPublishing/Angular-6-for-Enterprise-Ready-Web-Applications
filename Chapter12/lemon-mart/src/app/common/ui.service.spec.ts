import { inject, TestBed } from '@angular/core/testing'

import { commonTestingModules } from './common.testing'
import { UiService } from './ui.service'

describe('UiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiService],
      imports: commonTestingModules,
    })
  })

  it(
    'should be created',
    inject([UiService], (service: UiService) => {
      expect(service).toBeTruthy()
    })
  )
})
