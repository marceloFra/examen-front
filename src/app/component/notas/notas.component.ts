import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/app/models/alumno';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';
import { NotasService } from 'src/app/services/notas.service';
import { Notas } from 'src/app/models/notas';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {
  form!: FormGroup;
  alumno: Alumno[] = [];
  curso: Curso[] = [];
  notas: Notas[] = [];
  idNota!: number;
  cursono!: string;

  constructor(
    private alumnoService: AlumnoService,
    private cursoService: CursoService,
    private formBuilder: FormBuilder,
    private notasService: NotasService,

  ) {
    this.buildForm();
    //   this.promedio = (this.nota1 + this.nota2 + this.nota3) / 3;
    this.cargaNotas();
  }

  ngOnInit(): void {
    this.alumnoService.getAlumnos()
      .subscribe(data => {
        this.alumno = data
      })
    this.cursoService.getCurso()
      .subscribe(data => {
        this.curso = data
      })
    this.cargaNotas()
  }

  public cargaNotas() {
    this.notasService.getNotas()
      .subscribe(data => {
        this.notas = data
        console.log('carga nota');
        this.notas.forEach(p =>
          p.alumno = this.alumno.find(x => x.idAlumno == p.idAlumno)?.nombre,
        )
        this.notas.forEach(p =>
          p.curso = this.curso.find(x => x.idCurso == p.idCurso)?.nombre,
        )

      })

  }

  private buildForm() {
    this.form = this.formBuilder.group({
      idAlumno: ['', [Validators.required, Validators.minLength(1)]],
      idCurso: ['', [Validators.required, Validators.minLength(1)]],
      practicaA: ['', [Validators.required,/* Validators.minLength(5)*/]],
      practicaB: ['', [Validators.required, /*Validators.minLength(5)*/]],
      practicaC: ['', [Validators.required, /*Validators.minLength(5)*/]],
    });
  }



  private createNotas() {
    const data = this.form.value;
    console.log('crea lo sig');
    console.log(data);
    this.notasService.create(data)
      .subscribe(rta => {
        console.log(rta);
        alert('creado correctamente');

      });
    this.cargaNotas();
    this.form.reset;
  }

  public getCurso(idCurso: number) {
    var c = this.curso.filter(x => x.idCurso === idCurso)
    console.log('que imprime c');
    console.log(c);
    return 1;
  }
  public deleteNota(idNota: number) {
    console.log('que imprime c');
    console.log(idNota);
    this.notasService.DeleteNotas(idNota)
      .subscribe(rta => {
        alert('eliminado correctamente');
      });
    this.cargaNotas();
  }



  public getNotasById(idNota: number) {
    console.log('que imprime c');
    console.log(idNota);
    this.notasService.getNotasById(idNota)
      .subscribe(rta => {
        console.log('trae alguna nota');
        console.log(rta);
        this.form.patchValue(rta);
        this.idNota = rta.idNota;

      });
  }

  /*
      this.categoriesService.getCategory(this.categoryId)
    .subscribe(data => {
      this.form.patchValue(data);
    });
  */
  get f(): any {
    return this.form.controls;
  }
  private editarNota() {
    const data = this.form.value;
    console.log('crea lo sig');
    console.log(data);
    this.notasService.update(this.idNota, data)
      .subscribe(rta => {
        console.log(rta);
        alert('actualizado correctamente');

      });
    this.cargaNotas();
    this.form.reset;
  }

  save() {
    if (this.form.valid) {
      if (this.idNota) {
        this.editarNota();
      } else {
        this.createNotas();
      }
    } else {
      this.form.markAllAsTouched();
    }
    this.cargaNotas();

    this.f.idAlumno.clearValidators();
    this.f.idCurso.clearValidators();
    this.f.practicaA.clearValidators();
    this.f.practicaB.clearValidators();
    this.f.practicaC.clearValidators();
    //this.form.clearValidators();
    this.form.reset();

  }

}
