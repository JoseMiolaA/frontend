import { PlotDTO } from './../model/plotDTO';
import { Plot } from './../model/plot';
import { PlotsServiceService } from './../service/plots/plots-service.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-plots-form',
  templateUrl: './plots-form.component.html',
  styleUrls: ['./plots-form.component.css']
})
export class PlotsFormComponent implements OnInit {

  public plotForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<PlotsFormComponent>,
    private fb: FormBuilder,
    private plotsService:PlotsServiceService,
    @Inject(MAT_DIALOG_DATA) public data: Plot
    ) {
      this.plotForm = this.fb.group({
        farmId:[data.farmId],
        name:[''],
        area:[0],
        productions:[0]
      });
    }

  ngOnInit(): void {
  }
  cancel(): void {
    this.dialogRef.close();
  }
  createPlot(){
    //forma temporaria de enviar enquanto não ha adiçao separada de produçao
    if(this.plotForm.valid &&
      this.plotForm.controls['area'].value > 0 &&
      this.plotForm.controls['productions'].value >= 0){
      const createdPlot: PlotDTO = {
      name:this.plotForm.controls['name'].value,
      farmId: this.plotForm.controls['farmId'].value,
      area: this.plotForm.controls['area'].value,
      productions:[{
        name:'',
        quantity: this.plotForm.controls['productions'].value,
      }],
    }

    this.plotsService.create(createdPlot).subscribe(result => {});
    this.dialogRef.close();
    this.plotForm.reset();
    window.location.reload();
    }
  }
}
