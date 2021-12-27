import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RatesComponent} from './components/rates/rates.component';
import {EmployeesComponent} from './components/employees/employees.component';
import {AboutComponent} from './components/about/about.component';

const appRoutes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'rates', component: RatesComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'aboutus', component: AboutComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
