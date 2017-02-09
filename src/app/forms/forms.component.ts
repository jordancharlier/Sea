import { FormsService } from './forms.service';
import { Component, OnInit  } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Form } from './forms';

@Component({
  selector: 'complex-form',
  templateUrl : './forms.component.html',
  providers: [ FormsService ]
})
export class FormsComponent implements OnInit{
  complexForm : FormGroup;
  errorMessage: string;
  forms: Form[];
  mode = 'Observable';
  condition=false;
  constructor(fb: FormBuilder, private formService: FormsService){
    this.complexForm = fb.group({
      'Commentaire': ''
    })
  }
  submitForm(value: any):void{
   
  }
  ngOnInit() { this.getForms();}

  getForms() {
    this.formService.getForms()
                     .subscribe(
                       forms => this.forms = forms,
                       error =>  this.errorMessage = <any>error);
  }
  addForm (text: string) {
    if (!text) { return; }
    this.formService.addForm(text)
                     .subscribe(
                       form  => this.forms.push(form),
                       error =>  this.errorMessage = <any>error);
  }


}