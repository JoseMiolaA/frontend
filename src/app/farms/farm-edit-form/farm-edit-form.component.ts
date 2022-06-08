import { Farm } from './../model/farm';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FarmsService } from '../service/farms.service';

@Component({
  selector: 'app-farm-edit-form',
  templateUrl: './farm-edit-form.component.html',
  styleUrls: ['./farm-edit-form.component.css']
})
export class FarmEditFormComponent implements OnInit {

  public farmForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FarmEditFormComponent>,
    private fb: FormBuilder,
    private farmsService:FarmsService,
    @Inject(MAT_DIALOG_DATA) public data: Farm
  ) {
    this.farmForm = this.fb.group({
      name:[data.name],
      id:[data.id]
    });

  }

  ngOnInit(): void {
  }

  cancel(): void {
    this.dialogRef.close();
  }
  editFarm(){
    this.farmsService.edit(this.farmForm.value).subscribe(result => console.log(result));
    this.dialogRef.close();
    this.farmForm.reset();
    window.location.reload();
  }
}

