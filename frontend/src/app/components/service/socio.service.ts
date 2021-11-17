import { Socio } from './../models/atendimento/socio';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocioService {

  urlBase = "http://localhost:8081/socio";

  constructor(private http: HttpClient) { }

  create(socio:Socio):Observable<Socio>{

    return this.http.post<Socio>(this.urlBase, socio);
  }

  read():Observable<Socio[]>{
    return this.http.get<Socio[]>(this.urlBase);
  }

  readById(id:String):Observable<Socio>{

    const urlInteira = '${this.urlBase}/${id}';
    return this.http.get<Socio>(urlInteira);
  }

  update(socio: Socio):Observable<Socio>{
    return this.http.put<Socio>(this.urlBase, socio);
  }  

  delete(id:String):Observable<Socio>{
    const url = '${this.urlBase}/${id}';
    return this.http.delete<Socio>(url);
  }
}
