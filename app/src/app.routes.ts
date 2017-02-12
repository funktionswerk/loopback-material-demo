import {Routes} from '@angular/router';
import {DashboardViewComponent} from './components/views/dashboard';

export const AppRoutes: Routes = [
  {path: DashboardViewComponent.path, component: DashboardViewComponent}
];