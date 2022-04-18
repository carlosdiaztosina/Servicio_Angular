import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCocheComponent } from './edit-coche.component';

describe('EditCocheComponent', () => {
  let component: EditCocheComponent;
  let fixture: ComponentFixture<EditCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCocheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
