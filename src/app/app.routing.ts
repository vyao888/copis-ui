
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InfringementComponent } from './infringement/infringement.component';
import { AfaComponent } from './afa/afa.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogoutComponent } from './logout/logout.component';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './_guards';
// import { ReferenceDataComponent } from './admin/reference-data/reference-data.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'file', loadChildren: './file/file.module#FileModule' },
    { path: 'infringement', component: InfringementComponent },
    { path: 'afa', component: AfaComponent },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: 'reference-data', loadChildren: './admin/reference-data/reference-data.module#ReferenceDataModule' },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'logout', component: LogoutComponent },
     // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'});
