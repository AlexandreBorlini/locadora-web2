import { Classe } from './../../../models/controle/classe';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classe-read',
  templateUrl: './classe-read.component.html',
  styleUrls: ['./classe-read.component.css']
})
export class ClasseReadComponent implements OnInit {

  classes!: Classe[];
  colunas = ['ID', 'Nome', 'Valor', 'PrazoDevolucao', 'Acao']

  constructor() { }

  ngOnInit(): void {

    this.classes = [{
      id:0,
      nome: 'classe01',
      valor: 300,
      prazodevolucao: new Date()
    }]
  }

}
