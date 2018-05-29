import { NgModule } from '@angular/core'
import {
  MatAutocompleteModule,
  MatDatepickerModule,
  MatDividerModule,
  MatLineModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatStepperModule,
} from '@angular/material'

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatDatepickerModule,
    MatDividerModule,
    MatLineModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
  ],
  exports: [
    MatAutocompleteModule,
    MatDatepickerModule,
    MatDividerModule,
    MatLineModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatStepperModule,
  ],
})
export class UserMaterialModule {}
