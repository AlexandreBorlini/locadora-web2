import { Locacao } from './../../../models/atendimento/locacao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locacao-read',
  templateUrl: './locacao-read.component.html',
  styleUrls: ['./locacao-read.component.css']
})
export class LocacaoReadComponent implements OnInit {

  locacoes!: Locacao[];
  colunas = ['ID', 'DataLoc', 'DataDevEfet', 'DataDevPrev', 'ValCobrado', 'MultaCobrada', 'Acao']

  constructor() { }

  ngOnInit(): void {

    this.locacoes = [{
      datalocacao: new Date(),
      dataDevolucaoEfetiva: new Date(),
      dataDevolucaoPrevista: new Date(),
      valorCobrado: 100,
      multaCobrada: 7200,
      id: 0
    }]
  }

}
