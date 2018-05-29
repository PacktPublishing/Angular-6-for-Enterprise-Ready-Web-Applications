import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'

import { ViewUserComponent } from './view-user.component'
import { AppMaterialModule } from '../../app-material.module'

describe('ViewUserComponent', () => {
  let component: ViewUserComponent
  let fixture: ComponentFixture<ViewUserComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FlexLayoutModule,
        AppMaterialModule,
        RouterTestingModule,
      ],
      declarations: [ViewUserComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
