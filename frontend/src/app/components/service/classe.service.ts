import { Classe } from './../models/controle/classe';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  urlBase = "http://localhost:8081/classe";

  constructor(private http: HttpClient) { }

  
  create(classe:Classe):void{

    console.log(classe);

    this.http.post<Classe>(this.urlBase, classe).subscribe(
      response => console.log(JSON.stringify(response)),
      error => console.log(error)
    );
  }

  read():Observable<Classe[]>{
    return this.http.get<Classe[]>(this.urlBase);
  }

  readById(id:String):Observable<Classe>{

    const urlInteira = '${this.urlBase}/${id}';
    return this.http.get<Classe>(urlInteira);
  }

  update(classe: Classe):Observable<Classe>{
    return this.http.put<Classe>(this.urlBase, classe);
  }  

  delete(id:String):Observable<Classe>{
    const url = '${this.urlBase}/${id}';
    return this.http.delete<Classe>(url);
  }
}
