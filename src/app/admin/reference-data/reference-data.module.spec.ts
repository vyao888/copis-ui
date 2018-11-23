import { ReferenceDataModule } from './reference-data.module';

describe('ReferenceDataModule', () => {
  let referenceDataModule: ReferenceDataModule;

  beforeEach(() => {
    referenceDataModule = new ReferenceDataModule();
  });

  it('should create an instance', () => {
    expect(referenceDataModule).toBeTruthy();
  });
});
