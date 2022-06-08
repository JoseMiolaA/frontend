import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotsFormComponent } from './plots-form.component';

describe('PlotsFormComponent', () => {
  let component: PlotsFormComponent;
  let fixture: ComponentFixture<PlotsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlotsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
