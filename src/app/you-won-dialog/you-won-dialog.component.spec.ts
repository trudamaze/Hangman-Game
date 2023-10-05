import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouWonDialogComponent } from './you-won-dialog.component';

describe('YouWonDialogComponent', () => {
  let component: YouWonDialogComponent;
  let fixture: ComponentFixture<YouWonDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouWonDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouWonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
