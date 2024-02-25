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
  modelList: string[] = ['Model 1', 'Model 2', 'Model 3', 'Model 4', 'Model 5'];
}
