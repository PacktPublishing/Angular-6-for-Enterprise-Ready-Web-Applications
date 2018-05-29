import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'

import { AppMaterialModule } from '../app-material.module'
import { CategoriesComponent } from '../inventory/categories/categories.component'
import { InventoryHomeComponent } from '../inventory/inventory-home/inventory-home.component'
import { ProductsComponent } from '../inventory/products/products.component'
import { StockEntryComponent } from '../inventory/stock-entry/stock-entry.component'
import { InventoryRoutingModule } from './inventory-routing.module'
import { InventoryComponent } from './inventory.component'

@NgModule({
  imports: [CommonModule, InventoryRoutingModule, AppMaterialModule],
  declarations: [
    CategoriesComponent,
    InventoryHomeComponent,
    ProductsComponent,
    StockEntryComponent,
    InventoryComponent,
  ],
})
export class InventoryModule {}
