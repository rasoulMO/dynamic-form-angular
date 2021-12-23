import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  template: `
    <form [formGroup]="form" (ngSubmit)="submittedData = data">
      <formly-form [model]="data" [fields]="formDataObj">
        <button type="submit">Save</button>
      </formly-form>
    </form>
    <pre>{{ submittedData | json }}</pre>
  `,
  styles: [
    `
    .error {
      color: red;
    }
  `
  ]
})
export class DynamicFormComponent {
  form: FormGroup = new FormGroup({});
  @Input() data: any;
  @Input() formDataObj: any;
  submittedData: any;
}

