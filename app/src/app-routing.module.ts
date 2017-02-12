
import {NgModule}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {DashboardViewComponent} from './components/views/Dashboard';
import {LoginViewComponent} from './components/views/Login';
import {PageNotFoundViewComponent} from './components/views/PageNotFound';
const AppRoutes: Routes = [
  {path: DashboardViewComponent.path, component: DashboardViewComponent},
  {path: LoginViewComponent.path, component: LoginViewComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: '**', component: PageNotFoundViewComponent}
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