import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private baseUrl = 'http://localhost:4000/projects';

  constructor(private http: HttpClient) { }

  crearProyecto(proyecto: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, proyecto);
  }

  actualizarProgresoProyecto(id: string, progreso: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}/progress`, progreso);
  }

  obtenerTodosLosProyectos(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  obtenerProyectoPorId(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  eliminarProyectoPorId(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
