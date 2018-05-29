import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PosRoutingModule } from './pos-routing.module'
import { PosComponent } from './pos/pos.component'
import { AppMaterialModule } from '../app-material.module'

@NgModule({
  imports: [CommonModule, PosRoutingModule, AppMaterialModule],
  declarations: [PosComponent],
})
export class PosModule {}
