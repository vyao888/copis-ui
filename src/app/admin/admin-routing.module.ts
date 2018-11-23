import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReferenceDataComponent } from './reference-data/reference-data.component';
import { SettingsComponent } from './settings/settings.component';
import { UserManagementComponent } from './user-management/user-management.component';

const routes: Routes = [
  { path: 'user-management', component: UserManagementComponent },
  { path: 'reference-data', component: ReferenceDataComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: 'user-management' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
    UserManagementComponent,
    ReferenceDataComponent,
    SettingsComponent
  ]
})
export class AdminRoutingModule { }
