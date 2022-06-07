import { FarmsService } from './../service/farms.service';
import { Farm } from './../model/farm';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-farm-form',
  templateUrl: './farm-form.component.html',
  styleUrls: ['./farm-form.component.css']
})
export class FarmFormComponent implements OnInit {
  public farmForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FarmFormComponent>,
    private fb: FormBuilder,
    private farmsService:FarmsService
  ) {
    this.farmForm = this.fb.group({
      name:[null]
    });

  }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }
  createFarm(){
    this.farmsService.post(this.farmForm.value).subscribe(result => console.log(result));
    this.dialogRef.close();
    this.farmForm.reset();
    window.location.reload();
  }

}
