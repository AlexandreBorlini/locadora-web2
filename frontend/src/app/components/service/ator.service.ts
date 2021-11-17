import { Ator } from './../models/controle/ator';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtorService {

  urlBase = "http://localhost:8081/ator";

  constructor(private http: HttpClient) { }

  
  create(ator:Ator):Observable<Ator>{

    return this.http.post<Ator>(this.urlBase, ator);
  }

  read():Observable<Ator[]>{
    return this.http.get<Ator[]>(this.urlBase);
  }

  readById(id:String):Observable<Ator>{

    const urlInteira = '${this.urlBase}/${id}';
    return this.http.get<Ator>(urlInteira);
  }

  update(ator: Ator):Observable<Ator>{
    return this.http.put<Ator>(this.urlBase, ator);
  }  

  delete(id:String):Observable<Ator>{
    const url = '${this.urlBase}/${id}';
    return this.http.delete<Ator>(url);
  }
}
