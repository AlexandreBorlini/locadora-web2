import { Item } from './../models/controle/item';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  urlBase = "http://localhost:8081/item";

  constructor(private http: HttpClient) { }

  
  create(item:Item):void{

    this.http.post<Item>(this.urlBase, item).subscribe(
      response => console.log(JSON.stringify(response)),
      error => console.log(error)
    );
  }

  read():Observable<Item[]>{
    return this.http.get<Item[]>(this.urlBase);
  }

  readById(id:String):Observable<Item>{

    const urlInteira = '${this.urlBase}/${id}';
    return this.http.get<Item>(urlInteira);
  }

  update(item: Item):Observable<Item>{
    return this.http.put<Item>(this.urlBase, item);
  }  

  delete(id:String):Observable<Item>{
    const url = '${this.urlBase}/${id}';
    return this.http.delete<Item>(url);
  }
}
