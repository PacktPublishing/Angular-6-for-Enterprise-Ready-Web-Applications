import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppMaterialModule } from './app-material.module'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthGuard } from './auth/auth-guard.service'
import { AuthHttpInterceptor } from './auth/auth-http-interceptor'
import { AuthService } from './auth/auth.service'
import { SimpleDialogComponent } from './common/simple-dialog/simple-dialog.component'
import { UiService } from './common/ui.service'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { SharedComponentsModule } from './shared-components.module'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    SimpleDialogComponent,
    NavigationMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule,
  ],
  providers: [
    AuthService,
    AuthGuard,
    UiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
