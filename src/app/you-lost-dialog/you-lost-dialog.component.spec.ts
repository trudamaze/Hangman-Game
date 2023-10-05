import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouLostDialogComponent } from './you-lost-dialog.component';

describe('YouLostDialogComponent', () => {
  let component: YouLostDialogComponent;
  let fixture: ComponentFixture<YouLostDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YouLostDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YouLostDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
