import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppMaterialModule } from '../app-material.module'
import { SharedComponentsModule } from '../shared-components.module'
import { LogoutComponent } from './logout/logout.component'
import { ProfileComponent } from './profile/profile.component'
import { UserMaterialModule } from './user-material.module'
import { UserRoutingModule } from './user-routing.module'

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    UserMaterialModule,
    AppMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedComponentsModule,
  ],
  declarations: [ProfileComponent, LogoutComponent],
})
export class UserModule {}
