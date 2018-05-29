import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { InventoryRoutingModule } from './inventory-routing.module'
import { CategoriesComponent } from '../inventory/categories/categories.component'
import { InventoryHomeComponent } from '../inventory/inventory-home/inventory-home.component'
import { ProductsComponent } from '../inventory/products/products.component'
import { StockEntryComponent } from '../inventory/stock-entry/stock-entry.component'
import { InventoryComponent } from './inventory.component'
import { MaterialModule } from '../material.module'

@NgModule({
  imports: [CommonModule, InventoryRoutingModule, MaterialModule],
  declarations: [
    CategoriesComponent,
    InventoryHomeComponent,
    ProductsComponent,
    StockEntryComponent,
    InventoryComponent,
  ],
})
export class InventoryModule {}
