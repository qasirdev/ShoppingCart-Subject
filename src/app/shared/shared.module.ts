import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricePercentagePipe } from './price-percentage.pipe';

@NgModule({
  declarations: [PricePercentagePipe],
  imports: [
    CommonModule
  ],
  exports:[
    PricePercentagePipe
  ]
})
export class SharedModule { }
