import {Routes} from '@angular/router';
import {DashboardViewComponent} from './components/views/dashboard';
import {LoginViewComponent} from './components/views/login';

export const AppRoutes: Routes = [
  {path: DashboardViewComponent.path, component: DashboardViewComponent},
  {path: LoginViewComponent.path, component: LoginViewComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];