import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCreationDialogComponent } from './model-creation-dialog.component';

describe('ModelCreationDialogComponent', () => {
  let component: ModelCreationDialogComponent;
  let fixture: ComponentFixture<ModelCreationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelCreationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
