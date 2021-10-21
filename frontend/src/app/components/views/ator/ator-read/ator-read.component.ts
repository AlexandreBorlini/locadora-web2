import { Component, OnInit } from '@angular/core';
import { Ator } from '../../../models/controle/ator';

@Component({
  selector: 'app-ator-read',
  templateUrl: './ator-read.component.html',
  styleUrls: ['./ator-read.component.css']
})
export class AtorReadComponent implements OnInit {

  atores!: Ator[];
  colunas = ['ID', 'Nome', 'Acao']

  constructor() { }

  ngOnInit(): void {

    this.atores = [{
      nome: "Ator01",
      id:0
    }]
  }

}
