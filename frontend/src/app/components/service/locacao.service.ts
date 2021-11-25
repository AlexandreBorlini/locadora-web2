import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Locacao } from '../models/atendimento/locacao';

@Injectable({
  providedIn: 'root'
})
export class LocacaoService {

  urlBase = "http://localhost:8081/locacao";

  constructor(private http: HttpClient) { }

  
  create(locacao:Locacao):void{

    this.http.post<Locacao>(this.urlBase, locacao).subscribe(
      response => console.log(JSON.stringify(response)),
      error => console.log(error)
    );
  }

  read():Observable<Locacao[]>{
    return this.http.get<Locacao[]>(this.urlBase);
  }

  readById(id:String):Observable<Locacao>{

    const urlInteira = '${this.urlBase}/${id}';
    return this.http.get<Locacao>(urlInteira);
  }

  update(locacao: Locacao):Observable<Locacao>{
    return this.http.put<Locacao>(this.urlBase, locacao);
  }  

  delete(id:String):Observable<Locacao>{
    const url = '${this.urlBase}/${id}';
    return this.http.delete<Locacao>(url);
  }
}
