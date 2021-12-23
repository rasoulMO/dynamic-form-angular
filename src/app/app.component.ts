import {Validators} from '@angular/forms';
import {Component} from '@angular/core';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Dynamic reactive forms in Angular</h1>
    <app-dynamic-form [data]="person" [formDataObj]="personFields"></app-dynamic-form>
  `
})
export class AppComponent {
  person = {
    firstname: 'Juri',
    age: 32,
    gender: 'M'
  };

  personFields = <FormlyFieldConfig>[
    {
      key: 'firstname',
      type: 'input',
      templateOptions: {
        label: 'Firstname'
      },
      validators: {
        validation: Validators.required
      },
      validation: {
        messages: {
          required: 'You need to provide a value'
        }
      }
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        label: 'Age',
        type: 'number'
      },
      validators: {
        validation: Validators.min(18)
      },
      validation: {
        messages: {
          min: 'You need to specify a value greater or equal to 18'
        }
      }
    },
    {
      key: 'gender',
      type: 'radio',
      templateOptions: {
        label: 'Gender',
        options: [{value: 'Male', key: 'M'}, {value: 'Female', key: 'F'}]
      }
    }
  ];
}