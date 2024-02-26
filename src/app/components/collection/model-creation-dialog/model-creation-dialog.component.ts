import {
  Component,
  OnDestroy
} from '@angular/core';
import {
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";
import { GlobalService } from "../../../services/global.service";
import { ModelFormComponent } from "../model-form/model-form.component";
import {
  FormBuilder,
  Validators
} from "@angular/forms";
import { Model3DModify } from "../../../models/model";
import {
  Subject,
  takeUntil
} from "rxjs";

@Component({
  selector: 'app-model-creation-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    ModelFormComponent
  ],
  templateUrl: './model-creation-dialog.component.html',
  styleUrl: './model-creation-dialog.component.scss'
})
export class ModelCreationDialogComponent implements OnDestroy {
  private destroy$ = new Subject<void>();

  constructor(
    private readonly dialogRef: MatDialogRef<ModelCreationDialogComponent>,
    private readonly globalService: GlobalService,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public creationForm =  this.formBuilder.group({
    name: ['', Validators.required],
    author: ['', Validators.required],
    polygons: [0, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
    description: [''],
    modelName: ['']
  });

  public closeDialog(): void {
    this.dialogRef.close();
  }

  public submit(): void {
    const newModel: Model3DModify = new Model3DModify(
      this.creationForm.controls['name'].value as string,
      this.creationForm.controls['description'].value as string,
      new Date() as unknown as string,
      this.creationForm.controls['author'].value as string,
      this.creationForm.controls['polygons'].value as number,
      this.creationForm.controls['modelName'].value as string
    )
    this.globalService.createModel(newModel).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.globalService.updateModelList();
      this.closeDialog();
    });
  }
}
