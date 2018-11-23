import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from './upload.component';
import { ImportComponent } from './import.component';
import { ExportComponent } from './export.component';
import { FileSelectDirective } from 'ng2-file-upload';

const routes: Routes = [
  { path: 'upload', component: UploadComponent },
  { path: 'import', component: ImportComponent },
  { path: 'export', component: ExportComponent },
  { path: '**', redirectTo: 'upload' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [UploadComponent, ExportComponent, ImportComponent, FileSelectDirective]
})
export class FileRoutingModule { }
