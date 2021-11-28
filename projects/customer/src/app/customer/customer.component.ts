import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {CounterService} from "shared-lib";
import {TranslateService} from "@ngx-translate/core";
import {Subject} from "rxjs";
import {startWith, take, takeUntil} from "rxjs/operators";
import {HttpLoaderFactory} from "./customer.module";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit, OnDestroy {

  destroyed$ = new Subject();

  constructor(public counterService: CounterService, private translateService: TranslateService, private inj: Injector) {
  }

  ngOnInit(): void {
    this.translateService.onLangChange.pipe(startWith(this.translateService.currentLang),
      takeUntil(this.destroyed$)).subscribe(v => console.log('mfCustomer', v))
    console.log('testing');


    HttpLoaderFactory(this.inj.get(HttpClient)).getTranslation('en')
      .pipe(take(1))
      .subscribe(z => {
          console.log({z})
        }
      )

    this.translateService.getTranslation('en')
      .pipe(take(1))
      .subscribe(v => {
        console.log({v})
        this.translateService.setTranslation('en', v, true);
        this.translateService.getTranslation('en').pipe(take(1)).subscribe(u => console.log({u}))
      })
  }

  ch() {
    this.translateService.use('fr');
  }

  ngOnDestroy() {
    this.destroyed$.next()
  }
}
