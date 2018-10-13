import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyListPageComponent } from './policy-list-page.component';

describe('PolicyListPageComponent', () => {
  let component: PolicyListPageComponent;
  let fixture: ComponentFixture<PolicyListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyListPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
