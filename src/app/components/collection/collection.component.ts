import { MatInputModule } from '@angular/material/input';
import { Component } from '@angular/core';
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
    NgForOf
  ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent {

  modelName = new FormControl('');
  modelList: Model3D[] = [];

  private destroy$ = new Subject<void>();

  constructor(private readonly globalService: GlobalService) {
    this.globalService.getModelsList().pipe(takeUntil(this.destroy$)).subscribe(list => {
      this.modelList = list;
    })
  }
}
