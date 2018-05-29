import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { PosComponent } from './pos.component'
import { commonTestingModules } from '../../common/common.testing'

describe('PosComponent', () => {
  let component: PosComponent
  let fixture: ComponentFixture<PosComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      declarations: [PosComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PosComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
