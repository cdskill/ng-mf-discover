import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerComponent} from './customer.component';
import {CustomerRoutingModule} from "./customer-routing.module";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MultiTranslateHttpLoader} from "ngx-translate-multi-http-loader";

export function createTranslateLoader(http: HttpClient) {
  console.log('createTranslateLoader::customer')
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function HttpLoaderFactory(http: HttpClient) {
  return new MultiTranslateHttpLoader(http, [
    {prefix: "./assets/i18n/", suffix: ".json"},
  ]);
}

@NgModule({
  declarations: [
    CustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    TranslateModule.forChild({
      defaultLanguage: 'en',
      extend: true,
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ]
})
export class CustomerModule { }
