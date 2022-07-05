import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../models/curso';
@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(
    private http: HttpClient
  ) { }

  getCurso() {
    // un array de productos
    return this.http.get<Curso[]>('http://localhost:54959/api/Cursoes');
  }
}
