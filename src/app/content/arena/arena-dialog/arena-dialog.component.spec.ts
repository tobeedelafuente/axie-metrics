import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaDialogComponent } from './arena-dialog.component';

describe('ArenaDialogComponent', () => {
  let component: ArenaDialogComponent;
  let fixture: ComponentFixture<ArenaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArenaDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
