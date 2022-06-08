import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotsEditFormComponent } from './plots-edit-form.component';

describe('PlotsEditFormComponent', () => {
  let component: PlotsEditFormComponent;
  let fixture: ComponentFixture<PlotsEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotsEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlotsEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
