import { Classe } from './../../../models/controle/classe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classe-update',
  templateUrl: './classe-update.component.html',
  styleUrls: ['./classe-update.component.css']
})
export class ClasseUpdateComponent implements OnInit {

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
