import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { requestOptionsProvider } from './default-request-options.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsComponent } from './forms.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsService } from './forms.service';


@NgModule({
  imports:      [ 
    CommonModule, 
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    JsonpModule
],
  declarations: [     FormsComponent ],
  exports:      [ FormsComponent ],
  providers:    [ requestOptionsProvider,FormsService ]
})
export class FormulaireModule { }
