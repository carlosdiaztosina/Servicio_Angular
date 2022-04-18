import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCocheComponent } from './add-coche.component';

describe('AddCocheComponent', () => {
  let component: AddCocheComponent;
  let fixture: ComponentFixture<AddCocheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCocheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCocheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
