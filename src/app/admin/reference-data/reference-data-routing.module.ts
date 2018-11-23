import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReferenceDataAddComponent } from './reference-data.add.component';
import { ReferenceDataAdminComponent } from './reference-data.admin.component';
import { ReferenceDataEditComponent } from './reference-data.edit.component';

const routes: Routes = [
  { path: 'reference-data', loadChildren: './reference-data.module#ReferenceDataModule' },
  { path: 'reference-data-admin/:type', component: ReferenceDataAdminComponent },
  { path: 'reference-data-add', component: ReferenceDataAddComponent },
  { path: 'reference-data-edit/:code', component: ReferenceDataEditComponent },
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [
    ReferenceDataAddComponent,
    ReferenceDataEditComponent,
    ReferenceDataAdminComponent
  ],
})
export class ReferenceDataRoutingModule { }
