import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelStatusComponent } from './excel-status.component';

describe('ExcelStatusComponent', () => {
  let component: ExcelStatusComponent;
  let fixture: ComponentFixture<ExcelStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExcelStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcelStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
