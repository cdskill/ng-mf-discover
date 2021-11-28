import {Component, OnInit} from '@angular/core';
import {CounterService} from "shared-lib";
import {CounterService as counterServiceLIB} from "counter-lib";
import {TranslateService} from "@ngx-translate/core";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shell';
  destroyed$ = new Subject();
  languages = [
    {name: '🇬🇧 English', code: 'en'},
    {name: '🇫🇷 French', code: 'fr'},
  ];
  selectedLang: 'fr' | 'en' = 'en';

  constructor(public counterService: CounterService, public counterServiceLIB: counterServiceLIB, private translateService: TranslateService) {
  }

  ngOnInit() {
    this.translateService.onLangChange.pipe(takeUntil(this.destroyed$)).subscribe(v => console.log('shell', v))
  }

  onLanguageChange({code}: {name: string, code: string}) {
    this.translateService.use(code)
  }
  ngOnDestroy(){
    this.destroyed$.next()
  }
}
