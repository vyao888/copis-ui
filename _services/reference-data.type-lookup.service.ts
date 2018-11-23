import { Injectable } from '@angular/core';

const ReferenceIdTypeMap = new Map([
  [ 'country-code', 'Country Code'],
  [ 'eu-country-code', 'EU Country Code'],
  [ 'action-type', 'Action Type'],
  [ 'category-of-goods', 'Category of Goods'],
  [ 'customs-office', 'Customs Office'],
  [ 'customs-procedure', 'Customs Procedure'],
  [ 'intervention', 'Intervention'],
  [ 'ipr-type', 'IPR Type'],
  [ 'traffic-type', 'Traffic Type'],
  [ 'type-of-place', 'Type of Place'],
  [ 'type-of-transport', 'Type of Transport'],
  [ 'site', 'Site'],
  [ 'unit-of-measure', 'Unit of Measure']
]);

@Injectable()
export class ReferenceDataTypeLookupService {

  typeDescription(id: string) {
    if (ReferenceIdTypeMap.has(id)) {
      return ReferenceIdTypeMap.get(id);
    } else {
      console.warn(`Reference ID: ${id} is not valid.`);
      return '';
    }
  }

}
