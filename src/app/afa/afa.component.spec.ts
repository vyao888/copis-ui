import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfaComponent } from './afa.component';

describe('AfaComponent', () => {
  let component: AfaComponent;
  let fixture: ComponentFixture<AfaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
