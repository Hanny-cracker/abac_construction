import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-property-maintenance',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './property-maintenance.component.html',
  styleUrl: './property-maintenance.component.css'
})
export class PropertyMaintenanceComponent {
  title = "Property Maintenace"
}
