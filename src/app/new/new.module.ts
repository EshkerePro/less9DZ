import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
    declarations: [NewComponent],
    exports: [
        NewComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: 'new', component: NewComponent
            }
        ]),
        ReactiveFormsModule
    ]
})
export class NewModule { }
