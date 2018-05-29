import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { HomeComponent } from './home.component'
import { commonTestingProviders, commonTestingModules } from '../common/common.testing'
import { LoginComponent } from '../login/login.component'

describe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: commonTestingProviders,
      declarations: [HomeComponent, LoginComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
