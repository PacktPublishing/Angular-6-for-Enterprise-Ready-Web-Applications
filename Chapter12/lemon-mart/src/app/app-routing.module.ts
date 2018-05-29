import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { AuthGuard } from './auth/auth-guard.service'
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login/:redirectUrl', component: LoginComponent },
  {
    path: 'manager',
    loadChildren: './manager/manager.module#ManagerModule',
    canLoad: [AuthGuard],
  },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'pos', loadChildren: './pos/pos.module#PosModule' },
  { path: 'inventory', loadChildren: './inventory/inventory.module#InventoryModule' },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
