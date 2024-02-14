import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-building-design',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './building-design.component.html',
  styleUrl: './building-design.component.css'
})
export class BuildingDesignComponent {
  title = "Building Design"

}
