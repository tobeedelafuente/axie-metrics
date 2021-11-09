import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { EarningMetrics } from '../../../models/models';

const FIELDS = {
  DATE: 'date',
  SLP: 'slp',
  CONVERSION: 'conversion',
};

@Component({
  selector: 'app-earning-dialog',
  templateUrl: './earning-dialog.component.html',
  styleUrls: ['./earning-dialog.component.scss']
})
export class EarningDialogComponent implements OnInit {
  readonly fields = FIELDS;
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<EarningDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EarningMetrics) {}

  ngOnInit() {
    this.form = this.fb.group({
      [FIELDS.DATE]: [new Date(), [Validators.required]],
      [FIELDS.SLP]: [0, [Validators.required]],
      [FIELDS.CONVERSION]: [0, [Validators.required]],
    });
  }

  onAdd(): void {
    this.dialogRef.close(this.form.value);
  }
}
