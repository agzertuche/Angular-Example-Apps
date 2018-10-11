import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliciesCollectionPageComponent } from './collection-page.component';

describe('PoliciesCollectionPageComponent', () => {
  let component: PoliciesCollectionPageComponent;
  let fixture: ComponentFixture<PoliciesCollectionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PoliciesCollectionPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliciesCollectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
