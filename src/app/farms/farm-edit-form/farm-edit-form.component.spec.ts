import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmEditFormComponent } from './farm-edit-form.component';

describe('FarmEditFormComponent', () => {
  let component: FarmEditFormComponent;
  let fixture: ComponentFixture<FarmEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
