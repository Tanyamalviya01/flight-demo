import { Routes } from '@angular/router';

import { Login } from './components/login/login';
import { Signup } from './components/signup/signup';
import { FlightForm } from './components/flight-form/flight-form';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },
  { path: 'flight-form', component: FlightForm, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
