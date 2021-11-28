import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {TranslateModule} from "@ngx-translate/core";
import {EagerComponent} from './eager/eager.component';

@NgModule({
  declarations: [
    AppComponent,
    EagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      extend: true,
      defaultLanguage: 'en'
    })
  ],
  exports: [TranslateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
