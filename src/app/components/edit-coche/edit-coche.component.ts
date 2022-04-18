import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-edit-coche',
  templateUrl: './edit-coche.component.html',
  styleUrls: ['./edit-coche.component.css'],
})
export class EditCocheComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  @ViewChild('chipList') chipList;
  @ViewChild('resetStudentForm') myNgForm;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  cocheForm: FormGroup;
  TipoArray: any = ['Turismo', '4x4', 'Deportivo'];

  ngOnInit() {
    this.updateBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private actRoute: ActivatedRoute,
    private cocheApi: ApiService
  ) {
    var id = this.actRoute.snapshot.paramMap.get('id');
    this.cocheApi.GetCoche(id).subscribe((data) => {
      console.log(data);
      this.TipoArray = data.tipo;
      this.cocheForm = this.fb.group({
        nombre: [data.nombre, [Validators.required]],
        marca: [data.marca, [Validators.required]],
        tipo: [data.tipo, [Validators.required]],
        matricula: [data.matricula, [Validators.required]],
      });
    });
  }

  updateBookForm() {
    this.cocheForm = this.fb.group({
      nombre: ['', [Validators.required]],
      marca: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      matricula: ['', [Validators.required]]
    });
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.cocheForm.controls[controlName].hasError(errorName);
  };

  updateCocheForm() {
    console.log(this.cocheForm.value);
    var id = this.actRoute.snapshot.paramMap.get('id');
    if (window.confirm('Are you sure you want to update?')) {
      this.cocheApi
        .UpdateCoche(id, this.cocheForm.value)
        .subscribe((res) => {
          this.ngZone.run(() => this.router.navigateByUrl('/coches-list'));
        });
    }
  }

}
