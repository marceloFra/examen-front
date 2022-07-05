import { Component, OnInit } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { Alumno } from 'src/app/models/alumno';
import { CursoService } from 'src/app/services/curso.service';
import { Curso } from 'src/app/models/curso';
import { NotasService } from 'src/app/services/notas.service';
import { Notas } from 'src/app/models/notas';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.scss']
})
export class NotasComponent implements OnInit {

  alumno: Alumno[] = [];
  curso: Curso[] = [];

  constructor(
    private alumnoService: AlumnoService,
    private cursoService: CursoService

  ) { }

  ngOnInit(): void {
    this.alumnoService.getAlumnos()
      .subscribe(data => {

        this.alumno = data
        console.log('recupera data al');
        console.log(this.alumno);
      })
    this.cursoService.getCurso()
      .subscribe(data => {

        this.curso = data
        console.log('recupera curso');
        console.log(this.curso);
      })
  }

}
