import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notas } from '../models/notas';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasService {

  constructor(private http: HttpClient
  ) { }

  /*getAlumnos() {
    // un array de productos
    return this.http.get<Alumno[]>('https://localhost:44382/api/Alumnoes');
  }*/

  create(nota: Notas) {
    return this.http.post<Notas>('http://localhost:54959/api/Notas', nota);
  }


  getNotas() {
    // un array de productos
    return this.http.get<Notas[]>('http://localhost:54959/api/Notas');
  }
  DeleteNotas(id: number) {
    // un array de productos
    return this.http.delete(`http://localhost:54959/api/Notas/${id}`);
  }
  getNotasById(id: number) {
    // un array de productos
    return this.http.get<Notas>(`http://localhost:54959/api/Notas/${id}`);
  }

  update(id: number, nota: Notas) {
    return this.http.put<Notas>(`http://localhost:54959/api/Notas/${id}`, nota);
  }

}
