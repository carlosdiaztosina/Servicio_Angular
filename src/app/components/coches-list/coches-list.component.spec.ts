import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CochesListComponent } from './coches-list.component';

describe('StudentsListComponent', () => {
  let component: CochesListComponent;
  let fixture: ComponentFixture<CochesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CochesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CochesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
