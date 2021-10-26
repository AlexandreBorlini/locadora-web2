import { Titulo } from 'src/app/components/models/controle/titulo';
import { Cliente } from './../../../models/atendimento/cliente';
import { Locacao } from './../../../models/atendimento/locacao';
import { Item } from 'src/app/components/models/controle/item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locacao-read',
  templateUrl: './locacao-read.component.html',
  styleUrls: ['./locacao-read.component.css']
})
export class LocacaoReadComponent implements OnInit {

  locacoes!: Locacao[];
  titulo!:Titulo;
  item!:Item;
  cliente!:Cliente;
  colunas = ['ID', 'DataLoc', 'DataDevEfet', 'DataDevPrev', 'ValCobrado', 'MultaCobrada', 'Item', 'Cliente', 'Acao']

  constructor() { }

  ngOnInit(): void {

    this.titulo = {
      id:0,
      ano: new Date(2001, 1),
      nome:'Titulo01',
      sinopse:'Sinopse01',
      categoria:'Categoria01',
      diretor:'Diretor01',
      classe:'Classe01',
      atores:['Ator01', 'Ator02']
  };

    this.cliente = {
      numinscricao: 0,
      nome: 'String',
      estahativo: true,
      datanascimento: new Date(2001, 1),
      sexo: 'm'
    };

    this.item={
      id:0,
      numserie: 2,
      dtaquisicao: new Date(2001, 1),
      tipoItem: "String",
      titulo: this.titulo
    };

    this.locacoes = [{
      datalocacao: new Date(2001, 1),
      dataDevolucaoEfetiva: new Date('10/05/1999'),
      dataDevolucaoPrevista: new Date('10/05/1999'),
      valorCobrado: 100,
      multaCobrada: 7200,
      id: 0,
      item:this.item,
      cliente:this.cliente
    }]
  }

}
