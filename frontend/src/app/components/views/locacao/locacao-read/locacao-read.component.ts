import { Titulo } from 'src/app/components/models/controle/titulo';
import { Cliente } from './../../../models/atendimento/cliente';
import { Locacao } from './../../../models/atendimento/locacao';
import { Item } from 'src/app/components/models/controle/item';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/components/service/cliente.service';
import { Router } from '@angular/router';
import { TituloService } from 'src/app/components/service/titulo.service';
import { ItemService } from 'src/app/components/service/item.service';

@Component({
  selector: 'app-locacao-read',
  templateUrl: './locacao-read.component.html',
  styleUrls: ['./locacao-read.component.css']
})
export class LocacaoReadComponent implements OnInit {

  locacoes!: Locacao[];

  titulos!:Titulo[];
  itens!:Item[];
  clientes!:Cliente[];

  titulo!:Titulo;
  item!:Item;
  cliente!:Cliente;
  colunas = ['ID', 'DataLoc', 'DataDevEfet', 'DataDevPrev', 'ValCobrado', 'MultaCobrada', 'Item', 'Cliente', 'Acao']

  constructor(private router: Router, private tituloService: TituloService, private itemService: ItemService,
    private clienteService:ClienteService) { }

  ngOnInit(): void {

    this.clienteService.read().subscribe(clientes =>{
      this.clientes = clientes;
    });

    this.tituloService.read().subscribe(titulos =>{
      this.titulos = titulos;
    });

    this.itemService.read().subscribe(itens =>{
      this.itens = itens;
    });

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
