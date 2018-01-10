import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { RoutingModule } from "./routing/routing.module";
import { DespesaService } from "./despesa.service";
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    //NgbModule.forRoot()
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: 'despesasApp',
      storageType: 'localStorage'
    })
  ],
  providers: [DespesaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
