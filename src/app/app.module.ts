import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SaveInfService} from './save-inf.service';
import {RouterModule} from '@angular/router';
import {NewModule} from './new/new.module';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'new', loadChildren: () => import('./new/new.module').then(value => value.NewModule)
      }
    ]),
    NewModule,
    FormsModule
  ],
  providers: [SaveInfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
