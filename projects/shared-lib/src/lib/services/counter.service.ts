import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private sub$ = new BehaviorSubject(0);
  subObs$ = this.sub$.asObservable();

  constructor() {
  }

  increment() {
    this.sub$.next(this.sub$.value + 1);
  }
}
