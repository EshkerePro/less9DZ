import {Component,  OnInit} from '@angular/core';
import {SaveInfService} from '../../save-inf.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {


  constructor(private saveInfService: SaveInfService) {
    this.count = new FormControl('', [Validators.required]);
    this.forma = new FormGroup({
      count: this.count
    });
  }
kod: string;

forma: FormGroup;
count: FormControl;

numb: number;


  ngOnInit(): void {

    this.kod = this.saveInfService.getInfo();
  }

  next(form): any {
    this.numb = form.controls.count.value + 1;
    this.saveInfService.changeInfo(this.numb);
    form.controls.count.value = this.numb;
    console.log(form.controls.count.value);
  }

  back(form: FormGroup): any {
    this.numb = form.controls.count.value - 1;
    this.saveInfService.changeInfo(this.numb);
    form.controls.count.value = this.numb;
    console.log(form.controls.count.value);
  }
}
