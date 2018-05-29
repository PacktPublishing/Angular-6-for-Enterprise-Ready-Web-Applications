import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material.module'
import { HomeComponent } from './home/home.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LoginComponent } from './login/login.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { UiService } from './common/ui.service'
import { AuthHttpInterceptor } from './auth/auth-http-interceptor'
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component'
import { AuthService } from './auth/auth.service'
import { AuthGuard } from './auth/auth-guard.service'
import { SimpleDialogComponent } from './common/simple-dialog/simple-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LoginComponent,
    NavigationMenuComponent,
    SimpleDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
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
