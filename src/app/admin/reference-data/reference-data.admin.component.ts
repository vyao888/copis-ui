import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, ActivatedRoute } from '@angular/router';
import { Reference } from '../../_models';
import { ReferenceDataService,
         ReferenceDataTypeChangeService,
         ReferenceDataTypeLookupService} from '../../_services';


@Component({
  selector: 'app-reference-data-admin',
  templateUrl: './reference-data.admin.component.html',
  styleUrls: ['./reference-data.admin.component.css']
})
export class ReferenceDataAdminComponent implements OnInit, OnDestroy {
  navigationSubscription;
  references: Reference[];
  referenceType: string;

  constructor(private router: Router, activeRoute: ActivatedRoute, private rds: ReferenceDataService,
    private refTypeService: ReferenceDataTypeChangeService, private refTypeLookup: ReferenceDataTypeLookupService) {
    console.log('ReferenceDataAdminComponent Constructor.');
    this.referenceType = activeRoute.snapshot.params['type'];
    console.log(`this.referenceType: ${this.referenceType}`);
    this.refTypeService.changeReferenceType(this.referenceType);
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd | NavigationStart event re-initalise the component
      if (e instanceof NavigationStart || e instanceof NavigationEnd ) {
        this.initialiseReferenceData();
      }
    });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  initialiseReferenceData() {
    console.log('initialiseReferenceData.');
    this.rds.getMany(this.referenceType).subscribe(
      (data: Reference[]) => {
      this.references = data;
      console.log('Reference: ' + JSON.stringify(this.references));
    });
  }

  delete(code) {
    this.rds.delete(this.referenceType, code).subscribe(res => {
        console.log(`Deletion ${this.referenceType} Done.`);
    });
    this.references.splice(this.references.
      findIndex(r => r.code === code), 1);
  }

  cancel() {
    this.router.navigate(['/admin/reference-data']);
  }

  get typeDescription() {
    console.log(`Lookup type description via ${this.referenceType}.`);
    return this.refTypeLookup.typeDescription(this.referenceType);
  }

}
