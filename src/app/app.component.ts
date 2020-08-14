import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SaveInfService} from './save-inf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'less9DZ';

  forma: FormGroup;
  kod: FormControl;

  constructor(private saveInfService: SaveInfService) {
    this.kod = new FormControl('', [Validators.required]);
    this.forma = new FormGroup({
      kod: this.kod
    });
  }

  save(value): void {
    this.saveInfService.changeInfo(value.controls.kod.value);
    alert('kod is saved');
  }

  NewTitle($event: any): any {
    this.title = $event;
  }
}
