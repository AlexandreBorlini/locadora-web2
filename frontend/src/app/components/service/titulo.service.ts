import { Titulo } from './../models/controle/titulo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TituloService {

  urlBase = "http://localhost:8081/titulo";

  constructor(private http: HttpClient) { }

  create(titulo:Titulo):void{

    console.log(titulo);

    this.http.post<Titulo>(this.urlBase, titulo).subscribe(
      response => console.log(JSON.stringify(response)),
      error => console.log(error)
    );
  }

  read():Observable<Titulo[]>{
    return this.http.get<Titulo[]>(this.urlBase);
  }

  readById(id:String):Observable<Titulo>{

    const urlInteira = '${this.urlBase}/${id}';
    return this.http.get<Titulo>(urlInteira);
  }

  update(titulo: Titulo):Observable<Titulo>{
    return this.http.put<Titulo>(this.urlBase, titulo);
  }  

  delete(id:String):Observable<Titulo>{
    const url = '${this.urlBase}/${id}';
    return this.http.delete<Titulo>(url);
  }
}
