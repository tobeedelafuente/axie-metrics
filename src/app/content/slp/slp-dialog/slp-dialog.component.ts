import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SLPMetrics } from '../../../models/models';

const FIELDS = {
  DATE: 'date',
  SLP: 'slp',
};

@Component({
  selector: 'app-slp-dialog',
  templateUrl: './slp-dialog.component.html',
  styleUrls: ['./slp-dialog.component.scss']
})
export class SlpDialogComponent implements OnInit {
  readonly fields = FIELDS;
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<SlpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SLPMetrics) {}

  ngOnInit() {
    this.form = this.fb.group({
      [FIELDS.DATE]: [new Date(), [Validators.required]],
      [FIELDS.SLP]: [0, [Validators.required]],
    });
  }

  onAdd(): void {
    this.dialogRef.close(this.form.value);
  }
}
