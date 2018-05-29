import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ManagerRoutingModule } from './manager-routing.module'
import { ManagerHomeComponent } from './manager-home/manager-home.component'
import { ManagerComponent } from './manager.component'
import { MaterialModule } from '../material.module'
import { UserManagementComponent } from './user-management/user-management.component'
import { ReceiptLookupComponent } from './receipt-lookup/receipt-lookup.component'
import { AuthGuard } from '../auth/auth-guard.service'
import { AuthService } from '../auth/auth.service'

@NgModule({
  imports: [CommonModule, ManagerRoutingModule, MaterialModule],
  declarations: [
    ManagerHomeComponent,
    ManagerComponent,
    UserManagementComponent,
    ReceiptLookupComponent,
  ],
  providers: [AuthGuard, AuthService],
})
export class ManagerModule {}
