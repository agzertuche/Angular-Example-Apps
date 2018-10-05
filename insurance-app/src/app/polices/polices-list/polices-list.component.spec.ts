import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicesListComponent } from './polices-list.component';

describe('PolicesListComponent', () => {
  let component: PolicesListComponent;
  let fixture: ComponentFixture<PolicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
