import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatDividerModule,
],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  list: string[] = ['Model 1', 'Model 2', 'Model 3', 'Model 4', 'Model 5'];

}
