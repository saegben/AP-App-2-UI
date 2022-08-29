import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { CreateAccountComponent } from './create_account';
import { AccountCreatedComponent } from './account_created';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'create-account', component: CreateAccountComponent },
    { path: 'account-created', component: AccountCreatedComponent },

    { path: '**', redirectTo: '' }
];


export const appRoutingModule = RouterModule.forRoot(routes);
