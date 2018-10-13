import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyEditPageComponent } from './policy-edit-page.component';

describe('PolicyEditPageComponent', () => {
  let component: PolicyEditPageComponent;
  let fixture: ComponentFixture<PolicyEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyEditPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
