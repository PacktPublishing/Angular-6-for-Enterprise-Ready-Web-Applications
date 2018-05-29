import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ManagerComponent } from './manager.component'
import { commonTestingModules } from '../common/common.testing'

describe('ManagerComponent', () => {
  let component: ManagerComponent
  let fixture: ComponentFixture<ManagerComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      declarations: [ManagerComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
