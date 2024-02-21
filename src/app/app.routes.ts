import { config } from './app.config.server';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent} from './pages/about-us/about-us.component';
import { OurHistoryComponent } from './pages/our-history/our-history.component';
import { TeamMembersComponent } from './pages/team-members/team-members.component';
import { ContactComponent } from './contact/contact.component';
import { BuildingConstructionComponent } from './services/building-construction/building-construction.component';
import { BuildingDesignComponent } from './services/building-design/building-design.component';
import { PropertyMaintenanceComponent } from './services/property-maintenance/property-maintenance.component';
import { HomeConstructionComponent } from './services/home-construction/home-construction.component';
import { DetailsComponent } from './details/details.component';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
        title: 'Home page'
      },
      {
        path: ':/home',
        component: HomeComponent,
        title: 'Home page'
      },
      {
        path: 'pages/about-us',
        component: AboutUsComponent,
        title: 'About Us'
      },
      {
        path: 'pages/team',
        component: TeamMembersComponent,
        title: 'About Us'
      },
      {
        path: 'pages/history',
        component: OurHistoryComponent,
        title: 'About Us'
      },
      {
        path: 'contact',
        loadComponent : () => import('./contact/contact.component').then(m => m.ContactComponent)
      },
      {
        path : 'services/building-construction',
        component : BuildingConstructionComponent,
        title : 'Bulding Construction'
      },
      {
        path : 'services/building-design',
        component :  BuildingDesignComponent,
        title : 'Building Design'
      },
      {
        path : 'services/software-Training',
        component : HomeConstructionComponent,
        title : 'Home Construction'
      },
      {
        path : 'services/property-maintenance',
        component : PropertyMaintenanceComponent,
        title : 'Property Maintenace'
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home details'
      }
];
