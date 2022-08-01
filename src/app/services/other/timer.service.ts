import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }

  wait(operation:Function, timeout){
    setTimeout(() => {
        operation();
    }, timeout);
  }

}