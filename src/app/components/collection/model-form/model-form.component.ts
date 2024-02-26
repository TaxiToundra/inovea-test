import {
  Component,
  Input
} from '@angular/core';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from "@angular/forms";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import { MatFormField } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-model-form',
  standalone: true,
  imports: [
    FormsModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './model-form.component.html',
  styleUrl: './model-form.component.scss'
})
export class ModelFormComponent {
  @Input()
  public form: FormGroup = new FormGroup([])
}
