import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { commonTestingModules, commonTestingProviders } from '../../common/common.testing'
import { ManagerMaterialModule } from '../manager-material.module'
import { UserManagementComponent } from './user-management.component'

describe('UserManagementComponent', () => {
  let component: UserManagementComponent
  let fixture: ComponentFixture<UserManagementComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserManagementComponent],
      providers: commonTestingProviders,
      imports: commonTestingModules.concat([ManagerMaterialModule]),
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
