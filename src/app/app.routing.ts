import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { CreateStudentAccComponent } from './create-student-acc';
import { SuccessComponent } from './success';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'create-student-account', component: CreateStudentAccComponent },
    { path: 'account-successfully-created', component: SuccessComponent },

    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);