import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialDialogComponent } from './angular-material-dialog.component';

describe('AngularMaterialDialogComponent', () => {
  let component: AngularMaterialDialogComponent;
  let fixture: ComponentFixture<AngularMaterialDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularMaterialDialogComponent]
    });
    fixture = TestBed.createComponent(AngularMaterialDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
