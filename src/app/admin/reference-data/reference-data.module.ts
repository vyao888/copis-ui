import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReferenceDataRoutingModule } from './reference-data-routing.module';
import { ReferenceDataService,
         ReferenceDataTypeChangeService,
         ReferenceDataTypeLookupService,
         RoutingStateService } from '../../_services';
@NgModule({
  imports: [
    CommonModule,
    ReferenceDataRoutingModule
  ],
  declarations: [],
  providers: [
    ReferenceDataService,
    ReferenceDataTypeChangeService,
    ReferenceDataTypeLookupService,
    RoutingStateService
  ]
})
export class ReferenceDataModule { }
