import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 service = [
  {
    id : 1,
    img : "assets/service-pic/list2.png",
    title : "Building Construction",
    text : `Service overview With experience contracting 
    and professional industry latest generation technological`,
    more : "Learn More"
  },
  {
    id : 2,
    img : "assets/service-pic/list2.png",
    title : "Home Construction",
    text : `Service overview With experience contracting 
    and professional industry latest generation technological`,
    more : "Learn More"
  },
  {
    id : 3,
    img : "assets/service-pic/list2.png",
    title : "Property Maintenace",
    text : `Service overview With experience contracting 
    and professional industry latest generation technological`,
    more : "Learn More"
  },
  {
    id : 4,
    img : "assets/service-pic/list2.png",
    title : "Innovation Design",
    text : `Service overview With experience contracting 
    and professional industry latest generation technological`,
    more : "Learn More"
  },
  {
    id : 5,
    img : "assets/service-pic/list2.png",
    title : "Building Design",
    text : `Service overview With experience contracting 
    and professional industry latest generation technological`,
    more : "Learn More"
  },  
  { 
    id : 6,
    img : "assets/service-pic/list2.png",
    title : "Land Survey",
    text : `Service overview With experience contracting 
    and professional industry latest generation technological`,
    more : "Learn More"
  },
 ]

}