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

  create(socio:Socio):void{

    this.http.post<Socio>(this.urlBase, socio).subscribe(
      response => console.log(JSON.stringify(response)),
      error => console.log(error)
    );
  }

  read():Observable<Socio[]>{
    return this.http.get<Socio[]>(this.urlBase);
  }

  readById(id:String):Observable<Socio>{

    const urlInteira = this.urlBase + '/' + id;
    return this.http.get<Socio>(urlInteira);
  }

  update(socio: Socio):void{
    this.http.put<Socio>(this.urlBase, socio).subscribe(
      response => console.log(JSON.stringify(response)),
      error => console.log(error)
    );
  }  

  delete(id:String):void{
    const url = this.urlBase + '/' + id;
    this.http.delete<Socio>(url).subscribe(
      response => console.log(JSON.stringify(response)),
      error => console.log(error)
    );
  }
}
