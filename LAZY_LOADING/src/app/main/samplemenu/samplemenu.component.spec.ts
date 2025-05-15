import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplemenuComponent } from './samplemenu.component';

describe('SamplemenuComponent', () => {
  let component: SamplemenuComponent;
  let fixture: ComponentFixture<SamplemenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SamplemenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SamplemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
