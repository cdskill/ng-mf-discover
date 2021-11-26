import { Component } from '@angular/core';
import {CounterService} from "shared-lib";
import { CounterService as counterServiceLIB} from "counter-lib";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shell';
  constructor(public counterService: CounterService, public counterServiceLIB: counterServiceLIB) { }

}
