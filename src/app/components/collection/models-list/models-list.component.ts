import {
  Component,
  Input,
  OnChanges,
  OnInit
} from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { NgForOf } from '@angular/common';
import { GlobalService } from "../../../services/global.service";
import {
  Subject,
  takeUntil
} from "rxjs";
import { Model3D } from '../../../models/model';
import { FrenchDatePipe } from '../../../pipes/french-date.pipe';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatDividerModule,
    NgForOf,
    FrenchDatePipe,
  ],
  templateUrl: './models-list.component.html',
  styleUrl: './models-list.component.scss'
})
export class ModelsListComponent implements OnInit, OnChanges {
  @Input()
  public filterString: string | null = null;

  public modelsList: Model3D[] = [];
  public allModels: Model3D[] = [];

  private destroy$ = new Subject<void>();
  constructor(private readonly globalService: GlobalService) { }

  ngOnInit() {
    this.globalService.getModelsList().pipe(takeUntil(this.destroy$)).subscribe(list => {
      this.modelsList = list;
      this.allModels = list;
    })
  }

  ngOnChanges() {
    this.modelsList = this.filterList();
  }

  private filterList(): Model3D[] {
    if (!this.filterString) {
      return this.allModels;
    }
    return this.allModels.filter(model => model.name.toLowerCase().includes(<string>this.filterString?.toLowerCase()))
  }
}
