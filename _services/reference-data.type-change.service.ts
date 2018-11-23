import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const defaultType = '';

@Injectable()
export class ReferenceDataTypeChangeService {

  private referenceTypeSource = new BehaviorSubject<string>(defaultType);
  currentReferenceType = this.referenceTypeSource.asObservable();

  constructor() { }

  changeReferenceType(refType: string) {
    this.referenceTypeSource.next(refType);
  }

}
