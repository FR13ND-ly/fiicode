import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVacationsDialogComponent } from './add-vacations-dialog.component';

describe('AddVacationsDialogComponent', () => {
  let component: AddVacationsDialogComponent;
  let fixture: ComponentFixture<AddVacationsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVacationsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVacationsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
