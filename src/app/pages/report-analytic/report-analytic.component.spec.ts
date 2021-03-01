import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportAnalyticComponent } from './report-analytic.component';

describe('ReportAnalyticComponent', () => {
  let component: ReportAnalyticComponent;
  let fixture: ComponentFixture<ReportAnalyticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportAnalyticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportAnalyticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
