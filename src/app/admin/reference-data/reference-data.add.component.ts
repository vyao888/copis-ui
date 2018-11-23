import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ReferenceDataService,
         ReferenceDataTypeChangeService,
         ReferenceDataTypeLookupService } from '../../_services';

@Component({
    selector: 'app-reference-data-add',
    templateUrl: './reference-data.add.component.html',
    styleUrls: ['./reference-data.add.component.css']
})
export class ReferenceDataAddComponent implements OnInit {
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
        this.defaultUrl = `/reference-data/reference-data-admin/${this.referenceType}`;
    }

    create(code, description) {
        console.log('this.referenceType: ' + this.referenceType);
        this.reference = {
            code: code,
            description: description
        };
        console.log('New Reference: ' + JSON.stringify(this.reference));
        this.rds.create(this.referenceType, this.reference).subscribe(res => {
            this.reference = res;
            console.log('Creation Done.');
        });
        this.router.navigate([this.defaultUrl]);
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
