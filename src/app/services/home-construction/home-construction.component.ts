import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-construction',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-construction.component.html',
  styleUrl: './home-construction.component.css'
})
export class HomeConstructionComponent {
  title = "Home Construction"
}
