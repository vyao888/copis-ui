import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { ReferenceDataService, ReferenceDataTypeChangeService,  ReferenceDataTypeLookupService, RoutingStateService } from '../_services';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [],
  providers: [
    ReferenceDataService,
    ReferenceDataTypeChangeService,
    ReferenceDataTypeLookupService,
    RoutingStateService
  ],
})
export class AdminModule { }
