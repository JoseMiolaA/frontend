import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Plot } from '../model/plot';
import { PlotDTO } from '../model/plotDTO';
import { PlotsFormComponent } from '../plots-form/plots-form.component';
import { PlotsServiceService } from '../service/plots/plots-service.service';

@Component({
  selector: 'app-plots-edit-form',
  templateUrl: './plots-edit-form.component.html',
  styleUrls: ['./plots-edit-form.component.css']
})
export class PlotsEditFormComponent implements OnInit {

  public plotForm: FormGroup;


  constructor(public dialogRef: MatDialogRef<PlotsFormComponent>,
    private fb: FormBuilder,
    private plotsService:PlotsServiceService,
    @Inject(MAT_DIALOG_DATA) public data: Plot) {

      this.plotForm = this.fb.group({
        id:[data.id],
        farmId:[data.farmId],
        name:[data.name, Validators.required],
        area:[data.area, Validators.required],
        productions:[data.productions, Validators.required]
      });

    }

  ngOnInit(): void {
  }


  cancel(): void {
    this.dialogRef.close();
  }

  editPlot(){
    //forma temporaria de enviar enquanto não ha adiçao separada de produçao
    if(this.plotForm.valid &&
      this.plotForm.controls['area'].value > 0 &&
      this.plotForm.controls['productions'].value >= 0){
    const editedPlot: PlotDTO = {
      id:this.plotForm.controls['id'].value,
      name:this.plotForm.controls['name'].value,
      farmId: this.plotForm.controls['farmId'].value,
      area: this.plotForm.controls['area'].value,
      productions:[{
        name:'',
        quantity: this.plotForm.controls['productions'].value,
      }],
    }

    this.plotsService.edit(editedPlot).subscribe(result => {});
    this.dialogRef.close();
    this.plotForm.reset();
    window.location.reload();

  }else{
    console.log("invalid")
  }

  }

}
