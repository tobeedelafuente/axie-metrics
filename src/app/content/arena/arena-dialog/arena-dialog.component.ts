import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ArenaMetrics } from '../../../models/models';

const FIELDS = {
  DATE: 'date',
  WIN: 'win',
  LOSE: 'lose',
};

@Component({
  selector: 'app-arena-dialog',
  templateUrl: './arena-dialog.component.html',
  styleUrls: ['./arena-dialog.component.scss']
})
export class ArenaDialogComponent implements OnInit {
  readonly fields = FIELDS;
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ArenaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ArenaMetrics) {}

  ngOnInit() {
    this.form = this.fb.group({
      [FIELDS.DATE]: [new Date(), [Validators.required]],
      [FIELDS.WIN]: [0, [Validators.required]],
      [FIELDS.LOSE]: [0, [Validators.required]],
    });
  }

  onAdd(): void {
    this.dialogRef.close(this.form.value);
  }
}
