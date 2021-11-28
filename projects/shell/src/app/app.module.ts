import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from "@angular/forms";
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MultiTranslateHttpLoader} from "ngx-translate-multi-http-loader";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {prefix: "./assets/i18n/", suffix: ".json"},
  ]);
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    MenubarModule,
    ButtonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      extend: true,
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('APPMODULE>>customer:: started')
  }
}
