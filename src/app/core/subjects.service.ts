import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject, ReplaySubject, AsyncSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  
  //Define Subject and Observable properties here
  private subject$ : Subject<string>;
  observable$ : Observable<string>;

  constructor() {
    this.init();
  }

  init() {

    // Create Subject and Observable Here 
    // this.subject$ = new BehaviorSubject(null);
    // this.subject$ = new AsyncSubject();
    this.subject$ = new ReplaySubject();
    this.observable$ = this.subject$.asObservable();

    // Create interval here
    setInterval(()=>{
      const date = new Date();
      const time = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
      this.subject$.next(time);
    }, 3000);

  }

}
