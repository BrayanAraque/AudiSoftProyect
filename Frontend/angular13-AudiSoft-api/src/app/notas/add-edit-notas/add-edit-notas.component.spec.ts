import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNotasComponent } from './add-edit-notas.component';

describe('AddEditNotasComponent', () => {
  let component: AddEditNotasComponent;
  let fixture: ComponentFixture<AddEditNotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditNotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
