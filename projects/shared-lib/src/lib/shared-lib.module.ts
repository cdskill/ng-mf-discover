import { NgModule } from '@angular/core';
import { SharedLibComponent } from './shared-lib.component';

export const COMPONENTS = [SharedLibComponent]

@NgModule({
  declarations: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS
  ]
})
export class SharedLibModule { }
