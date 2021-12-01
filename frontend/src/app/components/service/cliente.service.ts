import { Cliente } from './../models/atendimento/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlBase = "http://localhost:8081/cliente";

  constructor(private http: HttpClient) { }

  
  create(cliente:Cliente):void{

    this.http.post<Cliente>(this.urlBase, cliente).subscribe(
      response => console.log(JSON.stringify(response)),
      error => console.log(error)
    );
  }

  read():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.urlBase);
  }

  readById(id:String):Observable<Cliente>{

    const urlInteira = this.urlBase + '/' + id;
    return this.http.get<Cliente>(urlInteira);
  }

  update(cliente: Cliente):void{
    this.http.put<Cliente>(this.urlBase, cliente).subscribe(
      response => console.log(JSON.stringify(response)),
      error => console.log(error)
    );
  }  

  delete(id:String):void{
    const url = this.urlBase + '/' + id;
     this.http.delete<Cliente>(url).subscribe(
      response => console.log(JSON.stringify(response)),
      error => console.log(error)
    );
  }
}
