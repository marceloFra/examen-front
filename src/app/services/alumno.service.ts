import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(
    private http: HttpClient
  ) { }

  getAlumnos() {
    // un array de productos
    return this.http.get<Alumno[]>('http://localhost:54959/api/Alumnoes');
  }

}
