import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlpDialogComponent } from './slp-dialog.component';

describe('SlpDialogComponent', () => {
  let component: SlpDialogComponent;
  let fixture: ComponentFixture<SlpDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlpDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlpDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
