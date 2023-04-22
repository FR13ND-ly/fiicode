import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserVacationsDialogComponent } from './user-vacations-dialog.component';

describe('UserVacationsDialogComponent', () => {
  let component: UserVacationsDialogComponent;
  let fixture: ComponentFixture<UserVacationsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserVacationsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserVacationsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
