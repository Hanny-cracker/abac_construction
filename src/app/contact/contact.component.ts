import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
//import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email ='etsabac996@gmail.com';
}
