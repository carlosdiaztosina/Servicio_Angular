import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { ApiService } from '../../shared/api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Subject {
  name: string;
}

@Component({
  selector: 'app-add-coche',
  templateUrl: './add-coche.component.html',
  styleUrls: ['./add-coche.component.css'],
})
export class AddCocheComponent implements OnInit {
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
    this.submitBookForm();
  }

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private cocheApi: ApiService
  ) {}

  submitBookForm() {
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

  submitCocheForm() {
    console.log(this.cocheForm.value);
    if (this.cocheForm.valid) {
      this.cocheApi.AddCoche(this.cocheForm.value).subscribe((res) => {
        this.ngZone.run(() => this.router.navigateByUrl('/coches-list'));
      });
    }
  }
}
