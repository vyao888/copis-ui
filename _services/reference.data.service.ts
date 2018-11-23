/**
 * ReferenceDataService.js: Call microservices for managing the CRUD for the 13 types of reference data:
 *
 * The generic methods (given a Type of Reference) are five:
 *  1) getMany - for all records given the type
 *  2) getOne - for type record given the code
 *  3) create - create a new type record
 *  4) update - update an existing type record
 *  5) delete - delete an existing type record given its code
 *
 * The path id mapped for each referene type is as following:
 *  'action-type' => 'ActionType'
 *  'category-of-goods' => 'CategoryOfGoods'
 *  'country-code' => 'CountryCode'
 *  'eu-country-code' => 'EUCountryCode'
 *  'customs-office' => 'CustomsOffice'
 *  'customs-procedure' => 'CustomsProcedure'
 *  'intervention' => 'Intervention'
 *  'ipr-type' => 'IPRType'
 *  'traffic-type' => 'TrafficType'
 *  'type-of-place' => 'TypeOfPlace'
 *  'type-of-transport' => 'TypeOfTransport'
 *  'site' => 'Site'
 *  'unit-of-measure' => 'UnitOfMeasure'
 *
 *  A descriptive ref type lookup from id-path is done in 'ReferenceDataTypeLookupService'
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reference } from '../_models';


@Injectable()
export class ReferenceDataService {

    constructor(private http: HttpClient) { }

    getMany(referenceType: string) {
        return this.http.get<Reference[]>(`/api/reference-data/${referenceType}`);
    }

    getOne(referenceType: string, code: String) {
        return this.http.get<Reference>(`/api/reference-data/${referenceType}/${code}`);
    }

    create(referenceType: string, reference: Reference) {
        return this.http.post(`/api/reference-data/${referenceType}`, reference);
    }

    update(referenceType: string, reference: Reference) {
        return this.http.put(`/api/reference-data/${referenceType}`, reference);
    }

    delete(referenceType: string, code: string) {
        return this.http.delete(`/api/reference-data/${referenceType}/${code}`);
    }

}
