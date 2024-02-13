import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import { OurHistoryComponent } from './pages/our-history/our-history.component';
import { TeamMembersComponent } from './pages/team-members/team-members.component';

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
        path: 'about-us',
        component: AboutUsComponent,
        title: 'About Us'
      },
      {
        path: 'team',
        component: TeamMembersComponent,
        title: 'About Us'
      },
      {
        path: 'history',
        component: OurHistoryComponent,
        title: 'About Us'
      }
];
