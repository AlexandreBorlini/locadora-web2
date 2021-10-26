import { Locacao } from './../../../models/atendimento/locacao';
import { Cliente } from 'src/app/components/models/atendimento/cliente';
import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/components/models/controle/item';
import { Titulo } from 'src/app/components/models/controle/titulo';

@Component({
  selector: 'app-locacao-update',
  templateUrl: './locacao-update.component.html',
  styleUrls: ['./locacao-update.component.css']
})
export class LocacaoUpdateComponent implements OnInit {

  titulos: Titulo[]   = new Array();
  itens: Item[]       = new Array();
  clientes: Cliente[] = new Array();
  cliente!: Cliente;
  item!: Item;
  locacao!:Locacao;

  constructor() { }

  ngOnInit(): void {

    
    this.clientes = [
      {numinscricao: 0, nome:'Cliente01', estahativo: true, datanascimento: new Date(), sexo:'m' }
    ];

    this.titulos = [
      { id: 1, nome: "Nome01", ano: new Date(), sinopse: "Sinopse01", categoria: "Categoria01", diretor: "Diretor01", classe: "Classe01", 
        atores: ["Ator01"]
      }];

    this.itens = [
      {id: 1, titulo: this.titulos[0], dtaquisicao: new Date(), numserie: 0, tipoItem: "Tipo01"},
    ];

    this.locacao = {

      id: 0,
      datalocacao: new Date(),
      dataDevolucaoPrevista: new Date(),
      dataDevolucaoEfetiva: new Date(),
      valorCobrado: 0,
      multaCobrada: 0,
      cliente: this.cliente,
      item: this.item
    }
  }

}
