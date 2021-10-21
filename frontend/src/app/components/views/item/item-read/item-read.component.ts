import { Item } from './../../../models/controle/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-read',
  templateUrl: './item-read.component.html',
  styleUrls: ['./item-read.component.css']
})
export class ItemReadComponent implements OnInit {

  itens!: Item[];
  colunas = ['numserie', 'dtaquisicao', 'tipoitem', 'Acao']

  constructor() { }

  ngOnInit(): void {
    this.itens = [{
      numserie:0,
      dtaquisicao: new Date(),
      tipoItem: 'Tipo'
    }]
  }

}
