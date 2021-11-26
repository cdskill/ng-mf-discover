import { Component, OnInit } from '@angular/core';
import { CounterService } from "counter-lib";

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.scss']
})
export class TrackingComponent implements OnInit {

  constructor(public counterServiceLIB: CounterService) { }

  ngOnInit(): void {
  }

}
