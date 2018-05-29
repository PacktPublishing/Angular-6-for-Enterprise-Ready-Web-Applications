import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { LoginComponent } from './login.component'
import { commonTestingModules, commonTestingProviders } from '../common/common.testing'

describe('LoginComponent', () => {
  let component: LoginComponent
  let fixture: ComponentFixture<LoginComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders,
      declarations: [LoginComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
