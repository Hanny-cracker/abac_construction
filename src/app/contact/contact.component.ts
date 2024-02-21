import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ RouterModule,MatFormFieldModule, MatInputModule, MatSelectModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email ='abac@abacconstruction.com';

  submitApplication() {
    // this.housingService.submitApplication(
    //   this.applyForm.value.firstName ?? '',
    //   this.applyForm.value.lastName ?? '',
    //   this.applyForm.value.email ?? ''
    // );
    console.log(this.applyForm.value)
  }
  applyForm = new FormGroup({
    fullName: new FormControl('',[Validators.required]),
    address: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    phone_number : new FormControl('',[Validators.required]),
    text : new FormControl('',[Validators.required])
  });

}
