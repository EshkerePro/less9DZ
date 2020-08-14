import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  newTitle: string;

  @Output()
  emmitTitle = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  saveTitle(): void {
console.log(this.newTitle);
this.emmitTitle.emit(this.newTitle);
  }
}
