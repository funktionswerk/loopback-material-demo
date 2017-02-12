import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardViewComponent} from './components/views/Dashboard';
import {LoginViewComponent} from './components/views/Login';
import {PageNotFoundViewComponent} from './components/views/PageNotFound';

const AppRoutes: Routes = [
  DashboardViewComponent.routeConfig,
  LoginViewComponent.routeConfig,
  {path: '', redirectTo: LoginViewComponent.routeConfig.path, pathMatch: 'full'},
  {path: '**', component: PageNotFoundViewComponent}
];

export const AppViewComponents: any[] = [
  DashboardViewComponent,
  LoginViewComponent,
  PageNotFoundViewComponent
];

@NgModule({
  imports: [
    RouterModule.forRoot(AppRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}