import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { Model3D } from "../../../models/model";
import { NgIf } from "@angular/common";
import {
  MatCard,
  MatCardContent,
  MatCardFooter,
  MatCardHeader
} from "@angular/material/card";
import {
  Subject,
  takeUntil
} from "rxjs";
import { MatButton } from "@angular/material/button";
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from "@angular/forms";
import {
  MatFormField,
  MatInput
} from "@angular/material/input";
import { FrenchDatePipe } from "../../../pipes/french-date.pipe";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import { ModelFormComponent } from "../model-form/model-form.component";

@Component({
  selector: 'app-model-details',
  standalone: true,
  imports: [
    NgIf,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardFooter,
    MatButton,
    ReactiveFormsModule,
    MatInput,
    MatFormField,
    FrenchDatePipe,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    ModelFormComponent
  ],
  templateUrl: './model-details.component.html',
  styleUrl: './model-details.component.scss'
})
export class ModelDetailsComponent implements OnInit, OnDestroy {
  public activeModel: Model3D | null = null;
  public isEditionMode: boolean = false;
  public editionForm: any;

  private destroy$ = new Subject<void>();

  constructor(
    private readonly globalService: GlobalService,
    private readonly formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.globalService.activeModel$.pipe(takeUntil(this.destroy$)).subscribe(activeModel => {
      this.activeModel = activeModel;
      this.editionForm = this.formBuilder.group({
        name: [activeModel?.name, Validators.required],
        author: [activeModel?.author, Validators.required],
        date: [new Date(activeModel?.date as string), Validators.required],
        polygons: [activeModel?.polygons],
        description: [activeModel?.description]
      });
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public deleteModel(modelId: string): void {
    this.globalService.deleteModel(modelId).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.globalService.setActiveModel(null);
      this.globalService.updateModelList();
    });
  }

  public toggleToEditionMode(): void {
    this.isEditionMode = !this.isEditionMode;
  }

  public editModel(): void {
    const updatedModel: Model3D = new Model3D(
      this.activeModel?.id as string,
      this.editionForm.controls['name'].value,
      this.editionForm.controls['description'].value,
      this.editionForm.controls['date'].value,
      this.editionForm.controls['author'].value,
      this.editionForm.controls['polygons'].value,
      this.activeModel?.modelName as string
    )
    this.globalService.setActiveModel(updatedModel);
    this.globalService.updateModel(updatedModel).pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.globalService.updateModelList();
      this.toggleToEditionMode();
    });
  }

  public cancelEdition(): void {
    this.toggleToEditionMode();
    this.editionForm = this.formBuilder.group({
      name: [this.activeModel?.name, Validators.required],
      author: [this.activeModel?.author, Validators.required],
      date: [new Date(this.activeModel?.date as string), Validators.required],
      polygons: [this.activeModel?.polygons],
      description: [this.activeModel?.description]
    });
  }
}
