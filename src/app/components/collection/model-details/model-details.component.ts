import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-model-details',
  standalone: true,
  imports: [],
  templateUrl: './model-details.component.html',
  styleUrl: './model-details.component.scss'
})
export class ModelDetailsComponent implements OnInit{

  constructor(private readonly globalService: GlobalService) { }

  ngOnInit(): void {
  }

}
