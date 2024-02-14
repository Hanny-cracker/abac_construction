import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-building-construction',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './building-construction.component.html',
  styleUrl: './building-construction.component.css'
})
export class BuildingConstructionComponent {
  title = "Building Construction";

}
