import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Diretor } from '../models/controle/diretor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiretorService {

  urlBase = "http://localhost:8081/diretor";

  constructor(private http: HttpClient) { }

  
  create(diretor:Diretor):void{

    this.http.post<Diretor>(this.urlBase, diretor).subscribe(
      response => console.log(JSON.stringify(response)),
      error => console.log(error)
    );
  }

  read():Observable<Diretor[]>{
    return this.http.get<Diretor[]>(this.urlBase);
  }

  readById(id:String):Observable<Diretor>{

    const urlInteira = this.urlBase + '/' + id;
    return this.http.get<Diretor>(urlInteira);
  }

  update(diretor: Diretor):void{
    this.http.put<Diretor>(this.urlBase, diretor).subscribe(
      response => console.log(JSON.stringify(response)),
      error => console.log(error)
    );
  }  

  delete(id:String):void{
    const url = this.urlBase + '/' + id;
     this.http.delete<Diretor>(url).subscribe(
      response => console.log(JSON.stringify(response)),
      error => console.log(error)
    );
  }
}
