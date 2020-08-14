import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaveInfService {

  private info = new BehaviorSubject<string>('');

  constructor() { }

  changeInfo(value): void {
    this.info.next(value);
  }

  getInfo(): any {
    return this.info.getValue();
  }
}
