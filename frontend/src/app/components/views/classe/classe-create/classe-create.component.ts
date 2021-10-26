import { Classe } from './../../../models/controle/classe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classe-create',
  templateUrl: './classe-create.component.html',
  styleUrls: ['./classe-create.component.css']
})
export class ClasseCreateComponent implements OnInit {

  classe:Classe = {
    id:0,
    prazodevolucao:new Date(),
    valor:0,
    nome:""
  };

  constructor() { }

  ngOnInit(): void {
  }

}
