import { Routes } from '@angular/router';
import { CustomerLoginComponent } from './customer-login.component';
import { CustomerRegistrationComponent } from './customer-registration.component';

export const customerRoutes: Routes =[
    {path:"signup", component: CustomerRegistrationComponent},
    {path:"login", component:CustomerLoginComponent}
];