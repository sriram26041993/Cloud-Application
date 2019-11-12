import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvalertsComponent } from './envalerts.component';

describe('EnvalertsComponent', () => {
  let component: EnvalertsComponent;
  let fixture: ComponentFixture<EnvalertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnvalertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvalertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
