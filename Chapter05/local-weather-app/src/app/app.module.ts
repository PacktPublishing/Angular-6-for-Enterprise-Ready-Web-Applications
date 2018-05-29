import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import 'hammerjs'
import { MaterialModule } from './/material.module'
import { AppComponent } from './app.component'
import { CurrentWeatherComponent } from './current-weather/current-weather.component'
import { WeatherService } from './weather/weather.service'

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
