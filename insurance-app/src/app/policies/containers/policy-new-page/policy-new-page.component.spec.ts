import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyNewPageComponent } from './policy-new-page.component';

describe('PolicyNewPageComponent', () => {
  let component: PolicyNewPageComponent;
  let fixture: ComponentFixture<PolicyNewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PolicyNewPageComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
