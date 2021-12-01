import { LocacaoService } from './../../../service/locacao.service';
import { Locacao } from './../../../models/atendimento/locacao';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/components/models/atendimento/cliente';
import { Item } from 'src/app/components/models/controle/item';
import { Titulo } from 'src/app/components/models/controle/titulo';
import { Router } from '@angular/router';
import { TituloService } from 'src/app/components/service/titulo.service';
import { ItemService } from 'src/app/components/service/item.service';
import { ClienteService } from 'src/app/components/service/cliente.service';

@Component({
  selector: 'app-locacao-create',
  templateUrl: './locacao-create.component.html',
  styleUrls: ['./locacao-create.component.css']
})
export class LocacaoCreateComponent implements OnInit {

  titulos: Titulo[]   = new Array();
  itens: Item[]       = new Array();
  clientes: Cliente[] = new Array();
  cliente!: Cliente;
  item!: Item;
  locacao!:Locacao;


  constructor(private router: Router, private tituloService: TituloService, private itemService: ItemService,
    private clienteService:ClienteService, private locacaoService:LocacaoService) { }

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
 
 criar():void{ 
    this.locacaoService.create(this.locacao);
    this.router.navigate(['/locacao']);
  }

  cancelar():void{
    this.router.navigate(['/locacao']);
  }
}
