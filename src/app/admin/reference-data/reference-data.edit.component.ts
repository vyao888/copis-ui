import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ReferenceDataService, ReferenceDataTypeChangeService, ReferenceDataTypeLookupService } from '../../_services';

@Component({
    selector: 'app-reference-data-edit',
    templateUrl: './reference-data.edit.component.html',
    styleUrls: ['./reference-data.edit.component.css']
})
export class ReferenceDataEditComponent implements OnInit {
    defaultUrl: string;
    reference: any = {};
    referenceType: string;
    refForm: FormGroup;

    constructor(private route: ActivatedRoute, private router: Router,
      private fb: FormBuilder, private rds: ReferenceDataService,
      private refTypeService: ReferenceDataTypeChangeService,
      private refTypeLookupService: ReferenceDataTypeLookupService) {
        this.createForm();
    }

    createForm() {
        this.refForm = this.fb.group({
            code: ['', Validators.required ],
            description: ['', Validators.required ]
        });
    }

    get f() { return this.refForm.controls; }

    ngOnInit() {
        this.refTypeService.currentReferenceType.subscribe( s => this.referenceType = s);
        console.log('this.referenceType: ' + this.referenceType);
        this.defaultUrl = `/reference-data/reference-data-admin/${this.referenceType}`;
        console.log('this.defaultUrl: ' + this.defaultUrl);
        this.route.params.subscribe(params => {
            this.rds.getOne(this.referenceType, params['code']).subscribe(res => {
                this.reference = res;
                console.log('Reference: ' + JSON.stringify(this.reference));
            });
        });
    }

    update(description) {
        console.log('Decription for update: ' + description);
        this.reference.description = description;
        console.log('To be updated reference: ' + JSON.stringify(this.reference));
        console.log('this.referenceType: ' + this.referenceType);
        this.route.params.subscribe(params => {
           this.rds.update(this.referenceType, this.reference).subscribe(res => {
                this.reference = res;
                console.log('Update Done.');
            });
            this.router.navigate([this.defaultUrl]);
     });
    }

    cancel() {
        console.log(`is about to navigate to: ${this.defaultUrl}.`);
        this.router.navigate([this.defaultUrl]);
    }

    get typeDescription() {
        console.log(`Lookup type description via ${this.referenceType}.`);
        return this.refTypeLookupService.typeDescription(this.referenceType);
    }
}
