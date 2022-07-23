import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder) { this.buildForm(); }

  ngOnInit(): void {
  }
  /*
        nombre: string,
      apellidoMaterno: string,
      apellidoPaterno: string,
      fechaNacimiento: string,
      sexo: string,

  */
  private buildForm() {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellidoPaterno: ['', [Validators.required]],
      apellidoMaterno: ['', [Validators.required]],
      fechaNacimiento: ['', [Validators.required]],
      // sexo: ['', [Validators.required]],
    });
  }


  save() {
    console.log('imprime el form');
    console.log(this.form.valid)
    console.log(this.form.value)
    if (this.form.valid) {
      console.log('imprime el form valido');
      console.log(this.form.value)

    } else {
      this.form.markAllAsTouched();
    }



  }


}
