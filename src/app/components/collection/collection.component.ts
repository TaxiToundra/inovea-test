import { MatInputModule } from '@angular/material/input';
import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { ModelDetailsComponent } from './model-details/model-details.component';
import { ModelsListComponent } from './models-list/models-list.component';
import { NgForOf } from "@angular/common";
import { GlobalService } from "../../services/global.service";
import {
  Subject,
  takeUntil
} from "rxjs";
import { Model3D } from "../../models/model";
import { MatDialog } from "@angular/material/dialog";
import { ModelCreationDialogComponent } from "./model-creation-dialog/model-creation-dialog.component";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [
    MatToolbarModule,
    ModelsListComponent,
    ModelDetailsComponent,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatAutocompleteModule,
    NgForOf,
    MatButton
  ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent implements OnInit, OnDestroy {

  modelName = new FormControl('');
  modelList: Model3D[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    private readonly globalService: GlobalService,
    private readonly dialog: MatDialog
  ) {  }

  ngOnInit(): void {
    this.globalService.getModelsList().pipe(takeUntil(this.destroy$)).subscribe(list => {
      this.modelList = list;
      this.globalService.setModelsList(list);
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public openCreationDialog(): void {
    this.dialog.open(ModelCreationDialogComponent, {
      width: '30%',
      minWidth: '350px'
    });
  }
}
