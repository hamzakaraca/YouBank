import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagereloadService {

  constructor() { }
  pageReload(){
    window.location.reload();
    return null;
  }
}
